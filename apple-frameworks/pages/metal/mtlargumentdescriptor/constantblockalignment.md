> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentdescriptor/constantblockalignment](https://developer.apple.com/documentation/metal/mtlargumentdescriptor/constantblockalignment)

# constantBlockAlignment (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The alignment of the constant block.

## Declaration

```swift
var constantBlockAlignment: Int { get set }
```

<a id="discussion"></a>

## Discussion

If set, this property forces the constant block to be aligned to the specified value. It should be set on the first constant only, and is valid only if a corresponding explicit `alignas` specifier is applied to the constant in the Metal shader language.

## See Also

### Setting the descriptor’s properties

- [dataType](datatype.md): The data type of the argument.
- [index](index.md): The index ID of the argument.
- [access](access.md): The access permissions of the argument.
- [arrayLength](arraylength.md): The length of an array argument.
- [textureType](texturetype.md): The texture type of a texture argument.

# constantBlockAlignment (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The alignment of the constant block.

## Declaration

```objectivec
@property (nonatomic) NSUInteger constantBlockAlignment;
```

<a id="discussion"></a>

## Discussion

If set, this property forces the constant block to be aligned to the specified value. It should be set on the first constant only, and is valid only if a corresponding explicit `alignas` specifier is applied to the constant in the Metal shader language.

## See Also

### Setting the descriptor’s properties

- [dataType](datatype.md): The data type of the argument.
- [index](index.md): The index ID of the argument.
- [access](access.md): The access permissions of the argument.
- [arrayLength](arraylength.md): The length of an array argument.
- [textureType](texturetype.md): The texture type of a texture argument.
