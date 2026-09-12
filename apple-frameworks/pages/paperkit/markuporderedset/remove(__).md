> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markuporderedset/remove(_:)](https://developer.apple.com/documentation/paperkit/markuporderedset/remove(_:))

# remove(\_:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Removes the given element from the set.

## Declaration

```swift
@discardableResult mutating func remove(_ member: MarkupOrderedSet.Element) -> MarkupOrderedSet.Element?
```

## Parameters

- `member`: The element of the set to remove.

<a id="return-value"></a>

## Return Value

The element equal to `member` if `member` is contained in the set; otherwise, `nil`.

## See Also

### Removing elements

- [remove(at:)](remove%28at_%29.md): Removes and returns the element at the specified position.
- [removeAll(where:)](removeall%28where_%29.md): Removes all the elements that satisfy the given predicate.
- [removeElement(for:)](removeelement%28for_%29-4pqof.md): Removes the associated element for the given id from the set.
- [removeElement(for:)](removeelement%28for_%29-5khjd.md): Removes the associated element for the given id from the set.
- [removeStroke(for:)](removestroke%28for_%29.md): Removes the associated stroke for the given id from the set.
