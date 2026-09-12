> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpdataelement/init(elementvalue:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/init(elementvalue:))

# init(elementValue:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Initializer  
**Availability:** macOS

Initializes a new IOBluetoothSDPDataElement with the given value.

## Declaration

```swift
init!(elementValue element: NSObject!)
```

## Parameters

- `element`: The data element value of one of the specified types.

<a id="return-value"></a>

## Return Value

Returns self if successful. Returns nil if there was an error parsing the element value.

<a id="Discussion"></a>

## Discussion

The value must follow the format listed above and must be an instance of NSData, NSString, NSNumber, NSArray, NSDictionary, IOBluetoothSDPUUID.

## See Also

### Initializers

- [init(type:sizeDescriptor:size:value:)](init%28type_sizedescriptor_size_value_%29.md): Initializes a new IOBluetoothSDPDataElement with the given attributes.

# initWithElementValue: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Initializes a new IOBluetoothSDPDataElement with the given value.

## Declaration

```objectivec
- (instancetype) initWithElementValue:(NSObject *) element;
```

## Parameters

- `element`: The data element value of one of the specified types.

<a id="return-value"></a>

## Return Value

Returns self if successful. Returns nil if there was an error parsing the element value.

<a id="Discussion"></a>

## Discussion

The value must follow the format listed above and must be an instance of NSData, NSString, NSNumber, NSArray, NSDictionary, IOBluetoothSDPUUID.

## See Also

### Initializers

- [initWithType:sizeDescriptor:size:value:](init%28type_sizedescriptor_size_value_%29.md): Initializes a new IOBluetoothSDPDataElement with the given attributes.
