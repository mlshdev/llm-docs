> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/scene/anchorcollection/startindex](https://developer.apple.com/documentation/realitykit/scene/anchorcollection/startindex)

# startIndex

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The position of the first element in a nonempty collection.

## Declaration

```swift
@MainActor @preconcurrency var startIndex: Int { get }
```

<a id="discussion"></a>

## Discussion

If the collection is empty, `startIndex` is equal to `endIndex`.

## See Also

### Manipulating indices

- [Scene.AnchorCollection.Index](index.md): A type that represents a position in the collection.
- [endIndex](endindex.md): The position one greater than the last valid subscript argument.
- [index(after:)](index%28after_%29.md): Returns the position immediately after the given index.
