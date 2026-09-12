> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/devicewhitebalancegains](https://developer.apple.com/documentation/avfoundation/avcapturedevice/devicewhitebalancegains)

# deviceWhiteBalanceGains (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The current device-specific RGB white balance gain values in use.

## Declaration

```swift
var deviceWhiteBalanceGains: AVCaptureDevice.WhiteBalanceGains { get }
```

<a id="Discussion"></a>

## Discussion

This property specifies the current red, green, and blue gain values used for white balance. You can use the values to adjust color casts for a given scene. Each channel supports values between 1.0 and -[maxWhiteBalanceGain](maxwhitebalancegain.md).

This property is key-value observable.

## See Also

### Inspecting gain levels

- [grayWorldDeviceWhiteBalanceGains](grayworlddevicewhitebalancegains.md): The current device-specific white balance values required for a neutral gray white point.
- [maxWhiteBalanceGain](maxwhitebalancegain.md): The maximum supported value to which you can set a color channel.

# deviceWhiteBalanceGains (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The current device-specific RGB white balance gain values in use.

## Declaration

```objectivec
@property (nonatomic, readonly) AVCaptureWhiteBalanceGains deviceWhiteBalanceGains;
```

<a id="Discussion"></a>

## Discussion

This property specifies the current red, green, and blue gain values used for white balance. You can use the values to adjust color casts for a given scene. Each channel supports values between 1.0 and -[maxWhiteBalanceGain](maxwhitebalancegain.md).

This property is key-value observable.

## See Also

### Inspecting gain levels

- [grayWorldDeviceWhiteBalanceGains](grayworlddevicewhitebalancegains.md): The current device-specific white balance values required for a neutral gray white point.
- [maxWhiteBalanceGain](maxwhitebalancegain.md): The maximum supported value to which you can set a color channel.
