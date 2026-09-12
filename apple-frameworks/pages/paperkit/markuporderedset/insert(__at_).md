> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markuporderedset/insert(_:at:)](https://developer.apple.com/documentation/paperkit/markuporderedset/insert(_:at:))

# insert(\_:at:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Inserts a new member at the specified index, if the set doesn’t already contain it.

## Declaration

```swift
@discardableResult mutating func insert(_ item: MarkupOrderedSet.Element, at index: Int) -> (inserted: Bool, index: Int)
```

## Parameters

- `item`: The element to insert.
- `index`: The index to insert at.

<a id="return-value"></a>

## Return Value

A pair (`inserted`, `index`), where `inserted` is a Boolean value indicating whether the operation added a new element, and `index` is the index of item in the resulting set. If `inserted` is false, then the returned `index` may be different from the index requested.

## See Also

### Adding elements

- [append(\_:)](append%28__%29.md): Appends a new member to the end of the set, if the set doesn’t already contain it.
- [append(contentsOf:)](append%28contentsof_%29.md): Appends the contents of a sequence to the end of the set, excluding elements that are already members.
- [updateOrAppend(\_:)](updateorappend%28__%29.md): Adds the given element to the set unconditionally, either appending it to the set, or replacing an existing value if one with the same id is present.
