> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_view_t](https://developer.apple.com/documentation/compositorservices/cp_view_t)

# cp_view_t

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Type Alias  
**Availability:** macOS 26.0+ · visionOS 1.0+

A type that provides information on how to render content into the frame’s textures.

## Declaration

```objectivec
typedef struct cp_view * cp_view_t;
```

<a id="discussion"></a>

## Discussion

Compositor Services provides a view for each distinct render viewpoint. For example, a head-mounted display typically contains two views: one for each eye. Use the information in the views to set up your render pass descriptor, or to determine which part of a texture to fill with content.

## Topics

### Getting the view’s texture map

- [cp_view_get_view_texture_map](layerrenderer/drawable/view/texturemap-swift.property.md): The texture map for a view.
- [cp_view_texture_map_t](cp_view_texture_map_t.md): A type that provides details about the textures associated with a view.

### Getting the transformations

- [cp_view_get_transform](layerrenderer/drawable/view/transform.md): The transformation matrix that converts between the device’s coordinate space to the position of the view in that space.
- [cp_view_get_tangents](layerrenderer/drawable/view/tangents.md): Deprecated. The tangent values for the angles you use to determine the planes of the viewing frustum.
