> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpdataelement/init(type:sizedescriptor:size:value:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/init(type:sizedescriptor:size:value:))

# init(type:sizeDescriptor:size:value:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Initializer  
**Availability:** macOS

Initializes a new IOBluetoothSDPDataElement with the given attributes.

## Declaration

```swift
init!(type newType: BluetoothSDPDataElementTypeDescriptor, sizeDescriptor newSizeDescriptor: BluetoothSDPDataElementSizeDescriptor, size newSize: UInt32, value newValue: NSObject!)
```

## Parameters

- `newType`: The type descriptor for the data element.
- `newSizeDescriptor`: The size descriptor for the data element (verify it matches the size parameter).
- `newSize`: The size of the data element in bytes (make sure it is a valid size for the given size descriptor).
- `newValue`: The raw value itself. This must be the base NSString, NSNumber, NSArray or NSData objects. It may not be NSDictionary. If a dictionary format is present, use +withElementValue:.

<a id="return-value"></a>

## Return Value

Returns self if successful. Returns nil if an error is encountered (not likely due to the limited error checking currently done).

<a id="Discussion"></a>

## Discussion

Warning - be careful using this method. There is next to no error checking done on the attributes. It is entirely possible to construct an invalid data element. It is recommended that +withElementValue: be used instead of this one.

## See Also

### Initializers

- [init(elementValue:)](init%28elementvalue_%29.md): Initializes a new IOBluetoothSDPDataElement with the given value.

# initWithType:sizeDescriptor:size:value: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Initializes a new IOBluetoothSDPDataElement with the given attributes.

## Declaration

```objectivec
- (instancetype) initWithType:(BluetoothSDPDataElementTypeDescriptor) newType sizeDescriptor:(BluetoothSDPDataElementSizeDescriptor) newSizeDescriptor size:(uint32_t) newSize value:(NSObject *) newValue;
```

## Parameters

- `newType`: The type descriptor for the data element.
- `newSizeDescriptor`: The size descriptor for the data element (verify it matches the size parameter).
- `newSize`: The size of the data element in bytes (make sure it is a valid size for the given size descriptor).
- `newValue`: The raw value itself. This must be the base NSString, NSNumber, NSArray or NSData objects. It may not be NSDictionary. If a dictionary format is present, use +withElementValue:.

<a id="return-value"></a>

## Return Value

Returns self if successful. Returns nil if an error is encountered (not likely due to the limited error checking currently done).

<a id="Discussion"></a>

## Discussion

Warning - be careful using this method. There is next to no error checking done on the attributes. It is entirely possible to construct an invalid data element. It is recommended that +withElementValue: be used instead of this one.

## See Also

### Initializers

- [initWithElementValue:](init%28elementvalue_%29.md): Initializes a new IOBluetoothSDPDataElement with the given value.
