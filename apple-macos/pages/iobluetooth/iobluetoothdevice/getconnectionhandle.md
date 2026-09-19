> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/getconnectionhandle

# getConnectionHandle

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Get the connection handle for the baseband connection.

## Declaration

```objectivec
- (BluetoothConnectionHandle) getConnectionHandle;
```

<a id="return-value"></a>

## Return Value

Returns the connection handle for the baseband connection. If no baseband connection is present, kBluetoothConnectionHandleNone is returned.

<a id="Discussion"></a>

## Discussion

This method only returns a valid result if a baseband connection is present (-isConnected returns TRUE).

## See Also

### Related Documentation

- [connectionHandle](connectionhandle.md): Get the connection handle for the baseband connection.
