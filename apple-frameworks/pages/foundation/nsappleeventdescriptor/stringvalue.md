> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/stringvalue](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/stringvalue)

# stringValue (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The contents of the receiver as a Unicode text string, coercing to `typeUnicodeText` if necessary.

## Declaration

```swift
var stringValue: String? { get }
```

<a id="Discussion"></a>

## Discussion

The contents of the descriptor, as a string, or `nil` if an error occurs.

## See Also

### Getting Information About a Descriptor

- [aeDesc](aedesc.md): The `AEDesc` structure encapsulated by the receiver, if it has one.
- [booleanValue](booleanvalue.md): The contents of the receiver as a Boolean value, coercing (to `typeBoolean`) if necessary.
- [coerce(toDescriptorType:)](coerce%28todescriptortype_%29.md): Returns a descriptor obtained by coercing the receiver to the specified type.
- [data](data.md): The receiver’s data.
- [descriptorType](descriptortype.md): The descriptor type of the receiver.
- [enumCodeValue](enumcodevalue.md): The contents of the receiver as an enumeration type, coercing to `typeEnumerated` if necessary.
- [int32Value](int32value.md): The contents of the receiver as an integer, coercing (to `typeSInt32`) if necessary.
- [numberOfItems](numberofitems.md): The number of descriptors in the receiver’s descriptor list.
- [typeCodeValue](typecodevalue.md): The contents of the receiver as a type, coercing to `typeType` if necessary.

# stringValue (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The contents of the receiver as a Unicode text string, coercing to `typeUnicodeText` if necessary.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * stringValue;
```

<a id="Discussion"></a>

## Discussion

The contents of the descriptor, as a string, or `nil` if an error occurs.

## See Also

### Getting Information About a Descriptor

- [aeDesc](aedesc.md): The `AEDesc` structure encapsulated by the receiver, if it has one.
- [booleanValue](booleanvalue.md): The contents of the receiver as a Boolean value, coercing (to `typeBoolean`) if necessary.
- [coerceToDescriptorType:](coerce%28todescriptortype_%29.md): Returns a descriptor obtained by coercing the receiver to the specified type.
- [data](data.md): The receiver’s data.
- [descriptorType](descriptortype.md): The descriptor type of the receiver.
- [enumCodeValue](enumcodevalue.md): The contents of the receiver as an enumeration type, coercing to `typeEnumerated` if necessary.
- [int32Value](int32value.md): The contents of the receiver as an integer, coercing (to `typeSInt32`) if necessary.
- [numberOfItems](numberofitems.md): The number of descriptors in the receiver’s descriptor list.
- [typeCodeValue](typecodevalue.md): The contents of the receiver as a type, coercing to `typeType` if necessary.
