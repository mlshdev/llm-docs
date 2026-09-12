> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbaritemappearance](https://developer.apple.com/documentation/uikit/uitabbaritemappearance)

# UITabBarItemAppearance (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object for customizing the appearance of tab bar items.

## Declaration

```swift
@MainActor class UITabBarItemAppearance
```

<a id="overview"></a>

## Overview

Use a [UITabBarItemAppearance](uitabbaritemappearance.md) object to customize the appearance of a tab bar item in each of its possible states. You can customize the appearance differently for each state. For example, you might apply different colors to the tab bar item’s icon in the [normal](uitabbaritemappearance/normal.md) and [selected](uitabbaritemappearance/selected.md) states.

## Topics

### Creating a tab bar item appearance object

- [init(style:)](uitabbaritemappearance/init%28style_%29.md): Creates an appearance object with appropriate default values for a tab bar, displaying its items with the specified layout style.
- [init()](uitabbaritemappearance/init%28%29.md): Creates an appearance object with default values for a stacked tab bar item.
- [init(coder:)](uitabbaritemappearance/init%28coder_%29.md): Creates an appearance object from data in an unarchiver.

### Copying a tab bar item appearance object

- [copy()](uitabbaritemappearance/copy%28%29.md): Creates a copy of the appearance object.

### Resetting the appearance properties

- [configureWithDefault(for:)](uitabbaritemappearance/configurewithdefault%28for_%29.md): Configures the tab bar item appearance object with appropriate values for the specified style.
- [UITabBarItemAppearance.Style](uitabbaritemappearance/style.md): Constants indicating the layout of a tab bar item’s content.

### Configuring attributes for different item states

- [normal](uitabbaritemappearance/normal.md): The appearance data to apply to the tab bar item when it’s enabled, unselected, and not the focused item.
- [selected](uitabbaritemappearance/selected.md): The appearance data to apply to the tab bar item when it’s selected.
- [disabled](uitabbaritemappearance/disabled.md): The appearance data to apply to the tab bar item when it’s disabled.
- [focused](uitabbaritemappearance/focused.md): The appearance data to apply to the tab bar item when it’s focused.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

### Tab bar appearance

- [UITabBarAppearance](uitabbarappearance.md): An object for customizing the appearance of a tab bar.
- [UITabBarItemStateAppearance](uitabbaritemstateappearance.md): A data object containing the specific customizations for tab bar items in a particular state.

# UITabBarItemAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object for customizing the appearance of tab bar items.

## Declaration

```objectivec
@interface UITabBarItemAppearance : NSObject
```

<a id="overview"></a>

## Overview

Use a [UITabBarItemAppearance](uitabbaritemappearance.md) object to customize the appearance of a tab bar item in each of its possible states. You can customize the appearance differently for each state. For example, you might apply different colors to the tab bar item’s icon in the [normal](uitabbaritemappearance/normal.md) and [selected](uitabbaritemappearance/selected.md) states.

## Topics

### Creating a tab bar item appearance object

- [initWithStyle:](uitabbaritemappearance/init%28style_%29.md): Creates an appearance object with appropriate default values for a tab bar, displaying its items with the specified layout style.
- [init](uitabbaritemappearance/init%28%29.md): Creates an appearance object with default values for a stacked tab bar item.
- [initWithCoder:](uitabbaritemappearance/init%28coder_%29.md): Creates an appearance object from data in an unarchiver.

### Copying a tab bar item appearance object

- [copy](uitabbaritemappearance/copy%28%29.md): Creates a copy of the appearance object.

### Resetting the appearance properties

- [configureWithDefaultForStyle:](uitabbaritemappearance/configurewithdefault%28for_%29.md): Configures the tab bar item appearance object with appropriate values for the specified style.
- [UITabBarItemAppearanceStyle](uitabbaritemappearance/style.md): Constants indicating the layout of a tab bar item’s content.

### Configuring attributes for different item states

- [normal](uitabbaritemappearance/normal.md): The appearance data to apply to the tab bar item when it’s enabled, unselected, and not the focused item.
- [selected](uitabbaritemappearance/selected.md): The appearance data to apply to the tab bar item when it’s selected.
- [disabled](uitabbaritemappearance/disabled.md): The appearance data to apply to the tab bar item when it’s disabled.
- [focused](uitabbaritemappearance/focused.md): The appearance data to apply to the tab bar item when it’s focused.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Tab bar appearance

- [UITabBarAppearance](uitabbarappearance.md): An object for customizing the appearance of a tab bar.
- [UITabBarItemStateAppearance](uitabbaritemstateappearance.md): A data object containing the specific customizations for tab bar items in a particular state.
