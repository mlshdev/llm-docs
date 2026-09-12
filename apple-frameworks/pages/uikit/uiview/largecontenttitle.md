> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/largecontenttitle](https://developer.apple.com/documentation/uikit/uiview/largecontenttitle)

# largeContentTitle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A string that describes the view in the large content viewer.

## Declaration

```swift
var largeContentTitle: String? { get set }
```

<a id="Discussion"></a>

## Discussion

To present content in the large content viewer, you can provide either [largeContentTitle](../uilargecontentvieweritem/largecontenttitle.md) or [largeContentImage](../uilargecontentvieweritem/largecontentimage.md), or both.

This property defaults to an appropriate value for UIKit classes; otherwise, it’s `nil`.

## See Also

### Modifying the accessibility behavior

- [accessibilityIgnoresInvertColors](accessibilityignoresinvertcolors.md): A Boolean value indicating whether the view ignores an accessibility request to invert its colors.
- [largeContentImage](largecontentimage.md): An image that represents the view in the large content viewer.
- [largeContentImageInsets](largecontentimageinsets.md): Insets to adjust the position of the view’s image so it appears centered in the large content viewer.
- [scalesLargeContentImage](scaleslargecontentimage.md): A Boolean value that indicates whether the large content viewer scales the item’s image to a larger size.
- [showsLargeContentViewer](showslargecontentviewer.md): A Boolean value that indicates whether to show the view in the large content viewer.

# largeContentTitle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A string that describes the view in the large content viewer.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * largeContentTitle;
```

<a id="Discussion"></a>

## Discussion

To present content in the large content viewer, you can provide either [largeContentTitle](../uilargecontentvieweritem/largecontenttitle.md) or [largeContentImage](../uilargecontentvieweritem/largecontentimage.md), or both.

This property defaults to an appropriate value for UIKit classes; otherwise, it’s `nil`.

## See Also

### Modifying the accessibility behavior

- [accessibilityIgnoresInvertColors](accessibilityignoresinvertcolors.md): A Boolean value indicating whether the view ignores an accessibility request to invert its colors.
- [largeContentImage](largecontentimage.md): An image that represents the view in the large content viewer.
- [largeContentImageInsets](largecontentimageinsets.md): Insets to adjust the position of the view’s image so it appears centered in the large content viewer.
- [scalesLargeContentImage](scaleslargecontentimage.md): A Boolean value that indicates whether the large content viewer scales the item’s image to a larger size.
- [showsLargeContentViewer](showslargecontentviewer.md): A Boolean value that indicates whether to show the view in the large content viewer.
