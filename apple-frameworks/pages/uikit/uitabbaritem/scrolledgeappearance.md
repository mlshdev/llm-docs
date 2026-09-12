> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbaritem/scrolledgeappearance](https://developer.apple.com/documentation/uikit/uitabbaritem/scrolledgeappearance)

# scrollEdgeAppearance (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The appearance settings for the tab bar when the edge of scrollable content aligns with the edge of the tab bar.

## Declaration

```swift
@NSCopying var scrollEdgeAppearance: UITabBarAppearance? { get set }
```

<a id="Discussion"></a>

## Discussion

When a tab bar displays the selected item, the appearance setting in this property overrides the settings in the [scrollEdgeAppearance](../uitoolbar/scrolledgeappearance.md) property of [UIToolbar](../uitoolbar.md).

Use this property to apply a scroll edge appearance based on the tab bar item stored in the [selectedItem](../uitabbar/selecteditem.md) property. If the selected item’s [scrollEdgeAppearance](scrolledgeappearance.md) property is `nil`, UIKit uses the tab bar’s scroll edge appearance.

## See Also

### Configuring the item’s appearance

- [selectedImage](selectedimage.md): The source image the item uses to generate its selected image.
- [standardAppearance](standardappearance.md): The appearance settings for a tab bar.
- [titlePositionAdjustment](titlepositionadjustment.md): The offset to apply to the title’s position.

# scrollEdgeAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The appearance settings for the tab bar when the edge of scrollable content aligns with the edge of the tab bar.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UITabBarAppearance * scrollEdgeAppearance;
```

<a id="Discussion"></a>

## Discussion

When a tab bar displays the selected item, the appearance setting in this property overrides the settings in the [scrollEdgeAppearance](../uitoolbar/scrolledgeappearance.md) property of [UIToolbar](../uitoolbar.md).

Use this property to apply a scroll edge appearance based on the tab bar item stored in the [selectedItem](../uitabbar/selecteditem.md) property. If the selected item’s [scrollEdgeAppearance](scrolledgeappearance.md) property is `nil`, UIKit uses the tab bar’s scroll edge appearance.

## See Also

### Configuring the item’s appearance

- [selectedImage](selectedimage.md): The source image the item uses to generate its selected image.
- [standardAppearance](standardappearance.md): The appearance settings for a tab bar.
- [titlePositionAdjustment](titlepositionadjustment.md): The offset to apply to the title’s position.
