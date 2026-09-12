> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbar/itempositioning-swift.enum/automatic](https://developer.apple.com/documentation/uikit/uitabbar/itempositioning-swift.enum/automatic)

# UITabBar.ItemPositioning.automatic (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Specifies automatic tab bar item positioning according to the user interface idiom, as follows:

## Declaration

```swift
case automatic
```

<a id="Discussion"></a>

## Discussion

- In a horizontally compact environment, the tab bar spreads items across the entire space, adjusting inter-item spacing as needed.
- In a horizontally regular environment, the tab bar uses the [itemWidth](../itemwidth.md) and [itemSpacing](../itemspacing.md) properties to set the width of items and the spacing between items, positioning those items in the center of the available space. This configuration has the potential to leave space along the left and right edges of the tab bar.

## See Also

### Constants

- [UITabBar.ItemPositioning.fill](fill.md): Distribute items across the entire width of the tab bar.
- [UITabBar.ItemPositioning.centered](centered.md): Center items in the available space.

# UITabBarItemPositioningAutomatic (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Specifies automatic tab bar item positioning according to the user interface idiom, as follows:

## Declaration

```objectivec
UITabBarItemPositioningAutomatic
```

<a id="Discussion"></a>

## Discussion

- In a horizontally compact environment, the tab bar spreads items across the entire space, adjusting inter-item spacing as needed.
- In a horizontally regular environment, the tab bar uses the [itemWidth](../itemwidth.md) and [itemSpacing](../itemspacing.md) properties to set the width of items and the spacing between items, positioning those items in the center of the available space. This configuration has the potential to leave space along the left and right edges of the tab bar.

## See Also

### Constants

- [UITabBarItemPositioningFill](fill.md): Distribute items across the entire width of the tab bar.
- [UITabBarItemPositioningCentered](centered.md): Center items in the available space.
