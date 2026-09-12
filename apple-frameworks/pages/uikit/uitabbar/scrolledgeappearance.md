> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbar/scrolledgeappearance](https://developer.apple.com/documentation/uikit/uitabbar/scrolledgeappearance)

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

When a tab bar controller contains a tab bar and a scroll view, part of the scroll view’s content appears underneath the tab bar. If the edge of the scrolled content reaches that bar, UIKit applies the appearance settings in this property.

If the value of this property is `nil`, UIKit uses the value of the tab bar’s [standardAppearance](standardappearance.md) property, modified to have a transparent background. If no tab bar controller manages your tab bar, UIKit ignores this property and uses the tab bar’s standard appearance.

You can customize the appearance for specific tab bar items with the [scrollEdgeAppearance](../uitabbaritem/scrolledgeappearance.md) property of [UITabBarItem](../uitabbaritem.md).

## See Also

### Customizing tab bar appearance

- [standardAppearance](standardappearance.md): The appearance settings for a standard-height tab bar.
- [leadingAccessoryView](leadingaccessoryview.md): The view at the leading edge of a tab bar on tvOS.
- [trailingAccessoryView](trailingaccessoryview.md): The view at the trailing edge of a tab bar on tvOS.
- [isTranslucent](istranslucent.md): A Boolean value that indicates whether the tab bar is translucent.
- [Legacy customizations](../uitabbar-legacy-customizations.md): Customize appearance information directly on the tab bar object.

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

When a tab bar controller contains a tab bar and a scroll view, part of the scroll view’s content appears underneath the tab bar. If the edge of the scrolled content reaches that bar, UIKit applies the appearance settings in this property.

If the value of this property is `nil`, UIKit uses the value of the tab bar’s [standardAppearance](standardappearance.md) property, modified to have a transparent background. If no tab bar controller manages your tab bar, UIKit ignores this property and uses the tab bar’s standard appearance.

You can customize the appearance for specific tab bar items with the [scrollEdgeAppearance](../uitabbaritem/scrolledgeappearance.md) property of [UITabBarItem](../uitabbaritem.md).

## See Also

### Customizing tab bar appearance

- [standardAppearance](standardappearance.md): The appearance settings for a standard-height tab bar.
- [leadingAccessoryView](leadingaccessoryview.md): The view at the leading edge of a tab bar on tvOS.
- [trailingAccessoryView](trailingaccessoryview.md): The view at the trailing edge of a tab bar on tvOS.
- [translucent](istranslucent.md): A Boolean value that indicates whether the tab bar is translucent.
- [Legacy customizations](../uitabbar-legacy-customizations.md): Customize appearance information directly on the tab bar object.
