> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/getdeviceclassmajor](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/getdeviceclassmajor)

# getDeviceClassMajor

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Get the major device class of the device.

## Declaration

```objectivec
- (BluetoothDeviceClassMajor) getDeviceClassMajor;
```

<a id="return-value"></a>

## Return Value

Returns the major device class of the remote device.

<a id="Discussion"></a>

## Discussion

This value is only meaningful if the target device has been seen during an inquiry. This can be by checking the result of -getLastInquiryUpdate. If nil is returned, then the device hasn’t been seen.

## See Also

### Related Documentation

- [deviceClassMajor](deviceclassmajor.md): Get the major device class of the device.
