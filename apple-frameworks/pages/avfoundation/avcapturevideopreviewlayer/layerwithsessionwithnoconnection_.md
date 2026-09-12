> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideopreviewlayer/layerwithsessionwithnoconnection:](https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/layerwithsessionwithnoconnection:)

# layerWithSessionWithNoConnection:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Returns a new layer to preview the visual output of a capture session, without making connections to eligible video inputs.

## Declaration

```objectivec
+ (instancetype) layerWithSessionWithNoConnection:(AVCaptureSession *) session;
```

## Parameters

- `session`: A capture session to preview.

<a id="return-value"></a>

## Return Value

A preview layer with no connections to a session’s eligible video inputs

<a id="Discussion"></a>

## Discussion

Only use this initializer if you intend to manually connect the layer to a particular [AVCaptureInputPort](../avcaptureinput/port.md) by calling the session’s [addConnection:](../avcapturesession/addconnection%28__%29.md) method.

## See Also

### Creating a preview layer

- [layerWithSession:](layerwithsession_.md): Returns a new layer to preview the visual output of a capture session.
- [initWithSession:](init%28session_%29.md): Creates a layer to preview the visual output of a capture session.
- [initWithSessionWithNoConnection:](init%28sessionwithnoconnection_%29.md): Creates a layer to preview the visual output of a capture session, without making connections to eligible video inputs.
