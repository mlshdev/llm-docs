> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/throwingtaskgroup/filter(_:)](https://developer.apple.com/documentation/swift/throwingtaskgroup/filter(_:))

# filter(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given predicate.

## Declaration

```swift
@preconcurrency func filter(_ isIncluded: @escaping @Sendable (Self.Element) async -> Bool) -> AsyncFilterSequence<Self>
```

## Parameters

- `isIncluded`: A closure that takes an element of the asynchronous sequence as its argument and returns a Boolean value that indicates whether to include the element in the filtered sequence.

<a id="return-value"></a>

## Return Value

An asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given predicate.

<a id="discussion"></a>

## Discussion

In this example, an asynchronous sequence called `Counter` produces `Int` values from `1` to `10`. The `filter(_:)` method returns `true` for even values and `false` for odd values, thereby filtering out the odd values:

```swift
let stream = Counter(howHigh: 10)
    .filter { $0 % 2 == 0 }
for await number in stream {
    print(number, terminator: " ")
}
// Prints "2 4 6 8 10 "
```

## See Also

### Accessing an Asynchronous Sequence of Results

- [makeAsyncIterator()](makeasynciterator%28%29.md): Conforms when `ChildTaskResult` conforms to `Sendable` and `Failure` conforms to `Error`. Creates the asynchronous iterator that produces elements of this asynchronous sequence.
- [allSatisfy(\_:)](allsatisfy%28__%29.md): Returns a Boolean value that indicates whether all elements produced by the asynchronous sequence satisfy the given predicate.
- [compactMap(\_:)](compactmap%28__%29-944nh.md): Creates an asynchronous sequence that maps an error-throwing closure over the base sequence’s elements, omitting results that don’t return a value.
- [compactMap(\_:)](compactmap%28__%29-7mgi5.md): Creates an asynchronous sequence that maps the given closure over the asynchronous sequence’s elements, omitting results that don’t return a value.
- [contains(\_:)](contains%28__%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value that indicates whether the asynchronous sequence contains the given element.
- [contains(where:)](contains%28where_%29.md): Returns a Boolean value that indicates whether the asynchronous sequence contains an element that satisfies the given predicate.
- [drop(while:)](drop%28while_%29.md): Omits elements from the base asynchronous sequence until a given closure returns false, after which it passes through all remaining elements.
- [dropFirst(\_:)](dropfirst%28__%29.md): Omits a specified number of elements from the base asynchronous sequence, then passes through all remaining elements.
- [first(where:)](first%28where_%29.md): Returns the first element of the sequence that satisfies the given predicate.
- [map(\_:)](map%28__%29-58nrv.md): Creates an asynchronous sequence that maps the given error-throwing closure over the asynchronous sequence’s elements.
- [map(\_:)](map%28__%29-4a4ju.md): Creates an asynchronous sequence that maps the given closure over the asynchronous sequence’s elements.
- [max()](max%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the maximum element in an asynchronous sequence of comparable elements.
- [max(by:)](max%28by_%29.md): Returns the maximum element in the asynchronous sequence, using the given predicate as the comparison between elements.
- [min()](min%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the minimum element in an asynchronous sequence of comparable elements.
- [min(by:)](min%28by_%29.md): Returns the minimum element in the asynchronous sequence, using the given predicate as the comparison between elements.
