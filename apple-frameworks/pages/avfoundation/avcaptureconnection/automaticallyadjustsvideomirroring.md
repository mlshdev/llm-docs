> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection/automaticallyadjustsvideomirroring](https://developer.apple.com/documentation/avfoundation/avcaptureconnection/automaticallyadjustsvideomirroring)

# automaticallyAdjustsVideoMirroring (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

A Boolean value that indicates whether you can enable mirroring based on a session’s configuration.

## Declaration

```swift
var automaticallyAdjustsVideoMirroring: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

For some session configurations, the connection mirrors the video data by default. When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the value of [isVideoMirrored](isvideomirrored.md) may change, depending on the configuration of the session. For example, the value may change after switching to a different capture device input.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Mirroring a video

- [isVideoMirroringSupported](isvideomirroringsupported.md): A Boolean value that indicates whether the connection supports video mirroring.
- [isVideoMirrored](isvideomirrored.md): A Boolean value that indicates whether the connection horizontally flips the video flowing through it.

# automaticallyAdjustsVideoMirroring (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

A Boolean value that indicates whether you can enable mirroring based on a session’s configuration.

## Declaration

```objectivec
@property (nonatomic) BOOL automaticallyAdjustsVideoMirroring;
```

<a id="Discussion"></a>

## Discussion

For some session configurations, the connection mirrors the video data by default. When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the value of [videoMirrored](isvideomirrored.md) may change, depending on the configuration of the session. For example, the value may change after switching to a different capture device input.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Mirroring a video

- [supportsVideoMirroring](isvideomirroringsupported.md): A Boolean value that indicates whether the connection supports video mirroring.
- [videoMirrored](isvideomirrored.md): A Boolean value that indicates whether the connection horizontally flips the video flowing through it.
