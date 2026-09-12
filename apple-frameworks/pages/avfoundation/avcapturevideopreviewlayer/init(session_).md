> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideopreviewlayer/init(session:)](https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/init(session:))

# init(session:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Creates a layer to preview the visual output of a capture session.

## Declaration

```swift
init(session: AVCaptureSession)
```

## Parameters

- `session`: A capture session to preview.

## See Also

### Creating a preview layer

- [init(sessionWithNoConnection:)](init%28sessionwithnoconnection_%29.md): Creates a layer to preview the visual output of a capture session, without making connections to eligible video inputs.

# initWithSession: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Creates a layer to preview the visual output of a capture session.

## Declaration

```objectivec
- (instancetype) initWithSession:(AVCaptureSession *) session;
```

## Parameters

- `session`: A capture session to preview.

## See Also

### Creating a preview layer

- [layerWithSession:](layerwithsession_.md): Returns a new layer to preview the visual output of a capture session.
- [layerWithSessionWithNoConnection:](layerwithsessionwithnoconnection_.md): Returns a new layer to preview the visual output of a capture session, without making connections to eligible video inputs.
- [initWithSessionWithNoConnection:](init%28sessionwithnoconnection_%29.md): Creates a layer to preview the visual output of a capture session, without making connections to eligible video inputs.
