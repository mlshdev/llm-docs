> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarappearance](https://developer.apple.com/documentation/uikit/uibarappearance)

# UIBarAppearance (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object for customizing the basic appearance of system bars.

## Declaration

```swift
@MainActor class UIBarAppearance
```

<a id="overview"></a>

## Overview

A [UIBarAppearance](uibarappearance.md) object contains the common traits shared by navigation bars, tab bars, and toolbars. When configuring a specific type of bar, you usually instantiate the appropriate bar appearance subclass. However, you may also create a [UIBarAppearance](uibarappearance.md) object, configure its properties, and use it to create new bar appearance objects in your app.

## Topics

### Creating a custom bar appearance object

- [init(idiom:)](uibarappearance/init%28idiom_%29.md): Creates a new bar appearance object that targets the specified idiom.
- [init(barAppearance:)](uibarappearance/init%28barappearance_%29.md): Creates a new bar appearance object by copying relevant data from the specified appearance object.
- [init()](uibarappearance/init%28%29.md): Creates a new bar appearance object containing default values.
- [init(coder:)](uibarappearance/init%28coder_%29.md): Creates an appearance object from data in an unarchiver.

### Copying a custom bar appearance object

- [copy()](uibarappearance/copy%28%29.md): Creates a copy of the appearance object.

### Resetting the appearance properties

- [configureWithDefaultBackground()](uibarappearance/configurewithdefaultbackground%28%29.md): Configures the bar appearance object with default background and shadow values.
- [configureWithOpaqueBackground()](uibarappearance/configurewithopaquebackground%28%29.md): Configures the bar appearance object with a set of opaque colors that are appropriate for the current theme.
- [configureWithTransparentBackground()](uibarappearance/configurewithtransparentbackground%28%29.md): Configures the bar appearance object with a transparent background and no shadow.

### Configuring the background appearance

- [backgroundEffect](uibarappearance/backgroundeffect.md): The blur effect to apply to the bar’s background.
- [backgroundColor](uibarappearance/backgroundcolor.md): The background color of the bar.
- [backgroundImage](uibarappearance/backgroundimage.md): The image to display on top of the bar’s background color.
- [backgroundImageContentMode](uibarappearance/backgroundimagecontentmode.md): The content mode to use when displaying the bar’s background image.

### Configuring the shadow appearance

- [shadowColor](uibarappearance/shadowcolor.md): The color to apply to the bar’s custom or default shadow.
- [shadowImage](uibarappearance/shadowimage.md): The image to use for the bar’s shadow.

### Getting the supported idiom

- [idiom](uibarappearance/idiom.md): The idiom targeted by this bar appearance object.

### Instance Properties

- [overrideUserInterfaceStyle](uibarappearance/overrideuserinterfacestyle.md): Overrides the userInterfaceStyle of the bar.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UINavigationBarAppearance](uinavigationbarappearance.md)
- [UITabBarAppearance](uitabbarappearance.md)
- [UIToolbarAppearance](uitoolbarappearance.md)

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

## See Also

### Shared appearance

- [UIBarButtonItemAppearance](uibarbuttonitemappearance.md): An object for customizing the appearance of bar button items.
- [UIBarButtonItemStateAppearance](uibarbuttonitemstateappearance.md): A data object containing the specific customizations for a bar button item in a particular state.

# UIBarAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object for customizing the basic appearance of system bars.

## Declaration

```objectivec
@interface UIBarAppearance : NSObject
```

<a id="overview"></a>

## Overview

A [UIBarAppearance](uibarappearance.md) object contains the common traits shared by navigation bars, tab bars, and toolbars. When configuring a specific type of bar, you usually instantiate the appropriate bar appearance subclass. However, you may also create a [UIBarAppearance](uibarappearance.md) object, configure its properties, and use it to create new bar appearance objects in your app.

## Topics

### Creating a custom bar appearance object

- [initWithIdiom:](uibarappearance/init%28idiom_%29.md): Creates a new bar appearance object that targets the specified idiom.
- [initWithBarAppearance:](uibarappearance/init%28barappearance_%29.md): Creates a new bar appearance object by copying relevant data from the specified appearance object.
- [init](uibarappearance/init%28%29.md): Creates a new bar appearance object containing default values.
- [initWithCoder:](uibarappearance/init%28coder_%29.md): Creates an appearance object from data in an unarchiver.

### Copying a custom bar appearance object

- [copy](uibarappearance/copy%28%29.md): Creates a copy of the appearance object.

### Resetting the appearance properties

- [configureWithDefaultBackground](uibarappearance/configurewithdefaultbackground%28%29.md): Configures the bar appearance object with default background and shadow values.
- [configureWithOpaqueBackground](uibarappearance/configurewithopaquebackground%28%29.md): Configures the bar appearance object with a set of opaque colors that are appropriate for the current theme.
- [configureWithTransparentBackground](uibarappearance/configurewithtransparentbackground%28%29.md): Configures the bar appearance object with a transparent background and no shadow.

### Configuring the background appearance

- [backgroundEffect](uibarappearance/backgroundeffect.md): The blur effect to apply to the bar’s background.
- [backgroundColor](uibarappearance/backgroundcolor.md): The background color of the bar.
- [backgroundImage](uibarappearance/backgroundimage.md): The image to display on top of the bar’s background color.
- [backgroundImageContentMode](uibarappearance/backgroundimagecontentmode.md): The content mode to use when displaying the bar’s background image.

### Configuring the shadow appearance

- [shadowColor](uibarappearance/shadowcolor.md): The color to apply to the bar’s custom or default shadow.
- [shadowImage](uibarappearance/shadowimage.md): The image to use for the bar’s shadow.

### Getting the supported idiom

- [idiom](uibarappearance/idiom.md): The idiom targeted by this bar appearance object.

### Instance Properties

- [overrideUserInterfaceStyle](uibarappearance/overrideuserinterfacestyle.md): Overrides the userInterfaceStyle of the bar.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UINavigationBarAppearance](uinavigationbarappearance.md)
- [UITabBarAppearance](uitabbarappearance.md)
- [UIToolbarAppearance](uitoolbarappearance.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Shared appearance

- [UIBarButtonItemAppearance](uibarbuttonitemappearance.md): An object for customizing the appearance of bar button items.
- [UIBarButtonItemStateAppearance](uibarbuttonitemstateappearance.md): A data object containing the specific customizations for a bar button item in a particular state.
