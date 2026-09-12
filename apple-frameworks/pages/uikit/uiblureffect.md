> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiblureffect](https://developer.apple.com/documentation/uikit/uiblureffect)

# UIBlurEffect (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An object that applies a blurring effect to the content layered behind a visual effect view.

## Declaration

```swift
@MainActor class UIBlurEffect
```

<a id="overview"></a>

## Overview

Views that you add to the [contentView](uivisualeffectview/contentview.md) of a visual effect view aren’t affected by the blur effect.

## Topics

### Creating a blur effect

- [init(style:)](uiblureffect/init%28style_%29.md): Creates a blur effect with the designated style.

### Constants

- [UIBlurEffect.Style](uiblureffect/style.md): Blur styles available for blur effect objects.

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

### Visual effects

- [UIVisualEffect](uivisualeffect.md): An initializer for visual effect views and blur and vibrancy effect objects.
- [UIVisualEffectView](uivisualeffectview.md): An object that implements some complex visual effects.
- [UIVibrancyEffect](uivibrancyeffect.md): An object that amplifies and adjusts the color of the content layered behind a visual effect view.
- [UIColorEffect](uicoloreffect.md): A visual effect that applies a solid color background.

# UIBlurEffect (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An object that applies a blurring effect to the content layered behind a visual effect view.

## Declaration

```objectivec
@interface UIBlurEffect : UIVisualEffect
```

<a id="overview"></a>

## Overview

Views that you add to the [contentView](uivisualeffectview/contentview.md) of a visual effect view aren’t affected by the blur effect.

## Topics

### Creating a blur effect

- [effectWithStyle:](uiblureffect/init%28style_%29.md): Creates a blur effect with the designated style.

### Constants

- [UIBlurEffectStyle](uiblureffect/style.md): Blur styles available for blur effect objects.

## Relationships

### Inherits From

- [UIVisualEffect](uivisualeffect.md)

## See Also

### Visual effects

- [UIVisualEffect](uivisualeffect.md): An initializer for visual effect views and blur and vibrancy effect objects.
- [UIVisualEffectView](uivisualeffectview.md): An object that implements some complex visual effects.
- [UIVibrancyEffect](uivibrancyeffect.md): An object that amplifies and adjusts the color of the content layered behind a visual effect view.
- [UIColorEffect](uicoloreffect.md): A visual effect that applies a solid color background.
