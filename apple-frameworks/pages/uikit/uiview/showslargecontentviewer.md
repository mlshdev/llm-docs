> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/showslargecontentviewer](https://developer.apple.com/documentation/uikit/uiview/showslargecontentviewer)

# showsLargeContentViewer (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether to show the view in the large content viewer.

## Declaration

```swift
var showsLargeContentViewer: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

For this property to take effect, the view must have a [UILargeContentViewerInteraction](../uilargecontentviewerinteraction.md).

## See Also

### Modifying the accessibility behavior

- [accessibilityIgnoresInvertColors](accessibilityignoresinvertcolors.md): A Boolean value indicating whether the view ignores an accessibility request to invert its colors.
- [largeContentImage](largecontentimage.md): An image that represents the view in the large content viewer.
- [largeContentImageInsets](largecontentimageinsets.md): Insets to adjust the position of the view’s image so it appears centered in the large content viewer.
- [largeContentTitle](largecontenttitle.md): A string that describes the view in the large content viewer.
- [scalesLargeContentImage](scaleslargecontentimage.md): A Boolean value that indicates whether the large content viewer scales the item’s image to a larger size.

# showsLargeContentViewer (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether to show the view in the large content viewer.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL showsLargeContentViewer;
```

<a id="Discussion"></a>

## Discussion

For this property to take effect, the view must have a [UILargeContentViewerInteraction](../uilargecontentviewerinteraction.md).

## See Also

### Modifying the accessibility behavior

- [accessibilityIgnoresInvertColors](accessibilityignoresinvertcolors.md): A Boolean value indicating whether the view ignores an accessibility request to invert its colors.
- [largeContentImage](largecontentimage.md): An image that represents the view in the large content viewer.
- [largeContentImageInsets](largecontentimageinsets.md): Insets to adjust the position of the view’s image so it appears centered in the large content viewer.
- [largeContentTitle](largecontenttitle.md): A string that describes the view in the large content viewer.
- [scalesLargeContentImage](scaleslargecontentimage.md): A Boolean value that indicates whether the large content viewer scales the item’s image to a larger size.
