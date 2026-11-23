> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplatedetailsheader/init(thumbnail:title:subtitle:bodyvariants:actionbuttons:)

# init(thumbnail:title:subtitle:bodyVariants:actionButtons:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates a details header with a thumbnail image, optional text, and action buttons.

## Declaration

```swift
init(thumbnail: CPThumbnailImage, title: String?, subtitle: String?, bodyVariants: [NSAttributedString], actionButtons: [CPButton])
```

## Parameters

- `thumbnail`: The thumbnail image to display in the header. This type displays the image you specify plus optional overlay content.
- `title`: The primary text to display in the header. Specify `nil` if you don’t want to display the title text.
- `subtitle`: The secondary text to display below the title. Specify `nil` if you don’t want to display the subtitle text.
- `bodyVariants`: Additional text to display below the `subtitle`. Specify strings in the preferred display order, and provide strings of different lengths. CarPlay chooses the first string from the array that fits the available space. Specify `nil` if you don’t want to display any text below the subtitle.
- `actionButtons`: An array of actions someone can perform. CarPlay displays the buttons in the same order they appear in the array. The [maximumActionButtonCount](maximumactionbuttoncount.md) property specifies the maximum number of buttons that CarPlay includes in the header. If your array contains more buttons than the maximum, CarPlay ignores any extra buttons.

<a id="return-value"></a>

## Return Value

An initialized header object you can assign to your [CPListTemplate](../cplisttemplate.md) object.

<a id="discussion"></a>

## Discussion

Although the `title` and `subtitle` parameters are optional, provide one or both whenever possible to convey meaningful information. For example, if the list shows the songs of an album, you might display the album title in the header.

## See Also

### Creating a details header

- [init(thumbnail:title:subtitle:actionButtons:)](init%28thumbnail_title_subtitle_actionbuttons_%29.md): Creates a details header with a thumbnail image, optional text, and action buttons.
- [init(coder:)](init%28coder_%29.md)
- [maximumActionButtonCount](maximumactionbuttoncount.md): The maximum number of action buttons the header can display.
- [maximumActionButtonSize](maximumactionbuttonsize.md): The maximum size of the images you use to create action buttons.

# initWithThumbnail:title:subtitle:bodyVariants:actionButtons: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates a details header with a thumbnail image, optional text, and action buttons.

## Declaration

```objectivec
- (instancetype) initWithThumbnail:(CPThumbnailImage *) thumbnail title:(NSString *) title subtitle:(NSString *) subtitle bodyVariants:(NSArray<NSAttributedString *> *) bodyVariants actionButtons:(NSArray<CPButton *> *) actionButtons;
```

## Parameters

- `thumbnail`: The thumbnail image to display in the header. This type displays the image you specify plus optional overlay content.
- `title`: The primary text to display in the header. Specify `nil` if you don’t want to display the title text.
- `subtitle`: The secondary text to display below the title. Specify `nil` if you don’t want to display the subtitle text.
- `bodyVariants`: Additional text to display below the `subtitle`. Specify strings in the preferred display order, and provide strings of different lengths. CarPlay chooses the first string from the array that fits the available space. Specify `nil` if you don’t want to display any text below the subtitle.
- `actionButtons`: An array of actions someone can perform. CarPlay displays the buttons in the same order they appear in the array. The [maximumActionButtonCount](maximumactionbuttoncount.md) property specifies the maximum number of buttons that CarPlay includes in the header. If your array contains more buttons than the maximum, CarPlay ignores any extra buttons.

<a id="return-value"></a>

## Return Value

An initialized header object you can assign to your [CPListTemplate](../cplisttemplate.md) object.

<a id="discussion"></a>

## Discussion

Although the `title` and `subtitle` parameters are optional, provide one or both whenever possible to convey meaningful information. For example, if the list shows the songs of an album, you might display the album title in the header.

## See Also

### Creating a details header

- [initWithThumbnail:title:subtitle:actionButtons:](init%28thumbnail_title_subtitle_actionbuttons_%29.md): Creates a details header with a thumbnail image, optional text, and action buttons.
- [maximumActionButtonCount](maximumactionbuttoncount.md): The maximum number of action buttons the header can display.
- [maximumActionButtonSize](maximumactionbuttonsize.md): The maximum size of the images you use to create action buttons.
