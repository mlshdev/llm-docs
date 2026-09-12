> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/accessibilityignoresinvertcolors](https://developer.apple.com/documentation/uikit/uiview/accessibilityignoresinvertcolors)

# accessibilityIgnoresInvertColors (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value indicating whether the view ignores an accessibility request to invert its colors.

## Declaration

```swift
var accessibilityIgnoresInvertColors: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Inverting colors is often used to help users with light or color sensitivities to make bright colors darker. However, this behavior can have a destructive impact on images and videos. If inverting the colors would have a negative impact on your view’s content, set this property to [true](https://developer.apple.com/documentation/swift/true) to prevent it from inverting its colors. Setting the property to [true](https://developer.apple.com/documentation/swift/true) prevents the system from inverting the colors of the view and all of its subviews.

## See Also

### Modifying the accessibility behavior

- [largeContentImage](largecontentimage.md): An image that represents the view in the large content viewer.
- [largeContentImageInsets](largecontentimageinsets.md): Insets to adjust the position of the view’s image so it appears centered in the large content viewer.
- [largeContentTitle](largecontenttitle.md): A string that describes the view in the large content viewer.
- [scalesLargeContentImage](scaleslargecontentimage.md): A Boolean value that indicates whether the large content viewer scales the item’s image to a larger size.
- [showsLargeContentViewer](showslargecontentviewer.md): A Boolean value that indicates whether to show the view in the large content viewer.

# accessibilityIgnoresInvertColors (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value indicating whether the view ignores an accessibility request to invert its colors.

## Declaration

```objectivec
@property (nonatomic) BOOL accessibilityIgnoresInvertColors;
```

<a id="Discussion"></a>

## Discussion

Inverting colors is often used to help users with light or color sensitivities to make bright colors darker. However, this behavior can have a destructive impact on images and videos. If inverting the colors would have a negative impact on your view’s content, set this property to [true](https://developer.apple.com/documentation/swift/true) to prevent it from inverting its colors. Setting the property to [true](https://developer.apple.com/documentation/swift/true) prevents the system from inverting the colors of the view and all of its subviews.

## See Also

### Modifying the accessibility behavior

- [largeContentImage](largecontentimage.md): An image that represents the view in the large content viewer.
- [largeContentImageInsets](largecontentimageinsets.md): Insets to adjust the position of the view’s image so it appears centered in the large content viewer.
- [largeContentTitle](largecontenttitle.md): A string that describes the view in the large content viewer.
- [scalesLargeContentImage](scaleslargecontentimage.md): A Boolean value that indicates whether the large content viewer scales the item’s image to a larger size.
- [showsLargeContentViewer](showslargecontentviewer.md): A Boolean value that indicates whether to show the view in the large content viewer.
