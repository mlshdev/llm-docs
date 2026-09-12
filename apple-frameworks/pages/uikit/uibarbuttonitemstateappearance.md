> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitemstateappearance](https://developer.apple.com/documentation/uikit/uibarbuttonitemstateappearance)

# UIBarButtonItemStateAppearance (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A data object containing the specific customizations for a bar button item in a particular state.

## Declaration

```swift
@MainActor class UIBarButtonItemStateAppearance
```

<a id="overview"></a>

## Overview

Use a [UIBarButtonItemStateAppearance](uibarbuttonitemstateappearance.md) object to customize the title and background image of your bar button items. Don’t create [UIBarButtonItemStateAppearance](uibarbuttonitemstateappearance.md) objects yourself. Instead, create a [UIBarButtonItemAppearance](uibarbuttonitemappearance.md) object and use its properties to fetch the appearance attributes for the button in a particular state. For example, to set the button’s attributes when it’s in the normal state, configure the object in the [normal](uibarbuttonitemappearance/normal.md) property.

## Topics

### Configuring the title

- [titleTextAttributes](uibarbuttonitemstateappearance/titletextattributes.md): String attributes to apply to the text of the bar button item’s title.
- [titlePositionAdjustment](uibarbuttonitemstateappearance/titlepositionadjustment.md): The additional amount by which to offset the title horizontally and vertically.

### Configuring the background appearance

- [backgroundImage](uibarbuttonitemstateappearance/backgroundimage.md): A background image to display around the button.
- [backgroundImagePositionAdjustment](uibarbuttonitemstateappearance/backgroundimagepositionadjustment.md): The distance, in points, by which to offset the background image horizontally and vertically.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Shared appearance

- [UIBarAppearance](uibarappearance.md): An object for customizing the basic appearance of system bars.
- [UIBarButtonItemAppearance](uibarbuttonitemappearance.md): An object for customizing the appearance of bar button items.

# UIBarButtonItemStateAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A data object containing the specific customizations for a bar button item in a particular state.

## Declaration

```objectivec
@interface UIBarButtonItemStateAppearance : NSObject
```

<a id="overview"></a>

## Overview

Use a [UIBarButtonItemStateAppearance](uibarbuttonitemstateappearance.md) object to customize the title and background image of your bar button items. Don’t create [UIBarButtonItemStateAppearance](uibarbuttonitemstateappearance.md) objects yourself. Instead, create a [UIBarButtonItemAppearance](uibarbuttonitemappearance.md) object and use its properties to fetch the appearance attributes for the button in a particular state. For example, to set the button’s attributes when it’s in the normal state, configure the object in the [normal](uibarbuttonitemappearance/normal.md) property.

## Topics

### Configuring the title

- [titleTextAttributes](uibarbuttonitemstateappearance/titletextattributes.md): String attributes to apply to the text of the bar button item’s title.
- [titlePositionAdjustment](uibarbuttonitemstateappearance/titlepositionadjustment.md): The additional amount by which to offset the title horizontally and vertically.

### Configuring the background appearance

- [backgroundImage](uibarbuttonitemstateappearance/backgroundimage.md): A background image to display around the button.
- [backgroundImagePositionAdjustment](uibarbuttonitemstateappearance/backgroundimagepositionadjustment.md): The distance, in points, by which to offset the background image horizontally and vertically.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Shared appearance

- [UIBarAppearance](uibarappearance.md): An object for customizing the basic appearance of system bars.
- [UIBarButtonItemAppearance](uibarbuttonitemappearance.md): An object for customizing the appearance of bar button items.
