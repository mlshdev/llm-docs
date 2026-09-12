> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/init(enumcode:)](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/init(enumcode:))

# init(enumCode:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a descriptor initialized with type `typeEnumerated` that stores the specified enumerator data type value.

## Declaration

```swift
init(enumCode enumerator: OSType)
```

## Parameters

- `enumerator`: A type code that identifies the type of enumerated data to be stored in the returned descriptor.

<a id="return-value"></a>

## Return Value

A descriptor with the specified enumerator data type value, or `nil` if an error occurs.

## See Also

### Creating and Initializing Descriptors

- [appleEvent(withEventClass:eventID:targetDescriptor:returnID:transactionID:)](appleevent%28witheventclass_eventid_targetdescriptor_returnid_transactionid_%29.md): Creates a descriptor that represents an Apple event, initialized according to the specified information.
- [init(boolean:)](init%28boolean_%29.md): Creates a descriptor initialized with type `typeBoolean` that stores the specified Boolean value.
- [init(int32:)](init%28int32_%29.md): Creates a descriptor initialized with Apple event type `typeSInt32` that stores the specified integer value.
- [init(string:)](init%28string_%29.md): Creates a descriptor initialized with type `typeUnicodeText` that stores the text from the specified string.
- [init(typeCode:)](init%28typecode_%29.md): Creates a descriptor initialized with type `typeType` that stores the specified type value.
- [list()](list%28%29.md): Creates and initializes an empty list descriptor.
- [null()](null%28%29.md): Creates and initializes a descriptor with no parameter or attribute values set.
- [record()](record%28%29.md): Creates and initializes a descriptor for an Apple event record whose data has yet to be set.
- [init(listDescriptor:)](init%28listdescriptor_%29.md): Initializes a newly allocated instance as an empty list descriptor.
- [init(recordDescriptor:)](init%28recorddescriptor_%29.md): Initializes a newly allocated instance as a descriptor that is an Apple event record.
- [init(aeDescNoCopy:)](init%28aedescnocopy_%29-5cioa.md): Initializes a newly allocated instance as a descriptor for the specified Carbon `AEDesc` structure.
- [init(descriptorType:bytes:length:)](init%28descriptortype_bytes_length_%29.md): Initializes a newly allocated instance as a descriptor with the specified descriptor type and data (from an arbitrary sequence of bytes and a length count).
- [init(descriptorType:data:)](init%28descriptortype_data_%29.md): Initializes a newly allocated instance as a descriptor with the specified descriptor type and data (from an instance of `NSData`).
- [init(eventClass:eventID:targetDescriptor:returnID:transactionID:)](init%28eventclass_eventid_targetdescriptor_returnid_transactionid_%29.md): Initializes a newly allocated instance as a descriptor for an Apple event, initialized with the specified values.

# descriptorWithEnumCode: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a descriptor initialized with type `typeEnumerated` that stores the specified enumerator data type value.

## Declaration

```objectivec
+ (NSAppleEventDescriptor *) descriptorWithEnumCode:(OSType) enumerator;
```

## Parameters

- `enumerator`: A type code that identifies the type of enumerated data to be stored in the returned descriptor.

<a id="return-value"></a>

## Return Value

A descriptor with the specified enumerator data type value, or `nil` if an error occurs.

## See Also

### Creating and Initializing Descriptors

- [appleEventWithEventClass:eventID:targetDescriptor:returnID:transactionID:](appleevent%28witheventclass_eventid_targetdescriptor_returnid_transactionid_%29.md): Creates a descriptor that represents an Apple event, initialized according to the specified information.
- [descriptorWithBoolean:](init%28boolean_%29.md): Creates a descriptor initialized with type `typeBoolean` that stores the specified Boolean value.
- [descriptorWithDescriptorType:bytes:length:](descriptorwithdescriptortype_bytes_length_.md): Creates a descriptor initialized with the specified event type that stores the specified data (from a series of bytes).
- [descriptorWithDescriptorType:data:](descriptorwithdescriptortype_data_.md): Creates a descriptor initialized with the specified event type that stores the specified data (from an instance of `NSData`).
- [descriptorWithInt32:](init%28int32_%29.md): Creates a descriptor initialized with Apple event type `typeSInt32` that stores the specified integer value.
- [descriptorWithString:](init%28string_%29.md): Creates a descriptor initialized with type `typeUnicodeText` that stores the text from the specified string.
- [descriptorWithTypeCode:](init%28typecode_%29.md): Creates a descriptor initialized with type `typeType` that stores the specified type value.
- [listDescriptor](list%28%29.md): Creates and initializes an empty list descriptor.
- [nullDescriptor](null%28%29.md): Creates and initializes a descriptor with no parameter or attribute values set.
- [recordDescriptor](record%28%29.md): Creates and initializes a descriptor for an Apple event record whose data has yet to be set.
- [initListDescriptor](init%28listdescriptor_%29.md): Initializes a newly allocated instance as an empty list descriptor.
- [initRecordDescriptor](init%28recorddescriptor_%29.md): Initializes a newly allocated instance as a descriptor that is an Apple event record.
- [initWithAEDescNoCopy:](init%28aedescnocopy_%29-5cioa.md): Initializes a newly allocated instance as a descriptor for the specified Carbon `AEDesc` structure.
- [initWithDescriptorType:bytes:length:](init%28descriptortype_bytes_length_%29.md): Initializes a newly allocated instance as a descriptor with the specified descriptor type and data (from an arbitrary sequence of bytes and a length count).
- [initWithDescriptorType:data:](init%28descriptortype_data_%29.md): Initializes a newly allocated instance as a descriptor with the specified descriptor type and data (from an instance of `NSData`).
