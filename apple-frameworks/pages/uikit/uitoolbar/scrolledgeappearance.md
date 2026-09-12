> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitoolbar/scrolledgeappearance](https://developer.apple.com/documentation/uikit/uitoolbar/scrolledgeappearance)

# scrollEdgeAppearance (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The appearance settings for a standard-height toolbar when the edge of scrollable content aligns with the edge of the toolbar.

## Declaration

```swift
@NSCopying var scrollEdgeAppearance: UIToolbarAppearance? { get set }
```

<a id="Discussion"></a>

## Discussion

When a navigation controller contains a toolbar and a scroll view, part of the scroll view’s content appears underneath the toolbar. If the edge of the scrolled content reaches the toolbar, UIKit applies the appearance settings in this property.

This property applies to standard-height toolbars. If the value of this property is `nil`, UIKit uses the value of the [standardAppearance](standardappearance.md) property, modified to have a transparent background. If no navigation controller manages your toolbar, UIKit ignores this property and uses the tool bar’s standard appearance.

## See Also

### Customizing appearance

- [standardAppearance](standardappearance.md): The appearance settings to use for a standard-height toolbar.
- [compactAppearance](compactappearance.md): The appearance settings to use for a compact-height toolbar.
- [compactScrollEdgeAppearance](compactscrolledgeappearance.md): The appearance settings for a compact-height toolbar when the edge of any scrollable content aligns with the edge of a compact-height toolbar.
- [isTranslucent](istranslucent.md): A Boolean value that indicates whether the toolbar is translucent.
- [Legacy customizations](../uitoolbar-legacy-customizations.md): Customize appearance information directly on the toolbar object.

# scrollEdgeAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The appearance settings for a standard-height toolbar when the edge of scrollable content aligns with the edge of the toolbar.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UIToolbarAppearance * scrollEdgeAppearance;
```

<a id="Discussion"></a>

## Discussion

When a navigation controller contains a toolbar and a scroll view, part of the scroll view’s content appears underneath the toolbar. If the edge of the scrolled content reaches the toolbar, UIKit applies the appearance settings in this property.

This property applies to standard-height toolbars. If the value of this property is `nil`, UIKit uses the value of the [standardAppearance](standardappearance.md) property, modified to have a transparent background. If no navigation controller manages your toolbar, UIKit ignores this property and uses the tool bar’s standard appearance.

## See Also

### Customizing appearance

- [standardAppearance](standardappearance.md): The appearance settings to use for a standard-height toolbar.
- [compactAppearance](compactappearance.md): The appearance settings to use for a compact-height toolbar.
- [compactScrollEdgeAppearance](compactscrolledgeappearance.md): The appearance settings for a compact-height toolbar when the edge of any scrollable content aligns with the edge of a compact-height toolbar.
- [translucent](istranslucent.md): A Boolean value that indicates whether the toolbar is translucent.
- [Legacy customizations](../uitoolbar-legacy-customizations.md): Customize appearance information directly on the toolbar object.
