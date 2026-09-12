> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/getdeviceclassminor](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/getdeviceclassminor)

# getDeviceClassMinor

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Get the minor service class of the device.

## Declaration

```objectivec
- (BluetoothDeviceClassMinor) getDeviceClassMinor;
```

<a id="return-value"></a>

## Return Value

Returns the minor device class of the remote device.

<a id="Discussion"></a>

## Discussion

This value is only meaningful if the target device has been seen during an inquiry. This can be by checking the result of -getLastInquiryUpdate. If nil is returned, then the device hasn’t been seen.

## See Also

### Related Documentation

- [deviceClassMinor](deviceclassminor.md): Get the minor service class of the device.
