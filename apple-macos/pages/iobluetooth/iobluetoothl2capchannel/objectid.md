> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothl2capchannel/objectid](https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/objectid)

# objectID (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Returns the IOBluetoothObjectID of the given IOBluetoothL2CAPChannel.

## Declaration

```swift
var objectID: IOBluetoothObjectID { get }
```

<a id="Discussion"></a>

## Discussion

The IOBluetoothObjectID can be used as a global reference for a given IOBluetoothL2CAPChannel. It allows two separate applications to refer to the same IOBluetoothL2CAPChannel.

# objectID (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Returns the IOBluetoothObjectID of the given IOBluetoothL2CAPChannel.

## Declaration

```objectivec
@property (assign, readonly) IOBluetoothObjectID objectID;
```

<a id="Discussion"></a>

## Discussion

The IOBluetoothObjectID can be used as a global reference for a given IOBluetoothL2CAPChannel. It allows two separate applications to refer to the same IOBluetoothL2CAPChannel.

## See Also

### Related Documentation

- [getObjectID](getobjectid.md): Deprecated. Returns the IOBluetoothObjectID of the given IOBluetoothL2CAPChannel.
