> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markuporderedset/append(contentsof:)](https://developer.apple.com/documentation/paperkit/markuporderedset/append(contentsof:))

# append(contentsOf:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Appends the contents of a sequence to the end of the set, excluding elements that are already members.

## Declaration

```swift
mutating func append(contentsOf elements: some Sequence<any Markup>)
```

## Parameters

- `elements`: A finite sequence of elements to append.

## See Also

### Adding elements

- [append(\_:)](append%28__%29.md): Appends a new member to the end of the set, if the set doesn’t already contain it.
- [insert(\_:at:)](insert%28__at_%29.md): Inserts a new member at the specified index, if the set doesn’t already contain it.
- [updateOrAppend(\_:)](updateorappend%28__%29.md): Adds the given element to the set unconditionally, either appending it to the set, or replacing an existing value if one with the same id is present.
