> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/descriptortype](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/descriptortype)

# descriptorType (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The descriptor type of the receiver.

## Declaration

```swift
var descriptorType: DescType { get }
```

## See Also

### Getting Information About a Descriptor

- [aeDesc](aedesc.md): The `AEDesc` structure encapsulated by the receiver, if it has one.
- [booleanValue](booleanvalue.md): The contents of the receiver as a Boolean value, coercing (to `typeBoolean`) if necessary.
- [coerce(toDescriptorType:)](coerce%28todescriptortype_%29.md): Returns a descriptor obtained by coercing the receiver to the specified type.
- [data](data.md): The receiver’s data.
- [enumCodeValue](enumcodevalue.md): The contents of the receiver as an enumeration type, coercing to `typeEnumerated` if necessary.
- [int32Value](int32value.md): The contents of the receiver as an integer, coercing (to `typeSInt32`) if necessary.
- [numberOfItems](numberofitems.md): The number of descriptors in the receiver’s descriptor list.
- [stringValue](stringvalue.md): The contents of the receiver as a Unicode text string, coercing to `typeUnicodeText` if necessary.
- [typeCodeValue](typecodevalue.md): The contents of the receiver as a type, coercing to `typeType` if necessary.

# descriptorType (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The descriptor type of the receiver.

## Declaration

```objectivec
@property (readonly) DescType descriptorType;
```

## See Also

### Getting Information About a Descriptor

- [aeDesc](aedesc.md): The `AEDesc` structure encapsulated by the receiver, if it has one.
- [booleanValue](booleanvalue.md): The contents of the receiver as a Boolean value, coercing (to `typeBoolean`) if necessary.
- [coerceToDescriptorType:](coerce%28todescriptortype_%29.md): Returns a descriptor obtained by coercing the receiver to the specified type.
- [data](data.md): The receiver’s data.
- [enumCodeValue](enumcodevalue.md): The contents of the receiver as an enumeration type, coercing to `typeEnumerated` if necessary.
- [int32Value](int32value.md): The contents of the receiver as an integer, coercing (to `typeSInt32`) if necessary.
- [numberOfItems](numberofitems.md): The number of descriptors in the receiver’s descriptor list.
- [stringValue](stringvalue.md): The contents of the receiver as a Unicode text string, coercing to `typeUnicodeText` if necessary.
- [typeCodeValue](typecodevalue.md): The contents of the receiver as a type, coercing to `typeType` if necessary.
