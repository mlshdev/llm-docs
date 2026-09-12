> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/emptyanimatabledata](https://developer.apple.com/documentation/swiftui/emptyanimatabledata)

# EmptyAnimatableData

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An empty type for animatable data.

## Declaration

```swift
@frozen struct EmptyAnimatableData
```

<a id="overview"></a>

## Overview

This type is suitable for use as the `animatableData` property of types that do not have any animatable properties.

## Topics

### Creating the data

- [init()](emptyanimatabledata/init%28%29.md)

### Manipulating the data

- [magnitudeSquared](emptyanimatabledata/magnitudesquared.md): The dot-product of this animatable data instance with itself.

## Relationships

### Conforms To

- [AdditiveArithmetic](https://developer.apple.com/documentation/swift/additivearithmetic)
- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VectorArithmetic](vectorarithmetic.md)

## See Also

### Making data animatable

- [Animatable](animatable.md): A type that describes how to animate a property of a view.
- [AnimatableValues](animatablevalues.md)
- [AnimatablePair](animatablepair.md): A pair of animatable values, which is itself animatable.
- [VectorArithmetic](vectorarithmetic.md): A type that can serve as the animatable data of an animatable type.
