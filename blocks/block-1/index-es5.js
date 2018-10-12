/**
 * Editable Block Example
 *
 * https://github.com/modularwp/gutenberg-block-editable-example
 */

	
	
	var el     = wp.element.createElement; // The wp.element.createElement() function to create elements.
	var registerBlockType = wp.blocks.registerBlockType; // The registerBlockType() function to register blocks.
	var __                = wp.i18n.__; // The __() function for internationalization.
	/*var Editable          = wp.blocks.Editable; // For creating editable elements. */
	var blockStyles = {
		backgroundColor: '#0073aa',
		color: 'white',
		padding: '2em 2.5em',
		textAlign: 'center'
	};	

	/**
	 * Register block
	 *
	 * @param  {string}   name     Block name.
	 * @param  {Object}   settings Block settings.
	 * @return {?WPBlock}          Block itself, if registered successfully,
	 *                             otherwise "undefined".
	 */
	registerBlockType(
		'lwhhgd/block-1', // Block name. Must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
		{
			title: __( 'LWHH Hello World' ), // Block title. __() function allows for internationalization.
			description: __('Descriopion ......'),
			icon: 'admin-site', // Block icon from Dashicons. https://developer.wordpress.org/resource/dashicons/.
			category: 'common', // Block category. Group blocks together based on common traits E.g. common, formatting, layout, widgets, embed.
			keywords: [ ( 'lwhh' ), __( 'hello world' ), __( 'test block' ) ],
			attributes: {
				heading: {
					type: 'string',
					source: 'text',
					selector: 'h2',
					default: __( 'Hello World!' ) //set default value
				},
				excerpt: {
					type: 'string',
					source: 'text',
					selector: 'p',
					default: __( 'This is simple description' ) //set default 
				},
				/*content: {
					type: 'string',
					default: 'Editable block content...',
				}, */
			},

			// Defines the block within the editor.
			edit: function( props ) {
				consol.log( props );
				/*var content = props.attributes.content;
				var focus = props.focus;

				function onChangeContent( updatedContent ) {
					props.setAttributes( { content: updatedContent } );
				}*/
				return el( 'h2', {style: blockStyle}, 'Hello World!');

				/*return createElement(
					Editable,
					{
						tagName: 'p',
						className: props.className,
						value: content,
						onChange: onChangeContent,
						focus: focus,
             			onFocus: props.setFocus
					},
				);*/
			},

			// Defines the saved block.
			save: function( props ) {
				
				return el( 'h2', {style: blockStyle}, 'Hello World!');
				
				/*var content = props.attributes.content;
				
				return createElement(
					'p',
					{
						className: props.className,
					},
					content
				);*/
			},
		}
	);
