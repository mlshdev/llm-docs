> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/getaddressstring](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/getaddressstring)

# getAddressString

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Get a string representation of the Bluetooth device address for the target device. The format of the string is the same as returned by IOBluetoothNSStringFromDeviceAddress().

## Declaration

```objectivec
- (NSString *) getAddressString;
```

<a id="return-value"></a>

## Return Value

Returns an NSString containing the Bluetooth device address of the target device.

<a id="Discussion"></a>

## Discussion

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.

## See Also

### Related Documentation

- [addressString](addressstring.md): Get a string representation of the Bluetooth device address for the target device. The format of the string is the same as returned by IOBluetoothNSStringFromDeviceAddress().
