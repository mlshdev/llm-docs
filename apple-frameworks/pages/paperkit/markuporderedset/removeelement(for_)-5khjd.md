> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markuporderedset/removeelement(for:)-5khjd](https://developer.apple.com/documentation/paperkit/markuporderedset/removeelement(for:)-5khjd)

# removeElement(for:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Removes the associated element for the given id from the set.

## Declaration

```swift
@discardableResult mutating func removeElement(for id: MarkupOrderedSet.ElementID) -> MarkupOrderedSet.Element?
```

## Parameters

- `id`: The id of the element to remove.

<a id="return-value"></a>

## Return Value

The associated element for `id` if the set contains `id`; otherwise, `nil`.

## See Also

### Removing elements

- [remove(\_:)](remove%28__%29.md): Removes the given element from the set.
- [remove(at:)](remove%28at_%29.md): Removes and returns the element at the specified position.
- [removeAll(where:)](removeall%28where_%29.md): Removes all the elements that satisfy the given predicate.
- [removeElement(for:)](removeelement%28for_%29-4pqof.md): Removes the associated element for the given id from the set.
- [removeStroke(for:)](removestroke%28for_%29.md): Removes the associated stroke for the given id from the set.
