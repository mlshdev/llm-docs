> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/getclassofdevice](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/getclassofdevice)

# getClassOfDevice

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Gets the full class of device value for the remote device.

## Declaration

```objectivec
- (BluetoothClassOfDevice) getClassOfDevice;
```

<a id="return-value"></a>

## Return Value

Returns the class of device for the remote device.

<a id="Discussion"></a>

## Discussion

This value is only meaningful if the target device has been seen during an inquiry. This can be by checking the result of -getLastInquiryUpdate. If nil is returned, then the device hasn’t been seen.

## See Also

### Related Documentation

- [classOfDevice](classofdevice.md): Gets the full class of device value for the remote device.
