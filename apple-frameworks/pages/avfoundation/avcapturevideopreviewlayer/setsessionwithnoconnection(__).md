> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideopreviewlayer/setsessionwithnoconnection(_:)](https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/setsessionwithnoconnection(_:))

# setSessionWithNoConnection(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Associates a session with the layer without automatically forming a connection to an eligible input port.

## Declaration

```swift
func setSessionWithNoConnection(_ session: AVCaptureSession)
```

## Parameters

- `session`: A capture session.

<a id="Discussion"></a>

## Discussion

Only use this method if you intend to manually create a connection between the layer and a particular [AVCaptureInput.Port](../avcaptureinput/port.md), and add it to the session using its [addConnection(\_:)](../avcapturesession/addconnection%28__%29.md) method.

## See Also

### Session configuration

- [session](session.md): A capture session with visual output to preview.
- [connection](connection.md): An object that describes the connection from the layer to a particular input port.

# setSessionWithNoConnection: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Associates a session with the layer without automatically forming a connection to an eligible input port.

## Declaration

```objectivec
- (void) setSessionWithNoConnection:(AVCaptureSession *) session;
```

## Parameters

- `session`: A capture session.

<a id="Discussion"></a>

## Discussion

Only use this method if you intend to manually create a connection between the layer and a particular [AVCaptureInputPort](../avcaptureinput/port.md), and add it to the session using its [addConnection:](../avcapturesession/addconnection%28__%29.md) method.

## See Also

### Session configuration

- [session](session.md): A capture session with visual output to preview.
- [connection](connection.md): An object that describes the connection from the layer to a particular input port.
