> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/vectorarithmetic](https://developer.apple.com/documentation/swiftui/vectorarithmetic)

# VectorArithmetic

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that can serve as the animatable data of an animatable type.

## Declaration

```swift
protocol VectorArithmetic : AdditiveArithmetic
```

<a id="overview"></a>

## Overview

`VectorArithmetic` extends the `AdditiveArithmetic` protocol with scalar multiplication and a way to query the vector magnitude of the value. Use this type as the `animatableData` associated type of a type that conforms to the [Animatable](animatable.md) protocol.

## Topics

### Manipulating values

- [magnitudeSquared](vectorarithmetic/magnitudesquared.md): Returns the dot-product of this vector arithmetic instance with itself.
- [scale(by:)](vectorarithmetic/scale%28by_%29.md): Multiplies each component of this value by the given value.
- [scaled(by:)](vectorarithmetic/scaled%28by_%29.md): Returns a value with each component of this value multiplied by the given value.
- [interpolate(towards:amount:)](vectorarithmetic/interpolate%28towards_amount_%29.md): Interpolates this value with `other` by the specified `amount`.
- [interpolated(towards:amount:)](vectorarithmetic/interpolated%28towards_amount_%29.md): Returns this value interpolated with `other` by the specified `amount`.

## Relationships

### Inherits From

- [AdditiveArithmetic](https://developer.apple.com/documentation/swift/additivearithmetic)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

### Conforming Types

- [AnimatablePair](animatablepair.md)
- [AnimatableValues](animatablevalues.md)
- [EmptyAnimatableData](emptyanimatabledata.md)

## See Also

### Making data animatable

- [Animatable](animatable.md): A type that describes how to animate a property of a view.
- [AnimatableValues](animatablevalues.md)
- [AnimatablePair](animatablepair.md): A pair of animatable values, which is itself animatable.
- [EmptyAnimatableData](emptyanimatabledata.md): An empty type for animatable data.
