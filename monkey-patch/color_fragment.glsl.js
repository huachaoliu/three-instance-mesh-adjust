/**************************
 * Dusan Bosnjak @pailhead
 **************************/

// multiply the color with per instance color if enabled

export default [

'#ifdef USE_COLOR',

	'diffuseColor.rgb *= vColor;',

'#endif',

'#if defined(INSTANCE_COLOR)',
		
	'diffuseColor.rgb *= vInstanceColor;',
		
'#endif'

].join("\n")