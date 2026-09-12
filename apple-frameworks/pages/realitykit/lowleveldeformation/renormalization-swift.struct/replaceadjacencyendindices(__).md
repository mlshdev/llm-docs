> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveldeformation/renormalization-swift.struct/replaceadjacencyendindices(_:)](https://developer.apple.com/documentation/realitykit/lowleveldeformation/renormalization-swift.struct/replaceadjacencyendindices(_:))

# replaceAdjacencyEndIndices(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Fills the per-vertex adjacency end-indices buffer using the given closure.

## Declaration

```swift
func replaceAdjacencyEndIndices<R>(_ body: @_lifetime(0: copy 0) (inout MutableRawSpan) -> R) throws -> R where R : ~Copyable
```

## Parameters

- `body`: A closure that receives a mutable span over the buffer.

<a id="return-value"></a>

## Return Value

The value returned by `body`.

<a id="discussion"></a>

## Discussion

After the closure returns, the framework validates every entry against the adjacency count. An out-of-range entry causes a throw.

> **Throws**

> If any entry is greater than `renormalizing.adjacenciesCount`.
