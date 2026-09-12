> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartproxy/value(aty:as:)](https://developer.apple.com/documentation/charts/chartproxy/value(aty:as:))

# value(atY:as:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the data value at the given y position, or `nil` if the position does not correspond to a valid Y value.

## Declaration

```swift
func value<P>(atY position: CGFloat, as: P.Type = P.self) -> P? where P : Plottable
```

## Parameters

- `position`: The position at which to obtain the y data value. It should be relative to the plot.

<a id="return-value"></a>

## Return Value

The data value at the given position.
