> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothl2capchannel/getoutgoingmtu](https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/getoutgoingmtu)

# getOutgoingMTU

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Returns the current outgoing MTU for the L2CAP channel.

## Declaration

```objectivec
- (BluetoothL2CAPMTU) getOutgoingMTU;
```

<a id="return-value"></a>

## Return Value

Returns the current outgoing MTU for the L2CAP channel.

<a id="Discussion"></a>

## Discussion

The outgoing MTU represents the maximum L2CAP packet size for packets being sent to the remote device.

## See Also

### Related Documentation

- [outgoingMTU](outgoingmtu.md): Returns the current outgoing MTU for the L2CAP channel.
