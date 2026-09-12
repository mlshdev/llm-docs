> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/vectorarithmetic/interpolate(towards:amount:)](https://developer.apple.com/documentation/swiftui/vectorarithmetic/interpolate(towards:amount:))

# interpolate(towards:amount:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Interpolates this value with `other` by the specified `amount`.

## Declaration

```swift
@export(implementation) mutating func interpolate(towards other: Self, amount: Double)
```

<a id="discussion"></a>

## Discussion

This is equivalent to `self = self + (other - self) * amount`.

## See Also

### Manipulating values

- [magnitudeSquared](magnitudesquared.md): Returns the dot-product of this vector arithmetic instance with itself.
- [scale(by:)](scale%28by_%29.md): Multiplies each component of this value by the given value.
- [scaled(by:)](scaled%28by_%29.md): Returns a value with each component of this value multiplied by the given value.
- [interpolated(towards:amount:)](interpolated%28towards_amount_%29.md): Returns this value interpolated with `other` by the specified `amount`.
