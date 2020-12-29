/**************************
 * Dusan Bosnjak @pailhead
 **************************/
import begin_vertex from './begin_vertex.glsl.js';
import color_fragment from './color_fragment.glsl.js';
import color_pars_fragment from './color_pars_fragment.glsl.js';
import color_vertex from './color_vertex.glsl.js';
import defaultnormal_vertex from './defaultnormal_vertex.glsl.js';
import uv_pars_vertex from './uv_pars_vertex.glsl.js';

export default function( THREE ){

	//patches these methods and shader chunks with the required logic 
	THREE.ShaderChunk[ 'begin_vertex' ] = 				begin_vertex
	THREE.ShaderChunk[ 'color_fragment' ] = 			color_fragment
	THREE.ShaderChunk[ 'color_pars_fragment' ] = 		color_pars_fragment
	THREE.ShaderChunk[ 'color_vertex' ] = 				color_vertex
	THREE.ShaderChunk[ 'defaultnormal_vertex' ] = 		defaultnormal_vertex
	THREE.ShaderChunk[ 'uv_pars_vertex' ] = 			uv_pars_vertex
	
}