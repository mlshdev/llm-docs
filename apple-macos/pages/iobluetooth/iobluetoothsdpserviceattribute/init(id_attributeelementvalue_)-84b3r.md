> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpserviceattribute/init(id:attributeelementvalue:)-84b3r](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpserviceattribute/init(id:attributeelementvalue:)-84b3r)

# init(id:attributeElementValue:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Initializer  
**Availability:** macOS

Initializes a new service attribute with the given ID and element value.

## Declaration

```swift
init!(id newAttributeID: BluetoothSDPServiceAttributeID, attributeElementValue: NSObject!)
```

## Parameters

- `newAttributeID`: The attribute ID of the new service attribute.
- `attributeElementValue`: The data element value of the new service attribute

<a id="return-value"></a>

## Return Value

Returns self if successful. Returns nil if there was an error parsing the element value.

<a id="Discussion"></a>

## Discussion

See +\[IOBluetoothSDPDataElement withElementValue:\] for a description of the types that may be passed in as the attributeElementValue.

## See Also

### Initializers

- [init(id:attributeElement:)](init%28id_attributeelement_%29-7oebi.md): Initializes a new service attribute with the given ID and data element.

# initWithID:attributeElementValue: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Initializes a new service attribute with the given ID and element value.

## Declaration

```objectivec
- (instancetype) initWithID:(BluetoothSDPServiceAttributeID) newAttributeID attributeElementValue:(NSObject *) attributeElementValue;
```

## Parameters

- `newAttributeID`: The attribute ID of the new service attribute.
- `attributeElementValue`: The data element value of the new service attribute

<a id="return-value"></a>

## Return Value

Returns self if successful. Returns nil if there was an error parsing the element value.

<a id="Discussion"></a>

## Discussion

See +\[IOBluetoothSDPDataElement withElementValue:\] for a description of the types that may be passed in as the attributeElementValue.

## See Also

### Initializers

- [initWithID:attributeElement:](init%28id_attributeelement_%29-7oebi.md): Initializes a new service attribute with the given ID and data element.
