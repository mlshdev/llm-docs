> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothl2capchannel/outgoingmtu](https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/outgoingmtu)

# outgoingMTU (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Returns the current outgoing MTU for the L2CAP channel.

## Declaration

```swift
var outgoingMTU: BluetoothL2CAPMTU { get }
```

<a id="Discussion"></a>

## Discussion

The outgoing MTU represents the maximum L2CAP packet size for packets being sent to the remote device.

# outgoingMTU (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Returns the current outgoing MTU for the L2CAP channel.

## Declaration

```objectivec
@property (readonly) BluetoothL2CAPMTU outgoingMTU;
```

<a id="Discussion"></a>

## Discussion

The outgoing MTU represents the maximum L2CAP packet size for packets being sent to the remote device.

## See Also

### Related Documentation

- [getOutgoingMTU](getoutgoingmtu.md): Deprecated. Returns the current outgoing MTU for the L2CAP channel.
