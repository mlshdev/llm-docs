> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnns_graph_shape_t/init(rank:shape:)

# init(rank:shape:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a shape structure with the specified rank and dimensions.

## Declaration

```swift
init(rank: Int, shape: UnsafeMutablePointer<UInt64>?)
```

## Parameters

- `rank`: The rank of the tensor and number of elements in array shape.
- `shape`: Array with a count of [rank](rank.md) that contains the sizes of each dimension.

## See Also

### Initializing a graph shape

- [init()](init%28%29.md): Creates an empty shape structure.
