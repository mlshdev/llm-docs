> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpserviceattribute/init(id:attributeelement:)-7oebi](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpserviceattribute/init(id:attributeelement:)-7oebi)

# init(id:attributeElement:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Initializer  
**Availability:** macOS

Initializes a new service attribute with the given ID and data element.

## Declaration

```swift
init!(id newAttributeID: BluetoothSDPServiceAttributeID, attributeElement: IOBluetoothSDPDataElement!)
```

## Parameters

- `newAttributeID`: The attribute ID of the new service attribute.
- `attributeElement`: The data element of the new service attribute.

<a id="return-value"></a>

## Return Value

Returns self if successful. Returns nil if there was an error.

## See Also

### Initializers

- [init(id:attributeElementValue:)](init%28id_attributeelementvalue_%29-84b3r.md): Initializes a new service attribute with the given ID and element value.

# initWithID:attributeElement: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Initializes a new service attribute with the given ID and data element.

## Declaration

```objectivec
- (instancetype) initWithID:(BluetoothSDPServiceAttributeID) newAttributeID attributeElement:(IOBluetoothSDPDataElement *) attributeElement;
```

## Parameters

- `newAttributeID`: The attribute ID of the new service attribute.
- `attributeElement`: The data element of the new service attribute.

<a id="return-value"></a>

## Return Value

Returns self if successful. Returns nil if there was an error.

## See Also

### Initializers

- [initWithID:attributeElementValue:](init%28id_attributeelementvalue_%29-84b3r.md): Initializes a new service attribute with the given ID and element value.
