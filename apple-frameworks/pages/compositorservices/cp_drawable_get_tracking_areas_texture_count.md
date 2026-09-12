> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_drawable_get_tracking_areas_texture_count](https://developer.apple.com/documentation/compositorservices/cp_drawable_get_tracking_areas_texture_count)

# cp_drawable_get_tracking_areas_texture_count

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the number of tracking areas textures available in the drawable.

## Declaration

```objectivec
size_t cp_drawable_get_tracking_areas_texture_count(cp_drawable_t drawable);
```

## Parameters

- `drawable`: The drawable for a frame.

<a id="return-value"></a>

## Return Value

The number of textures available for drawing. For example, a return value of `2` indicates there are two tracking areas textures available.

<a id="discussion"></a>

## Discussion

Use the returned value as the maximum number of textures to retrieve from the [cp_drawable_get_tracking_areas_texture](cp_drawable_get_tracking_areas_texture.md)function. This will be equal to [cp_drawable_get_texture_count](cp_drawable_get_texture_count.md) when tracking areas textures are enabled through the configuration otherwise will be 0.
