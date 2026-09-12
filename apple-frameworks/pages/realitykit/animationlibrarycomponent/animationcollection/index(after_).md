> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationlibrarycomponent/animationcollection/index(after:)](https://developer.apple.com/documentation/realitykit/animationlibrarycomponent/animationcollection/index(after:))

# index(after:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Returns the position in the collection that follows an index.

## Declaration

```swift
func index(after i: AnimationLibraryComponent.AnimationCollection.Index) -> AnimationLibraryComponent.AnimationCollection.Index
```

## Parameters

- `i`: A valid index of the collection. `i` must be less than `endIndex`.

## See Also

### Manipulating indices

- [startIndex](startindex.md): An index to the first animation in the collection.
- [endIndex](endindex.md): An index to the last animation in the collection.
- [formIndex(after:)](formindex%28after_%29.md): Replaces the index with its successor.
- [AnimationLibraryComponent.AnimationCollection.Index](index.md): An object that represents a position in the collection.
