> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/maxwhitebalancegain](https://developer.apple.com/documentation/avfoundation/avcapturedevice/maxwhitebalancegain)

# maxWhiteBalanceGain (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The maximum supported value to which you can set a color channel.

## Declaration

```swift
var maxWhiteBalanceGain: Float { get }
```

<a id="Discussion"></a>

## Discussion

This property doesn’t change for the life of the object.

## See Also

### Inspecting gain levels

- [deviceWhiteBalanceGains](devicewhitebalancegains.md): The current device-specific RGB white balance gain values in use.
- [grayWorldDeviceWhiteBalanceGains](grayworlddevicewhitebalancegains.md): The current device-specific white balance values required for a neutral gray white point.

# maxWhiteBalanceGain (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The maximum supported value to which you can set a color channel.

## Declaration

```objectivec
@property (nonatomic, readonly) float maxWhiteBalanceGain;
```

<a id="Discussion"></a>

## Discussion

This property doesn’t change for the life of the object.

## See Also

### Inspecting gain levels

- [deviceWhiteBalanceGains](devicewhitebalancegains.md): The current device-specific RGB white balance gain values in use.
- [grayWorldDeviceWhiteBalanceGains](grayworlddevicewhitebalancegains.md): The current device-specific white balance values required for a neutral gray white point.
