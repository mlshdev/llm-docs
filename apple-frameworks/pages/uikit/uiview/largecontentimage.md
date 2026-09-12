> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/largecontentimage](https://developer.apple.com/documentation/uikit/uiview/largecontentimage)

# largeContentImage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An image that represents the view in the large content viewer.

## Declaration

```swift
var largeContentImage: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

To present content in the large content viewer, you can provide either [largeContentTitle](largecontenttitle.md) or [largeContentImage](largecontentimage.md), or both.

This property defaults to an appropriate value for UIKit classes; otherwise, it’s `nil`.

## See Also

### Modifying the accessibility behavior

- [accessibilityIgnoresInvertColors](accessibilityignoresinvertcolors.md): A Boolean value indicating whether the view ignores an accessibility request to invert its colors.
- [largeContentImageInsets](largecontentimageinsets.md): Insets to adjust the position of the view’s image so it appears centered in the large content viewer.
- [largeContentTitle](largecontenttitle.md): A string that describes the view in the large content viewer.
- [scalesLargeContentImage](scaleslargecontentimage.md): A Boolean value that indicates whether the large content viewer scales the item’s image to a larger size.
- [showsLargeContentViewer](showslargecontentviewer.md): A Boolean value that indicates whether to show the view in the large content viewer.

# largeContentImage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An image that represents the view in the large content viewer.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) UIImage * largeContentImage;
```

<a id="Discussion"></a>

## Discussion

To present content in the large content viewer, you can provide either [largeContentTitle](largecontenttitle.md) or [largeContentImage](largecontentimage.md), or both.

This property defaults to an appropriate value for UIKit classes; otherwise, it’s `nil`.

## See Also

### Modifying the accessibility behavior

- [accessibilityIgnoresInvertColors](accessibilityignoresinvertcolors.md): A Boolean value indicating whether the view ignores an accessibility request to invert its colors.
- [largeContentImageInsets](largecontentimageinsets.md): Insets to adjust the position of the view’s image so it appears centered in the large content viewer.
- [largeContentTitle](largecontenttitle.md): A string that describes the view in the large content viewer.
- [scalesLargeContentImage](scaleslargecontentimage.md): A Boolean value that indicates whether the large content viewer scales the item’s image to a larger size.
- [showsLargeContentViewer](showslargecontentviewer.md): A Boolean value that indicates whether to show the view in the large content viewer.
