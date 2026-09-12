> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothl2capchannel/incomingmtu](https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/incomingmtu)

# incomingMTU (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Returns the current incoming MTU for the L2CAP channel.

## Declaration

```swift
var incomingMTU: BluetoothL2CAPMTU { get }
```

<a id="Discussion"></a>

## Discussion

The incoming MTU represents the maximum L2CAP packet size for packets being sent by the remote device.

# incomingMTU (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Returns the current incoming MTU for the L2CAP channel.

## Declaration

```objectivec
@property (readonly) BluetoothL2CAPMTU incomingMTU;
```

<a id="Discussion"></a>

## Discussion

The incoming MTU represents the maximum L2CAP packet size for packets being sent by the remote device.

## See Also

### Related Documentation

- [getIncomingMTU](getincomingmtu.md): Deprecated. Returns the current incoming MTU for the L2CAP channel.
