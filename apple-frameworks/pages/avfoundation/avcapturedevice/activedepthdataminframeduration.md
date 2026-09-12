> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/activedepthdataminframeduration](https://developer.apple.com/documentation/avfoundation/avcapturedevice/activedepthdataminframeduration)

# activeDepthDataMinFrameDuration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The minimum frame duration of depth data.

## Declaration

```swift
var activeDepthDataMinFrameDuration: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to set an upper limit to the frame rate at which the system produces depth data. Lowering the depth data frame rate typically lowers power consumption which increases the time the camera can run before it reaches an elevated system pressure state. Setting a value outside the active depth data format’s supported frame rate range produces an exception.

By default, the system derives the depth data frame rate from the video frame rate that [activeVideoMinFrameDuration](activevideominframeduration.md) and [activeVideoMaxFrameDuration](activevideomaxframeduration.md) set. This property caps depth data independently of those values, so an app that needs depth less often than video can lower the depth data frame rate without changing the video frame rate it requests.

Setting this property to [invalid](../../coremedia/cmtime/invalid.md) resets it to the active depth data format’s default minimum frame duration. Setting this property to [positiveInfinity](../../coremedia/cmtime/positiveinfinity.md) results in a depth data frame rate of `0`.

This value gets reset whenever either the active video format or the active depth data format changes.

> **Important**

>  Before changing the value of this property, you must call [lockForConfiguration()](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, setting the value of this property raises an exception. When you’re done configuring the device, call [unlockForConfiguration()](unlockforconfiguration%28%29.md) to release the lock.

## See Also

### Configuring frame durations

- [activeVideoMinFrameDuration](activevideominframeduration.md): The currently active minimum frame duration.
- [activeVideoMaxFrameDuration](activevideomaxframeduration.md): The currently active maximum frame duration.

# activeDepthDataMinFrameDuration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The minimum frame duration of depth data.

## Declaration

```objectivec
@property (nonatomic) CMTime activeDepthDataMinFrameDuration;
```

<a id="Discussion"></a>

## Discussion

Use this property to set an upper limit to the frame rate at which the system produces depth data. Lowering the depth data frame rate typically lowers power consumption which increases the time the camera can run before it reaches an elevated system pressure state. Setting a value outside the active depth data format’s supported frame rate range produces an exception.

By default, the system derives the depth data frame rate from the video frame rate that [activeVideoMinFrameDuration](activevideominframeduration.md) and [activeVideoMaxFrameDuration](activevideomaxframeduration.md) set. This property caps depth data independently of those values, so an app that needs depth less often than video can lower the depth data frame rate without changing the video frame rate it requests.

Setting this property to [kCMTimeInvalid](../../coremedia/cmtime/invalid.md) resets it to the active depth data format’s default minimum frame duration. Setting this property to [kCMTimePositiveInfinity](../../coremedia/cmtime/positiveinfinity.md) results in a depth data frame rate of `0`.

This value gets reset whenever either the active video format or the active depth data format changes.

> **Important**

>  Before changing the value of this property, you must call [lockForConfiguration:](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, setting the value of this property raises an exception. When you’re done configuring the device, call [unlockForConfiguration](unlockforconfiguration%28%29.md) to release the lock.

## See Also

### Configuring frame durations

- [activeVideoMinFrameDuration](activevideominframeduration.md): The currently active minimum frame duration.
- [activeVideoMaxFrameDuration](activevideomaxframeduration.md): The currently active maximum frame duration.
