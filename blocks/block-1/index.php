<?php
/*
	* Register block 1
	*
	* @return void
*/
	function lwhhgd_register_block_1(){
		wp_register_script(
			handle: 'lwhhgd-block-1',
			plugins_url ( path: 'index-es5.js', plugin: __FILE__ ), array( 'wp-blocks', 'wp-i18n', 'wp-element')
		);

		register_block_type( name: 'lwhhgd/block-1', array(
			'editor_script' => 'lwhhgd-block-1'
		) );
	}
	add_action('init', 'lwhhgd_register_block_1');