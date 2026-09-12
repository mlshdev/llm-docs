> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/semanticcontentattribute](https://developer.apple.com/documentation/uikit/uiview/semanticcontentattribute)

# semanticContentAttribute (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.

## Declaration

```swift
var semanticContentAttribute: UISemanticContentAttribute { get set }
```

<a id="Discussion"></a>

## Discussion

Some views should not flip when switching between left-to-right and right-to-left layouts. For example, the view is part of the playback controls or represents physical directions (up, down, left, right) that don’t change. Instead of thinking about whether or not a view should change its orientation, select the semantic content attribute that best describes your view.

When creating a view that contains subviews, you can use the [userInterfaceLayoutDirection(for:)](userinterfacelayoutdirection%28for_%29.md) class method to determine whether the subviews should be flipped, and lay out the views in the appropriate order.

For a list of possible values, see [UISemanticContentAttribute](../uisemanticcontentattribute.md).

## See Also

### Adjusting the user interface

- [overrideUserInterfaceStyle](overrideuserinterfacestyle.md): The user interface style adopted by the view and all of its subviews.
- [effectiveUserInterfaceLayoutDirection](effectiveuserinterfacelayoutdirection.md): The user interface layout direction appropriate for arranging the immediate content of the view.
- [userInterfaceLayoutDirection(for:)](userinterfacelayoutdirection%28for_%29.md): Returns the user interface direction for the given semantic content attribute.
- [userInterfaceLayoutDirection(for:relativeTo:)](userinterfacelayoutdirection%28for_relativeto_%29.md): Returns the layout direction implied by the specified semantic content attribute, relative to the specified layout direction.

# semanticContentAttribute (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.

## Declaration

```objectivec
@property (nonatomic) UISemanticContentAttribute semanticContentAttribute;
```

<a id="Discussion"></a>

## Discussion

Some views should not flip when switching between left-to-right and right-to-left layouts. For example, the view is part of the playback controls or represents physical directions (up, down, left, right) that don’t change. Instead of thinking about whether or not a view should change its orientation, select the semantic content attribute that best describes your view.

When creating a view that contains subviews, you can use the [userInterfaceLayoutDirectionForSemanticContentAttribute:](userinterfacelayoutdirection%28for_%29.md) class method to determine whether the subviews should be flipped, and lay out the views in the appropriate order.

For a list of possible values, see [UISemanticContentAttribute](../uisemanticcontentattribute.md).

## See Also

### Adjusting the user interface

- [overrideUserInterfaceStyle](overrideuserinterfacestyle.md): The user interface style adopted by the view and all of its subviews.
- [effectiveUserInterfaceLayoutDirection](effectiveuserinterfacelayoutdirection.md): The user interface layout direction appropriate for arranging the immediate content of the view.
- [userInterfaceLayoutDirectionForSemanticContentAttribute:](userinterfacelayoutdirection%28for_%29.md): Returns the user interface direction for the given semantic content attribute.
- [userInterfaceLayoutDirectionForSemanticContentAttribute:relativeToLayoutDirection:](userinterfacelayoutdirection%28for_relativeto_%29.md): Returns the layout direction implied by the specified semantic content attribute, relative to the specified layout direction.
