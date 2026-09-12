> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistsection/headerimage](https://developer.apple.com/documentation/carplay/cplistsection/headerimage)

# headerImage (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

An image that the section header displays.

## Declaration

```swift
@NSCopying var headerImage: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

The maximum size of the section header image is [CPMaximumListSectionImageSize](../cpmaximumlistsectionimagesize.md).

Provide a [UIImage](https://developer.apple.com/documentation/uikit/uiimage) that is display-ready. To provide an image that includes light and dark styles, use an asset from your asset catalog that includes both styles, or use a [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) to combine two [UIImage](https://developer.apple.com/documentation/uikit/uiimage) instances into a single image with both styles.

To size your header image properly, consider the display scale of the car screen. Use [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) to combine multiple images with different trait collections into a single image. For more information about trait collections for CarPlay, see [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md).

## See Also

### Configuring Section Headers

- [headerButton](headerbutton.md): A button that the section header displays.
- [headerSubtitle](headersubtitle.md): A string that the header displays as a subtitle.

# headerImage (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

An image that the section header displays.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIImage * headerImage;
```

<a id="Discussion"></a>

## Discussion

The maximum size of the section header image is [CPMaximumListSectionImageSize](../cpmaximumlistsectionimagesize.md).

Provide a [UIImage](https://developer.apple.com/documentation/uikit/uiimage) that is display-ready. To provide an image that includes light and dark styles, use an asset from your asset catalog that includes both styles, or use a [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) to combine two [UIImage](https://developer.apple.com/documentation/uikit/uiimage) instances into a single image with both styles.

To size your header image properly, consider the display scale of the car screen. Use [UIImageAsset](https://developer.apple.com/documentation/uikit/uiimageasset) to combine multiple images with different trait collections into a single image. For more information about trait collections for CarPlay, see [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md).

## See Also

### Configuring Section Headers

- [headerButton](headerbutton.md): A button that the section header displays.
- [headerSubtitle](headersubtitle.md): A string that the header displays as a subtitle.
