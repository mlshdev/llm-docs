> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplatedetailsheader

# CPListTemplateDetailsHeader (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A header section that displays rich media content and action buttons above a list of items.

## Declaration

```swift
@MainActor class CPListTemplateDetailsHeader
```

<a id="overview"></a>

## Overview

A `CPListTemplateDetailsHeader` object stores header content to display at the top of a list interface. You create this type and specify the title and subtitle text, thumbnail image, and optional action buttons you want to display in the header section of your list. CarPlay takes the content you provide and displays it for you, adapting the content automatically to different screen sizes and interface styles.

To add a header to your list interface, create a `CPListTemplateDetailsHeader` and assign it to your [CPListTemplate](cplisttemplate.md) object. After creating the list template object, assign your header to the template’s [listHeader](cplisttemplate/listheader.md) property. If you assign a header to your list template after the template is visible on the vehicle’s display, CarPlay updates the list interface to display the header.

## Topics

### Creating a details header

- [init(thumbnail:title:subtitle:actionButtons:)](cplisttemplatedetailsheader/init%28thumbnail_title_subtitle_actionbuttons_%29.md): Creates a details header with a thumbnail image, optional text, and action buttons.
- [init(thumbnail:title:subtitle:bodyVariants:actionButtons:)](cplisttemplatedetailsheader/init%28thumbnail_title_subtitle_bodyvariants_actionbuttons_%29.md): Creates a details header with a thumbnail image, optional text, and action buttons.
- [init(coder:)](cplisttemplatedetailsheader/init%28coder_%29.md)
- [maximumActionButtonCount](cplisttemplatedetailsheader/maximumactionbuttoncount.md): The maximum number of action buttons the header can display.
- [maximumActionButtonSize](cplisttemplatedetailsheader/maximumactionbuttonsize.md): The maximum size of the images you use to create action buttons.

### Managing the header’s content

- [thumbnail](cplisttemplatedetailsheader/thumbnail.md): The thumbnail image to display in the header.
- [title](cplisttemplatedetailsheader/title.md): The primary text to display in the header.
- [subtitle](cplisttemplatedetailsheader/subtitle.md): The text to display in the header below the title.
- [bodyVariants](cplisttemplatedetailsheader/bodyvariants.md): An optional array of localized strings to display beneath the subtitle.
- [actionButtons](cplisttemplatedetailsheader/actionbuttons.md): An array of action buttons to display in the header.
- [wantsAdaptiveBackgroundStyle](cplisttemplatedetailsheader/wantsadaptivebackgroundstyle.md): A Boolean value that indicates whether to apply a custom background style to the header.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CPPlayableItem](cpplayableitem.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Headers and special cells

- [CPAssistantCellConfiguration](cpassistantcellconfiguration.md): A type that configures a special row in for performing app-related actions using Siri.

# CPListTemplateDetailsHeader (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A header section that displays rich media content and action buttons above a list of items.

## Declaration

```objectivec
@interface CPListTemplateDetailsHeader : NSObject
```

<a id="overview"></a>

## Overview

A `CPListTemplateDetailsHeader` object stores header content to display at the top of a list interface. You create this type and specify the title and subtitle text, thumbnail image, and optional action buttons you want to display in the header section of your list. CarPlay takes the content you provide and displays it for you, adapting the content automatically to different screen sizes and interface styles.

To add a header to your list interface, create a `CPListTemplateDetailsHeader` and assign it to your [CPListTemplate](cplisttemplate.md) object. After creating the list template object, assign your header to the template’s [listHeader](cplisttemplate/listheader.md) property. If you assign a header to your list template after the template is visible on the vehicle’s display, CarPlay updates the list interface to display the header.

## Topics

### Creating a details header

- [initWithThumbnail:title:subtitle:actionButtons:](cplisttemplatedetailsheader/init%28thumbnail_title_subtitle_actionbuttons_%29.md): Creates a details header with a thumbnail image, optional text, and action buttons.
- [initWithThumbnail:title:subtitle:bodyVariants:actionButtons:](cplisttemplatedetailsheader/init%28thumbnail_title_subtitle_bodyvariants_actionbuttons_%29.md): Creates a details header with a thumbnail image, optional text, and action buttons.
- [maximumActionButtonCount](cplisttemplatedetailsheader/maximumactionbuttoncount.md): The maximum number of action buttons the header can display.
- [maximumActionButtonSize](cplisttemplatedetailsheader/maximumactionbuttonsize.md): The maximum size of the images you use to create action buttons.

### Managing the header’s content

- [thumbnail](cplisttemplatedetailsheader/thumbnail.md): The thumbnail image to display in the header.
- [title](cplisttemplatedetailsheader/title.md): The primary text to display in the header.
- [subtitle](cplisttemplatedetailsheader/subtitle.md): The text to display in the header below the title.
- [bodyVariants](cplisttemplatedetailsheader/bodyvariants.md): An optional array of localized strings to display beneath the subtitle.
- [actionButtons](cplisttemplatedetailsheader/actionbuttons.md): An array of action buttons to display in the header.
- [adaptiveBackgroundStyle](cplisttemplatedetailsheader/wantsadaptivebackgroundstyle.md): A Boolean value that indicates whether to apply a custom background style to the header.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CPPlayableItem](cpplayableitem.md)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Headers and special cells

- [CPAssistantCellConfiguration](cpassistantcellconfiguration.md): A type that configures a special row in for performing app-related actions using Siri.
