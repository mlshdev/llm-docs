> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiglasseffect](https://developer.apple.com/documentation/uikit/uiglasseffect)

# UIGlassEffect (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+

A visual effect that renders a glass material.

## Declaration

```swift
@MainActor class UIGlassEffect
```

## Topics

### Initializers

- [init(style:)](uiglasseffect/init%28style_%29.md): Creates a glass effect with the specified style.

### Instance Properties

- [isInteractive](uiglasseffect/isinteractive.md): Enables interactive behavior for the glass effect.
- [tintColor](uiglasseffect/tintcolor.md): A tint color applied to the glass.

### Enumerations

- [UIGlassEffect.Style](uiglasseffect/style.md)

## Relationships

### Inherits From

- [UIVisualEffect](uivisualeffect.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Liquid Glass effects

- [UIGlassContainerEffect](uiglasscontainereffect.md): A `UIGlassContainerEffect` renders multiple glass elements into a combined effect.

# UIGlassEffect (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+

A visual effect that renders a glass material.

## Declaration

```objectivec
@interface UIGlassEffect : UIVisualEffect
```

## Topics

### Instance Properties

- [interactive](uiglasseffect/isinteractive.md): Enables interactive behavior for the glass effect.
- [tintColor](uiglasseffect/tintcolor.md): A tint color applied to the glass.

### Type Methods

- [effectWithStyle:](uiglasseffect/init%28style_%29.md): Creates a glass effect with the specified style.

## Relationships

### Inherits From

- [UIVisualEffect](uivisualeffect.md)

## See Also

### Liquid Glass effects

- [UIGlassContainerEffect](uiglasscontainereffect.md): A `UIGlassContainerEffect` renders multiple glass elements into a combined effect.
