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
Ext.define('SistemaDemo.view.seguranca.UsuarioForm', {
	extend : 'Ext.window.Window',
	requiredcontrollers : ['SistemaDemo.controller.Usuario'],
	alias : 'widget.perm_usuarioform',

	title : 'Formul&aacute;rio - Usu&aacute;rio',
	layout : 'fit',
	autoShow : true,
	resizable : false,
	width : 300,
	height : 150,
	initComponent : function() {
		this.items = [{
			xtype : 'form',
			items : [{
				xtype : 'textfield',
				name : 'id',
				fieldLabel : 'id',
				hidden : true
			}, {
				xtype : 'textfield',
				name : 'nome',
				fieldLabel : 'Nome'
			}, {
				xtype : 'radiogroup',
				fieldLabel : 'Ativo?',
				items : [{
					boxLabel : 'Sim',
					name : 'ativo',
					inputValue : 'S',
					checked : true
				}, {
					boxLabel : 'N&atilde;o',
					name : 'ativo',
					inputValue : 'N'
				}]
			}]
		}];

		this.buttons = [{
			text : 'Salvar',
			action : 'salvar'
		}, {
			text : 'Cancelar',
			action : 'cancelar'
		}];

		this.callParent(arguments);
	}
});
