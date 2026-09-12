> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarappearance](https://developer.apple.com/documentation/uikit/uitabbarappearance)

# UITabBarAppearance (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object for customizing the appearance of a tab bar.

## Declaration

```swift
@MainActor class UITabBarAppearance
```

<a id="overview"></a>

## Overview

After creating a [UITabBarAppearance](uitabbarappearance.md) object, use the methods and properties of this class to specify the appearance of items in the tab bar. Use the inherited properties from [UIBarAppearance](uibarappearance.md) to configure the background and shadow attributes of the tab bar itself.

## Topics

### Configuring stacked item appearances

- [stackedLayoutAppearance](uitabbarappearance/stackedlayoutappearance.md): The appearance attributes for items with a stacked layout.
- [stackedItemPositioning](uitabbarappearance/stackeditempositioning.md): The scheme to use when positioning stacked items within the tab bar.
- [stackedItemSpacing](uitabbarappearance/stackeditemspacing.md): The amount of space to insert between stacked tab bar items.
- [stackedItemWidth](uitabbarappearance/stackeditemwidth.md): The width of stacked items in the tab bar.

### Configuring inline item appearances

- [inlineLayoutAppearance](uitabbarappearance/inlinelayoutappearance.md): The appearance attributes for items displayed with an inline style.
- [compactInlineLayoutAppearance](uitabbarappearance/compactinlinelayoutappearance.md): The appearance attributes for items displayed with an inline style in a compact environment.

### Specifying the selection appearance

- [selectionIndicatorTintColor](uitabbarappearance/selectionindicatortintcolor.md): The tint color to apply to the selection indicator image.
- [selectionIndicatorImage](uitabbarappearance/selectionindicatorimage.md): The image to draw for the selected item.

## Relationships

### Inherits From

- [UIBarAppearance](uibarappearance.md)

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

### Tab bar appearance

- [UITabBarItemAppearance](uitabbaritemappearance.md): An object for customizing the appearance of tab bar items.
- [UITabBarItemStateAppearance](uitabbaritemstateappearance.md): A data object containing the specific customizations for tab bar items in a particular state.

# UITabBarAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object for customizing the appearance of a tab bar.

## Declaration

```objectivec
@interface UITabBarAppearance : UIBarAppearance
```

<a id="overview"></a>

## Overview

After creating a [UITabBarAppearance](uitabbarappearance.md) object, use the methods and properties of this class to specify the appearance of items in the tab bar. Use the inherited properties from [UIBarAppearance](uibarappearance.md) to configure the background and shadow attributes of the tab bar itself.

## Topics

### Configuring stacked item appearances

- [stackedLayoutAppearance](uitabbarappearance/stackedlayoutappearance.md): The appearance attributes for items with a stacked layout.
- [stackedItemPositioning](uitabbarappearance/stackeditempositioning.md): The scheme to use when positioning stacked items within the tab bar.
- [stackedItemSpacing](uitabbarappearance/stackeditemspacing.md): The amount of space to insert between stacked tab bar items.
- [stackedItemWidth](uitabbarappearance/stackeditemwidth.md): The width of stacked items in the tab bar.

### Configuring inline item appearances

- [inlineLayoutAppearance](uitabbarappearance/inlinelayoutappearance.md): The appearance attributes for items displayed with an inline style.
- [compactInlineLayoutAppearance](uitabbarappearance/compactinlinelayoutappearance.md): The appearance attributes for items displayed with an inline style in a compact environment.

### Specifying the selection appearance

- [selectionIndicatorTintColor](uitabbarappearance/selectionindicatortintcolor.md): The tint color to apply to the selection indicator image.
- [selectionIndicatorImage](uitabbarappearance/selectionindicatorimage.md): The image to draw for the selected item.

## Relationships

### Inherits From

- [UIBarAppearance](uibarappearance.md)

## See Also

### Tab bar appearance

- [UITabBarItemAppearance](uitabbaritemappearance.md): An object for customizing the appearance of tab bar items.
- [UITabBarItemStateAppearance](uitabbaritemstateappearance.md): A data object containing the specific customizations for tab bar items in a particular state.
