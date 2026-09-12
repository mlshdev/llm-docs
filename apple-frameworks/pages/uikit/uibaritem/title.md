> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibaritem/title](https://developer.apple.com/documentation/uikit/uibaritem/title)

# title (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The title displayed on the item.

## Declaration

```swift
var title: String? { get set }
```

<a id="Discussion"></a>

## Discussion

You should set this property before adding the item to a bar. The default value is `nil`.

## See Also

### Getting and setting properties

- [image](image.md): The image used to represent the item.
- [landscapeImagePhone](landscapeimagephone.md): The image to use to represent the item in landscape orientation when using the iPhone appearance idiom.
- [largeContentSizeImage](largecontentsizeimage.md): The image to display for users who are blind or have low vision.
- [imageInsets](imageinsets.md): The image inset or outset for each edge.
- [landscapeImagePhoneInsets](landscapeimagephoneinsets.md): The image inset or outset for each edge of the image in landscape orientation when using the iPhone appearance idiom.
- [largeContentSizeImageInsets](largecontentsizeimageinsets.md): The insets to apply to the bar item’s large image when displaying the image in an assistive UI.
- [isEnabled](isenabled.md): A Boolean value indicating whether the item is enabled.
- [tag](tag.md): The bar item’s tag, an app-supplied integer that you can use to identify bar item objects in your app.

# title (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The title displayed on the item.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * title;
```

<a id="Discussion"></a>

## Discussion

You should set this property before adding the item to a bar. The default value is `nil`.

## See Also

### Getting and setting properties

- [image](image.md): The image used to represent the item.
- [landscapeImagePhone](landscapeimagephone.md): The image to use to represent the item in landscape orientation when using the iPhone appearance idiom.
- [largeContentSizeImage](largecontentsizeimage.md): The image to display for users who are blind or have low vision.
- [imageInsets](imageinsets.md): The image inset or outset for each edge.
- [landscapeImagePhoneInsets](landscapeimagephoneinsets.md): The image inset or outset for each edge of the image in landscape orientation when using the iPhone appearance idiom.
- [largeContentSizeImageInsets](largecontentsizeimageinsets.md): The insets to apply to the bar item’s large image when displaying the image in an assistive UI.
- [enabled](isenabled.md): A Boolean value indicating whether the item is enabled.
- [tag](tag.md): The bar item’s tag, an app-supplied integer that you can use to identify bar item objects in your app.
