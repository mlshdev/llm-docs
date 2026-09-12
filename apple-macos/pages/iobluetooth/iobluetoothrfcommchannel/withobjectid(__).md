> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothrfcommchannel/withobjectid(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/withobjectid(_:))

# withObjectID(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Returns the IObluetoothRFCOMMChannel with the given IOBluetoothObjectID.

## Declaration

```swift
class func withObjectID(_ objectID: IOBluetoothObjectID) -> Self!
```

## Parameters

- `objectID`: IOBluetoothObjectID of the desired IObluetoothRFCOMMChannel.

<a id="return-value"></a>

## Return Value

Returns the IObluetoothRFCOMMChannel that matches the given IOBluetoothObjectID if one exists. If no matching RFCOMM channel exists, nil is returned.

<a id="Discussion"></a>

## Discussion

The IOBluetoothObjectID can be used as a global reference for a given IObluetoothRFCOMMChannel. It allows two separate applications to refer to the same IObluetoothRFCOMMChannel object.

# withObjectID: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Returns the IObluetoothRFCOMMChannel with the given IOBluetoothObjectID.

## Declaration

```objectivec
+ (instancetype) withObjectID:(IOBluetoothObjectID) objectID;
```

## Parameters

- `objectID`: IOBluetoothObjectID of the desired IObluetoothRFCOMMChannel.

<a id="return-value"></a>

## Return Value

Returns the IObluetoothRFCOMMChannel that matches the given IOBluetoothObjectID if one exists. If no matching RFCOMM channel exists, nil is returned.

<a id="Discussion"></a>

## Discussion

The IOBluetoothObjectID can be used as a global reference for a given IObluetoothRFCOMMChannel. It allows two separate applications to refer to the same IObluetoothRFCOMMChannel object.
