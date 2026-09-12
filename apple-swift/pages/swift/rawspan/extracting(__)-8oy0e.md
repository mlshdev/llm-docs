> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rawspan/extracting(_:)-8oy0e](https://developer.apple.com/documentation/swift/rawspan/extracting(_:)-8oy0e)

# extracting(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Constructs a new span over the bytes within the supplied range of positions within this span.

## Declaration

```swift
func extracting(_ bounds: some RangeExpression<Int>) -> RawSpan
```

## Parameters

- `bounds`: A valid range of positions. Every position in this range must be within the bounds of this `RawSpan`.

<a id="return-value"></a>

## Return Value

A `RawSpan` over the bytes within `bounds`.

<a id="discussion"></a>

## Discussion

The returned span’s first byte is always at offset 0; unlike buffer slices, extracted spans do not share their indices with the span from which they are extracted.

> **Complexity**

> O(1)
