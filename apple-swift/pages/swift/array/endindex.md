> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/endindex](https://developer.apple.com/documentation/swift/array/endindex)

# endIndex

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The array’s “past the end” position—that is, the position one greater than the last valid subscript argument.

## Declaration

```swift
var endIndex: Int { get }
```

<a id="discussion"></a>

## Discussion

When you need a range that includes the last element of an array, use the half-open range operator (`..<`) with `endIndex`. The `..<` operator creates a range that doesn’t include the upper bound, so it’s always safe to use with `endIndex`. For example:

```swift
let numbers = [10, 20, 30, 40, 50]
if let i = numbers.firstIndex(of: 30) {
    print(numbers[i ..< numbers.endIndex])
}
// Prints "[30, 40, 50]"
```

If the array is empty, `endIndex` is equal to `startIndex`.

## See Also

### Manipulating Indices

- [startIndex](startindex.md): The position of the first element in a nonempty array.
- [index(after:)](index%28after_%29.md): Returns the position immediately after the given index.
- [formIndex(after:)](formindex%28after_%29.md): Replaces the given index with its successor.
- [index(before:)](index%28before_%29.md): Returns the position immediately before the given index.
- [formIndex(before:)](formindex%28before_%29.md): Replaces the given index with its predecessor.
- [index(\_:offsetBy:)](index%28__offsetby_%29.md): Returns an index that is the specified distance from the given index.
- [formIndex(\_:offsetBy:)](formindex%28__offsetby_%29.md): Offsets the given index by the specified distance.
- [index(\_:offsetBy:limitedBy:)](index%28__offsetby_limitedby_%29.md): Returns an index that is the specified distance from the given index, unless that distance is beyond a given limiting index.
- [formIndex(\_:offsetBy:limitedBy:)](formindex%28__offsetby_limitedby_%29.md): Offsets the given index by the specified distance, or so that it equals the given limiting index.
- [distance(from:to:)](distance%28from_to_%29.md): Returns the distance between two indices.
