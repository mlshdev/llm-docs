> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbar/itemwidth](https://developer.apple.com/documentation/uikit/uitabbar/itemwidth)

# itemWidth (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The width (in points) of tab bar items.

## Declaration

```swift
var itemWidth: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

When the tab bar positions items using the [UITabBar.ItemPositioning.centered](itempositioning-swift.enum/centered.md) option, it checks the value of this property to see if a custom width value has been supplied. The default value of this property is `0`, which causes the tab bar to use a system-defined default width for each item. Specifying a value greater than `0` causes the tab bar to use your custom value instead. If you try to set this property to a negative value, the tab bar sets the value to `0` instead.

## See Also

### Customizing item spacing

- [itemPositioning](itempositioning-swift.property.md): The positioning scheme for the tab bar items in the tab bar.
- [UITabBar.ItemPositioning](itempositioning-swift.enum.md): Constants that specify tab bar item positioning.
- [itemSpacing](itemspacing.md): The amount of space (in points) to use between tab bar items.

# itemWidth (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The width (in points) of tab bar items.

## Declaration

```objectivec
@property (nonatomic) CGFloat itemWidth;
```

<a id="Discussion"></a>

## Discussion

When the tab bar positions items using the [UITabBarItemPositioningCentered](itempositioning-swift.enum/centered.md) option, it checks the value of this property to see if a custom width value has been supplied. The default value of this property is `0`, which causes the tab bar to use a system-defined default width for each item. Specifying a value greater than `0` causes the tab bar to use your custom value instead. If you try to set this property to a negative value, the tab bar sets the value to `0` instead.

## See Also

### Customizing item spacing

- [itemPositioning](itempositioning-swift.property.md): The positioning scheme for the tab bar items in the tab bar.
- [UITabBarItemPositioning](itempositioning-swift.enum.md): Constants that specify tab bar item positioning.
- [itemSpacing](itemspacing.md): The amount of space (in points) to use between tab bar items.
