> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/view](https://developer.apple.com/documentation/compositorservices/view)

# View (Swift)

**Framework:** Compositor Services  
**Kind:** API Collection

A type that manages the viewport and texture details for each portion of your frame’s content.

<a id="overview"></a>

## Overview

Compositor Services provides a view for each distinct render viewpoint. For example, a head-mounted display typically contains two views: one for each eye. Use the information in the views to set up your render pass descriptor, or to determine which part of a texture to fill with content.

## Topics

### Getting the view’s texture map

- [textureMap](layerrenderer/drawable/view/texturemap-swift.property.md): The texture map for a view.
- [textureIndex](layerrenderer/drawable/view/texturemap-swift.struct/textureindex.md): The index of the view’s textures in the drawable.
- [sliceIndex](layerrenderer/drawable/view/texturemap-swift.struct/sliceindex.md): The index of the view’s texture in an array-based texture type.
- [viewport](layerrenderer/drawable/view/texturemap-swift.struct/viewport.md): The portion of the texture that the view uses to draw its content.

### Getting the transformations

- [transform](layerrenderer/drawable/view/transform.md): The transformation matrix that converts between the device’s coordinate space to the position of the view in that space.
- [tangents](layerrenderer/drawable/view/tangents.md): Deprecated. The tangent values for the angles you use to determine the planes of the viewing frustum.

# View (Objective-C)

**Framework:** Compositor Services  
**Kind:** API Collection

A type that manages the viewport and texture details for each portion of your frame’s content.

<a id="overview"></a>

## Overview

Compositor Services provides a view for each distinct render viewpoint. For example, a head-mounted display typically contains two views: one for each eye. Use the information in the views to set up your render pass descriptor, or to determine which part of a texture to fill with content.

## Topics

### Getting the view’s texture map

- [cp_view_get_view_texture_map](layerrenderer/drawable/view/texturemap-swift.property.md): The texture map for a view.
- [cp_view_texture_map_get_texture_index](layerrenderer/drawable/view/texturemap-swift.struct/textureindex.md): The index of the view’s textures in the drawable.
- [cp_view_texture_map_get_slice_index](layerrenderer/drawable/view/texturemap-swift.struct/sliceindex.md): The index of the view’s texture in an array-based texture type.
- [cp_view_texture_map_get_viewport](layerrenderer/drawable/view/texturemap-swift.struct/viewport.md): The portion of the texture that the view uses to draw its content.
- [cp_view_texture_map_t](cp_view_texture_map_t.md): A type that provides details about the textures associated with a view.

### Getting the transformations

- [cp_view_get_transform](layerrenderer/drawable/view/transform.md): The transformation matrix that converts between the device’s coordinate space to the position of the view in that space.
- [cp_view_get_tangents](layerrenderer/drawable/view/tangents.md): Deprecated. The tangent values for the angles you use to determine the planes of the viewing frustum.

### Getting the view type

- [cp_view_t](cp_view_t.md): A type that provides information on how to render content into the frame’s textures.

## See Also

### Drawing environment

- [Drawable](drawable.md): A type that provides information on how to render content into the frame’s textures.
