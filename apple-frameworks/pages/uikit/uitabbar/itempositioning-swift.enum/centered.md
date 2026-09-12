> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbar/itempositioning-swift.enum/centered](https://developer.apple.com/documentation/uikit/uitabbar/itempositioning-swift.enum/centered)

# UITabBar.ItemPositioning.centered (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Center items in the available space.

## Declaration

```swift
case centered
```

<a id="Discussion"></a>

## Discussion

With this option, the tab bar uses the [itemWidth](../itemwidth.md) and [itemSpacing](../itemspacing.md) properties to set the width of items and the spacing between items, positioning those items in the center of the available space. When the [UITabBar.ItemPositioning.automatic](automatic.md) option is selected, the tab bar uses this behavior in horizontally regular environments.

## See Also

### Constants

- [UITabBar.ItemPositioning.automatic](automatic.md): Specifies automatic tab bar item positioning according to the user interface idiom, as follows:
- [UITabBar.ItemPositioning.fill](fill.md): Distribute items across the entire width of the tab bar.

# UITabBarItemPositioningCentered (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Center items in the available space.

## Declaration

```objectivec
UITabBarItemPositioningCentered
```

<a id="Discussion"></a>

## Discussion

With this option, the tab bar uses the [itemWidth](../itemwidth.md) and [itemSpacing](../itemspacing.md) properties to set the width of items and the spacing between items, positioning those items in the center of the available space. When the [UITabBarItemPositioningAutomatic](automatic.md) option is selected, the tab bar uses this behavior in horizontally regular environments.

## See Also

### Constants

- [UITabBarItemPositioningAutomatic](automatic.md): Specifies automatic tab bar item positioning according to the user interface idiom, as follows:
- [UITabBarItemPositioningFill](fill.md): Distribute items across the entire width of the tab bar.
