> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/getclockoffset()](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/getclockoffset())

# getClockOffset() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the clock offset value of the device.

## Declaration

```swift
func getClockOffset() -> BluetoothClockOffset
```

<a id="return-value"></a>

## Return Value

Returns the clock offset value for the device.

<a id="Discussion"></a>

## Discussion

This value is only meaningful if the target device has been seen during an inquiry. This can be by checking the result of -getLastInquiryUpdate. If nil is returned, then the device hasn’t been seen.

# getClockOffset (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the clock offset value of the device.

## Declaration

```objectivec
- (BluetoothClockOffset) getClockOffset;
```

<a id="return-value"></a>

## Return Value

Returns the clock offset value for the device.

<a id="Discussion"></a>

## Discussion

This value is only meaningful if the target device has been seen during an inquiry. This can be by checking the result of -getLastInquiryUpdate. If nil is returned, then the device hasn’t been seen.
