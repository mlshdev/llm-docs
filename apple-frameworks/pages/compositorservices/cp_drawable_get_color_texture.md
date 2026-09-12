> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_drawable_get_color_texture](https://developer.apple.com/documentation/compositorservices/cp_drawable_get_color_texture)

# cp_drawable_get_color_texture

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Returns the color texture at the specified index in the drawable.

## Declaration

```objectivec
id<MTLTexture>cp_drawable_get_color_texture(cp_drawable_t drawable, size_t index);
```

## Parameters

- `drawable`: The drawable for a frame.
- `index`: The index of the color texture you want. The index must be greater than or equal to `0` and less than the value that [cp_drawable_get_texture_count](cp_drawable_get_texture_count.md) returns.

<a id="return-value"></a>

## Return Value

The Metal color texture at the specified index.

<a id="discussion"></a>

## Discussion

Use the returned texture in your render pipeline to store the pixels you want to appear. The layer’s texture topology determines the total number of textures, and the layout and content for each texture. Use the drawable’s views to map your content into specific portions of the textures.

## See Also

### Getting the render textures

- [cp_drawable_get_texture_count](cp_drawable_get_texture_count.md): Returns the number of color and depth textures available in the drawable.
- [cp_drawable_get_depth_texture](cp_drawable_get_depth_texture.md): Returns the depth texture at the specified index in the drawable.
