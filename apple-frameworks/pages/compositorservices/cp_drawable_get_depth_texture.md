> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_drawable_get_depth_texture](https://developer.apple.com/documentation/compositorservices/cp_drawable_get_depth_texture)

# cp_drawable_get_depth_texture

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Returns the depth texture at the specified index in the drawable.

## Declaration

```objectivec
id<MTLTexture>cp_drawable_get_depth_texture(cp_drawable_t drawable, size_t index);
```

## Parameters

- `drawable`: The drawable for a frame.
- `index`: The index of the depth texture you want. The index must be greater than or equal to `0` and less than the value that [cp_drawable_get_texture_count](cp_drawable_get_texture_count.md) returns.

<a id="return-value"></a>

## Return Value

The Metal depth texture at the specified index.

<a id="discussion"></a>

## Discussion

Use the returned texture in your render pipeline as the depth texture for your content. The layer’s texture topology determines the layout and content for each texture. The drawable’s views contain information about how those views map to the textures.

## See Also

### Getting the render textures

- [cp_drawable_get_texture_count](cp_drawable_get_texture_count.md): Returns the number of color and depth textures available in the drawable.
- [cp_drawable_get_color_texture](cp_drawable_get_color_texture.md): Returns the color texture at the specified index in the drawable.
