> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitem/init(text:images:imagetitles:)

# init(text:images:imageTitles:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 17.4+ (deprecated in 26.0) · iPadOS 17.4+ (deprecated in 26.0) · Mac Catalyst 17.4+ (deprecated in 26.0)

Initialize a list image row item with a text string, an array of @c UIImage for the grid of images, and an array of @c NSString titles, one displayed below each image.

> Use initWithText:elements:allowsMultipleLines:

## Declaration

```swift
init(text: String, images: [UIImage], imageTitles: [String])
```

<a id="discussion"></a>

## Discussion

The number of titles in the @c imageTitles list should be equal to the number of images in the

When providing an image, your app should provide a @c UIImage that is display-ready. If necessary for the image, provide light and dark styles by using an asset from your asset catalog, prepared with light and dark styles or by using @c UIImageAsset to combine two @c UIImage instances into a single image with both styles.

UIImageAsset is used to combine multiple UIImages with different trait collections into a single UIImage.

> **Note**

> The expected image size is given by +\[CPListImageRowItem maximumImageSize\]. Images provided will be resized to this size if necessary.

To properly size your images, your app should size them to the display scale of the car screen. See -\[CPInterfaceController carTraitCollection\].

## See Also

### Deprecated

- [init(text:images:)](init%28text_images_%29.md): Deprecated. Initialize a list image row item with a text string and an array of @c UIImage for the grid of images.
- [gridImages](gridimages.md): Deprecated. Read-only access to the grid images shown in a row in the cell.
- [imageTitles](imagetitles.md): Deprecated. The titles displayed for each image in this image row item.
- [maximumImageSize](maximumimagesize.md): Deprecated. The expected image size for the grid images in your @c CPListImageRowItem. Images provided will be resized to this size.
- [update(\_:)](update%28__%29.md): Deprecated. Update the images displayed in this image row item. If this image row item is already displayed in a list template, this image row item will be automatically reloaded.

# initWithText:images:imageTitles: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ (deprecated in 26.0) · iPadOS 17.4+ (deprecated in 26.0) · Mac Catalyst 17.4+ (deprecated in 26.0)

Initialize a list image row item with a text string, an array of @c UIImage for the grid of images, and an array of @c NSString titles, one displayed below each image.

> Use initWithText:elements:allowsMultipleLines:

## Declaration

```objectivec
- (instancetype) initWithText:(NSString *) text images:(NSArray<UIImage *> *) images imageTitles:(NSArray<NSString *> *) imageTitles;
```

<a id="discussion"></a>

## Discussion

The number of titles in the @c imageTitles list should be equal to the number of images in the

When providing an image, your app should provide a @c UIImage that is display-ready. If necessary for the image, provide light and dark styles by using an asset from your asset catalog, prepared with light and dark styles or by using @c UIImageAsset to combine two @c UIImage instances into a single image with both styles.

UIImageAsset is used to combine multiple UIImages with different trait collections into a single UIImage.

> **Note**

> The expected image size is given by +\[CPListImageRowItem maximumImageSize\]. Images provided will be resized to this size if necessary.

To properly size your images, your app should size them to the display scale of the car screen. See -\[CPInterfaceController carTraitCollection\].

## See Also

### Deprecated

- [initWithText:images:](init%28text_images_%29.md): Deprecated. Initialize a list image row item with a text string and an array of @c UIImage for the grid of images.
- [gridImages](gridimages.md): Deprecated. Read-only access to the grid images shown in a row in the cell.
- [imageTitles](imagetitles.md): Deprecated. The titles displayed for each image in this image row item.
- [maximumImageSize](maximumimagesize.md): Deprecated. The expected image size for the grid images in your @c CPListImageRowItem. Images provided will be resized to this size.
- [updateImages:](update%28__%29.md): Deprecated. Update the images displayed in this image row item. If this image row item is already displayed in a list template, this image row item will be automatically reloaded.
