> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/span/extracting(unchecked:)-46y0h](https://developer.apple.com/documentation/swift/span/extracting(unchecked:)-46y0h)

# extracting(unchecked:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Constructs a new span over the items within the supplied range of indices within this span.

## Declaration

```swift
func extracting(unchecked bounds: ClosedRange<Span<Element>.Index>) -> Span<Element>
```

## Parameters

- `bounds`: A valid range of indices. Every index in this range must be within the bounds of this `Span`.

<a id="return-value"></a>

## Return Value

A `Span` over the items within `bounds`.

<a id="discussion"></a>

## Discussion

The returned span’s first item is always at offset 0; unlike buffer slices, extracted spans do not share their indices with the span from which they are extracted.

This function does not validate `bounds`; this is an unsafe operation.

> **Complexity**

> O(1)
