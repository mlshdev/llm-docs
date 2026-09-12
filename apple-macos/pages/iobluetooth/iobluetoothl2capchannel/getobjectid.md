> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothl2capchannel/getobjectid](https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/getobjectid)

# getObjectID

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Returns the IOBluetoothObjectID of the given IOBluetoothL2CAPChannel.

## Declaration

```objectivec
- (IOBluetoothObjectID) getObjectID;
```

<a id="return-value"></a>

## Return Value

Returns the IOBluetoothObjectID of the given IOBluetoothL2CAPChannel.

<a id="Discussion"></a>

## Discussion

The IOBluetoothObjectID can be used as a global reference for a given IOBluetoothL2CAPChannel. It allows two separate applications to refer to the same IOBluetoothL2CAPChannel.

## See Also

### Related Documentation

- [objectID](objectid.md): Returns the IOBluetoothObjectID of the given IOBluetoothL2CAPChannel.
