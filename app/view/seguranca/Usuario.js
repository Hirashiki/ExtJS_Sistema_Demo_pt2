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
Ext.define('SistemaDemo.view.seguranca.Usuario', {
	extend : 'SistemaDemo.view.base.BaseContainer',
	requiredcontrollers : ['SistemaDemo.controller.Usuario'],
	requires : ['Ext.grid.Panel', 'SistemaDemo.store.Usuarios'],
	alias : 'widget.perm_usuariogrid',
	items : [{
		xtype : 'grid',
		title : 'Listagem de Usu&aacute;rios',
		frame : true,
		store : 'Usuarios',
		tbar : [{
			text : 'Incluir',
			action : 'inserir'
		}, {
			text : 'Alterar',
			action : 'alterar',
			disabled : true
		}, {
			text : 'Excluir',
			action : 'excluir'
		}],
		columns : [{
			text : 'Id',
			flex : 1,
			dataIndex : 'id'
		}, {
			text : 'Nome',
			flex : 1,
			dataIndex : 'nome'
		}, {
			text : 'Ativo',
			flex : 1,
			dataIndex : 'ativo'
		}, {
			text : 'Cadastro',
			flex : 1,
			dataIndex : 'datacadastro'
		}, {
			text : 'Alterado',
			flex : 1,
			dataIndex : 'dataultimaalteracao'
		}]

	}]
});

