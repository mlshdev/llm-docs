> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/animatable/animatabledata-swift.associatedtype](https://developer.apple.com/documentation/swiftui/animatable/animatabledata-swift.associatedtype)

# AnimatableData

**Framework:** SwiftUI  
**Kind:** Associated Type  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The type defining the data to animate.

## Declaration

```swift
associatedtype AnimatableData : VectorArithmetic
```

## See Also

### Animating data

- [Animatable()](../animatable%28%29.md): A member and extension macro that, when applied to a struct, class or enum declaration, synthesizes the conformance to `Animatable` and its requirement, the `animatableData` property using the existing animatable properties of the type this macro is applied to.
- [AnimatableIgnored()](../animatableignored%28%29.md): An accessor macro that marks a property of a type to be excluded from the `animatableData` synthesis:
- [animatableData](animatabledata-6nydg.md): The data to animate.
