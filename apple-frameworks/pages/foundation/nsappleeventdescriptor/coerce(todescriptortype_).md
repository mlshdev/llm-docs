> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/coerce(todescriptortype:)](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/coerce(todescriptortype:))

# coerce(toDescriptorType:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a descriptor obtained by coercing the receiver to the specified type.

## Declaration

```swift
func coerce(toDescriptorType descriptorType: DescType) -> NSAppleEventDescriptor?
```

## Parameters

- `descriptorType`: The descriptor type to coerce the receiver to.

<a id="return-value"></a>

## Return Value

A descriptor of the specified type, or `nil` if an error occurs.

## See Also

### Getting Information About a Descriptor

- [aeDesc](aedesc.md): The `AEDesc` structure encapsulated by the receiver, if it has one.
- [booleanValue](booleanvalue.md): The contents of the receiver as a Boolean value, coercing (to `typeBoolean`) if necessary.
- [data](data.md): The receiver’s data.
- [descriptorType](descriptortype.md): The descriptor type of the receiver.
- [enumCodeValue](enumcodevalue.md): The contents of the receiver as an enumeration type, coercing to `typeEnumerated` if necessary.
- [int32Value](int32value.md): The contents of the receiver as an integer, coercing (to `typeSInt32`) if necessary.
- [numberOfItems](numberofitems.md): The number of descriptors in the receiver’s descriptor list.
- [stringValue](stringvalue.md): The contents of the receiver as a Unicode text string, coercing to `typeUnicodeText` if necessary.
- [typeCodeValue](typecodevalue.md): The contents of the receiver as a type, coercing to `typeType` if necessary.

# coerceToDescriptorType: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a descriptor obtained by coercing the receiver to the specified type.

## Declaration

```objectivec
- (NSAppleEventDescriptor *) coerceToDescriptorType:(DescType) descriptorType;
```

## Parameters

- `descriptorType`: The descriptor type to coerce the receiver to.

<a id="return-value"></a>

## Return Value

A descriptor of the specified type, or `nil` if an error occurs.

## See Also

### Getting Information About a Descriptor

- [aeDesc](aedesc.md): The `AEDesc` structure encapsulated by the receiver, if it has one.
- [booleanValue](booleanvalue.md): The contents of the receiver as a Boolean value, coercing (to `typeBoolean`) if necessary.
- [data](data.md): The receiver’s data.
- [descriptorType](descriptortype.md): The descriptor type of the receiver.
- [enumCodeValue](enumcodevalue.md): The contents of the receiver as an enumeration type, coercing to `typeEnumerated` if necessary.
- [int32Value](int32value.md): The contents of the receiver as an integer, coercing (to `typeSInt32`) if necessary.
- [numberOfItems](numberofitems.md): The number of descriptors in the receiver’s descriptor list.
- [stringValue](stringvalue.md): The contents of the receiver as a Unicode text string, coercing to `typeUnicodeText` if necessary.
- [typeCodeValue](typecodevalue.md): The contents of the receiver as a type, coercing to `typeType` if necessary.
