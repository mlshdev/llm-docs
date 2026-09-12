> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilargecontentvieweritem/largecontentimage](https://developer.apple.com/documentation/uikit/uilargecontentvieweritem/largecontentimage)

# largeContentImage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An image that represents an item to display in the large content viewer.

## Declaration

```swift
var largeContentImage: UIImage? { get }
```

<a id="Discussion"></a>

## Discussion

To present content in the large content viewer, you can provide either [largeContentTitle](largecontenttitle.md) or [largeContentImage](largecontentimage.md), or both.

This property defaults to an appropriate value for UIKit classes, otherwise `nil`.

## See Also

### Configuring display properties

- [largeContentTitle](largecontenttitle.md): A string that describes an item to display in the large content viewer.
- [largeContentImageInsets](largecontentimageinsets.md): Insets to adjust the position of the item’s image so it appears visually centered in the large content viewer.
- [scalesLargeContentImage](scaleslargecontentimage.md): A Boolean value that indicates whether the view scales the item’s image to a larger size or not.

# largeContentImage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An image that represents an item to display in the large content viewer.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIImage * largeContentImage;
```

<a id="Discussion"></a>

## Discussion

To present content in the large content viewer, you can provide either [largeContentTitle](largecontenttitle.md) or [largeContentImage](largecontentimage.md), or both.

This property defaults to an appropriate value for UIKit classes, otherwise `nil`.

## See Also

### Configuring display properties

- [largeContentTitle](largecontenttitle.md): A string that describes an item to display in the large content viewer.
- [largeContentImageInsets](largecontentimageinsets.md): Insets to adjust the position of the item’s image so it appears visually centered in the large content viewer.
- [scalesLargeContentImage](scaleslargecontentimage.md): A Boolean value that indicates whether the view scales the item’s image to a larger size or not.
