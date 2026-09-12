> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncprefixwhilesequence/min()](https://developer.apple.com/documentation/swift/asyncprefixwhilesequence/min())

# min()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the minimum element in an asynchronous sequence of comparable elements.

## Declaration

```swift
@warn_unqualified_access func min() async rethrows -> Self.Element?
```

<a id="return-value"></a>

## Return Value

The sequence’s minimum element. If the sequence has no elements, returns `nil`.

<a id="discussion"></a>

## Discussion

In this example, an asynchronous sequence called `Counter` produces `Int` values from `1` to `10`. The `min()` method returns the minimum value of the sequence.

```swift
let min = await Counter(howHigh: 10)
    .min()
print(min ?? "none")
// Prints "1"
```
