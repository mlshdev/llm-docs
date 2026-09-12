> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartproxy/value(at:as:)](https://developer.apple.com/documentation/charts/chartproxy/value(at:as:))

# value(at:as:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the data values at the given position, or `nil` if the position does not correspond to a valid Y value.

## Declaration

```swift
func value<X, Y>(at position: CGPoint, as: (X, Y).Type = (X, Y).self) -> (X, Y)? where X : Plottable, Y : Plottable
```

## Parameters

- `position`: The position at which to obtain the data values. It should be relative to the plot.

<a id="return-value"></a>

## Return Value

A tuple of the x and y data values at the given position.
