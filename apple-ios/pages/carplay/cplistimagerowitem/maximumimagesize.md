> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitem/maximumimagesize

# maximumImageSize (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 14.0+ (deprecated in 26.0) · iPadOS 14.0+ (deprecated in 26.0) · Mac Catalyst 14.0+ (deprecated in 26.0)

The expected image size for the grid images in your @c CPListImageRowItem. Images provided will be resized to this size.

> Use +\[CPListImageRowItemElement maximumImageSize\] on an appropriate element

## Declaration

```swift
class var maximumImageSize: CGSize { get }
```

<a id="discussion"></a>

## Discussion

To properly size your images, your app should size them to the display scale of the car screen. See -\[CPInterfaceController carTraitCollection\].

## See Also

### Deprecated

- [init(text:images:)](init%28text_images_%29.md): Deprecated. Initialize a list image row item with a text string and an array of @c UIImage for the grid of images.
- [init(text:images:imageTitles:)](init%28text_images_imagetitles_%29.md): Deprecated. Initialize a list image row item with a text string, an array of @c UIImage for the grid of images, and an array of @c NSString titles, one displayed below each image.
- [gridImages](gridimages.md): Deprecated. Read-only access to the grid images shown in a row in the cell.
- [imageTitles](imagetitles.md): Deprecated. The titles displayed for each image in this image row item.
- [update(\_:)](update%28__%29.md): Deprecated. Update the images displayed in this image row item. If this image row item is already displayed in a list template, this image row item will be automatically reloaded.

# maximumImageSize (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 14.0+ (deprecated in 26.0) · iPadOS 14.0+ (deprecated in 26.0) · Mac Catalyst 14.0+ (deprecated in 26.0)

The expected image size for the grid images in your @c CPListImageRowItem. Images provided will be resized to this size.

> Use +\[CPListImageRowItemElement maximumImageSize\] on an appropriate element

## Declaration

```objectivec
@property (class, nonatomic, readonly) CGSize maximumImageSize;
```

<a id="discussion"></a>

## Discussion

To properly size your images, your app should size them to the display scale of the car screen. See -\[CPInterfaceController carTraitCollection\].

## See Also

### Deprecated

- [initWithText:images:](init%28text_images_%29.md): Deprecated. Initialize a list image row item with a text string and an array of @c UIImage for the grid of images.
- [initWithText:images:imageTitles:](init%28text_images_imagetitles_%29.md): Deprecated. Initialize a list image row item with a text string, an array of @c UIImage for the grid of images, and an array of @c NSString titles, one displayed below each image.
- [gridImages](gridimages.md): Deprecated. Read-only access to the grid images shown in a row in the cell.
- [imageTitles](imagetitles.md): Deprecated. The titles displayed for each image in this image row item.
- [updateImages:](update%28__%29.md): Deprecated. Update the images displayed in this image row item. If this image row item is already displayed in a list template, this image row item will be automatically reloaded.
