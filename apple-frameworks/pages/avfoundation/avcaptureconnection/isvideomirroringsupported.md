> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection/isvideomirroringsupported](https://developer.apple.com/documentation/avfoundation/avcaptureconnection/isvideomirroringsupported)

# isVideoMirroringSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the connection supports video mirroring.

## Declaration

```swift
var isVideoMirroringSupported: Bool { get }
```

## See Also

### Mirroring a video

- [isVideoMirrored](isvideomirrored.md): A Boolean value that indicates whether the connection horizontally flips the video flowing through it.
- [automaticallyAdjustsVideoMirroring](automaticallyadjustsvideomirroring.md): A Boolean value that indicates whether you can enable mirroring based on a session’s configuration.

# supportsVideoMirroring (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the connection supports video mirroring.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isVideoMirroringSupported) BOOL supportsVideoMirroring;
```

## See Also

### Mirroring a video

- [videoMirrored](isvideomirrored.md): A Boolean value that indicates whether the connection horizontally flips the video flowing through it.
- [automaticallyAdjustsVideoMirroring](automaticallyadjustsvideomirroring.md): A Boolean value that indicates whether you can enable mirroring based on a session’s configuration.
