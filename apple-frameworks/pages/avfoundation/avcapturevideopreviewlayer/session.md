> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideopreviewlayer/session](https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/session)

# session (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

A capture session with visual output to preview.

## Declaration

```swift
var session: AVCaptureSession? { get set }
```

## Mentioned In

- [Setting up a capture session](../setting-up-a-capture-session.md)

## See Also

### Session configuration

- [connection](connection.md): An object that describes the connection from the layer to a particular input port.
- [setSessionWithNoConnection(\_:)](setsessionwithnoconnection%28__%29.md): Associates a session with the layer without automatically forming a connection to an eligible input port.

# session (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

A capture session with visual output to preview.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) AVCaptureSession * session;
```

## Mentioned In

- [Setting up a capture session](../setting-up-a-capture-session.md)

## See Also

### Session configuration

- [connection](connection.md): An object that describes the connection from the layer to a particular input port.
- [setSessionWithNoConnection:](setsessionwithnoconnection%28__%29.md): Associates a session with the layer without automatically forming a connection to an eligible input port.
