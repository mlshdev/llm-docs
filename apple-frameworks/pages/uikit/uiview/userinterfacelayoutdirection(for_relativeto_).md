> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/userinterfacelayoutdirection(for:relativeto:)](https://developer.apple.com/documentation/uikit/uiview/userinterfacelayoutdirection(for:relativeto:))

# userInterfaceLayoutDirection(for:relativeTo:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Returns the layout direction implied by the specified semantic content attribute, relative to the specified layout direction.

## Declaration

```swift
class func userInterfaceLayoutDirection(for semanticContentAttribute: UISemanticContentAttribute, relativeTo layoutDirection: UIUserInterfaceLayoutDirection) -> UIUserInterfaceLayoutDirection
```

## Parameters

- `semanticContentAttribute`: The semantic content attribute for a view.
- `layoutDirection`: The user interface layout direction ([UIUserInterfaceLayoutDirection.leftToRight](../uiuserinterfacelayoutdirection/lefttoright.md) or [UIUserInterfaceLayoutDirection.rightToLeft](../uiuserinterfacelayoutdirection/righttoleft.md)).

<a id="return-value"></a>

## Return Value

The layout direction implied by the semantic content attribute and relative to the layout direction.

<a id="Discussion"></a>

## Discussion

For example, when this method is passed a layout direction of [UIUserInterfaceLayoutDirection.rightToLeft](../uiuserinterfacelayoutdirection/righttoleft.md) and a semantic content attribute of [UISemanticContentAttribute.playback](../uisemanticcontentattribute/playback.md), it returns [UIUserInterfaceLayoutDirection.leftToRight](../uiuserinterfacelayoutdirection/lefttoright.md). Although layout and drawing code can use this method to determine how to arrange elements, it might be easier to query the container view’s [effectiveUserInterfaceLayoutDirection](effectiveuserinterfacelayoutdirection.md) property instead.

## See Also

### Adjusting the user interface

- [overrideUserInterfaceStyle](overrideuserinterfacestyle.md): The user interface style adopted by the view and all of its subviews.
- [semanticContentAttribute](semanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.
- [effectiveUserInterfaceLayoutDirection](effectiveuserinterfacelayoutdirection.md): The user interface layout direction appropriate for arranging the immediate content of the view.
- [userInterfaceLayoutDirection(for:)](userinterfacelayoutdirection%28for_%29.md): Returns the user interface direction for the given semantic content attribute.

# userInterfaceLayoutDirectionForSemanticContentAttribute:relativeToLayoutDirection: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Returns the layout direction implied by the specified semantic content attribute, relative to the specified layout direction.

## Declaration

```objectivec
+ (UIUserInterfaceLayoutDirection) userInterfaceLayoutDirectionForSemanticContentAttribute:(UISemanticContentAttribute) semanticContentAttribute relativeToLayoutDirection:(UIUserInterfaceLayoutDirection) layoutDirection;
```

## Parameters

- `semanticContentAttribute`: The semantic content attribute for a view.
- `layoutDirection`: The user interface layout direction ([UIUserInterfaceLayoutDirectionLeftToRight](../uiuserinterfacelayoutdirection/lefttoright.md) or [UIUserInterfaceLayoutDirectionRightToLeft](../uiuserinterfacelayoutdirection/righttoleft.md)).

<a id="return-value"></a>

## Return Value

The layout direction implied by the semantic content attribute and relative to the layout direction.

<a id="Discussion"></a>

## Discussion

For example, when this method is passed a layout direction of [UIUserInterfaceLayoutDirectionRightToLeft](../uiuserinterfacelayoutdirection/righttoleft.md) and a semantic content attribute of [UISemanticContentAttributePlayback](../uisemanticcontentattribute/playback.md), it returns [UIUserInterfaceLayoutDirectionLeftToRight](../uiuserinterfacelayoutdirection/lefttoright.md). Although layout and drawing code can use this method to determine how to arrange elements, it might be easier to query the container view’s [effectiveUserInterfaceLayoutDirection](effectiveuserinterfacelayoutdirection.md) property instead.

## See Also

### Adjusting the user interface

- [overrideUserInterfaceStyle](overrideuserinterfacestyle.md): The user interface style adopted by the view and all of its subviews.
- [semanticContentAttribute](semanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.
- [effectiveUserInterfaceLayoutDirection](effectiveuserinterfacelayoutdirection.md): The user interface layout direction appropriate for arranging the immediate content of the view.
- [userInterfaceLayoutDirectionForSemanticContentAttribute:](userinterfacelayoutdirection%28for_%29.md): Returns the user interface direction for the given semantic content attribute.
