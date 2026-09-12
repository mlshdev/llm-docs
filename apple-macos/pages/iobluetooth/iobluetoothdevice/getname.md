> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/getname](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/getname)

# getName

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Get the human readable name of the remote device.

## Declaration

```objectivec
- (NSString *) getName;
```

<a id="return-value"></a>

## Return Value

Returns the name of the remote device name. This value is an NSString generated from the UTF-8 format of the most recent remote name request.

<a id="Discussion"></a>

## Discussion

This only returns a value if a remote name request has been performed on the target device. If a successful remote name request has not been completed, nil is returned. To perform a remote name request, call -remoteNameRequest. If a remote name request has been successfully completed, the method -getLastNameUpdate will return the date/time of the last successful request.

## See Also

### Related Documentation

- [name](name.md): Get the human readable name of the remote device.
