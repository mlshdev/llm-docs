> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreai/ndarraydescriptor/hasdynamicshape

# hasDynamicShape

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A Boolean value that indicates whether the shape has any dynamic dimensions.

## Declaration

```swift
var hasDynamicShape: Bool { get }
```

## See Also

### Inspecting descriptor properties

- [shape](shape.md): The length of each dimension of the array.
- [scalarType](scalartype.md): The scalar type of the array.
- [rank](rank.md): The number of dimensions in the array.
- [interleaveLayout](interleavelayout.md): Returns the interleaved layout of this ndArray, or `nil` if there is no interleave.
