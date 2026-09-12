> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns_graph_t/init(data:size:)](https://developer.apple.com/documentation/accelerate/bnns_graph_t/init(data:size:))

# init(data:size:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a graph structure from the specified opaque graph object.

## Declaration

```swift
init(data: UnsafeMutableRawPointer?, size: Int)
```

## Parameters

- `data`: A pointer to opaque graph object.
- `size`: The size, in bytes, of the opaque graph object.

## See Also

### Initializing a graph

- [init()](init%28%29.md): Creates an empty graph structure.
