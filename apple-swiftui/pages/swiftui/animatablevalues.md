> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/animatablevalues](https://developer.apple.com/documentation/swiftui/animatablevalues)

# AnimatableValues

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
@frozen struct AnimatableValues<each Value> where repeat each Value : VectorArithmetic
```

## Topics

### Initializers

- [init(\_:)](animatablevalues/init%28__%29.md): Creates a tuple of animatable values.

### Instance Properties

- [magnitudeSquared](animatablevalues/magnitudesquared.md): The dot-product of the tuple of animatable values with itself.
- [value](animatablevalues/value.md): The tuple of values.

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
- [AnimatablePair](animatablepair.md): A pair of animatable values, which is itself animatable.
- [VectorArithmetic](vectorarithmetic.md): A type that can serve as the animatable data of an animatable type.
- [EmptyAnimatableData](emptyanimatabledata.md): An empty type for animatable data.
