> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/islockingwhitebalancewithcustomdevicegainssupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/islockingwhitebalancewithcustomdevicegainssupported)

# isLockingWhiteBalanceWithCustomDeviceGainsSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the device supports locking white balance to specific gain values.

## Declaration

```swift
var isLockingWhiteBalanceWithCustomDeviceGainsSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If the value is [false](https://developer.apple.com/documentation/swift/false), calling the [setWhiteBalanceModeLocked(with:completionHandler:)](setwhitebalancemodelocked%28with_completionhandler_%29.md) method with a white balance gains value other than [currentWhiteBalanceGains](currentwhitebalancegains.md) throws an exception.

## See Also

### Setting white balance manually

- [setWhiteBalanceModeLocked(with:completionHandler:)](setwhitebalancemodelocked%28with_completionhandler_%29.md): Sets the white balance to locked mode with the specified white balance gains.
- [setWhiteBalanceModeLocked(whiteBalanceTemperatureAndTintValues:handler:)](setwhitebalancemodelocked%28whitebalancetemperatureandtintvalues_handler_%29.md): Sets white balance to locked mode with explicit temperature and tint values.

# lockingWhiteBalanceWithCustomDeviceGainsSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the device supports locking white balance to specific gain values.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isLockingWhiteBalanceWithCustomDeviceGainsSupported) BOOL lockingWhiteBalanceWithCustomDeviceGainsSupported;
```

<a id="Discussion"></a>

## Discussion

If the value is [false](https://developer.apple.com/documentation/swift/false), calling the [setWhiteBalanceModeLockedWithDeviceWhiteBalanceGains:completionHandler:](setwhitebalancemodelocked%28with_completionhandler_%29.md) method with a white balance gains value other than [AVCaptureWhiteBalanceGainsCurrent](currentwhitebalancegains.md) throws an exception.

## See Also

### Setting white balance manually

- [setWhiteBalanceModeLockedWithDeviceWhiteBalanceGains:completionHandler:](setwhitebalancemodelocked%28with_completionhandler_%29.md): Sets the white balance to locked mode with the specified white balance gains.
- [setWhiteBalanceModeLockedWithDeviceWhiteBalanceTemperatureAndTintValues:completionHandler:](setwhitebalancemodelocked%28whitebalancetemperatureandtintvalues_handler_%29.md): Sets white balance to locked mode with explicit temperature and tint values.
