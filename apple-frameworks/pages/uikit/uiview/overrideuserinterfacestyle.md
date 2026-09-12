> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/overrideuserinterfacestyle](https://developer.apple.com/documentation/uikit/uiview/overrideuserinterfacestyle)

# overrideUserInterfaceStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The user interface style adopted by the view and all of its subviews.

## Declaration

```swift
var overrideUserInterfaceStyle: UIUserInterfaceStyle { get set }
```

## Mentioned In

- [Choosing a specific interface style for your iOS app](../choosing-a-specific-interface-style-for-your-ios-app.md)

<a id="Discussion"></a>

## Discussion

Use this property to force the view to always adopt a light or dark interface style. The default value of this property is [UIUserInterfaceStyle.unspecified](../uiuserinterfacestyle/unspecified.md), which causes the view to inherit the interface style from a parent view or view controller. If you assign a different value, the new style applies to the view and all of the subviews owned by the same view controller. (If the view hierarchy contains the root view of an embedded child view controller, the child view controller and its views do not inherit the interface style.) If the view is a [UIWindow](../uiwindow.md) object, the new style applies to everything in the window, including the root view controller and all presented content.

## See Also

### Adjusting the user interface

- [semanticContentAttribute](semanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.
- [effectiveUserInterfaceLayoutDirection](effectiveuserinterfacelayoutdirection.md): The user interface layout direction appropriate for arranging the immediate content of the view.
- [userInterfaceLayoutDirection(for:)](userinterfacelayoutdirection%28for_%29.md): Returns the user interface direction for the given semantic content attribute.
- [userInterfaceLayoutDirection(for:relativeTo:)](userinterfacelayoutdirection%28for_relativeto_%29.md): Returns the layout direction implied by the specified semantic content attribute, relative to the specified layout direction.

# overrideUserInterfaceStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The user interface style adopted by the view and all of its subviews.

## Declaration

```objectivec
@property (nonatomic) UIUserInterfaceStyle overrideUserInterfaceStyle;
```

## Mentioned In

- [Choosing a specific interface style for your iOS app](../choosing-a-specific-interface-style-for-your-ios-app.md)

<a id="Discussion"></a>

## Discussion

Use this property to force the view to always adopt a light or dark interface style. The default value of this property is [UIUserInterfaceStyleUnspecified](../uiuserinterfacestyle/unspecified.md), which causes the view to inherit the interface style from a parent view or view controller. If you assign a different value, the new style applies to the view and all of the subviews owned by the same view controller. (If the view hierarchy contains the root view of an embedded child view controller, the child view controller and its views do not inherit the interface style.) If the view is a [UIWindow](../uiwindow.md) object, the new style applies to everything in the window, including the root view controller and all presented content.

## See Also

### Adjusting the user interface

- [semanticContentAttribute](semanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.
- [effectiveUserInterfaceLayoutDirection](effectiveuserinterfacelayoutdirection.md): The user interface layout direction appropriate for arranging the immediate content of the view.
- [userInterfaceLayoutDirectionForSemanticContentAttribute:](userinterfacelayoutdirection%28for_%29.md): Returns the user interface direction for the given semantic content attribute.
- [userInterfaceLayoutDirectionForSemanticContentAttribute:relativeToLayoutDirection:](userinterfacelayoutdirection%28for_relativeto_%29.md): Returns the layout direction implied by the specified semantic content attribute, relative to the specified layout direction.
