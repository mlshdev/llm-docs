> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/data](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/data)

# data (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The receiver’s data.

## Declaration

```swift
var data: Data { get }
```

<a id="Discussion"></a>

## Discussion

An instance of `NSData` containing the receiver’s data, or `nil` if an error occurs.

## See Also

### Getting Information About a Descriptor

- [aeDesc](aedesc.md): The `AEDesc` structure encapsulated by the receiver, if it has one.
- [booleanValue](booleanvalue.md): The contents of the receiver as a Boolean value, coercing (to `typeBoolean`) if necessary.
- [coerce(toDescriptorType:)](coerce%28todescriptortype_%29.md): Returns a descriptor obtained by coercing the receiver to the specified type.
- [descriptorType](descriptortype.md): The descriptor type of the receiver.
- [enumCodeValue](enumcodevalue.md): The contents of the receiver as an enumeration type, coercing to `typeEnumerated` if necessary.
- [int32Value](int32value.md): The contents of the receiver as an integer, coercing (to `typeSInt32`) if necessary.
- [numberOfItems](numberofitems.md): The number of descriptors in the receiver’s descriptor list.
- [stringValue](stringvalue.md): The contents of the receiver as a Unicode text string, coercing to `typeUnicodeText` if necessary.
- [typeCodeValue](typecodevalue.md): The contents of the receiver as a type, coercing to `typeType` if necessary.

# data (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The receiver’s data.

## Declaration

```objectivec
@property (copy, readonly) NSData * data;
```

<a id="Discussion"></a>

## Discussion

An instance of `NSData` containing the receiver’s data, or `nil` if an error occurs.

## See Also

### Getting Information About a Descriptor

- [aeDesc](aedesc.md): The `AEDesc` structure encapsulated by the receiver, if it has one.
- [booleanValue](booleanvalue.md): The contents of the receiver as a Boolean value, coercing (to `typeBoolean`) if necessary.
- [coerceToDescriptorType:](coerce%28todescriptortype_%29.md): Returns a descriptor obtained by coercing the receiver to the specified type.
- [descriptorType](descriptortype.md): The descriptor type of the receiver.
- [enumCodeValue](enumcodevalue.md): The contents of the receiver as an enumeration type, coercing to `typeEnumerated` if necessary.
- [int32Value](int32value.md): The contents of the receiver as an integer, coercing (to `typeSInt32`) if necessary.
- [numberOfItems](numberofitems.md): The number of descriptors in the receiver’s descriptor list.
- [stringValue](stringvalue.md): The contents of the receiver as a Unicode text string, coercing to `typeUnicodeText` if necessary.
- [typeCodeValue](typecodevalue.md): The contents of the receiver as a type, coercing to `typeType` if necessary.
