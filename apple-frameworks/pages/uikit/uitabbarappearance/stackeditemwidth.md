> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarappearance/stackeditemwidth](https://developer.apple.com/documentation/uikit/uitabbarappearance/stackeditemwidth)

# stackedItemWidth (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The width of stacked items in the tab bar.

## Declaration

```swift
var stackedItemWidth: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

When the [stackedItemPositioning](stackeditempositioning.md) property is set to [UITabBar.ItemPositioning.centered](../uitabbar/itempositioning-swift.enum/centered.md), UIKit uses this property to set the width of each item. The default value of this property is `0`, which causes UIKit to use a system-defined width for items. For any values above `0`, UIKit uses the specified width, which is measured in points. If you try to assign a negative number to this property, UIKit sets the value to `0` instead.

## See Also

### Configuring stacked item appearances

- [stackedLayoutAppearance](stackedlayoutappearance.md): The appearance attributes for items with a stacked layout.
- [stackedItemPositioning](stackeditempositioning.md): The scheme to use when positioning stacked items within the tab bar.
- [stackedItemSpacing](stackeditemspacing.md): The amount of space to insert between stacked tab bar items.

# stackedItemWidth (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The width of stacked items in the tab bar.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) CGFloat stackedItemWidth;
```

<a id="Discussion"></a>

## Discussion

When the [stackedItemPositioning](stackeditempositioning.md) property is set to [UITabBarItemPositioningCentered](../uitabbar/itempositioning-swift.enum/centered.md), UIKit uses this property to set the width of each item. The default value of this property is `0`, which causes UIKit to use a system-defined width for items. For any values above `0`, UIKit uses the specified width, which is measured in points. If you try to assign a negative number to this property, UIKit sets the value to `0` instead.

## See Also

### Configuring stacked item appearances

- [stackedLayoutAppearance](stackedlayoutappearance.md): The appearance attributes for items with a stacked layout.
- [stackedItemPositioning](stackeditempositioning.md): The scheme to use when positioning stacked items within the tab bar.
- [stackedItemSpacing](stackeditemspacing.md): The amount of space to insert between stacked tab bar items.
