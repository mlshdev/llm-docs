> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uivibrancyeffect](https://developer.apple.com/documentation/uikit/uivibrancyeffect)

# UIVibrancyEffect (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

An object that amplifies and adjusts the color of the content layered behind a visual effect view.

## Declaration

```swift
@MainActor class UIVibrancyEffect
```

<a id="overview"></a>

## Overview

A vibrancy effect is intended to be used as a subview of or layered on top of a [UIVisualEffectView](uivisualeffectview.md) that has been configured with a [UIBlurEffect](uiblureffect.md). The use of a vibrancy effect can help the content placed inside the [contentView](uivisualeffectview/contentview.md) become more vivid.

The vibrancy effect is color-dependent. Any subviews that you add to the [contentView](uivisualeffectview/contentview.md) must implement the [tintColorDidChange()](uiview/tintcolordidchange%28%29.md) method and update themselves accordingly. [UIImageView](uiimageview.md) objects with images that have a rendering mode of [UIImage.RenderingMode.alwaysTemplate](uiimage/renderingmode-swift.enum/alwaystemplate.md) as well as [UILabel](uilabel.md) objects update automatically.

## Topics

### Creating a vibrancy effect

- [init(forBlurEffect:style:)](uivibrancyeffect/init%28forblureffect_style_%29.md): Creates a vibrancy effect with the specified blur and style values.
- [init(blurEffect:)](uivibrancyeffect/init%28blureffect_%29.md): Creates a vibrancy effect for a specific blur effect.
- [UIVibrancyEffectStyle](uivibrancyeffectstyle.md): Constants for the vibrancy styles.

### Deprecated

- [widgetPrimary()](uivibrancyeffect/widgetprimary%28%29.md): Deprecated. Creates a vibrancy effect suitable for use with certain supporting text and template images within a widget.
- [widgetSecondary()](uivibrancyeffect/widgetsecondary%28%29.md): Deprecated. Creates a vibrancy effect suitable for indicating the secondary importance or relevance of supporting text and template images within a widget.
- [widgetEffect(forVibrancyStyle:)](uivibrancyeffect/widgeteffect%28forvibrancystyle_%29.md): Deprecated. Creates a vibrancy effect for the specified style.
- [notificationCenter()](uivibrancyeffect/notificationcenter%28%29.md): Deprecated. Creates a vibrancy effect for use in Notification Center.

### Initializers

- [init(blurEffect:style:)](uivibrancyeffect/init%28blureffect_style_%29.md)
- [init(forBlurEffect:)](uivibrancyeffect/init%28forblureffect_%29.md)

### Default Implementations

- [UIVibrancyEffect Implementations](uivibrancyeffect/uivibrancyeffect-implementations.md)

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
- [UIBlurEffect](uiblureffect.md): An object that applies a blurring effect to the content layered behind a visual effect view.
- [UIColorEffect](uicoloreffect.md): A visual effect that applies a solid color background.

# UIVibrancyEffect (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

An object that amplifies and adjusts the color of the content layered behind a visual effect view.

## Declaration

```objectivec
@interface UIVibrancyEffect : UIVisualEffect
```

<a id="overview"></a>

## Overview

A vibrancy effect is intended to be used as a subview of or layered on top of a [UIVisualEffectView](uivisualeffectview.md) that has been configured with a [UIBlurEffect](uiblureffect.md). The use of a vibrancy effect can help the content placed inside the [contentView](uivisualeffectview/contentview.md) become more vivid.

The vibrancy effect is color-dependent. Any subviews that you add to the [contentView](uivisualeffectview/contentview.md) must implement the [tintColorDidChange](uiview/tintcolordidchange%28%29.md) method and update themselves accordingly. [UIImageView](uiimageview.md) objects with images that have a rendering mode of [UIImageRenderingModeAlwaysTemplate](uiimage/renderingmode-swift.enum/alwaystemplate.md) as well as [UILabel](uilabel.md) objects update automatically.

## Topics

### Creating a vibrancy effect

- [effectForBlurEffect:](uivibrancyeffect/init%28blureffect_%29.md): Creates a vibrancy effect for a specific blur effect.
- [UIVibrancyEffectStyle](uivibrancyeffectstyle.md): Constants for the vibrancy styles.

### Deprecated

- [widgetPrimaryVibrancyEffect](uivibrancyeffect/widgetprimary%28%29.md): Deprecated. Creates a vibrancy effect suitable for use with certain supporting text and template images within a widget.
- [widgetSecondaryVibrancyEffect](uivibrancyeffect/widgetsecondary%28%29.md): Deprecated. Creates a vibrancy effect suitable for indicating the secondary importance or relevance of supporting text and template images within a widget.
- [widgetEffectForVibrancyStyle:](uivibrancyeffect/widgeteffect%28forvibrancystyle_%29.md): Deprecated. Creates a vibrancy effect for the specified style.
- [notificationCenterVibrancyEffect](uivibrancyeffect/notificationcenter%28%29.md): Deprecated. Creates a vibrancy effect for use in Notification Center.

### Type Methods

- [effectForBlurEffect:style:](uivibrancyeffect/init%28blureffect_style_%29.md)

## Relationships

### Inherits From

- [UIVisualEffect](uivisualeffect.md)

## See Also

### Visual effects

- [UIVisualEffect](uivisualeffect.md): An initializer for visual effect views and blur and vibrancy effect objects.
- [UIVisualEffectView](uivisualeffectview.md): An object that implements some complex visual effects.
- [UIBlurEffect](uiblureffect.md): An object that applies a blurring effect to the content layered behind a visual effect view.
- [UIColorEffect](uicoloreffect.md): A visual effect that applies a solid color background.
