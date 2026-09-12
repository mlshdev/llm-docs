> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarappearance/stackedlayoutappearance](https://developer.apple.com/documentation/uikit/uitabbarappearance/stackedlayoutappearance)

# stackedLayoutAppearance (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The appearance attributes for items with a stacked layout.

## Declaration

```swift
@NSCopying var stackedLayoutAppearance: UITabBarItemAppearance { get set }
```

<a id="Discussion"></a>

## Discussion

If you didn’t provide a set of explicit attributes at initialization time, UIKit provides an object with default attributes.

## See Also

### Configuring stacked item appearances

- [stackedItemPositioning](stackeditempositioning.md): The scheme to use when positioning stacked items within the tab bar.
- [stackedItemSpacing](stackeditemspacing.md): The amount of space to insert between stacked tab bar items.
- [stackedItemWidth](stackeditemwidth.md): The width of stacked items in the tab bar.

# stackedLayoutAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The appearance attributes for items with a stacked layout.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) UITabBarItemAppearance * stackedLayoutAppearance;
```

<a id="Discussion"></a>

## Discussion

If you didn’t provide a set of explicit attributes at initialization time, UIKit provides an object with default attributes.

## See Also

### Configuring stacked item appearances

- [stackedItemPositioning](stackeditempositioning.md): The scheme to use when positioning stacked items within the tab bar.
- [stackedItemSpacing](stackeditemspacing.md): The amount of space to insert between stacked tab bar items.
- [stackedItemWidth](stackeditemwidth.md): The width of stacked items in the tab bar.
