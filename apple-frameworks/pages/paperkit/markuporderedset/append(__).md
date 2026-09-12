> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markuporderedset/append(_:)](https://developer.apple.com/documentation/paperkit/markuporderedset/append(_:))

# append(\_:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Appends a new member to the end of the set, if the set doesn’t already contain it.

## Declaration

```swift
@discardableResult mutating func append(_ item: MarkupOrderedSet.Element) -> (inserted: Bool, index: Int)
```

## Parameters

- `item`: The element to add to the set.

<a id="return-value"></a>

## Return Value

A pair (`inserted`, `index`), where inserted is a Boolean value indicating whether the operation added a new element, and `index` is the index of `item` in the resulting set.

## See Also

### Adding elements

- [append(contentsOf:)](append%28contentsof_%29.md): Appends the contents of a sequence to the end of the set, excluding elements that are already members.
- [insert(\_:at:)](insert%28__at_%29.md): Inserts a new member at the specified index, if the set doesn’t already contain it.
- [updateOrAppend(\_:)](updateorappend%28__%29.md): Adds the given element to the set unconditionally, either appending it to the set, or replacing an existing value if one with the same id is present.
