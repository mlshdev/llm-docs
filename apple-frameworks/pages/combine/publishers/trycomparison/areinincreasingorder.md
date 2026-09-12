> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/trycomparison/areinincreasingorder](https://developer.apple.com/documentation/combine/publishers/trycomparison/areinincreasingorder)

# areInIncreasingOrder

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A closure that receives two elements and returns true if they are in increasing order.

## Declaration

```swift
let areInIncreasingOrder: (Upstream.Output, Upstream.Output) throws -> Bool
```

## See Also

### Inspecting publisher properties

- [upstream](upstream.md): The publisher from which this publisher receives its elements.
