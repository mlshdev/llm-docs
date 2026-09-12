> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns_graph_compile_options_t/init(data:size:)](https://developer.apple.com/documentation/accelerate/bnns_graph_compile_options_t/init(data:size:))

# init(data:size:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a compilation options structure from the specified opaque compilation options object.

## Declaration

```swift
init(data: UnsafeMutableRawPointer?, size: Int)
```

## Parameters

- `data`: A pointer to opaque compilation options object.
- `size`: The size, in bytes, of the opaque compilation options object.

## See Also

### Initializing an options structure

- [init()](init%28%29.md): Creates an empty compilation options structure.
