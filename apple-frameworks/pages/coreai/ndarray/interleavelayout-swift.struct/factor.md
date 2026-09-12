> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/interleavelayout-swift.struct/factor](https://developer.apple.com/documentation/coreai/ndarray/interleavelayout-swift.struct/factor)

# factor

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The number of elements from the interleaved dimension stored contiguously per block. Adjacent elements within a block have stride 1 in memory.

## Declaration

```swift
var factor: Int { get }
```

## See Also

### Inspecting the layout

- [dimension](dimension.md): The index of the interleaved dimension.
