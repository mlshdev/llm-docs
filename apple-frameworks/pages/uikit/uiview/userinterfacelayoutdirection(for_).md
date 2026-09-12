> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/userinterfacelayoutdirection(for:)](https://developer.apple.com/documentation/uikit/uiview/userinterfacelayoutdirection(for:))

# userInterfaceLayoutDirection(for:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns the user interface direction for the given semantic content attribute.

## Declaration

```swift
class func userInterfaceLayoutDirection(for attribute: UISemanticContentAttribute) -> UIUserInterfaceLayoutDirection
```

## Parameters

- `attribute`: The semantic content attribute for a view.

<a id="return-value"></a>

## Return Value

The user interface layout direction (left-to-right or right-to-left).

<a id="Discussion"></a>

## Discussion

When creating a view that contains subviews, you can use this method to determine whether the subviews should be flipped, and lay out the views in the appropriate order.

## See Also

### Adjusting the user interface

- [overrideUserInterfaceStyle](overrideuserinterfacestyle.md): The user interface style adopted by the view and all of its subviews.
- [semanticContentAttribute](semanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.
- [effectiveUserInterfaceLayoutDirection](effectiveuserinterfacelayoutdirection.md): The user interface layout direction appropriate for arranging the immediate content of the view.
- [userInterfaceLayoutDirection(for:relativeTo:)](userinterfacelayoutdirection%28for_relativeto_%29.md): Returns the layout direction implied by the specified semantic content attribute, relative to the specified layout direction.

# userInterfaceLayoutDirectionForSemanticContentAttribute: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns the user interface direction for the given semantic content attribute.

## Declaration

```objectivec
+ (UIUserInterfaceLayoutDirection) userInterfaceLayoutDirectionForSemanticContentAttribute:(UISemanticContentAttribute) attribute;
```

## Parameters

- `attribute`: The semantic content attribute for a view.

<a id="return-value"></a>

## Return Value

The user interface layout direction (left-to-right or right-to-left).

<a id="Discussion"></a>

## Discussion

When creating a view that contains subviews, you can use this method to determine whether the subviews should be flipped, and lay out the views in the appropriate order.

## See Also

### Adjusting the user interface

- [overrideUserInterfaceStyle](overrideuserinterfacestyle.md): The user interface style adopted by the view and all of its subviews.
- [semanticContentAttribute](semanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.
- [effectiveUserInterfaceLayoutDirection](effectiveuserinterfacelayoutdirection.md): The user interface layout direction appropriate for arranging the immediate content of the view.
- [userInterfaceLayoutDirectionForSemanticContentAttribute:relativeToLayoutDirection:](userinterfacelayoutdirection%28for_relativeto_%29.md): Returns the layout direction implied by the specified semantic content attribute, relative to the specified layout direction.
