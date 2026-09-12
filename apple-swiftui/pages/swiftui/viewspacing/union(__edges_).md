> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/viewspacing/union(_:edges:)](https://developer.apple.com/documentation/swiftui/viewspacing/union(_:edges:))

# union(\_:edges:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Gets a new value that merges the spacing preferences of another spacing instance with this instance for a specified set of edges.

## Declaration

```swift
func union(_ other: ViewSpacing, edges: Edge.Set = .all) -> ViewSpacing
```

## Parameters

- `other`: Another spacing preferences instance to merge with this one.
- `edges`: The edges to merge. Edges that you don’t specify are unchanged after the method completes.

<a id="return-value"></a>

## Return Value

A new view spacing preferences instance with the merged values.

<a id="discussion"></a>

## Discussion

This method behaves like [formUnion(\_:edges:)](formunion%28__edges_%29.md), except that it creates a copy of the original spacing preferences instance before merging, leaving the original instance unmodified.

## See Also

### Merging spacing instances

- [formUnion(\_:edges:)](formunion%28__edges_%29.md): Merges the spacing preferences of another spacing instance with this instance for a specified set of edges.
