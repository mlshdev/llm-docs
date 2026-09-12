> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpserviceattribute/withid(_:attributeelementvalue:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpserviceattribute/withid(_:attributeelementvalue:))

# withID(\_:attributeElementValue:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Creates a new service attribute with the given ID and element value.

## Declaration

```swift
class func withID(_ newAttributeID: BluetoothSDPServiceAttributeID, attributeElementValue: NSObject!) -> Self!
```

## Parameters

- `newAttributeID`: The attribute ID of the new service attribute.
- `attributeElementValue`: The data element value of the new service attribute

<a id="return-value"></a>

## Return Value

Returns the newly allocated service attribute object. Returns nil if there was an error parsing the element value. The returned IOBluetoothSDPDataElement object has been autoreleased, so it is not necessary for the caller to release it. If the object is to be referenced and kept around, retain should be called.

<a id="Discussion"></a>

## Discussion

See +\[IOBluetoothSDPDataElement withElementValue:\] for a description of the types that may be passed in as the attributeElementValue.

# withID:attributeElementValue: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Creates a new service attribute with the given ID and element value.

## Declaration

```objectivec
+ (instancetype) withID:(BluetoothSDPServiceAttributeID) newAttributeID attributeElementValue:(NSObject *) attributeElementValue;
```

## Parameters

- `newAttributeID`: The attribute ID of the new service attribute.
- `attributeElementValue`: The data element value of the new service attribute

<a id="return-value"></a>

## Return Value

Returns the newly allocated service attribute object. Returns nil if there was an error parsing the element value. The returned IOBluetoothSDPDataElement object has been autoreleased, so it is not necessary for the caller to release it. If the object is to be referenced and kept around, retain should be called.

<a id="Discussion"></a>

## Discussion

See +\[IOBluetoothSDPDataElement withElementValue:\] for a description of the types that may be passed in as the attributeElementValue.
