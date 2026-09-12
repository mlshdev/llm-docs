> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markuporderedset/updateorappend(_:)](https://developer.apple.com/documentation/paperkit/markuporderedset/updateorappend(_:))

# updateOrAppend(\_:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Adds the given element to the set unconditionally, either appending it to the set, or replacing an existing value if one with the same id is present.

## Declaration

```swift
@discardableResult mutating func updateOrAppend(_ item: MarkupOrderedSet.Element) -> MarkupOrderedSet.Element?
```

## Parameters

- `item`: The value to append or replace.

<a id="return-value"></a>

## Return Value

The element this operation replaced, or `nil` if the operation appended the value to the end of the collection.

## See Also

### Adding elements

- [append(\_:)](append%28__%29.md): Appends a new member to the end of the set, if the set doesn’t already contain it.
- [append(contentsOf:)](append%28contentsof_%29.md): Appends the contents of a sequence to the end of the set, excluding elements that are already members.
- [insert(\_:at:)](insert%28__at_%29.md): Inserts a new member at the specified index, if the set doesn’t already contain it.
