> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbar/itempositioning-swift.property](https://developer.apple.com/documentation/uikit/uitabbar/itempositioning-swift.property)

# itemPositioning (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The positioning scheme for the tab bar items in the tab bar.

## Declaration

```swift
var itemPositioning: UITabBar.ItemPositioning { get set }
```

<a id="Discussion"></a>

## Discussion

The default value for this property, [UITabBar.ItemPositioning.automatic](itempositioning-swift.enum/automatic.md), results in the default tab bar item positioning according to the current environment:

- In a horizontally compact environment, the tab bar spreads items across the entire space, adjusting inter-item spacing as needed.
- In a horizontally regular environment, the tab bar uses the [itemWidth](itemwidth.md) and [itemSpacing](itemspacing.md) properties to set the width of items and the spacing between items, positioning those items in the center of the available space. This configuration has the potential to leave space along the left and right edges of the tab bar.

You can force a specific positioning scheme by changing the value of this property to a different value. For a list of possible values, see the constant descriptions for the [UITabBar.ItemPositioning](itempositioning-swift.enum.md) type.

## See Also

### Customizing item spacing

- [UITabBar.ItemPositioning](itempositioning-swift.enum.md): Constants that specify tab bar item positioning.
- [itemSpacing](itemspacing.md): The amount of space (in points) to use between tab bar items.
- [itemWidth](itemwidth.md): The width (in points) of tab bar items.

# itemPositioning (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The positioning scheme for the tab bar items in the tab bar.

## Declaration

```objectivec
@property (nonatomic) UITabBarItemPositioning itemPositioning;
```

<a id="Discussion"></a>

## Discussion

The default value for this property, [UITabBarItemPositioningAutomatic](itempositioning-swift.enum/automatic.md), results in the default tab bar item positioning according to the current environment:

- In a horizontally compact environment, the tab bar spreads items across the entire space, adjusting inter-item spacing as needed.
- In a horizontally regular environment, the tab bar uses the [itemWidth](itemwidth.md) and [itemSpacing](itemspacing.md) properties to set the width of items and the spacing between items, positioning those items in the center of the available space. This configuration has the potential to leave space along the left and right edges of the tab bar.

You can force a specific positioning scheme by changing the value of this property to a different value. For a list of possible values, see the constant descriptions for the [UITabBarItemPositioning](itempositioning-swift.enum.md) type.

## See Also

### Customizing item spacing

- [UITabBarItemPositioning](itempositioning-swift.enum.md): Constants that specify tab bar item positioning.
- [itemSpacing](itemspacing.md): The amount of space (in points) to use between tab bar items.
- [itemWidth](itemwidth.md): The width (in points) of tab bar items.
