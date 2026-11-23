> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitem/gridimages

# gridImages (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 26.0) · iPadOS 14.0+ (deprecated in 26.0) · Mac Catalyst 14.0+ (deprecated in 26.0)

Read-only access to the grid images shown in a row in the cell.

> No longer supported

## Declaration

```swift
var gridImages: [UIImage] { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

> The maximum number of images shown is @c CPMaximumNumberOfGridImages. If you supply more images, only the first @c CPMaximumNumberOfGridImages will be used.

## See Also

### Deprecated

- [init(text:images:)](init%28text_images_%29.md): Deprecated. Initialize a list image row item with a text string and an array of @c UIImage for the grid of images.
- [init(text:images:imageTitles:)](init%28text_images_imagetitles_%29.md): Deprecated. Initialize a list image row item with a text string, an array of @c UIImage for the grid of images, and an array of @c NSString titles, one displayed below each image.
- [imageTitles](imagetitles.md): Deprecated. The titles displayed for each image in this image row item.
- [maximumImageSize](maximumimagesize.md): Deprecated. The expected image size for the grid images in your @c CPListImageRowItem. Images provided will be resized to this size.
- [update(\_:)](update%28__%29.md): Deprecated. Update the images displayed in this image row item. If this image row item is already displayed in a list template, this image row item will be automatically reloaded.

# gridImages (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 26.0) · iPadOS 14.0+ (deprecated in 26.0) · Mac Catalyst 14.0+ (deprecated in 26.0)

Read-only access to the grid images shown in a row in the cell.

> No longer supported

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSArray<UIImage *> * gridImages;
```

<a id="discussion"></a>

## Discussion

> **Note**

> The maximum number of images shown is @c CPMaximumNumberOfGridImages. If you supply more images, only the first @c CPMaximumNumberOfGridImages will be used.

## See Also

### Deprecated

- [initWithText:images:](init%28text_images_%29.md): Deprecated. Initialize a list image row item with a text string and an array of @c UIImage for the grid of images.
- [initWithText:images:imageTitles:](init%28text_images_imagetitles_%29.md): Deprecated. Initialize a list image row item with a text string, an array of @c UIImage for the grid of images, and an array of @c NSString titles, one displayed below each image.
- [imageTitles](imagetitles.md): Deprecated. The titles displayed for each image in this image row item.
- [maximumImageSize](maximumimagesize.md): Deprecated. The expected image size for the grid images in your @c CPListImageRowItem. Images provided will be resized to this size.
- [updateImages:](update%28__%29.md): Deprecated. Update the images displayed in this image row item. If this image row item is already displayed in a list template, this image row item will be automatically reloaded.
