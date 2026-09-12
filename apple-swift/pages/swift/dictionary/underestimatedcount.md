> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/underestimatedcount](https://developer.apple.com/documentation/swift/dictionary/underestimatedcount)

# underestimatedCount

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A value less than or equal to the number of elements in the collection.

## Declaration

```swift
var underestimatedCount: Int { get }
```

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(1) if the collection conforms to `RandomAccessCollection`; otherwise, O(*n*), where *n* is the length of the collection.

## See Also

### Iterating over Keys and Values

- [forEach(\_:)](foreach%28__%29.md): Calls the given closure on each element in the sequence in the same order as a `for`-`in` loop.
- [enumerated()](enumerated%28%29.md): Returns a sequence of pairs (*n*, *x*), where *n* represents a consecutive integer starting at zero and *x* represents an element of the sequence.
- [lazy](lazy.md): A sequence containing the same elements as this sequence, but on which some operations, such as `map` and `filter`, are implemented lazily.
- [makeIterator()](makeiterator%28%29.md): Conforms when `Key` conforms to `Hashable`. Returns an iterator over the dictionary’s key-value pairs.
