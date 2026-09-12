> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markuporderedset/remove(at:)](https://developer.apple.com/documentation/paperkit/markuporderedset/remove(at:))

# remove(at:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Removes and returns the element at the specified position.

## Declaration

```swift
@discardableResult mutating func remove(at index: Int) -> MarkupOrderedSet.Element
```

## Parameters

- `index`: The position of the element to remove. `index` must be a valid index of the collection that is not equal to the collection’s end index.

<a id="return-value"></a>

## Return Value

The removed element.

<a id="discussion"></a>

## Discussion

The operation moves all elements following the specified position to close the resulting gap.

## See Also

### Removing elements

- [remove(\_:)](remove%28__%29.md): Removes the given element from the set.
- [removeAll(where:)](removeall%28where_%29.md): Removes all the elements that satisfy the given predicate.
- [removeElement(for:)](removeelement%28for_%29-4pqof.md): Removes the associated element for the given id from the set.
- [removeElement(for:)](removeelement%28for_%29-5khjd.md): Removes the associated element for the given id from the set.
- [removeStroke(for:)](removestroke%28for_%29.md): Removes the associated stroke for the given id from the set.
