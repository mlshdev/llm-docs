> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/getpagescanrepetitionmode()](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/getpagescanrepetitionmode())

# getPageScanRepetitionMode() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the value of the page scan repetition mode for the device.

## Declaration

```swift
func getPageScanRepetitionMode() -> BluetoothPageScanRepetitionMode
```

<a id="return-value"></a>

## Return Value

Returns the page scan repetition mode value for this device.

<a id="Discussion"></a>

## Discussion

This value is only meaningful if the target device has been seen during an inquiry. This can be by checking the result of -getLastInquiryUpdate. If nil is returned, then the device hasn’t been seen.

# getPageScanRepetitionMode (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the value of the page scan repetition mode for the device.

## Declaration

```objectivec
- (BluetoothPageScanRepetitionMode) getPageScanRepetitionMode;
```

<a id="return-value"></a>

## Return Value

Returns the page scan repetition mode value for this device.

<a id="Discussion"></a>

## Discussion

This value is only meaningful if the target device has been seen during an inquiry. This can be by checking the result of -getLastInquiryUpdate. If nil is returned, then the device hasn’t been seen.
