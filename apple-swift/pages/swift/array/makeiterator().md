> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/makeiterator()](https://developer.apple.com/documentation/swift/array/makeiterator())

# makeIterator()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an iterator over the elements of the collection.

## Declaration

```swift
func makeIterator() -> IndexingIterator<Self>
```

## See Also

### Iterating Over an Array’s Elements

- [forEach(\_:)](foreach%28__%29.md): Calls the given closure on each element in the sequence in the same order as a `for`-`in` loop.
- [enumerated()](enumerated%28%29.md): Returns a sequence of pairs (*n*, *x*), where *n* represents a consecutive integer starting at zero and *x* represents an element of the sequence.
- [underestimatedCount](underestimatedcount.md): A value less than or equal to the number of elements in the collection.
