> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnns_graph_shape_t/shape

# shape (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An array of unsigned-integer elements that specify the size of the shape.

## Declaration

```swift
var shape: UnsafeMutablePointer<UInt64>?
```

## See Also

### Specifying a shape’s properties

- [rank](rank.md): The rank of the shape.

# shape (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An array of unsigned-integer elements that specify the size of the shape.

## Declaration

```objectivec
uint64_t * shape;
```

## See Also

### Specifying a shape’s properties

- [rank](rank.md): The rank of the shape.
