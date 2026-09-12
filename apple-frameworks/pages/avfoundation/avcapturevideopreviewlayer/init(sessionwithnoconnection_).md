> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideopreviewlayer/init(sessionwithnoconnection:)](https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/init(sessionwithnoconnection:))

# init(sessionWithNoConnection:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Creates a layer to preview the visual output of a capture session, without making connections to eligible video inputs.

## Declaration

```swift
init(sessionWithNoConnection session: AVCaptureSession)
```

## Parameters

- `session`: A capture session to preview.

<a id="Discussion"></a>

## Discussion

Only use this initializer if you intend to manually connect the layer to a particular [AVCaptureInput.Port](../avcaptureinput/port.md) by calling the session’s [addConnection(\_:)](../avcapturesession/addconnection%28__%29.md) method.

## See Also

### Creating a preview layer

- [init(session:)](init%28session_%29.md): Creates a layer to preview the visual output of a capture session.

# initWithSessionWithNoConnection: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Creates a layer to preview the visual output of a capture session, without making connections to eligible video inputs.

## Declaration

```objectivec
- (instancetype) initWithSessionWithNoConnection:(AVCaptureSession *) session;
```

## Parameters

- `session`: A capture session to preview.

<a id="Discussion"></a>

## Discussion

Only use this initializer if you intend to manually connect the layer to a particular [AVCaptureInputPort](../avcaptureinput/port.md) by calling the session’s [addConnection:](../avcapturesession/addconnection%28__%29.md) method.

## See Also

### Creating a preview layer

- [layerWithSession:](layerwithsession_.md): Returns a new layer to preview the visual output of a capture session.
- [initWithSession:](init%28session_%29.md): Creates a layer to preview the visual output of a capture session.
- [layerWithSessionWithNoConnection:](layerwithsessionwithnoconnection_.md): Returns a new layer to preview the visual output of a capture session, without making connections to eligible video inputs.
