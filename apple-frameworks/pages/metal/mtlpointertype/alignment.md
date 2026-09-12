> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpointertype/alignment](https://developer.apple.com/documentation/metal/mtlpointertype/alignment)

# alignment (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The required byte alignment in memory for the element data.

## Declaration

```swift
var alignment: Int { get }
```

## See Also

### Describing the pointer elements

- [dataSize](datasize.md): The size, in bytes, of the element data.
- [elementType](elementtype.md): The data type of the element data.
- [access](access.md): The function’s read/write access to the element data.
- [elementIsArgumentBuffer](elementisargumentbuffer.md): A Boolean value that indicates whether the element is an argument buffer.

# alignment (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The required byte alignment in memory for the element data.

## Declaration

```objectivec
@property (readonly) NSUInteger alignment;
```

## See Also

### Describing the pointer elements

- [dataSize](datasize.md): The size, in bytes, of the element data.
- [elementType](elementtype.md): The data type of the element data.
- [access](access.md): The function’s read/write access to the element data.
- [elementIsArgumentBuffer](elementisargumentbuffer.md): A Boolean value that indicates whether the element is an argument buffer.
