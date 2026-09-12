> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/childcollection/index(after:)](https://developer.apple.com/documentation/realitykit/entity/childcollection/index(after:))

# index(after:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Returns the position immediately after the given index. (See `Collection.index`.)

## Declaration

```swift
@MainActor @preconcurrency func index(after i: Int) -> Int
```

## See Also

### Manipulating indices

- [startIndex](startindex.md): The position of the first element in a nonempty collection. (See `Collection.startIndex`.)
- [endIndex](endindex.md): TThe collection’s “past the end” position—that is, the position one greater than the last valid subscript argument. (See `Collection.endIndex`.)
