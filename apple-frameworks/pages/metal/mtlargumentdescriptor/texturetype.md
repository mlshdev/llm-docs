> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentdescriptor/texturetype](https://developer.apple.com/documentation/metal/mtlargumentdescriptor/texturetype)

# textureType (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The texture type of a texture argument.

## Declaration

```swift
var textureType: MTLTextureType { get set }
```

<a id="discussion"></a>

## Discussion

For a nontexture argument, this value is ignored.

## See Also

### Setting the descriptor’s properties

- [dataType](datatype.md): The data type of the argument.
- [index](index.md): The index ID of the argument.
- [access](access.md): The access permissions of the argument.
- [arrayLength](arraylength.md): The length of an array argument.
- [constantBlockAlignment](constantblockalignment.md): The alignment of the constant block.

# textureType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The texture type of a texture argument.

## Declaration

```objectivec
@property (nonatomic) MTLTextureType textureType;
```

<a id="discussion"></a>

## Discussion

For a nontexture argument, this value is ignored.

## See Also

### Setting the descriptor’s properties

- [dataType](datatype.md): The data type of the argument.
- [index](index.md): The index ID of the argument.
- [access](access.md): The access permissions of the argument.
- [arrayLength](arraylength.md): The length of an array argument.
- [constantBlockAlignment](constantblockalignment.md): The alignment of the constant block.
