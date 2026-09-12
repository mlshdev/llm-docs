> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_drawable_get_view_count](https://developer.apple.com/documentation/compositorservices/cp_drawable_get_view_count)

# cp_drawable_get_view_count

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Returns the number of separate views to draw for the frame.

## Declaration

```objectivec
size_t cp_drawable_get_view_count(cp_drawable_t drawable);
```

## Parameters

- `drawable`: The drawable for a frame.

<a id="return-value"></a>

## Return Value

The number of separate views to draw.

<a id="discussion"></a>

## Discussion

The number of views corresponds to the number of separate versions of your scene you create for the frame. For a device with stereoscopic video, you render two views — one for each eye. The actual number of views can vary based on the drawing environment or your app’s configuration. For example, you typically render only one view in Simulator.

Fetch the actual views using the [cp_drawable_get_view](cp_drawable_get_view.md) function.

## See Also

### Getting the views

- [cp_drawable_get_view](cp_drawable_get_view.md): Returns the specified view from the drawable.
