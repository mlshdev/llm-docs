> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/unitcurve/value(at:)](https://developer.apple.com/documentation/swiftui/unitcurve/value(at:))

# value(at:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns the output value (y component) of the curve at the given time.

## Declaration

```swift
func value(at progress: Double) -> Double
```

## Parameters

- `progress`: The input progress (x component). The provided value is clamped to the range \[0,1\].

<a id="return-value"></a>

## Return Value

The output value (y component) of the curve at the given progress.

## See Also

### Getting curve characteristics

- [velocity(at:)](velocity%28at_%29.md): Returns the rate of change (first derivative) of the output value of the curve at the given time.
