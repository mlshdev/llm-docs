> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection/isvideominframedurationsupported](https://developer.apple.com/documentation/avfoundation/avcaptureconnection/isvideominframedurationsupported)

# isVideoMinFrameDurationSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ (deprecated in 14.0) · macOS 10.7+

A Boolean value that indicates whether the connection supports a minimum frame duration.

> Use AVCaptureDevice's activeFormat.videoSupportedFrameRateRanges instead.

## Declaration

```swift
var isVideoMinFrameDurationSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The property indicates whether the connection honors the [videoMinFrameDuration](videominframeduration.md) property for a video connection.

## See Also

### Configuring a video’s frame rate

- [videoMinFrameDuration](videominframeduration.md): Deprecated. The smallest time interval the connection can apply between consecutive video frames.
- [isVideoMaxFrameDurationSupported](isvideomaxframedurationsupported.md): Deprecated. A Boolean value that indicates whether the connection supports a maximum frame duration.
- [videoMaxFrameDuration](videomaxframeduration.md): Deprecated. The largest time interval the connection can apply between consecutive video frames.

# supportsVideoMinFrameDuration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 7.0) · iPadOS 5.0+ (deprecated in 7.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · macOS 10.7+

A Boolean value that indicates whether the connection supports a minimum frame duration.

> Use AVCaptureDevice's activeFormat.videoSupportedFrameRateRanges instead.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isVideoMinFrameDurationSupported) BOOL supportsVideoMinFrameDuration;
```

<a id="Discussion"></a>

## Discussion

The property indicates whether the connection honors the [videoMinFrameDuration](videominframeduration.md) property for a video connection.

## See Also

### Configuring a video’s frame rate

- [videoMinFrameDuration](videominframeduration.md): Deprecated. The smallest time interval the connection can apply between consecutive video frames.
- [supportsVideoMaxFrameDuration](isvideomaxframedurationsupported.md): Deprecated. A Boolean value that indicates whether the connection supports a maximum frame duration.
- [videoMaxFrameDuration](videomaxframeduration.md): Deprecated. The largest time interval the connection can apply between consecutive video frames.
