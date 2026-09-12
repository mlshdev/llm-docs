> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/lazy](https://developer.apple.com/documentation/swift/dictionary/lazy)

# lazy

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A sequence containing the same elements as this sequence, but on which some operations, such as `map` and `filter`, are implemented lazily.

## Declaration

```swift
var lazy: LazySequence<Self> { get }
```

## See Also

### Iterating over Keys and Values

- [forEach(\_:)](foreach%28__%29.md): Calls the given closure on each element in the sequence in the same order as a `for`-`in` loop.
- [enumerated()](enumerated%28%29.md): Returns a sequence of pairs (*n*, *x*), where *n* represents a consecutive integer starting at zero and *x* represents an element of the sequence.
- [makeIterator()](makeiterator%28%29.md): Conforms when `Key` conforms to `Hashable`. Returns an iterator over the dictionary’s key-value pairs.
- [underestimatedCount](underestimatedcount.md): A value less than or equal to the number of elements in the collection.
