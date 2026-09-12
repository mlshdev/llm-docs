> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentdescriptor/arraylength](https://developer.apple.com/documentation/metal/mtlargumentdescriptor/arraylength)

# arrayLength (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The length of an array argument.

## Declaration

```swift
var arrayLength: Int { get set }
```

<a id="discussion"></a>

## Discussion

For a nonarray argument, this value needs to be `0`.

## See Also

### Setting the descriptor’s properties

- [dataType](datatype.md): The data type of the argument.
- [index](index.md): The index ID of the argument.
- [access](access.md): The access permissions of the argument.
- [constantBlockAlignment](constantblockalignment.md): The alignment of the constant block.
- [textureType](texturetype.md): The texture type of a texture argument.

# arrayLength (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The length of an array argument.

## Declaration

```objectivec
@property (nonatomic) NSUInteger arrayLength;
```

<a id="discussion"></a>

## Discussion

For a nonarray argument, this value needs to be `0`.

## See Also

### Setting the descriptor’s properties

- [dataType](datatype.md): The data type of the argument.
- [index](index.md): The index ID of the argument.
- [access](access.md): The access permissions of the argument.
- [constantBlockAlignment](constantblockalignment.md): The alignment of the constant block.
- [textureType](texturetype.md): The texture type of a texture argument.
