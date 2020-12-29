/**************************
 * Dusan Bosnjak @pailhead
 **************************/

import MonkeyPatch from './monkey-patch/index'

export default function ( THREE ){

	if( /InstancedMesh/.test( THREE.REVISION ) ) return THREE;

	MonkeyPatch( THREE );

	THREE.REVISION += "_InstancedMesh";

	return THREE;

}