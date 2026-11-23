> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitem/update(_:)

# update(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 26.0) · iPadOS 14.0+ (deprecated in 26.0) · Mac Catalyst 14.0+ (deprecated in 26.0)

Update the images displayed in this image row item. If this image row item is already displayed in a list template, this image row item will be automatically reloaded.

> No longer supported

## Declaration

```swift
func update(_ gridImages: [UIImage])
```

<a id="discussion"></a>

## Discussion

When providing an image, your app should provide a @c UIImage that is display-ready. If necessary for the image, provide light and dark styles by using an asset from your asset catalog, prepared with light and dark styles or by using @c UIImageAsset to combine two @c UIImage instances into a single image with both styles.

UIImageAsset is used to combine multiple UIImages with different trait collections into a single UIImage.

the @c text property of the image row item.

the @c imageTitles property of the image row item.

## See Also

### Deprecated

- [init(text:images:)](init%28text_images_%29.md): Deprecated. Initialize a list image row item with a text string and an array of @c UIImage for the grid of images.
- [init(text:images:imageTitles:)](init%28text_images_imagetitles_%29.md): Deprecated. Initialize a list image row item with a text string, an array of @c UIImage for the grid of images, and an array of @c NSString titles, one displayed below each image.
- [gridImages](gridimages.md): Deprecated. Read-only access to the grid images shown in a row in the cell.
- [imageTitles](imagetitles.md): Deprecated. The titles displayed for each image in this image row item.
- [maximumImageSize](maximumimagesize.md): Deprecated. The expected image size for the grid images in your @c CPListImageRowItem. Images provided will be resized to this size.

# updateImages: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 26.0) · iPadOS 14.0+ (deprecated in 26.0) · Mac Catalyst 14.0+ (deprecated in 26.0)

Update the images displayed in this image row item. If this image row item is already displayed in a list template, this image row item will be automatically reloaded.

> No longer supported

## Declaration

```objectivec
- (void) updateImages:(NSArray<UIImage *> *) gridImages;
```

<a id="discussion"></a>

## Discussion

When providing an image, your app should provide a @c UIImage that is display-ready. If necessary for the image, provide light and dark styles by using an asset from your asset catalog, prepared with light and dark styles or by using @c UIImageAsset to combine two @c UIImage instances into a single image with both styles.

UIImageAsset is used to combine multiple UIImages with different trait collections into a single UIImage.

the @c text property of the image row item.

the @c imageTitles property of the image row item.

## See Also

### Deprecated

- [initWithText:images:](init%28text_images_%29.md): Deprecated. Initialize a list image row item with a text string and an array of @c UIImage for the grid of images.
- [initWithText:images:imageTitles:](init%28text_images_imagetitles_%29.md): Deprecated. Initialize a list image row item with a text string, an array of @c UIImage for the grid of images, and an array of @c NSString titles, one displayed below each image.
- [gridImages](gridimages.md): Deprecated. Read-only access to the grid images shown in a row in the cell.
- [imageTitles](imagetitles.md): Deprecated. The titles displayed for each image in this image row item.
- [maximumImageSize](maximumimagesize.md): Deprecated. The expected image size for the grid images in your @c CPListImageRowItem. Images provided will be resized to this size.
