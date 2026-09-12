> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rawspan/extracting(droppinglast:)](https://developer.apple.com/documentation/swift/rawspan/extracting(droppinglast:))

# extracting(droppingLast:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Returns a span over all but the given number of trailing bytes.

## Declaration

```swift
func extracting(droppingLast k: Int) -> RawSpan
```

## Parameters

- `k`: The number of bytes to drop off the end of the span. `k` must be greater than or equal to zero.

<a id="return-value"></a>

## Return Value

A span leaving off the specified number of bytes at the end.

<a id="discussion"></a>

## Discussion

If the number of bytes to drop exceeds the number of bytes in the span, the result is an empty span.

The returned span’s first byte is always at offset 0; unlike buffer slices, extracted spans do not share their indices with the span from which they are extracted.

> **Complexity**

> O(1)
