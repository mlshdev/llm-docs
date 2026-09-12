> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_drawable_get_rasterization_rate_map_count](https://developer.apple.com/documentation/compositorservices/cp_drawable_get_rasterization_rate_map_count)

# cp_drawable_get_rasterization_rate_map_count

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Returns the number of rasterization rate maps associated with the drawable.

## Declaration

```objectivec
size_t cp_drawable_get_rasterization_rate_map_count(cp_drawable_t drawable);
```

## Parameters

- `drawable`: The drawable for a frame.

<a id="return-value"></a>

## Return Value

The number of rasterization rate maps available for drawing.

<a id="discussion"></a>

## Discussion

Use the returned value as the maximum number of rate maps to retrieve from the [cp_drawable_get_rasterization_rate_map](cp_drawable_get_rasterization_rate_map.md) function.

## See Also

### Getting the rasterization rate map

- [cp_drawable_get_rasterization_rate_map](cp_drawable_get_rasterization_rate_map.md): Returns the rasterization rate map at the specified index in the drawable.
- [cp_drawable_get_flipped_rasterization_rate_map](cp_drawable_get_flipped_rasterization_rate_map.md): Returns the flipped rasterization rate map at the specified index in the drawable.
