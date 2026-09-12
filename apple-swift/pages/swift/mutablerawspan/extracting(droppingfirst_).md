> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mutablerawspan/extracting(droppingfirst:)](https://developer.apple.com/documentation/swift/mutablerawspan/extracting(droppingfirst:))

# extracting(droppingFirst:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Returns a span over all but the given number of initial bytes.

## Declaration

```swift
mutating func extracting(droppingFirst k: Int) -> MutableRawSpan
```

## Parameters

- `k`: The number of bytes to drop from the beginning of the span. `k` must be greater than or equal to zero.

<a id="return-value"></a>

## Return Value

A span starting after the specified number of bytes.

<a id="discussion"></a>

## Discussion

If the number of bytes to drop exceeds the number of bytes in the span, the result is an empty span.

The returned span represents a mutation of this span.

The returned span’s first item is always at offset 0; unlike buffer slices, extracted spans do not share their indices with the span from which they are extracted.

> **Complexity**

> O(1)
