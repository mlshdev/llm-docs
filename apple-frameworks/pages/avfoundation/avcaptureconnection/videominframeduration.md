> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection/videominframeduration](https://developer.apple.com/documentation/avfoundation/avcaptureconnection/videominframeduration)

# videoMinFrameDuration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ (deprecated in 14.0) · macOS 10.7+

The smallest time interval the connection can apply between consecutive video frames.

> Use AVCaptureDevice's activeVideoMinFrameDuration instead.

## Declaration

```swift
var videoMinFrameDuration: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

When [isVideoMinFrameDurationSupported](isvideominframedurationsupported.md) is [true](https://developer.apple.com/documentation/swift/true), the value of the property configures the lower bound for the amount of time a video connection separates consecutive frames. The value is equivalent to the reciprocal of the minimum frame rate.

You can set an unlimited frame rate with [zero](../../coremedia/cmtime/zero.md) or [invalid](../../coremedia/cmtime/invalid.md) (which is the default).

## See Also

### Configuring a video’s frame rate

- [isVideoMinFrameDurationSupported](isvideominframedurationsupported.md): Deprecated. A Boolean value that indicates whether the connection supports a minimum frame duration.
- [isVideoMaxFrameDurationSupported](isvideomaxframedurationsupported.md): Deprecated. A Boolean value that indicates whether the connection supports a maximum frame duration.
- [videoMaxFrameDuration](videomaxframeduration.md): Deprecated. The largest time interval the connection can apply between consecutive video frames.

# videoMinFrameDuration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 7.0) · iPadOS 5.0+ (deprecated in 7.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · macOS 10.7+

The smallest time interval the connection can apply between consecutive video frames.

> Use AVCaptureDevice's activeVideoMinFrameDuration instead.

## Declaration

```objectivec
@property (nonatomic) CMTime videoMinFrameDuration;
```

<a id="Discussion"></a>

## Discussion

When [supportsVideoMinFrameDuration](isvideominframedurationsupported.md) is [true](https://developer.apple.com/documentation/swift/true), the value of the property configures the lower bound for the amount of time a video connection separates consecutive frames. The value is equivalent to the reciprocal of the minimum frame rate.

You can set an unlimited frame rate with [kCMTimeZero](../../coremedia/cmtime/zero.md) or [kCMTimeInvalid](../../coremedia/cmtime/invalid.md) (which is the default).

## See Also

### Configuring a video’s frame rate

- [supportsVideoMinFrameDuration](isvideominframedurationsupported.md): Deprecated. A Boolean value that indicates whether the connection supports a minimum frame duration.
- [supportsVideoMaxFrameDuration](isvideomaxframedurationsupported.md): Deprecated. A Boolean value that indicates whether the connection supports a maximum frame duration.
- [videoMaxFrameDuration](videomaxframeduration.md): Deprecated. The largest time interval the connection can apply between consecutive video frames.
