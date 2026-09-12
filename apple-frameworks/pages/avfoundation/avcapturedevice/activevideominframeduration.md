> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/activevideominframeduration](https://developer.apple.com/documentation/avfoundation/avcapturedevice/activevideominframeduration)

# activeVideoMinFrameDuration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

The currently active minimum frame duration.

## Declaration

```swift
var activeVideoMinFrameDuration: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

A device’s minimum frame duration is the reciprocal of its maximum frame rate. You can set the value of this property to limit the maximum frame rate during a capture session. The capture device automatically chooses a default minimum frame duration based on its active format. After changing the value of this property, you can return to the default minimum frame duration by setting this property’s value to [invalid](../../coremedia/cmtime/invalid.md). Choosing a new preset for the capture session also resets this property to its default value.

Attempting to set this property to a value not found in the active format’s [videoSupportedFrameRateRanges](format/videosupportedframerateranges.md) array raises an exception ([invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).

> **Important**

>  Before changing the value of this property, you must call [lockForConfiguration()](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, setting the value of this property raises an exception. When you’re done configuring the device, call [unlockForConfiguration()](unlockforconfiguration%28%29.md) to release the lock.

This property value is key-value observable.

## See Also

### Configuring frame durations

- [activeVideoMaxFrameDuration](activevideomaxframeduration.md): The currently active maximum frame duration.
- [activeDepthDataMinFrameDuration](activedepthdataminframeduration.md): The minimum frame duration of depth data.

# activeVideoMinFrameDuration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

The currently active minimum frame duration.

## Declaration

```objectivec
@property (nonatomic) CMTime activeVideoMinFrameDuration;
```

<a id="Discussion"></a>

## Discussion

A device’s minimum frame duration is the reciprocal of its maximum frame rate. You can set the value of this property to limit the maximum frame rate during a capture session. The capture device automatically chooses a default minimum frame duration based on its active format. After changing the value of this property, you can return to the default minimum frame duration by setting this property’s value to [kCMTimeInvalid](../../coremedia/cmtime/invalid.md). Choosing a new preset for the capture session also resets this property to its default value.

Attempting to set this property to a value not found in the active format’s [videoSupportedFrameRateRanges](format/videosupportedframerateranges.md) array raises an exception ([NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).

> **Important**

>  Before changing the value of this property, you must call [lockForConfiguration:](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, setting the value of this property raises an exception. When you’re done configuring the device, call [unlockForConfiguration](unlockforconfiguration%28%29.md) to release the lock.

This property value is key-value observable.

## See Also

### Configuring frame durations

- [activeVideoMaxFrameDuration](activevideomaxframeduration.md): The currently active maximum frame duration.
- [activeDepthDataMinFrameDuration](activedepthdataminframeduration.md): The minimum frame duration of depth data.
