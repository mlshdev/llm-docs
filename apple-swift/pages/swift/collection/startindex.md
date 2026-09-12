> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collection/startindex](https://developer.apple.com/documentation/swift/collection/startindex)

# startIndex

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The position of the first element in a nonempty collection.

## Declaration

```swift
var startIndex: Self.Index { get }
```

<a id="discussion"></a>

## Discussion

If the collection is empty, `startIndex` is equal to `endIndex`.

## See Also

### Manipulating Indices

- [endIndex](endindex.md): The collection’s “past the end” position—that is, the position one greater than the last valid subscript argument.
- [indices](indices-9kkbf.md): The indices that are valid for subscripting the collection, in ascending order.
- [index(after:)](index%28after_%29.md): Returns the position immediately after the given index.
- [formIndex(\_:offsetBy:)](formindex%28__offsetby_%29-393pr.md): Offsets the given index by the specified distance.
- [formIndex(\_:offsetBy:limitedBy:)](formindex%28__offsetby_limitedby_%29-6jwra.md): Offsets the given index by the specified distance, or so that it equals the given limiting index.
