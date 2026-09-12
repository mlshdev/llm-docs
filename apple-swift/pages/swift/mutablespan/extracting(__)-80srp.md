> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mutablespan/extracting(_:)-80srp](https://developer.apple.com/documentation/swift/mutablespan/extracting(_:)-80srp)

# extracting(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Constructs a new span over all the items of this span.

## Declaration

```swift
mutating func extracting(_: UnboundedRange) -> MutableSpan<Element>
```

<a id="return-value"></a>

## Return Value

A `MutableSpan` over all the items of this span.

<a id="discussion"></a>

## Discussion

The returned span represents a mutation of this span.

The returned span’s first item is always at offset 0; unlike buffer slices, extracted spans do not share their indices with the span from which they are extracted.

> **Complexity**

> O(1)
