> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbaritemstateappearance](https://developer.apple.com/documentation/uikit/uitabbaritemstateappearance)

# UITabBarItemStateAppearance (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A data object containing the specific customizations for tab bar items in a particular state.

## Declaration

```swift
@MainActor class UITabBarItemStateAppearance
```

<a id="overview"></a>

## Overview

Use a [UITabBarItemStateAppearance](uitabbaritemstateappearance.md) object to customize the appearance of your tab bar items and the badges they display. Don’t create [UITabBarItemStateAppearance](uitabbaritemstateappearance.md) objects yourself. Instead, create a [UITabBarItemAppearance](uitabbaritemappearance.md) object and use its properties to fetch the appearance attributes for tab bar items in a particular state. For example, to set the attributes for items in the normal state, configure the object in the [normal](uitabbaritemappearance/normal.md) property.

## Topics

### Configuring the item’s title

- [titleTextAttributes](uitabbaritemstateappearance/titletextattributes.md): String attributes to apply to the text of the tab bar item’s title.
- [titlePositionAdjustment](uitabbaritemstateappearance/titlepositionadjustment.md): The additional amount by which to offset the title horizontally and vertically.

### Tinting the item’s icon

- [iconColor](uitabbaritemstateappearance/iconcolor.md): The color of item icons.

### Configuring the badge appearance

- [badgeTextAttributes](uitabbaritemstateappearance/badgetextattributes.md): String attributes to apply to the text of the item’s badge.
- [badgeBackgroundColor](uitabbaritemstateappearance/badgebackgroundcolor.md): The background color of the badge.
- [badgeTitlePositionAdjustment](uitabbaritemstateappearance/badgetitlepositionadjustment.md): The additional amount by which to offset the badge’s title horizontally and vertically.
- [badgePositionAdjustment](uitabbaritemstateappearance/badgepositionadjustment.md): The additional amount by which to offset the badge horizontally and vertically.

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

### Tab bar appearance

- [UITabBarAppearance](uitabbarappearance.md): An object for customizing the appearance of a tab bar.
- [UITabBarItemAppearance](uitabbaritemappearance.md): An object for customizing the appearance of tab bar items.

# UITabBarItemStateAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A data object containing the specific customizations for tab bar items in a particular state.

## Declaration

```objectivec
@interface UITabBarItemStateAppearance : NSObject
```

<a id="overview"></a>

## Overview

Use a [UITabBarItemStateAppearance](uitabbaritemstateappearance.md) object to customize the appearance of your tab bar items and the badges they display. Don’t create [UITabBarItemStateAppearance](uitabbaritemstateappearance.md) objects yourself. Instead, create a [UITabBarItemAppearance](uitabbaritemappearance.md) object and use its properties to fetch the appearance attributes for tab bar items in a particular state. For example, to set the attributes for items in the normal state, configure the object in the [normal](uitabbaritemappearance/normal.md) property.

## Topics

### Configuring the item’s title

- [titleTextAttributes](uitabbaritemstateappearance/titletextattributes.md): String attributes to apply to the text of the tab bar item’s title.
- [titlePositionAdjustment](uitabbaritemstateappearance/titlepositionadjustment.md): The additional amount by which to offset the title horizontally and vertically.

### Tinting the item’s icon

- [iconColor](uitabbaritemstateappearance/iconcolor.md): The color of item icons.

### Configuring the badge appearance

- [badgeTextAttributes](uitabbaritemstateappearance/badgetextattributes.md): String attributes to apply to the text of the item’s badge.
- [badgeBackgroundColor](uitabbaritemstateappearance/badgebackgroundcolor.md): The background color of the badge.
- [badgeTitlePositionAdjustment](uitabbaritemstateappearance/badgetitlepositionadjustment.md): The additional amount by which to offset the badge’s title horizontally and vertically.
- [badgePositionAdjustment](uitabbaritemstateappearance/badgepositionadjustment.md): The additional amount by which to offset the badge horizontally and vertically.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Tab bar appearance

- [UITabBarAppearance](uitabbarappearance.md): An object for customizing the appearance of a tab bar.
- [UITabBarItemAppearance](uitabbaritemappearance.md): An object for customizing the appearance of tab bar items.
