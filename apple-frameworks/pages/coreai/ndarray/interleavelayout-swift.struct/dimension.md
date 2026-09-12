> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/interleavelayout-swift.struct/dimension](https://developer.apple.com/documentation/coreai/ndarray/interleavelayout-swift.struct/dimension)

# dimension

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The index of the interleaved dimension.

## Declaration

```swift
var dimension: Int { get }
```

## See Also

### Inspecting the layout

- [factor](factor.md): The number of elements from the interleaved dimension stored contiguously per block. Adjacent elements within a block have stride 1 in memory.
