> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/scene/anchorcollection/endindex](https://developer.apple.com/documentation/realitykit/scene/anchorcollection/endindex)

# endIndex

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The position one greater than the last valid subscript argument.

## Declaration

```swift
@MainActor @preconcurrency var endIndex: Int { get }
```

<a id="discussion"></a>

## Discussion

When you need a range that includes the last element of an array, use the half-open range operator (`..<`) with [endIndex](endindex.md). The `..<` operator creates a range that doesn’t include the upper bound, so it’s safe to use with [endIndex](endindex.md).

If the array is empty, [endIndex](endindex.md) is equal to [startIndex](startindex.md).

## See Also

### Manipulating indices

- [Scene.AnchorCollection.Index](index.md): A type that represents a position in the collection.
- [startIndex](startindex.md): The position of the first element in a nonempty collection.
- [index(after:)](index%28after_%29.md): Returns the position immediately after the given index.
