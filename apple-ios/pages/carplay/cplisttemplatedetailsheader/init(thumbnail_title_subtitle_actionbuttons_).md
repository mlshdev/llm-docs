> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplisttemplatedetailsheader/init(thumbnail:title:subtitle:actionbuttons:)](https://developer.apple.com/documentation/carplay/cplisttemplatedetailsheader/init(thumbnail:title:subtitle:actionbuttons:))

# init(thumbnail:title:subtitle:actionButtons:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates a new details header with the specified content and action buttons.

## Declaration

```swift
init(thumbnail: CPThumbnailImage, title: String?, subtitle: String?, actionButtons actionButton: [CPButton])
```

## Parameters

- `thumbnail`: The thumbnail image to display in the header. This image may include overlays, progress indicators, or other visual enhancements.
- `title`: The primary title text to display. Pass nil to hide the title.
- `subtitle`: The secondary subtitle text to display below the title. Pass nil to hide the subtitle.
- `actionButton`: An array of CPButton objects representing user actions. The number of buttons is limited by maximumActionButtonCount. Additional buttons beyond the limit will be ignored.

<a id="return-value"></a>

## Return Value

A newly initialized CPListTemplateDetailsHeader instance.

<a id="discussion"></a>

## Discussion

The thumbnail parameter is required and should not be nil. The title and subtitle are optional but at least one should be provided for meaningful content display. Action buttons will be displayed in the order provided in the array.

# initWithThumbnail:title:subtitle:actionButtons: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates a new details header with the specified content and action buttons.

## Declaration

```objectivec
- (instancetype) initWithThumbnail:(CPThumbnailImage *) thumbnail title:(NSString *) title subtitle:(NSString *) subtitle actionButtons:(NSArray<CPButton *> *) actionButton;
```

## Parameters

- `thumbnail`: The thumbnail image to display in the header. This image may include overlays, progress indicators, or other visual enhancements.
- `title`: The primary title text to display. Pass nil to hide the title.
- `subtitle`: The secondary subtitle text to display below the title. Pass nil to hide the subtitle.
- `actionButton`: An array of CPButton objects representing user actions. The number of buttons is limited by maximumActionButtonCount. Additional buttons beyond the limit will be ignored.

<a id="return-value"></a>

## Return Value

A newly initialized CPListTemplateDetailsHeader instance.

<a id="discussion"></a>

## Discussion

The thumbnail parameter is required and should not be nil. The title and subtitle are optional but at least one should be provided for meaningful content display. Action buttons will be displayed in the order provided in the array.
