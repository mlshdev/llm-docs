> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilargecontentvieweritem/scaleslargecontentimage](https://developer.apple.com/documentation/uikit/uilargecontentvieweritem/scaleslargecontentimage)

# scalesLargeContentImage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the view scales the item’s image to a larger size or not.

## Declaration

```swift
var scalesLargeContentImage: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If [false](https://developer.apple.com/documentation/swift/false), the viewer displays the image at its intrinsic size.

> **Tip**

>  For best results when scaling, use a PDF asset with the Preserve Vector Data checked in the asset catalog.

## See Also

### Configuring display properties

- [largeContentTitle](largecontenttitle.md): A string that describes an item to display in the large content viewer.
- [largeContentImage](largecontentimage.md): An image that represents an item to display in the large content viewer.
- [largeContentImageInsets](largecontentimageinsets.md): Insets to adjust the position of the item’s image so it appears visually centered in the large content viewer.

# scalesLargeContentImage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the view scales the item’s image to a larger size or not.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL scalesLargeContentImage;
```

<a id="Discussion"></a>

## Discussion

If [false](https://developer.apple.com/documentation/swift/false), the viewer displays the image at its intrinsic size.

> **Tip**

>  For best results when scaling, use a PDF asset with the Preserve Vector Data checked in the asset catalog.

## See Also

### Configuring display properties

- [largeContentTitle](largecontenttitle.md): A string that describes an item to display in the large content viewer.
- [largeContentImage](largecontentimage.md): An image that represents an item to display in the large content viewer.
- [largeContentImageInsets](largecontentimageinsets.md): Insets to adjust the position of the item’s image so it appears visually centered in the large content viewer.
