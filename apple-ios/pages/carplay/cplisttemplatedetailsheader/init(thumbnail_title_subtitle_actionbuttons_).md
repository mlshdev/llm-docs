> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplatedetailsheader/init(thumbnail:title:subtitle:actionbuttons:)

# init(thumbnail:title:subtitle:actionButtons:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates a details header with a thumbnail image, optional text, and action buttons.

## Declaration

```swift
init(thumbnail: CPThumbnailImage, title: String?, subtitle: String?, actionButtons actionButton: [CPButton])
```

## Parameters

- `thumbnail`: The thumbnail image to display in the header. This type displays the image you specify and any optional overlay content.
- `title`: The primary text to display in the header. Specify `nil` if you don’t want to display the title text.
- `subtitle`: The secondary text to display below the title. Specify `nil` if you don’t want to display the secondary text.

<a id="return-value"></a>

## Return Value

An initialized details header you can assign to your [CPListTemplate](../cplisttemplate.md) object.

<a id="discussion"></a>

## Discussion

Although the `title` and `subtitle` parameters are optional, specify one or both whenever possible to convey meaningful information. For example, if the list shows the songs of an album, you might display the album title in the header.

## See Also

### Creating a details header

- [init(thumbnail:title:subtitle:bodyVariants:actionButtons:)](init%28thumbnail_title_subtitle_bodyvariants_actionbuttons_%29.md): Creates a details header with a thumbnail image, optional text, and action buttons.
- [init(coder:)](init%28coder_%29.md)
- [maximumActionButtonCount](maximumactionbuttoncount.md): The maximum number of action buttons the header can display.
- [maximumActionButtonSize](maximumactionbuttonsize.md): The maximum size of the images you use to create action buttons.

# initWithThumbnail:title:subtitle:actionButtons: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates a details header with a thumbnail image, optional text, and action buttons.

## Declaration

```objectivec
- (instancetype) initWithThumbnail:(CPThumbnailImage *) thumbnail title:(NSString *) title subtitle:(NSString *) subtitle actionButtons:(NSArray<CPButton *> *) actionButton;
```

## Parameters

- `thumbnail`: The thumbnail image to display in the header. This type displays the image you specify and any optional overlay content.
- `title`: The primary text to display in the header. Specify `nil` if you don’t want to display the title text.
- `subtitle`: The secondary text to display below the title. Specify `nil` if you don’t want to display the secondary text.

<a id="return-value"></a>

## Return Value

An initialized details header you can assign to your [CPListTemplate](../cplisttemplate.md) object.

<a id="discussion"></a>

## Discussion

Although the `title` and `subtitle` parameters are optional, specify one or both whenever possible to convey meaningful information. For example, if the list shows the songs of an album, you might display the album title in the header.

## See Also

### Creating a details header

- [initWithThumbnail:title:subtitle:bodyVariants:actionButtons:](init%28thumbnail_title_subtitle_bodyvariants_actionbuttons_%29.md): Creates a details header with a thumbnail image, optional text, and action buttons.
- [maximumActionButtonCount](maximumactionbuttoncount.md): The maximum number of action buttons the header can display.
- [maximumActionButtonSize](maximumactionbuttonsize.md): The maximum size of the images you use to create action buttons.
