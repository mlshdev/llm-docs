> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartproxy/angle(at:)](https://developer.apple.com/documentation/charts/chartproxy/angle(at:))

# angle(at:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns the angle relative to the plot area center, where the 12 o’clock position is interpreted as zero degrees, increasing clockwise.

## Declaration

```swift
func angle(at position: CGPoint) -> Angle
```

## Parameters

- `position`: The position at which to obtain the data value. It should be relative to the plot.

<a id="return-value"></a>

## Return Value

The angle relative to the plot area center.
