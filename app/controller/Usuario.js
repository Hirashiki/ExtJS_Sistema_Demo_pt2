/**
 *
 * Sistema Demo utilizando ExtJS
 * Desenvolvido por Ricardo Hirashiki
 * Publicado em: http://www.sitedoricardo.com.br
 * Data: Ago/2012
 *
 * Baseado no exemplo disponível no framework do sencha 4.1.0 "kitchensink"
 * http://http://dev.sencha.com/deploy/ext-4.1.0-gpl/examples/kitchensink/index.html
 *
 */
Ext.define('SistemaDemo.controller.Usuario', {
	extend : 'SistemaDemo.controller.base.BaseController',
	views : ['seguranca.Usuario', 'seguranca.UsuarioForm'],
	stores : ['Usuarios'],
	init : function() {
		console.log('init Register ' + this.getFirstTime());
		if (!this.getFirstTime()) {
			return;
		}

		this.control({
			'perm_usuariogrid > grid' : {
				itemclick : this.onUsuarioGridClick
			},
			'perm_usuariogrid button[action=inserir]' : {
				click : this.onInserirClick
			},
			'perm_usuariogrid button[action=alterar]' : {
				click : this.onAlterarClick
			},
			'perm_usuariogrid button[action=excluir]' : {
				click : this.onExcluirClick
			},
			'perm_usuarioform button[action=salvar]' : {
				click : this.onSalvarClick
			},
			'perm_usuarioform button[action=cancelar]' : {
				click : this.onCancelarClick
			}

		});
		console.log('Carregou AdministracaoGrid');
		this.setFirstTime(false);
	},
	onUsuarioGridClick : function(grid, record) {
		var sm = grid.getSelectionModel();
		var records = sm.getSelection();
		if (records.length > 0) {
			grid.up('container').down('button[action=alterar]').enable();
		}
	},
	onInserirClick : function(button) {
		var view = Ext.widget('perm_usuarioform');
	},
	onAlterarClick : function(button) {
		var grid = button.up('gridpanel');
		var sm = grid.getSelectionModel();
		var records = sm.getSelection();
		if (records.length > 0) {
			var view = Ext.widget('perm_usuarioform');
			view.down('form').loadRecord(records[0]);
		}
	},
	onExcluirClick : function(button) {
		var me = this;
		Ext.MessageBox.confirm('Confirma&ccedil;&atilde;o', 'Deseja realmente excluir o registro selecionado?', function(btn) {
			if (btn == 'yes') {
				var grid = button.up('gridpanel');
				var sm = grid.getSelectionModel();
				me.getUsuariosStore().remove(sm.getSelection());
				me.getUsuariosStore().sync({
					success : function() {
						console.log('OK');
					},
					failure : function() {
						console.log('ERRO');
					}
				});
				me.getUsuariosStore().load();
				sm = null;
			}
		});
	},
	onSalvarClick : function(button) {
		var win = button.up('window'), form = win.down('form'), record = form.getRecord(), values = form.getValues();
		var me = this;
		if (values.id > 0) {
			record.set(values);
		} else {
			record = Ext.create('SistemaDemo.model.Usuario');
			record.set(values);
			record.setId(0);
			me.getUsuariosStore().add(record);
		}
		var ret = me.getUsuariosStore().sync({
			success : function() {
				console.log('OK');
				win.close();
				me.getUsuariosStore().load();
			},
			failure : function() {
				console.log('ERRO');
			}
		});

		win.close();
	},
	onCancelarClick : function(button) {
		var win = button.up('window')
		win.close();
	}
});
