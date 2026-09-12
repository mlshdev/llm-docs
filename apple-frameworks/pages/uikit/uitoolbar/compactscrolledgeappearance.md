> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitoolbar/compactscrolledgeappearance](https://developer.apple.com/documentation/uikit/uitoolbar/compactscrolledgeappearance)

# compactScrollEdgeAppearance (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The appearance settings for a compact-height toolbar when the edge of any scrollable content aligns with the edge of a compact-height toolbar.

## Declaration

```swift
@NSCopying var compactScrollEdgeAppearance: UIToolbarAppearance? { get set }
```

<a id="Discussion"></a>

## Discussion

When a navigation controller contains a toolbar and a scroll view, part of the scroll view’s content appears underneath the toolbar. If the edge of the scrolled content reaches the toolbar, UIKit applies the appearance settings in this property.

This property applies to compact-height toolbars. If the value of this property is `nil`, UIKit uses the value of the [scrollEdgeAppearance](scrolledgeappearance.md) property. If no navigation controller manages your toolbar, UIKit ignores this property and uses the value of the [compactAppearance](compactappearance.md) property.

## See Also

### Customizing appearance

- [standardAppearance](standardappearance.md): The appearance settings to use for a standard-height toolbar.
- [compactAppearance](compactappearance.md): The appearance settings to use for a compact-height toolbar.
- [scrollEdgeAppearance](scrolledgeappearance.md): The appearance settings for a standard-height toolbar when the edge of scrollable content aligns with the edge of the toolbar.
- [isTranslucent](istranslucent.md): A Boolean value that indicates whether the toolbar is translucent.
- [Legacy customizations](../uitoolbar-legacy-customizations.md): Customize appearance information directly on the toolbar object.

# compactScrollEdgeAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The appearance settings for a compact-height toolbar when the edge of any scrollable content aligns with the edge of a compact-height toolbar.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UIToolbarAppearance * compactScrollEdgeAppearance;
```

<a id="Discussion"></a>

## Discussion

When a navigation controller contains a toolbar and a scroll view, part of the scroll view’s content appears underneath the toolbar. If the edge of the scrolled content reaches the toolbar, UIKit applies the appearance settings in this property.

This property applies to compact-height toolbars. If the value of this property is `nil`, UIKit uses the value of the [scrollEdgeAppearance](scrolledgeappearance.md) property. If no navigation controller manages your toolbar, UIKit ignores this property and uses the value of the [compactAppearance](compactappearance.md) property.

## See Also

### Customizing appearance

- [standardAppearance](standardappearance.md): The appearance settings to use for a standard-height toolbar.
- [compactAppearance](compactappearance.md): The appearance settings to use for a compact-height toolbar.
- [scrollEdgeAppearance](scrolledgeappearance.md): The appearance settings for a standard-height toolbar when the edge of scrollable content aligns with the edge of the toolbar.
- [translucent](istranslucent.md): A Boolean value that indicates whether the toolbar is translucent.
- [Legacy customizations](../uitoolbar-legacy-customizations.md): Customize appearance information directly on the toolbar object.
