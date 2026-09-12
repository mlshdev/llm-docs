> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncsequence/dropfirst(_:)](https://developer.apple.com/documentation/swift/asyncsequence/dropfirst(_:))

# dropFirst(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Omits a specified number of elements from the base asynchronous sequence, then passes through all remaining elements.

## Declaration

```swift
func dropFirst(_ count: Int = 1) -> AsyncDropFirstSequence<Self>
```

## Parameters

- `count`: The number of elements to drop from the beginning of the sequence. `count` must be greater than or equal to zero.

<a id="return-value"></a>

## Return Value

An asynchronous sequence that drops the first `count` elements from the base sequence.

<a id="discussion"></a>

## Discussion

Use `dropFirst(_:)` when you want to drop the first *n* elements from the base sequence and pass through the remaining elements.

In this example, an asynchronous sequence called `Counter` produces `Int` values from `1` to `10`. The `dropFirst(_:)` method causes the modified sequence to ignore the values `1` through `3`, and instead emit `4` through `10`:

```swift
for await number in Counter(howHigh: 10).dropFirst(3) {
    print(number, terminator: " ")
}
// Prints "4 5 6 7 8 9 10 "
```

If the number of elements to drop exceeds the number of elements in the sequence, the result is an empty sequence.

## See Also

### Excluding Elements

- [AsyncDropFirstSequence](../asyncdropfirstsequence.md): An asynchronous sequence which omits a specified number of elements from the base asynchronous sequence, then passes through all remaining elements.
- [drop(while:)](drop%28while_%29-9sp3b.md): Omits elements from the base asynchronous sequence until a given closure returns false, after which it passes through all remaining elements.
- [AsyncDropWhileSequence](../asyncdropwhilesequence.md): An asynchronous sequence which omits elements from the base sequence until a given closure returns false, after which it passes through all remaining elements.
- [drop(while:)](drop%28while_%29-67kgo.md): Omits elements from the base sequence until a given error-throwing closure returns false, after which it passes through all remaining elements.
- [AsyncThrowingDropWhileSequence](../asyncthrowingdropwhilesequence.md): An asynchronous sequence which omits elements from the base sequence until a given error-throwing closure returns false, after which it passes through all remaining elements.
- [filter(\_:)](filter%28__%29-435af.md): Creates an asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given predicate.
- [AsyncFilterSequence](../asyncfiltersequence.md): An asynchronous sequence that contains, in order, the elements of the base sequence that satisfy a given predicate.
- [filter(\_:)](filter%28__%29-2cc0l.md): Creates an asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given error-throwing predicate.
- [AsyncThrowingFilterSequence](../asyncthrowingfiltersequence.md): An asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given error-throwing predicate.
