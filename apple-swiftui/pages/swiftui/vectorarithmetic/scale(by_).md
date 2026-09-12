> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/vectorarithmetic/scale(by:)](https://developer.apple.com/documentation/swiftui/vectorarithmetic/scale(by:))

# scale(by:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Multiplies each component of this value by the given value.

## Declaration

```swift
mutating func scale(by rhs: Double)
```

## Default Implementations

### VectorArithmetic Implementations

- [scale(by:)](scale%28by_%29-1ojq4.md): Conforms when `Self` conforms to `Scalable3D`. Multiplies each component of this value by the given value.

## See Also

### Manipulating values

- [magnitudeSquared](magnitudesquared.md): Returns the dot-product of this vector arithmetic instance with itself.
- [scaled(by:)](scaled%28by_%29.md): Returns a value with each component of this value multiplied by the given value.
- [interpolate(towards:amount:)](interpolate%28towards_amount_%29.md): Interpolates this value with `other` by the specified `amount`.
- [interpolated(towards:amount:)](interpolated%28towards_amount_%29.md): Returns this value interpolated with `other` by the specified `amount`.
