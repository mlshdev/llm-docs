> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlarraytype/stride

# stride (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The stride between array elements, in bytes.

## Declaration

```swift
var stride: Int { get }
```

## See Also

### Describing the array elements

- [arrayLength](arraylength.md): The number of elements in the array.
- [elementType](elementtype.md): The data type of the array’s elements.
- [argumentIndexStride](argumentindexstride.md): The stride, in bytes, between argument indices.

# stride (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The stride between array elements, in bytes.

## Declaration

```objectivec
@property (readonly) NSUInteger stride;
```

## See Also

### Describing the array elements

- [arrayLength](arraylength.md): The number of elements in the array.
- [elementType](elementtype.md): The data type of the array’s elements.
- [argumentIndexStride](argumentindexstride.md): The stride, in bytes, between argument indices.
