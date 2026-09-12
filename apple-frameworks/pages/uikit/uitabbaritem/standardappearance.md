> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbaritem/standardappearance](https://developer.apple.com/documentation/uikit/uitabbaritem/standardappearance)

# standardAppearance (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The appearance settings for a tab bar.

## Declaration

```swift
@NSCopying var standardAppearance: UITabBarAppearance? { get set }
```

<a id="Discussion"></a>

## Discussion

When a tab bar displays the selected item, the appearance setting in this property overrides the settings in the [standardAppearance](../uitabbar/standardappearance.md) property of [UITabBar](../uitabbar.md).

Use this property to apply a tab bar appearance based on the tab bar item stored in the [selectedItem](../uitabbar/selecteditem.md) property. If the selected item’s [standardAppearance](standardappearance.md) property is `nil`, UIKit uses the tab bar’s standard appearance.

## See Also

### Configuring the item’s appearance

- [selectedImage](selectedimage.md): The source image the item uses to generate its selected image.
- [scrollEdgeAppearance](scrolledgeappearance.md): The appearance settings for the tab bar when the edge of scrollable content aligns with the edge of the tab bar.
- [titlePositionAdjustment](titlepositionadjustment.md): The offset to apply to the title’s position.

# standardAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The appearance settings for a tab bar.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UITabBarAppearance * standardAppearance;
```

<a id="Discussion"></a>

## Discussion

When a tab bar displays the selected item, the appearance setting in this property overrides the settings in the [standardAppearance](../uitabbar/standardappearance.md) property of [UITabBar](../uitabbar.md).

Use this property to apply a tab bar appearance based on the tab bar item stored in the [selectedItem](../uitabbar/selecteditem.md) property. If the selected item’s [standardAppearance](standardappearance.md) property is `nil`, UIKit uses the tab bar’s standard appearance.

## See Also

### Configuring the item’s appearance

- [selectedImage](selectedimage.md): The source image the item uses to generate its selected image.
- [scrollEdgeAppearance](scrolledgeappearance.md): The appearance settings for the tab bar when the edge of scrollable content aligns with the edge of the tab bar.
- [titlePositionAdjustment](titlepositionadjustment.md): The offset to apply to the title’s position.
