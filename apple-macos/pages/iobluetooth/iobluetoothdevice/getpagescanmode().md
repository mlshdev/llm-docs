> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/getpagescanmode()

# getPageScanMode() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the page scan mode for the device.

## Declaration

```swift
func getPageScanMode() -> BluetoothPageScanMode
```

<a id="return-value"></a>

## Return Value

Returns the value for the page scan mode for the device.

<a id="Discussion"></a>

## Discussion

This value is only meaningful if the target device has been seen during an inquiry. This can be by checking the result of -getLastInquiryUpdate. If nil is returned, then the device hasn’t been seen.

# getPageScanMode (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the page scan mode for the device.

## Declaration

```objectivec
- (BluetoothPageScanMode) getPageScanMode;
```

<a id="return-value"></a>

## Return Value

Returns the value for the page scan mode for the device.

<a id="Discussion"></a>

## Discussion

This value is only meaningful if the target device has been seen during an inquiry. This can be by checking the result of -getLastInquiryUpdate. If nil is returned, then the device hasn’t been seen.
