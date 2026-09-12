> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/animatablepair](https://developer.apple.com/documentation/swiftui/animatablepair)

# AnimatablePair

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A pair of animatable values, which is itself animatable.

## Declaration

```swift
@frozen struct AnimatablePair<First, Second> where First : VectorArithmetic, Second : VectorArithmetic
```

## Topics

### Creating an animatable pair

- [init(\_:\_:)](animatablepair/init%28____%29.md): Creates an animated pair with the provided values.

### Getting the constituent animations

- [first](animatablepair/first.md): The first value.
- [second](animatablepair/second.md): The second value.

### Manipulating values

- [magnitudeSquared](animatablepair/magnitudesquared.md): The dot-product of this animated pair with itself.

## Relationships

### Conforms To

- [AdditiveArithmetic](https://developer.apple.com/documentation/swift/additivearithmetic)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VectorArithmetic](vectorarithmetic.md)

## See Also

### Making data animatable

- [Animatable](animatable.md): A type that describes how to animate a property of a view.
- [AnimatableValues](animatablevalues.md)
- [VectorArithmetic](vectorarithmetic.md): A type that can serve as the animatable data of an animatable type.
- [EmptyAnimatableData](emptyanimatabledata.md): An empty type for animatable data.
