> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiglasscontainereffect](https://developer.apple.com/documentation/uikit/uiglasscontainereffect)

# UIGlassContainerEffect (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+

A `UIGlassContainerEffect` renders multiple glass elements into a combined effect.

## Declaration

```swift
@MainActor class UIGlassContainerEffect
```

<a id="overview"></a>

## Overview

When using `UIGlassContainerEffect` with a `UIVisualEffectView` you can add individual glass elements to the visual effect view’s contentView by nesting `UIVisualEffectView`‘s configured with `UIGlassEffect`. In that configuration, the glass container will render all glass elements in one combined view, behind the visual effect view’s `contentView`.

## Topics

### Instance Properties

- [spacing](uiglasscontainereffect/spacing.md): The spacing specifies the distance between elements at which they begin to merge.

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

- [UIGlassEffect](uiglasseffect.md): A visual effect that renders a glass material.

# UIGlassContainerEffect (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+

A `UIGlassContainerEffect` renders multiple glass elements into a combined effect.

## Declaration

```objectivec
@interface UIGlassContainerEffect : UIVisualEffect
```

<a id="overview"></a>

## Overview

When using `UIGlassContainerEffect` with a `UIVisualEffectView` you can add individual glass elements to the visual effect view’s contentView by nesting `UIVisualEffectView`‘s configured with `UIGlassEffect`. In that configuration, the glass container will render all glass elements in one combined view, behind the visual effect view’s `contentView`.

## Topics

### Instance Properties

- [spacing](uiglasscontainereffect/spacing.md): The spacing specifies the distance between elements at which they begin to merge.

## Relationships

### Inherits From

- [UIVisualEffect](uivisualeffect.md)

## See Also

### Liquid Glass effects

- [UIGlassEffect](uiglasseffect.md): A visual effect that renders a glass material.
