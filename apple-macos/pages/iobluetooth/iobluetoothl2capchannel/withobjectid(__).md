> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothl2capchannel/withobjectid(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/withobjectid(_:))

# withObjectID(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Returns the IObluetoothL2CAPChannel with the given IOBluetoothObjectID.

## Declaration

```swift
class func withObjectID(_ objectID: IOBluetoothObjectID) -> Self!
```

## Parameters

- `objectID`: IOBluetoothObjectID of the desired IOBluetoothL2CAPChannel.

<a id="return-value"></a>

## Return Value

Returns the IOBluetoothL2CAPChannel that matches the given IOBluetoothObjectID if one exists. If no matching L2CAP channel exists, nil is returned.

<a id="Discussion"></a>

## Discussion

The IOBluetoothObjectID can be used as a global reference for a given IOBluetoothL2CAPChannel. It allows two separate applications to refer to the same IOBluetoothL2CAPChannel object.

# withObjectID: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Returns the IObluetoothL2CAPChannel with the given IOBluetoothObjectID.

## Declaration

```objectivec
+ (instancetype) withObjectID:(IOBluetoothObjectID) objectID;
```

## Parameters

- `objectID`: IOBluetoothObjectID of the desired IOBluetoothL2CAPChannel.

<a id="return-value"></a>

## Return Value

Returns the IOBluetoothL2CAPChannel that matches the given IOBluetoothObjectID if one exists. If no matching L2CAP channel exists, nil is returned.

<a id="Discussion"></a>

## Discussion

The IOBluetoothObjectID can be used as a global reference for a given IOBluetoothL2CAPChannel. It allows two separate applications to refer to the same IOBluetoothL2CAPChannel object.
