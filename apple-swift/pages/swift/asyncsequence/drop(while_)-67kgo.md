> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncsequence/drop(while:)-67kgo](https://developer.apple.com/documentation/swift/asyncsequence/drop(while:)-67kgo)

# drop(while:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Omits elements from the base sequence until a given error-throwing closure returns false, after which it passes through all remaining elements.

## Declaration

```swift
@preconcurrency func drop(while predicate: @escaping @Sendable (Self.Element) async throws -> Bool) -> AsyncThrowingDropWhileSequence<Self>
```

## Parameters

- `predicate`: An error-throwing closure that takes an element as a parameter and returns a Boolean value indicating whether to drop the element from the modified sequence.

<a id="return-value"></a>

## Return Value

An asynchronous sequence that skips over values until the provided closure returns `false` or throws an error.

<a id="discussion"></a>

## Discussion

Use `drop(while:)` to omit elements from an asynchronous sequence until the element received meets a condition you specify. If the closure you provide throws an error, the sequence produces no elements and throws the error instead.

In this example, an asynchronous sequence called `Counter` produces `Int` values from `1` to `10`. The predicate passed to the `drop(while:)` method throws an error if it encounters an even number, and otherwise returns `true` while it receives elements less than `5`. Because the predicate throws when it receives `2` from the base sequence, this example throws without ever printing anything.

```swift
do {
    let stream = Counter(howHigh: 10)
        .drop {
            if $0 % 2 == 0 {
                throw EvenError()
            }
            return $0 < 5
        }
    for try await number in stream {
        print(number)
    }
} catch {
    print(error)
}
// Prints "EvenError()"
```

After the predicate returns `false`, the sequence never executes it again, and from then on the sequence passes through elements from its underlying sequence. A predicate that throws an error also never executes again.

## See Also

### Excluding Elements

- [dropFirst(\_:)](dropfirst%28__%29.md): Omits a specified number of elements from the base asynchronous sequence, then passes through all remaining elements.
- [AsyncDropFirstSequence](../asyncdropfirstsequence.md): An asynchronous sequence which omits a specified number of elements from the base asynchronous sequence, then passes through all remaining elements.
- [drop(while:)](drop%28while_%29-9sp3b.md): Omits elements from the base asynchronous sequence until a given closure returns false, after which it passes through all remaining elements.
- [AsyncDropWhileSequence](../asyncdropwhilesequence.md): An asynchronous sequence which omits elements from the base sequence until a given closure returns false, after which it passes through all remaining elements.
- [AsyncThrowingDropWhileSequence](../asyncthrowingdropwhilesequence.md): An asynchronous sequence which omits elements from the base sequence until a given error-throwing closure returns false, after which it passes through all remaining elements.
- [filter(\_:)](filter%28__%29-435af.md): Creates an asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given predicate.
- [AsyncFilterSequence](../asyncfiltersequence.md): An asynchronous sequence that contains, in order, the elements of the base sequence that satisfy a given predicate.
- [filter(\_:)](filter%28__%29-2cc0l.md): Creates an asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given error-throwing predicate.
- [AsyncThrowingFilterSequence](../asyncthrowingfiltersequence.md): An asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given error-throwing predicate.
