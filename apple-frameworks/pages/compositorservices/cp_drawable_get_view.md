> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_drawable_get_view](https://developer.apple.com/documentation/compositorservices/cp_drawable_get_view)

# cp_drawable_get_view

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Returns the specified view from the drawable.

## Declaration

```objectivec
cp_view_tcp_drawable_get_view(cp_drawable_t drawable, size_t index);
```

## Parameters

- `drawable`: The drawable for a frame.
- `index`: The zero-based index of the view you want. The index must be greater than or equal to 0 and less than the value that [cp_drawable_get_view_count](cp_drawable_get_view_count.md) returns.

<a id="return-value"></a>

## Return Value

The view at the specified index.

<a id="discussion"></a>

## Discussion

The drawable provides one view for each distinct image you need to render. For example, a stereoscopic display contains a separate view for each eye.

## See Also

### Getting the views

- [cp_drawable_get_view_count](cp_drawable_get_view_count.md): Returns the number of separate views to draw for the frame.
