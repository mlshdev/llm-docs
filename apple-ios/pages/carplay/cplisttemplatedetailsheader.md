> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplisttemplatedetailsheader](https://developer.apple.com/documentation/carplay/cplisttemplatedetailsheader)

# CPListTemplateDetailsHeader (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A header for list templates that displays rich media content with action buttons.

## Declaration

```swift
@MainActor class CPListTemplateDetailsHeader
```

<a id="overview"></a>

## Overview

CPListTemplateDetailsHeader provides a prominent header section for list templates that includes a thumbnail image, title, subtitle, and configurable action buttons. This component is ideal for displaying media items, content details, or featured items at the top of a list template in CarPlay applications.

The header supports:

- A thumbnail image with overlay and progress indicators
- Primary title and subtitle text
- Up to a maximum number of action buttons for user interaction
- Automatic layout and styling appropriate for CarPlay interfaces

This class is designed specifically for CarPlay templates and follows CarPlay design guidelines for typography, spacing, and interaction patterns. The header automatically adapts to different screen sizes and orientations while maintaining optimal readability and touch target sizes.

## Topics

### Initializers

- [init(coder:)](cplisttemplatedetailsheader/init%28coder_%29.md)
- [init(thumbnail:title:subtitle:actionButtons:)](cplisttemplatedetailsheader/init%28thumbnail_title_subtitle_actionbuttons_%29.md): Creates a new details header with the specified content and action buttons.
- [init(thumbnail:title:subtitle:bodyVariants:actionButtons:)](cplisttemplatedetailsheader/init%28thumbnail_title_subtitle_bodyvariants_actionbuttons_%29.md): Creates a new details header with the specified content and action buttons.

### Instance Properties

- [actionButtons](cplisttemplatedetailsheader/actionbuttons.md): An array of action buttons displayed in the header.
- [bodyVariants](cplisttemplatedetailsheader/bodyvariants.md): An optional array of strings, ordered from most to least preferred.
- [subtitle](cplisttemplatedetailsheader/subtitle.md): The secondary subtitle text displayed below the title.
- [thumbnail](cplisttemplatedetailsheader/thumbnail.md): The thumbnail image displayed in the header.
- [title](cplisttemplatedetailsheader/title.md): The primary title text displayed in the header.
- [wantsAdaptiveBackgroundStyle](cplisttemplatedetailsheader/wantsadaptivebackgroundstyle.md): A Boolean value that determines whether to use a custom background style.

### Type Properties

- [maximumActionButtonCount](cplisttemplatedetailsheader/maximumactionbuttoncount.md): The maximum number of action buttons that can be displayed in the header.
- [maximumActionButtonSize](cplisttemplatedetailsheader/maximumactionbuttonsize.md)

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

# CPListTemplateDetailsHeader (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A header for list templates that displays rich media content with action buttons.

## Declaration

```objectivec
@interface CPListTemplateDetailsHeader : NSObject
```

<a id="overview"></a>

## Overview

CPListTemplateDetailsHeader provides a prominent header section for list templates that includes a thumbnail image, title, subtitle, and configurable action buttons. This component is ideal for displaying media items, content details, or featured items at the top of a list template in CarPlay applications.

The header supports:

- A thumbnail image with overlay and progress indicators
- Primary title and subtitle text
- Up to a maximum number of action buttons for user interaction
- Automatic layout and styling appropriate for CarPlay interfaces

This class is designed specifically for CarPlay templates and follows CarPlay design guidelines for typography, spacing, and interaction patterns. The header automatically adapts to different screen sizes and orientations while maintaining optimal readability and touch target sizes.

## Topics

### Instance Properties

- [actionButtons](cplisttemplatedetailsheader/actionbuttons.md): An array of action buttons displayed in the header.
- [bodyVariants](cplisttemplatedetailsheader/bodyvariants.md): An optional array of strings, ordered from most to least preferred.
- [subtitle](cplisttemplatedetailsheader/subtitle.md): The secondary subtitle text displayed below the title.
- [thumbnail](cplisttemplatedetailsheader/thumbnail.md): The thumbnail image displayed in the header.
- [title](cplisttemplatedetailsheader/title.md): The primary title text displayed in the header.
- [adaptiveBackgroundStyle](cplisttemplatedetailsheader/wantsadaptivebackgroundstyle.md): A Boolean value that determines whether to use a custom background style.

### Instance Methods

- [initWithThumbnail:title:subtitle:actionButtons:](cplisttemplatedetailsheader/init%28thumbnail_title_subtitle_actionbuttons_%29.md): Creates a new details header with the specified content and action buttons.
- [initWithThumbnail:title:subtitle:bodyVariants:actionButtons:](cplisttemplatedetailsheader/init%28thumbnail_title_subtitle_bodyvariants_actionbuttons_%29.md): Creates a new details header with the specified content and action buttons.

### Type Properties

- [maximumActionButtonCount](cplisttemplatedetailsheader/maximumactionbuttoncount.md): The maximum number of action buttons that can be displayed in the header.
- [maximumActionButtonSize](cplisttemplatedetailsheader/maximumactionbuttonsize.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CPPlayableItem](cpplayableitem.md)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
