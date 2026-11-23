> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplatedetailsheader/maximumactionbuttoncount

# maximumActionButtonCount (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The maximum number of action buttons the header can display.

## Declaration

```swift
class var maximumActionButtonCount: Int { get }
```

<a id="discussion"></a>

## Discussion

When configuring a header, use this class property to determine how many [CPButton](../cpbutton.md) types you can include in the header. CarPlay limits the total number of buttons to ensure usability and a readable layout. If you configure the header with more than the maximum number of buttons, CarPlay ignores any extra buttons.

## See Also

### Creating a details header

- [init(thumbnail:title:subtitle:actionButtons:)](init%28thumbnail_title_subtitle_actionbuttons_%29.md): Creates a details header with a thumbnail image, optional text, and action buttons.
- [init(thumbnail:title:subtitle:bodyVariants:actionButtons:)](init%28thumbnail_title_subtitle_bodyvariants_actionbuttons_%29.md): Creates a details header with a thumbnail image, optional text, and action buttons.
- [init(coder:)](init%28coder_%29.md)
- [maximumActionButtonSize](maximumactionbuttonsize.md): The maximum size of the images you use to create action buttons.

# maximumActionButtonCount (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The maximum number of action buttons the header can display.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSInteger maximumActionButtonCount;
```

<a id="discussion"></a>

## Discussion

When configuring a header, use this class property to determine how many [CPButton](../cpbutton.md) types you can include in the header. CarPlay limits the total number of buttons to ensure usability and a readable layout. If you configure the header with more than the maximum number of buttons, CarPlay ignores any extra buttons.

## See Also

### Creating a details header

- [initWithThumbnail:title:subtitle:actionButtons:](init%28thumbnail_title_subtitle_actionbuttons_%29.md): Creates a details header with a thumbnail image, optional text, and action buttons.
- [initWithThumbnail:title:subtitle:bodyVariants:actionButtons:](init%28thumbnail_title_subtitle_bodyvariants_actionbuttons_%29.md): Creates a details header with a thumbnail image, optional text, and action buttons.
- [maximumActionButtonSize](maximumactionbuttonsize.md): The maximum size of the images you use to create action buttons.
