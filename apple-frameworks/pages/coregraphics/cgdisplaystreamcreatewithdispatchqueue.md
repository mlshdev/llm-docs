> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdisplaystreamcreatewithdispatchqueue](https://developer.apple.com/documentation/coregraphics/cgdisplaystreamcreatewithdispatchqueue)

# CGDisplayStreamCreateWithDispatchQueue

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function

## Declaration

```objectivec
extern CGDisplayStreamRefCGDisplayStreamCreateWithDispatchQueue(CGDirectDisplayID display, size_t outputWidth, size_t outputHeight, int32_t pixelFormat, CFDictionaryRef properties, dispatch_queue_t queue, CGDisplayStreamFrameAvailableHandler handler);
```

## Parameters

- `display`: The CGDirectDisplayID to use as the source for generated frames
- `outputWidth`: The output width (in pixels, not points) of the frames to be generated.  Must not be zero.
- `outputHeight`: The output height (in pixels, not points) of the frames to be generated.  Must not be zero.
- `pixelFormat`: The desired CoreVideo/CoreMedia-style pixel format of the output IOSurfaces
- `properties`: Any optional properties of the CGDisplayStream
- `queue`: The dispatch_queue_t that will be used to invoke the callback handler.
- `handler`: A block that will be called for frame deliver.

<a id="return-value"></a>

## Return Value

The new CGDisplayStream object.

<a id="discussion"></a>

## Discussion

Creates a new CGDisplayStream intended to be serviced by a block handler

This function creates a new CGDisplayStream that is to be used to get a stream of frame updates from a particular display.
