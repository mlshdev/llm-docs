> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/animatable/animatabledata-6nydg](https://developer.apple.com/documentation/swiftui/animatable/animatabledata-6nydg)

# animatableData

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The data to animate.

## Declaration

```swift
var animatableData: Self.AnimatableData { get set }
```

<a id="discussion"></a>

## Discussion

SwiftUI reads this property to capture the current vector representation of the animatable state, and writes it back on each animation frame with an interpolated value. The default implementation returns [EmptyAnimatableData](../emptyanimatabledata.md), meaning nothing is animated.

Use the [Animatable()](../animatable%28%29.md) macro to synthesize this property automatically. Implement it by hand only when you need custom interpolation logic such as clamping, normalization, or mapping to a derived value.

## Default Implementations

### Animatable Implementations

- [animatableData](animatabledata-1gesb.md): Conforms when `AnimatableData` is `EmptyAnimatableData`. The data to animate.
- [animatableData](animatabledata-bqi8.md): Conforms when `Self` conforms to `VectorArithmetic`. The data to animate.

## See Also

### Animating data

- [Animatable()](../animatable%28%29.md): A member and extension macro that, when applied to a struct, class or enum declaration, synthesizes the conformance to `Animatable` and its requirement, the `animatableData` property using the existing animatable properties of the type this macro is applied to.
- [AnimatableIgnored()](../animatableignored%28%29.md): An accessor macro that marks a property of a type to be excluded from the `animatableData` synthesis:
- [AnimatableData](animatabledata-swift.associatedtype.md): The type defining the data to animate.
