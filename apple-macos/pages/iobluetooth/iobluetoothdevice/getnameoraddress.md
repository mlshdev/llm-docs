> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/getnameoraddress](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/getnameoraddress)

# getNameOrAddress

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Get the human readable name of the remote device. If the name is not present, it will return a string containing the device’s address.

## Declaration

```objectivec
- (NSString *) getNameOrAddress;
```

<a id="return-value"></a>

## Return Value

Returns the device’s name or a string containing the device’s address.

<a id="Discussion"></a>

## Discussion

If a remote name request has been successfully completed, the device name will be returned. If not, a string containg the device address in the format of “XX-XX-XX-XX-XX-XX” will be returned.

## See Also

### Related Documentation

- [nameOrAddress](nameoraddress.md): Get the human readable name of the remote device. If the name is not present, it will return a string containing the device’s address.
