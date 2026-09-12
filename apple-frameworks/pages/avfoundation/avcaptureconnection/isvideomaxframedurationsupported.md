> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection/isvideomaxframedurationsupported](https://developer.apple.com/documentation/avfoundation/avcaptureconnection/isvideomaxframedurationsupported)

# isVideoMaxFrameDurationSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ (deprecated in 14.0) · macOS 10.9+

A Boolean value that indicates whether the connection supports a maximum frame duration.

> Use AVCaptureDevice's activeFormat.videoSupportedFrameRateRanges instead.

## Declaration

```swift
var isVideoMaxFrameDurationSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The property indicates whether the connection honors the [videoMaxFrameDuration](videomaxframeduration.md) property for a video connection.

## See Also

### Configuring a video’s frame rate

- [isVideoMinFrameDurationSupported](isvideominframedurationsupported.md): Deprecated. A Boolean value that indicates whether the connection supports a minimum frame duration.
- [videoMinFrameDuration](videominframeduration.md): Deprecated. The smallest time interval the connection can apply between consecutive video frames.
- [videoMaxFrameDuration](videomaxframeduration.md): Deprecated. The largest time interval the connection can apply between consecutive video frames.

# supportsVideoMaxFrameDuration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 7.0) · iPadOS 5.0+ (deprecated in 7.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · macOS 10.9+

A Boolean value that indicates whether the connection supports a maximum frame duration.

> Use AVCaptureDevice's activeFormat.videoSupportedFrameRateRanges instead.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isVideoMaxFrameDurationSupported) BOOL supportsVideoMaxFrameDuration;
```

<a id="Discussion"></a>

## Discussion

The property indicates whether the connection honors the [videoMaxFrameDuration](videomaxframeduration.md) property for a video connection.

## See Also

### Configuring a video’s frame rate

- [supportsVideoMinFrameDuration](isvideominframedurationsupported.md): Deprecated. A Boolean value that indicates whether the connection supports a minimum frame duration.
- [videoMinFrameDuration](videominframeduration.md): Deprecated. The smallest time interval the connection can apply between consecutive video frames.
- [videoMaxFrameDuration](videomaxframeduration.md): Deprecated. The largest time interval the connection can apply between consecutive video frames.
