> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncsequence/filter(_:)-435af](https://developer.apple.com/documentation/swift/asyncsequence/filter(_:)-435af)

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

### Excluding Elements

- [dropFirst(\_:)](dropfirst%28__%29.md): Omits a specified number of elements from the base asynchronous sequence, then passes through all remaining elements.
- [AsyncDropFirstSequence](../asyncdropfirstsequence.md): An asynchronous sequence which omits a specified number of elements from the base asynchronous sequence, then passes through all remaining elements.
- [drop(while:)](drop%28while_%29-9sp3b.md): Omits elements from the base asynchronous sequence until a given closure returns false, after which it passes through all remaining elements.
- [AsyncDropWhileSequence](../asyncdropwhilesequence.md): An asynchronous sequence which omits elements from the base sequence until a given closure returns false, after which it passes through all remaining elements.
- [drop(while:)](drop%28while_%29-67kgo.md): Omits elements from the base sequence until a given error-throwing closure returns false, after which it passes through all remaining elements.
- [AsyncThrowingDropWhileSequence](../asyncthrowingdropwhilesequence.md): An asynchronous sequence which omits elements from the base sequence until a given error-throwing closure returns false, after which it passes through all remaining elements.
- [AsyncFilterSequence](../asyncfiltersequence.md): An asynchronous sequence that contains, in order, the elements of the base sequence that satisfy a given predicate.
- [filter(\_:)](filter%28__%29-2cc0l.md): Creates an asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given error-throwing predicate.
- [AsyncThrowingFilterSequence](../asyncthrowingfiltersequence.md): An asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given error-throwing predicate.
