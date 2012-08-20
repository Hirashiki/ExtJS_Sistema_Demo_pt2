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
Ext.define('SistemaDemo.store.Usuarios', {
	extend : 'Ext.data.Store',
	model : 'SistemaDemo.model.Usuario',
	autoLoad : true,
	remoteSort : false,
	proxy : {
		simpleSortMode : true,
		type : 'ajax',
		api : {
			read : 'app/json/usuario_r.json',
			update : 'app/json/usuario_u.json',
			destroy : 'app/json/usuario_d.json'
		},
		reader : {
			type : 'json',
			root : 'data',
			successProperty : 'success'
		},
		writer : {
			type : 'json',
			writeAllFields : false,
			root : 'data'
		}
	}

});
