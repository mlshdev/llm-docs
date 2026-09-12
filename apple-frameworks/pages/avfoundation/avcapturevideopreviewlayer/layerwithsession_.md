> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideopreviewlayer/layerwithsession:](https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/layerwithsession:)

# layerWithSession:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Returns a new layer to preview the visual output of a capture session.

## Declaration

```objectivec
+ (instancetype) layerWithSession:(AVCaptureSession *) session;
```

## Parameters

- `session`: The capture session from which to source the preview.

<a id="return-value"></a>

## Return Value

A preview layer.

## See Also

### Creating a preview layer

- [initWithSession:](init%28session_%29.md): Creates a layer to preview the visual output of a capture session.
- [layerWithSessionWithNoConnection:](layerwithsessionwithnoconnection_.md): Returns a new layer to preview the visual output of a capture session, without making connections to eligible video inputs.
- [initWithSessionWithNoConnection:](init%28sessionwithnoconnection_%29.md): Creates a layer to preview the visual output of a capture session, without making connections to eligible video inputs.
