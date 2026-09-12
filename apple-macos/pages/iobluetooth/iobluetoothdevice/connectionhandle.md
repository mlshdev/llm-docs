> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/connectionhandle](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/connectionhandle)

# connectionHandle (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Get the connection handle for the baseband connection.

## Declaration

```swift
var connectionHandle: BluetoothConnectionHandle { get }
```

<a id="Discussion"></a>

## Discussion

This method only returns a valid result if a baseband connection is present (-isConnected returns TRUE).

# connectionHandle (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Get the connection handle for the baseband connection.

## Declaration

```objectivec
@property (assign, readonly) BluetoothConnectionHandle connectionHandle;
```

<a id="Discussion"></a>

## Discussion

This method only returns a valid result if a baseband connection is present (-isConnected returns TRUE).

## See Also

### Related Documentation

- [getConnectionHandle](getconnectionhandle.md): Deprecated. Get the connection handle for the baseband connection.
