> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothrfcommchannel/getobjectid()](https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/getobjectid())

# getObjectID() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns the IOBluetoothObjectID of the given IOBluetoothRFCOMMChannel.

## Declaration

```swift
func getObjectID() -> IOBluetoothObjectID
```

<a id="return-value"></a>

## Return Value

Returns the IOBluetoothObjectID of the given IOBluetoothRFCOMMChannel.

<a id="Discussion"></a>

## Discussion

The IOBluetoothObjectID can be used as a global reference for a given IOBluetoothRFCOMMChannel. It allows two separate applications to refer to the same IOBluetoothRFCOMMChannel.

# getObjectID (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns the IOBluetoothObjectID of the given IOBluetoothRFCOMMChannel.

## Declaration

```objectivec
- (IOBluetoothObjectID) getObjectID;
```

<a id="return-value"></a>

## Return Value

Returns the IOBluetoothObjectID of the given IOBluetoothRFCOMMChannel.

<a id="Discussion"></a>

## Discussion

The IOBluetoothObjectID can be used as a global reference for a given IOBluetoothRFCOMMChannel. It allows two separate applications to refer to the same IOBluetoothRFCOMMChannel.
