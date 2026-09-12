> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpserviceattribute/withid(_:attributeelement:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpserviceattribute/withid(_:attributeelement:))

# withID(\_:attributeElement:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Creates a new service attribute with the given ID and data element.

## Declaration

```swift
class func withID(_ newAttributeID: BluetoothSDPServiceAttributeID, attributeElement: IOBluetoothSDPDataElement!) -> Self!
```

## Parameters

- `newAttributeID`: The attribute ID of the new service attribute.
- `attributeElement`: The data element of the new service attribute.

<a id="return-value"></a>

## Return Value

Returns the newly allocated service attribute object. Returns nil if there was an error. The returned IOBluetoothSDPDataElement object has been autoreleased, so it is not necessary for the caller to release it. If the object is to be referenced and kept around, retain should be called.

# withID:attributeElement: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Creates a new service attribute with the given ID and data element.

## Declaration

```objectivec
+ (instancetype) withID:(BluetoothSDPServiceAttributeID) newAttributeID attributeElement:(IOBluetoothSDPDataElement *) attributeElement;
```

## Parameters

- `newAttributeID`: The attribute ID of the new service attribute.
- `attributeElement`: The data element of the new service attribute.

<a id="return-value"></a>

## Return Value

Returns the newly allocated service attribute object. Returns nil if there was an error. The returned IOBluetoothSDPDataElement object has been autoreleased, so it is not necessary for the caller to release it. If the object is to be referenced and kept around, retain should be called.
