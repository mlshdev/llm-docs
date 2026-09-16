> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/anyiterator/min()

# min()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the minimum element in the sequence.

## Declaration

```swift
@warn_unqualified_access func min() -> Self.Element?
```

<a id="return-value"></a>

## Return Value

The sequence’s minimum element. If the sequence has no elements, returns `nil`.

<a id="discussion"></a>

## Discussion

This example finds the smallest value in an array of height measurements.

```swift
let heights = [67.5, 65.7, 64.3, 61.1, 58.5, 60.3, 64.9]
let lowestHeight = heights.min()
print(lowestHeight)
// Prints "Optional(58.5)"
```

> **Complexity**

> O(*n*), where *n* is the length of the sequence.
