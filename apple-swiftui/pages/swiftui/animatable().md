> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/animatable()](https://developer.apple.com/documentation/swiftui/animatable())

# Animatable()

**Framework:** SwiftUI  
**Kind:** Macro  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A member and extension macro that, when applied to a struct, class or enum declaration, synthesizes the conformance to `Animatable` and its requirement, the `animatableData` property using the existing animatable properties of the type this macro is applied to.

## Declaration

```swift
@attached(extension, conformances: Animatable) @attached(member, names: named(animatableData)) macro Animatable()
```

<a id="overview"></a>

## Overview

```swift
@Animatable
struct CoolShape: Shape {
    var width: CGFloat
    var angle: Angle
    @AnimatableIgnored var isOpaque: Bool

    // ...
}
```

In the above code, `animatableData` will be synthesized using `width` and `angle` properties of `CoolShape` structure.  Since changes to `isOpaque` property cannot be animated, it is annotated with `@AnimatableIgnored`.

> **Note**

> The `@Animatable` macro will not generate an `Animatable` conformance if the type already conforms to `Animatable`.

> **Note**

> It is only possible to attach `@Animatable` to types with properties.

> **Note**

> `@Animatable` will not include computed properties in the synthesized `animatableData`.

## See Also

### Animating data

- [AnimatableIgnored()](animatableignored%28%29.md): An accessor macro that marks a property of a type to be excluded from the `animatableData` synthesis:
- [animatableData](animatable/animatabledata-6nydg.md): The data to animate.
- [AnimatableData](animatable/animatabledata-swift.associatedtype.md): The type defining the data to animate.
