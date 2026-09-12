> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collection/formindex(_:offsetby:limitedby:)-6jwra](https://developer.apple.com/documentation/swift/collection/formindex(_:offsetby:limitedby:)-6jwra)

# formIndex(\_:offsetBy:limitedBy:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Offsets the given index by the specified distance, or so that it equals the given limiting index.

## Declaration

```swift
func formIndex(_ i: inout Self.Index, offsetBy distance: Int, limitedBy limit: Self.Index) -> Bool
```

## Parameters

- `i`: A valid index of the collection.
- `distance`: The distance to offset `i`. `distance` must not be negative unless the collection conforms to the `BidirectionalCollection` protocol.
- `limit`: A valid index of the collection to use as a limit. If `distance > 0`, a limit that is less than `i` has no effect. Likewise, if `distance < 0`, a limit that is greater than `i` has no effect.

<a id="return-value"></a>

## Return Value

`true` if `i` has been offset by exactly `distance` steps without going beyond `limit`; otherwise, `false`. When the return value is `false`, the value of `i` is equal to `limit`.

<a id="discussion"></a>

## Discussion

The value passed as `distance` must not offset `i` beyond the bounds of the collection, unless the index passed as `limit` prevents offsetting beyond those bounds.

> **Complexity**

> O(1) if the collection conforms to `RandomAccessCollection`; otherwise, O(*k*), where *k* is the absolute value of `distance`.

## See Also

### Manipulating Indices

- [startIndex](startindex.md): The position of the first element in a nonempty collection.
- [endIndex](endindex.md): The collection’s “past the end” position—that is, the position one greater than the last valid subscript argument.
- [indices](indices-9kkbf.md): The indices that are valid for subscripting the collection, in ascending order.
- [index(after:)](index%28after_%29.md): Returns the position immediately after the given index.
- [formIndex(\_:offsetBy:)](formindex%28__offsetby_%29-393pr.md): Offsets the given index by the specified distance.
