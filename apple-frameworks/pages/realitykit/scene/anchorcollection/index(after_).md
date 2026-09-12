> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/scene/anchorcollection/index(after:)](https://developer.apple.com/documentation/realitykit/scene/anchorcollection/index(after:))

# index(after:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Returns the position immediately after the given index.

## Declaration

```swift
@MainActor @preconcurrency func index(after i: Int) -> Int
```

## Parameters

- `i`: A valid index of the collection. Use a value less than [endIndex](endindex.md).

<a id="return-value"></a>

## Return Value

The index value immediately after i.

## See Also

### Manipulating indices

- [Scene.AnchorCollection.Index](index.md): A type that represents a position in the collection.
- [startIndex](startindex.md): The position of the first element in a nonempty collection.
- [endIndex](endindex.md): The position one greater than the last valid subscript argument.
