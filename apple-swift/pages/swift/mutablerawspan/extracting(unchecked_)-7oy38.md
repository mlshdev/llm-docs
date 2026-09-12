> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mutablerawspan/extracting(unchecked:)-7oy38](https://developer.apple.com/documentation/swift/mutablerawspan/extracting(unchecked:)-7oy38)

# extracting(unchecked:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Constructs a new span over the bytes within the supplied range of positions within this span.

## Declaration

```swift
mutating func extracting(unchecked bounds: Range<Int>) -> MutableRawSpan
```

## Parameters

- `bounds`: A valid range of positions. Every position in this range must be within the bounds of this `MutableRawSpan`.

<a id="return-value"></a>

## Return Value

A `MutableRawSpan` over the bytes within `bounds`.

<a id="discussion"></a>

## Discussion

The returned span represents a mutation of this span.

The returned span’s first item is always at offset 0; unlike buffer slices, extracted spans do not share their indices with the span from which they are extracted.

This function does not validate `bounds`; this is an unsafe operation.

> **Complexity**

> O(1)
