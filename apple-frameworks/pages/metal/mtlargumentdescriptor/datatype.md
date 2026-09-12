> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentdescriptor/datatype](https://developer.apple.com/documentation/metal/mtlargumentdescriptor/datatype)

# dataType (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The data type of the argument.

## Declaration

```swift
var dataType: MTLDataType { get set }
```

<a id="discussion"></a>

## Discussion

For a constant data argument, this value needs to match the binary format of the data stored in the buffer for that argument. For other parameter types, such as textures or samplers, specify the appropriate constant. See [MTLDataType](../mtldatatype.md) for possible values.

## See Also

### Setting the descriptor’s properties

- [index](index.md): The index ID of the argument.
- [access](access.md): The access permissions of the argument.
- [arrayLength](arraylength.md): The length of an array argument.
- [constantBlockAlignment](constantblockalignment.md): The alignment of the constant block.
- [textureType](texturetype.md): The texture type of a texture argument.

# dataType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The data type of the argument.

## Declaration

```objectivec
@property (nonatomic) MTLDataType dataType;
```

<a id="discussion"></a>

## Discussion

For a constant data argument, this value needs to match the binary format of the data stored in the buffer for that argument. For other parameter types, such as textures or samplers, specify the appropriate constant. See [MTLDataType](../mtldatatype.md) for possible values.

## See Also

### Setting the descriptor’s properties

- [index](index.md): The index ID of the argument.
- [access](access.md): The access permissions of the argument.
- [arrayLength](arraylength.md): The length of an array argument.
- [constantBlockAlignment](constantblockalignment.md): The alignment of the constant block.
- [textureType](texturetype.md): The texture type of a texture argument.
