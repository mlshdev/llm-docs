> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/vectorarithmetic/interpolated(towards:amount:)](https://developer.apple.com/documentation/swiftui/vectorarithmetic/interpolated(towards:amount:))

# interpolated(towards:amount:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns this value interpolated with `other` by the specified `amount`.

## Declaration

```swift
@export(implementation) func interpolated(towards other: Self, amount: Double) -> Self
```

<a id="discussion"></a>

## Discussion

This result is equivalent to `self + (other - self) * amount`.

## See Also

### Manipulating values

- [magnitudeSquared](magnitudesquared.md): Returns the dot-product of this vector arithmetic instance with itself.
- [scale(by:)](scale%28by_%29.md): Multiplies each component of this value by the given value.
- [scaled(by:)](scaled%28by_%29.md): Returns a value with each component of this value multiplied by the given value.
- [interpolate(towards:amount:)](interpolate%28towards_amount_%29.md): Interpolates this value with `other` by the specified `amount`.
