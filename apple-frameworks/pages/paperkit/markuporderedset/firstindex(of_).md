> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markuporderedset/firstindex(of:)](https://developer.apple.com/documentation/paperkit/markuporderedset/firstindex(of:))

# firstIndex(of:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Returns the index of the given element in the set, or `nil` if the element is not a member of the set.

## Declaration

```swift
func firstIndex(of element: MarkupOrderedSet.Element) -> Int?
```

<a id="discussion"></a>

## Discussion

`MarkupOrderedSet` members are always unique, so the first index of an element is always the same as its last index.

## See Also

### Finding elements

- [contains(\_:)](contains%28__%29.md): Returns a Boolean value that indicates whether the given element exists in the set.
