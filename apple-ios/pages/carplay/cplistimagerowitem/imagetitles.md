> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitem/imagetitles

# imageTitles (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ (deprecated in 26.0) · iPadOS 17.4+ (deprecated in 26.0) · Mac Catalyst 17.4+ (deprecated in 26.0)

The titles displayed for each image in this image row item.

> No longer supported

## Declaration

```swift
var imageTitles: [String] { get }
```

<a id="discussion"></a>

## Discussion

The @c text property of the image row item.

## See Also

### Deprecated

- [init(text:images:)](init%28text_images_%29.md): Deprecated. Initialize a list image row item with a text string and an array of @c UIImage for the grid of images.
- [init(text:images:imageTitles:)](init%28text_images_imagetitles_%29.md): Deprecated. Initialize a list image row item with a text string, an array of @c UIImage for the grid of images, and an array of @c NSString titles, one displayed below each image.
- [gridImages](gridimages.md): Deprecated. Read-only access to the grid images shown in a row in the cell.
- [maximumImageSize](maximumimagesize.md): Deprecated. The expected image size for the grid images in your @c CPListImageRowItem. Images provided will be resized to this size.
- [update(\_:)](update%28__%29.md): Deprecated. Update the images displayed in this image row item. If this image row item is already displayed in a list template, this image row item will be automatically reloaded.

# imageTitles (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ (deprecated in 26.0) · iPadOS 17.4+ (deprecated in 26.0) · Mac Catalyst 17.4+ (deprecated in 26.0)

The titles displayed for each image in this image row item.

> No longer supported

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSString *> * imageTitles;
```

<a id="discussion"></a>

## Discussion

The @c text property of the image row item.

## See Also

### Deprecated

- [initWithText:images:](init%28text_images_%29.md): Deprecated. Initialize a list image row item with a text string and an array of @c UIImage for the grid of images.
- [initWithText:images:imageTitles:](init%28text_images_imagetitles_%29.md): Deprecated. Initialize a list image row item with a text string, an array of @c UIImage for the grid of images, and an array of @c NSString titles, one displayed below each image.
- [gridImages](gridimages.md): Deprecated. Read-only access to the grid images shown in a row in the cell.
- [maximumImageSize](maximumimagesize.md): Deprecated. The expected image size for the grid images in your @c CPListImageRowItem. Images provided will be resized to this size.
- [updateImages:](update%28__%29.md): Deprecated. Update the images displayed in this image row item. If this image row item is already displayed in a list template, this image row item will be automatically reloaded.
