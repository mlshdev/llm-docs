> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/getlastinquiryupdate()](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/getlastinquiryupdate())

# getLastInquiryUpdate() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the date/time of the last time the device was returned during an inquiry.

## Declaration

```swift
func getLastInquiryUpdate() -> Date!
```

<a id="return-value"></a>

## Return Value

Returns the date/time of the last time the device was seen during an inquiry. If the device has never been seen during an inquiry, nil is returned.

# getLastInquiryUpdate (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the date/time of the last time the device was returned during an inquiry.

## Declaration

```objectivec
- (NSDate *) getLastInquiryUpdate;
```

<a id="return-value"></a>

## Return Value

Returns the date/time of the last time the device was seen during an inquiry. If the device has never been seen during an inquiry, nil is returned.
