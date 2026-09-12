> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncsequence/filter(_:)-2cc0l](https://developer.apple.com/documentation/swift/asyncsequence/filter(_:)-2cc0l)

# filter(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given error-throwing predicate.

## Declaration

```swift
@preconcurrency func filter(_ isIncluded: @escaping @Sendable (Self.Element) async throws -> Bool) -> AsyncThrowingFilterSequence<Self>
```

## Parameters

- `isIncluded`: An error-throwing closure that takes an element of the asynchronous sequence as its argument and returns a Boolean value that indicates whether to include the element in the filtered sequence.

<a id="return-value"></a>

## Return Value

An asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given predicate. If the predicate throws an error, the sequence contains only values produced prior to the error.

<a id="discussion"></a>

## Discussion

In this example, an asynchronous sequence called `Counter` produces `Int` values from `1` to `10`. The `filter(_:)` method returns `true` for even values and `false` for odd values, thereby filtering out the odd values, but also throws an error for values divisible by 5:

```swift
do {
    let stream = Counter(howHigh: 10)
        .filter {
            if $0 % 5 == 0 {
                throw MyError()
            }
            return $0 % 2 == 0
        }
    for try await number in stream {
        print(number, terminator: " ")
    }
} catch {
    print("Error: \(error)")
}
// Prints "2 4 Error: MyError() "
```

## See Also

### Excluding Elements

- [dropFirst(\_:)](dropfirst%28__%29.md): Omits a specified number of elements from the base asynchronous sequence, then passes through all remaining elements.
- [AsyncDropFirstSequence](../asyncdropfirstsequence.md): An asynchronous sequence which omits a specified number of elements from the base asynchronous sequence, then passes through all remaining elements.
- [drop(while:)](drop%28while_%29-9sp3b.md): Omits elements from the base asynchronous sequence until a given closure returns false, after which it passes through all remaining elements.
- [AsyncDropWhileSequence](../asyncdropwhilesequence.md): An asynchronous sequence which omits elements from the base sequence until a given closure returns false, after which it passes through all remaining elements.
- [drop(while:)](drop%28while_%29-67kgo.md): Omits elements from the base sequence until a given error-throwing closure returns false, after which it passes through all remaining elements.
- [AsyncThrowingDropWhileSequence](../asyncthrowingdropwhilesequence.md): An asynchronous sequence which omits elements from the base sequence until a given error-throwing closure returns false, after which it passes through all remaining elements.
- [filter(\_:)](filter%28__%29-435af.md): Creates an asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given predicate.
- [AsyncFilterSequence](../asyncfiltersequence.md): An asynchronous sequence that contains, in order, the elements of the base sequence that satisfy a given predicate.
- [AsyncThrowingFilterSequence](../asyncthrowingfiltersequence.md): An asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given error-throwing predicate.
