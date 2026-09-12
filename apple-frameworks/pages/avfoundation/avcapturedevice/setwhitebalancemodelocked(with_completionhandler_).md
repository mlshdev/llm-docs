> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/setwhitebalancemodelocked(with:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/setwhitebalancemodelocked(with:completionhandler:))

# setWhiteBalanceModeLocked(with:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Sets the white balance to locked mode with the specified white balance gains.

## Declaration

```swift
func setWhiteBalanceModeLocked(with whiteBalanceGains: AVCaptureDevice.WhiteBalanceGains, completionHandler handler: (@Sendable (CMTime) -> Void)? = nil)
```

```swift
func setWhiteBalanceModeLocked(with whiteBalanceGains: AVCaptureDevice.WhiteBalanceGains) async -> CMTime
```

## Parameters

- `whiteBalanceGains`: The white balance gains to set. Pass a value of [currentWhiteBalanceGains](currentwhitebalancegains.md) to leave the current white balance unchanged.
- `handler`: A callback the system invokes when the adjustment to the white balance is complete and the [whiteBalanceMode](whitebalancemode-swift.property.md) set to a locked state. If you call this method multiple times, the system calls the completion handlers in FIFO order.

  The system passes a time value that matches that of the first buffer to which its applied all settings. It synchronizes the timestamp to the device clock, and you must convert the timestamp to the [synchronizationClock](../avcapturesession/synchronizationclock.md) prior to comparison with the timestamps of buffers delivered through an [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md).

  You can pass `nil` for this parameter if you don’t require this information.

<a id="Discussion"></a>

## Discussion

Each channel in the white balance gains structure supports values between `1.0` and [maxWhiteBalanceGain](maxwhitebalancegain.md). Setting a channel value outside this range generates an exception.

The system normalizes gain values to the minimum channel value to avoid brightness changes (for example, `R:2 G:2 B:4` normalizes to `R:1 G:1 B:2`).

Before changing the value the white balance gains, you must call [lockForConfiguration()](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, setting the value of this property raises an exception. When you finish configuring the device, call [unlockForConfiguration()](unlockforconfiguration%28%29.md) to release the lock and allow other devices to configure the settings.

## Topics

### White balance constants

- [currentWhiteBalanceGains](currentwhitebalancegains.md): A special constant representing the current white balance setting.

## See Also

### Setting white balance manually

- [isLockingWhiteBalanceWithCustomDeviceGainsSupported](islockingwhitebalancewithcustomdevicegainssupported.md): A Boolean value that indicates whether the device supports locking white balance to specific gain values.
- [setWhiteBalanceModeLocked(whiteBalanceTemperatureAndTintValues:handler:)](setwhitebalancemodelocked%28whitebalancetemperatureandtintvalues_handler_%29.md): Sets white balance to locked mode with explicit temperature and tint values.

# setWhiteBalanceModeLockedWithDeviceWhiteBalanceGains:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Sets the white balance to locked mode with the specified white balance gains.

## Declaration

```objectivec
- (void) setWhiteBalanceModeLockedWithDeviceWhiteBalanceGains:(AVCaptureWhiteBalanceGains) whiteBalanceGains completionHandler:(void (^)(CMTime syncTime)) handler;
```

## Parameters

- `whiteBalanceGains`: The white balance gains to set. Pass a value of [AVCaptureWhiteBalanceGainsCurrent](currentwhitebalancegains.md) to leave the current white balance unchanged.
- `handler`: A callback the system invokes when the adjustment to the white balance is complete and the [whiteBalanceMode](whitebalancemode-swift.property.md) set to a locked state. If you call this method multiple times, the system calls the completion handlers in FIFO order.

  The system passes a time value that matches that of the first buffer to which its applied all settings. It synchronizes the timestamp to the device clock, and you must convert the timestamp to the [synchronizationClock](../avcapturesession/synchronizationclock.md) prior to comparison with the timestamps of buffers delivered through an [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md).

  You can pass `nil` for this parameter if you don’t require this information.

<a id="Discussion"></a>

## Discussion

Each channel in the white balance gains structure supports values between `1.0` and [maxWhiteBalanceGain](maxwhitebalancegain.md). Setting a channel value outside this range generates an exception.

The system normalizes gain values to the minimum channel value to avoid brightness changes (for example, `R:2 G:2 B:4` normalizes to `R:1 G:1 B:2`).

Before changing the value the white balance gains, you must call [lockForConfiguration:](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, setting the value of this property raises an exception. When you finish configuring the device, call [unlockForConfiguration](unlockforconfiguration%28%29.md) to release the lock and allow other devices to configure the settings.

## Topics

### White balance constants

- [AVCaptureWhiteBalanceGainsCurrent](currentwhitebalancegains.md): A special constant representing the current white balance setting.

## See Also

### Setting white balance manually

- [lockingWhiteBalanceWithCustomDeviceGainsSupported](islockingwhitebalancewithcustomdevicegainssupported.md): A Boolean value that indicates whether the device supports locking white balance to specific gain values.
- [setWhiteBalanceModeLockedWithDeviceWhiteBalanceTemperatureAndTintValues:completionHandler:](setwhitebalancemodelocked%28whitebalancetemperatureandtintvalues_handler_%29.md): Sets white balance to locked mode with explicit temperature and tint values.
