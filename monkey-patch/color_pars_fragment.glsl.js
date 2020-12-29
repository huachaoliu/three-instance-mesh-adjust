/**************************
 * Dusan Bosnjak @pailhead
 **************************/

// add fragment varying if feature enabled

export default [

"#ifdef USE_COLOR",

	"varying vec3 vColor;",

"#endif",

"#if defined( INSTANCE_COLOR )",
		
	"varying vec3 vInstanceColor;",
		
"#endif"

].join("\n")