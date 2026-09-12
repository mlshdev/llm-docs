> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/currentwhitebalancegains](https://developer.apple.com/documentation/avfoundation/avcapturedevice/currentwhitebalancegains)

# currentWhiteBalanceGains (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A special constant representing the current white balance setting.

## Declaration

```swift
class let currentWhiteBalanceGains: AVCaptureDevice.WhiteBalanceGains
```

<a id="Discussion"></a>

## Discussion

Pass this value to [setWhiteBalanceModeLocked(with:completionHandler:)](setwhitebalancemodelocked%28with_completionhandler_%29.md) to lock white balance gains to their current value (that is, disable automatic white balancing).

# AVCaptureWhiteBalanceGainsCurrent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A special constant representing the current white balance setting.

## Declaration

```objectivec
extern const AVCaptureWhiteBalanceGains AVCaptureWhiteBalanceGainsCurrent;
```

<a id="Discussion"></a>

## Discussion

Pass this value to [setWhiteBalanceModeLockedWithDeviceWhiteBalanceGains:completionHandler:](setwhitebalancemodelocked%28with_completionhandler_%29.md) to lock white balance gains to their current value (that is, disable automatic white balancing).
