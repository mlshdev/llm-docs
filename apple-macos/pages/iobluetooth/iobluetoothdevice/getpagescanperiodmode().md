> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/getpagescanperiodmode()](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/getpagescanperiodmode())

# getPageScanPeriodMode() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the value of the page scan period mode for the device.

## Declaration

```swift
func getPageScanPeriodMode() -> BluetoothPageScanPeriodMode
```

<a id="return-value"></a>

## Return Value

Returns page scan period mode value for the device.

<a id="Discussion"></a>

## Discussion

This value is only meaningful if the target device has been seen during an inquiry. This can be by checking the result of -getLastInquiryUpdate. If nil is returned, then the device hasn’t been seen.

# getPageScanPeriodMode (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the value of the page scan period mode for the device.

## Declaration

```objectivec
- (BluetoothPageScanPeriodMode) getPageScanPeriodMode;
```

<a id="return-value"></a>

## Return Value

Returns page scan period mode value for the device.

<a id="Discussion"></a>

## Discussion

This value is only meaningful if the target device has been seen during an inquiry. This can be by checking the result of -getLastInquiryUpdate. If nil is returned, then the device hasn’t been seen.
