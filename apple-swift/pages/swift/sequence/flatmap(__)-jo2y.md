> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/sequence/flatmap(_:)-jo2y](https://developer.apple.com/documentation/swift/sequence/flatmap(_:)-jo2y)

# flatMap(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array containing the concatenated results of calling the given transformation with each element of this sequence.

## Declaration

```swift
func flatMap<SegmentOfResult>(_ transform: (Self.Element) throws -> SegmentOfResult) rethrows -> [SegmentOfResult.Element] where SegmentOfResult : Sequence
```

## Parameters

- `transform`: A closure that accepts an element of this sequence as its argument and returns a sequence or collection.

<a id="return-value"></a>

## Return Value

The resulting flattened array.

<a id="discussion"></a>

## Discussion

Use this method to receive a single-level collection when your transformation produces a sequence or collection for each element.

In this example, note the difference in the result of using `map` and `flatMap` with a transformation that returns an array.

```swift
let numbers = [1, 2, 3, 4]

let mapped = numbers.map { Array(repeating: $0, count: $0) }
// [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4]]

let flatMapped = numbers.flatMap { Array(repeating: $0, count: $0) }
// [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
```

In fact, `s.flatMap(transform)`  is equivalent to `Array(s.map(transform).joined())`.

> **Complexity**

> O(*m* \+ *n*), where *n* is the length of this sequence and *m* is the length of the result.

## See Also

### Transforming a Sequence

- [map(\_:)](map%28__%29.md): Returns an array containing the results of mapping the given closure over the sequence’s elements.
- [compactMap(\_:)](compactmap%28__%29.md): Returns an array containing the non-`nil` results of calling the given transformation with each element of this sequence.
- [reduce(\_:\_:)](reduce%28____%29.md): Returns the result of combining the elements of the sequence using the given closure.
- [reduce(into:\_:)](reduce%28into___%29.md): Returns the result of combining the elements of the sequence using the given closure.
- [lazy](lazy.md): A sequence containing the same elements as this sequence, but on which some operations, such as `map` and `filter`, are implemented lazily.
- [flatMap(\_:)](flatmap%28__%29-383uq.md): Deprecated.
