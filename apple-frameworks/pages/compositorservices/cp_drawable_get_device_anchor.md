> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_drawable_get_device_anchor](https://developer.apple.com/documentation/compositorservices/cp_drawable_get_device_anchor)

# cp_drawable_get_device_anchor

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Returns the position and orientation you specified for the frame.

## Declaration

```objectivec
ar_device_anchor_tcp_drawable_get_device_anchor(cp_drawable_t drawable);
```

## Parameters

- `drawable`: The drawable for a frame.

<a id="return-value"></a>

## Return Value

The current position and orientation for the frame, or `nil` if you didn’t specify this information.

## See Also

### Accessing the device orientation

- [cp_drawable_set_device_anchor](cp_drawable_set_device_anchor.md): Specifies the world position and orientation to apply to the current frame.
