> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markuporderedset/removeall(where:)](https://developer.apple.com/documentation/paperkit/markuporderedset/removeall(where:))

# removeAll(where:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Removes all the elements that satisfy the given predicate.

## Declaration

```swift
mutating func removeAll(where shouldBeRemoved: (MarkupOrderedSet.Element) throws -> Bool) rethrows
```

## Parameters

- `shouldBeRemoved`: A closure that takes an element of the set as its argument and returns a Boolean value indicating whether to remove the element from the set.

## See Also

### Removing elements

- [remove(\_:)](remove%28__%29.md): Removes the given element from the set.
- [remove(at:)](remove%28at_%29.md): Removes and returns the element at the specified position.
- [removeElement(for:)](removeelement%28for_%29-4pqof.md): Removes the associated element for the given id from the set.
- [removeElement(for:)](removeelement%28for_%29-5khjd.md): Removes the associated element for the given id from the set.
- [removeStroke(for:)](removestroke%28for_%29.md): Removes the associated stroke for the given id from the set.
