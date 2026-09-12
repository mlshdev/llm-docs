> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncmapsequence/max()](https://developer.apple.com/documentation/swift/asyncmapsequence/max())

# max()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the maximum element in an asynchronous sequence of comparable elements.

## Declaration

```swift
@warn_unqualified_access func max() async rethrows -> Self.Element?
```

<a id="return-value"></a>

## Return Value

The sequence’s maximum element. If the sequence has no elements, returns `nil`.

<a id="discussion"></a>

## Discussion

In this example, an asynchronous sequence called `Counter` produces `Int` values from `1` to `10`. The `max()` method returns the max value of the sequence.

```swift
let max = await Counter(howHigh: 10)
    .max()
print(max ?? "none")
// Prints "10"
```
