> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_drawable_get_tracking_areas_texture](https://developer.apple.com/documentation/compositorservices/cp_drawable_get_tracking_areas_texture)

# cp_drawable_get_tracking_areas_texture

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the tracking areas texture at the specified index in the drawable.

## Declaration

```objectivec
id<MTLTexture>cp_drawable_get_tracking_areas_texture(cp_drawable_t drawable, size_t index);
```

## Parameters

- `drawable`: The drawable for a frame.
- `index`: The index of the texture you want. The index must be greater than or equal to `0` and less than the value that [cp_drawable_get_tracking_areas_texture_count](cp_drawable_get_tracking_areas_texture_count.md) returns.

<a id="return-value"></a>

## Return Value

The Metal object index texture at the specified index.

<a id="discussion"></a>

## Discussion

Use the returned texture in your render pipeline to store the tracking areas ID used for hover effects and indirect gestures. The layer’s texture topology determines the layout and content for each texture. The drawable’s views contain information about how those views map to the textures.
