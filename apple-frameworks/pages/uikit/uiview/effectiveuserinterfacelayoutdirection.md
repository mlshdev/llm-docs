> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/effectiveuserinterfacelayoutdirection](https://developer.apple.com/documentation/uikit/uiview/effectiveuserinterfacelayoutdirection)

# effectiveUserInterfaceLayoutDirection (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The user interface layout direction appropriate for arranging the immediate content of the view.

## Declaration

```swift
var effectiveUserInterfaceLayoutDirection: UIUserInterfaceLayoutDirection { get }
```

<a id="Discussion"></a>

## Discussion

When a view’s immediate content is being arranged or drawn, you should always consult the value of this property. In addition, note that you can’t assume that the value propagates through the view’s subtree.

## See Also

### Adjusting the user interface

- [overrideUserInterfaceStyle](overrideuserinterfacestyle.md): The user interface style adopted by the view and all of its subviews.
- [semanticContentAttribute](semanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.
- [userInterfaceLayoutDirection(for:)](userinterfacelayoutdirection%28for_%29.md): Returns the user interface direction for the given semantic content attribute.
- [userInterfaceLayoutDirection(for:relativeTo:)](userinterfacelayoutdirection%28for_relativeto_%29.md): Returns the layout direction implied by the specified semantic content attribute, relative to the specified layout direction.

# effectiveUserInterfaceLayoutDirection (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The user interface layout direction appropriate for arranging the immediate content of the view.

## Declaration

```objectivec
@property (nonatomic, readonly) UIUserInterfaceLayoutDirection effectiveUserInterfaceLayoutDirection;
```

<a id="Discussion"></a>

## Discussion

When a view’s immediate content is being arranged or drawn, you should always consult the value of this property. In addition, note that you can’t assume that the value propagates through the view’s subtree.

## See Also

### Adjusting the user interface

- [overrideUserInterfaceStyle](overrideuserinterfacestyle.md): The user interface style adopted by the view and all of its subviews.
- [semanticContentAttribute](semanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.
- [userInterfaceLayoutDirectionForSemanticContentAttribute:](userinterfacelayoutdirection%28for_%29.md): Returns the user interface direction for the given semantic content attribute.
- [userInterfaceLayoutDirectionForSemanticContentAttribute:relativeToLayoutDirection:](userinterfacelayoutdirection%28for_relativeto_%29.md): Returns the layout direction implied by the specified semantic content attribute, relative to the specified layout direction.
