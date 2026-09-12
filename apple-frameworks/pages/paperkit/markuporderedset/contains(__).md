> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markuporderedset/contains(_:)](https://developer.apple.com/documentation/paperkit/markuporderedset/contains(_:))

# contains(\_:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Returns a Boolean value that indicates whether the given element exists in the set.

## Declaration

```swift
func contains(_ element: MarkupOrderedSet.Element) -> Bool
```

## Parameters

- `element`: An element to look for in the set.

<a id="return-value"></a>

## Return Value

`true` if member exists in the set; otherwise, `false`.

## See Also

### Finding elements

- [firstIndex(of:)](firstindex%28of_%29.md): Returns the index of the given element in the set, or `nil` if the element is not a member of the set.
