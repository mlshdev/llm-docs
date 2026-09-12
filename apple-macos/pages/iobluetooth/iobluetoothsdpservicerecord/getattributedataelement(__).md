> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpservicerecord/getattributedataelement(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/getattributedataelement(_:))

# getAttributeDataElement(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns the data element for the given attribute ID in the target service.

## Declaration

```swift
func getAttributeDataElement(_ attributeID: BluetoothSDPServiceAttributeID) -> IOBluetoothSDPDataElement!
```

## Parameters

- `attributeID`: The attribute ID of the desired attribute.

<a id="return-value"></a>

## Return Value

Returns the data element for the given attribute ID in the target service. If the service does not contain an attribute with the given ID, then nil is returned.

# getAttributeDataElement: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns the data element for the given attribute ID in the target service.

## Declaration

```objectivec
- (IOBluetoothSDPDataElement *) getAttributeDataElement:(BluetoothSDPServiceAttributeID) attributeID;
```

## Parameters

- `attributeID`: The attribute ID of the desired attribute.

<a id="return-value"></a>

## Return Value

Returns the data element for the given attribute ID in the target service. If the service does not contain an attribute with the given ID, then nil is returned.
