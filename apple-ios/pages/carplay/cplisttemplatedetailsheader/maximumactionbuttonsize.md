> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplatedetailsheader/maximumactionbuttonsize

# maximumActionButtonSize (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The maximum size of the images you use to create action buttons.

## Declaration

```swift
class var maximumActionButtonSize: CGSize { get }
```

<a id="discussion"></a>

## Discussion

An action button displays an image to represent the intended action. This property contains the maximum supported image dimensions in points.

## See Also

### Creating a details header

- [init(thumbnail:title:subtitle:actionButtons:)](init%28thumbnail_title_subtitle_actionbuttons_%29.md): Creates a details header with a thumbnail image, optional text, and action buttons.
- [init(thumbnail:title:subtitle:bodyVariants:actionButtons:)](init%28thumbnail_title_subtitle_bodyvariants_actionbuttons_%29.md): Creates a details header with a thumbnail image, optional text, and action buttons.
- [init(coder:)](init%28coder_%29.md)
- [maximumActionButtonCount](maximumactionbuttoncount.md): The maximum number of action buttons the header can display.

# maximumActionButtonSize (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The maximum size of the images you use to create action buttons.

## Declaration

```objectivec
@property (class, nonatomic, readonly) CGSize maximumActionButtonSize;
```

<a id="discussion"></a>

## Discussion

An action button displays an image to represent the intended action. This property contains the maximum supported image dimensions in points.

## See Also

### Creating a details header

- [initWithThumbnail:title:subtitle:actionButtons:](init%28thumbnail_title_subtitle_actionbuttons_%29.md): Creates a details header with a thumbnail image, optional text, and action buttons.
- [initWithThumbnail:title:subtitle:bodyVariants:actionButtons:](init%28thumbnail_title_subtitle_bodyvariants_actionbuttons_%29.md): Creates a details header with a thumbnail image, optional text, and action buttons.
- [maximumActionButtonCount](maximumactionbuttoncount.md): The maximum number of action buttons the header can display.
