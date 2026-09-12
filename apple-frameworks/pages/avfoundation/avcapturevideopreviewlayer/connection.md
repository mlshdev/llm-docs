> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideopreviewlayer/connection](https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/connection)

# connection (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

An object that describes the connection from the layer to a particular input port.

## Declaration

```swift
var connection: AVCaptureConnection? { get }
```

## Mentioned In

- [Setting up a capture session](../setting-up-a-capture-session.md)

<a id="Discussion"></a>

## Discussion

When you associate a preview layer with a capture session, the session automatically creates a connection to the first eligible video [AVCaptureInput.Port](../avcaptureinput/port.md) object. If you detach a preview layer from a session, the connection property becomes `nil`.

## See Also

### Session configuration

- [session](session.md): A capture session with visual output to preview.
- [setSessionWithNoConnection(\_:)](setsessionwithnoconnection%28__%29.md): Associates a session with the layer without automatically forming a connection to an eligible input port.

# connection (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

An object that describes the connection from the layer to a particular input port.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVCaptureConnection * connection;
```

## Mentioned In

- [Setting up a capture session](../setting-up-a-capture-session.md)

<a id="Discussion"></a>

## Discussion

When you associate a preview layer with a capture session, the session automatically creates a connection to the first eligible video [AVCaptureInputPort](../avcaptureinput/port.md) object. If you detach a preview layer from a session, the connection property becomes `nil`.

## See Also

### Session configuration

- [session](session.md): A capture session with visual output to preview.
- [setSessionWithNoConnection:](setsessionwithnoconnection%28__%29.md): Associates a session with the layer without automatically forming a connection to an eligible input port.
