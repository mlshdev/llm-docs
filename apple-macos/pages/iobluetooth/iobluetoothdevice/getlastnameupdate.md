> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/getlastnameupdate](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/getlastnameupdate)

# getLastNameUpdate

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Get the date/time of the last successful remote name request.

## Declaration

```objectivec
- (NSDate *) getLastNameUpdate;
```

<a id="return-value"></a>

## Return Value

Returns the date/time of the last successful remote name request. If no remote name request has been completed on the target device, nil is returned.

## See Also

### Related Documentation

- [lastNameUpdate](lastnameupdate.md): Get the date/time of the last successful remote name request.
