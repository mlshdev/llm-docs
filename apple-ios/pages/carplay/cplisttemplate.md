> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplate

# CPListTemplate (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A template that displays a single-column list of items in one of several visual styles.

## Declaration

```swift
@MainActor class CPListTemplate
```

## Mentioned In

- [Building your app’s initial CarPlay interface](building-your-apps-initial-carplay-interface.md)

<a id="overview"></a>

## Overview

A `CPListTemplate` template presents a single column of items in a scrollable interface. Lists are a versatile way to display content, and frequently play a role in interfaces with hierarchical content. For example, an audio app might display playlists or albums using a list template on one page and allow someone to navigate to a second page with a list of individual songs. Similarly, a communication app might display a list of conversations on one page and a list of messages for a selected conversation on another.

To create a list interface, assemble the rows of content you want to display, organize them into sections, and create a `CPListTemplate` object with your data. Display a list template as the root template of your interface or in a tab of a tab bar template. You can also push a list template onto your app’s navigation stack using the [pushTemplate(\_:animated:completion:)](cpinterfacecontroller/pushtemplate%28__animated_completion_%29.md) method.

For a list template, choosing the right row type is the most important consideration because it determines the appearance of your content. Rows support a variety of formats and visual styles, including grid-like appearances. You can create rows with a single row type or mix and match types to create hybrid experiences. When creating the rows of your template, start with one of the following types:

- **[CPListItem](cplistitem.md)**: A type that displays a single item in the row. Present the row content using strings and an optional image.
- **[CPListImageRowItem](cplistimagerowitem.md)**: A versatile type that supports visually rich layouts and multiple items per row. Row elements present a grid-like appearance.
- **[CPMessageListItem](cpmessagelistitem.md)**: A type that displays message-specific conversation or contact details in a row. This row type is available only to communication apps.
- **[CPAssistantCellConfiguration](cpassistantcellconfiguration.md)**: A type that adds support for app-based interactions using Siri to your list interface. This row type is available only to audio and communication apps.

When configuring the sections and rows of your list template, keep in mind that list interfaces support a finite number of rows and sections. The [maximumSectionCount](cplisttemplate/maximumsectioncount.md) and [maximumItemCount](cplisttemplate/maximumitemcount.md) properties indicate the limits. If you include more items than the maximum values, CarPlay discards items past the specified limits.

In addition to rows, a list interface can display a prominent header with text, images, and interactive buttons above your row content. Specify the header when creating the template, or add it dynamically using the [listHeader](cplisttemplate/listheader.md) property. You can also add header content to each section object to make the start of the section more prominent.

## Topics

### Creating a list template

- [init(title:sections:)](cplisttemplate/init%28title_sections_%29.md): Creates a list template with a title and sections to display.
- [init(title:sections:assistantCellConfiguration:)](cplisttemplate/init%28title_sections_assistantcellconfiguration_%29.md): Creates a list template with a title, sections, and an assistant cell.
- [init(title:listHeader:sections:assistantCellConfiguration:)](cplisttemplate/init%28title_listheader_sections_assistantcellconfiguration_%29.md): Creates a list template with a title, sections, and a header and assistant cell with optional details.
- [init(title:sections:assistantCellConfiguration:headerGridButtons:)](cplisttemplate/init%28title_sections_assistantcellconfiguration_headergridbuttons_%29.md): Creates a list template with a title, sections, an optional assistant cell, and one or more buttons to display in the header.

### Getting the configuration limits

- [maximumSectionCount](cplisttemplate/maximumsectioncount.md): The maximum number of sections the template can display.
- [maximumItemCount](cplisttemplate/maximumitemcount.md): The maximum number of items, across all sections, that the template can display.
- [maximumGridButtonImageSize](cplisttemplate/maximumgridbuttonimagesize.md): The expected image size for any grid buttons you add to the header.
- [maximumHeaderGridButtonCount](cplisttemplate/maximumheadergridbuttoncount.md): The maximum number of grid buttons you can display in the header.

### Managing section content

- [sectionCount](cplisttemplate/sectioncount.md): The current number of sections in the list.
- [sections](cplisttemplate/sections.md): The sections that the list displays.
- [updateSections(\_:)](cplisttemplate/updatesections%28__%29.md): Adds, removes, reorders, or updates the current sections in the list.

### Getting item details

- [itemCount](cplisttemplate/itemcount.md): The total number of items, across all sections, in the list.
- [indexPath(for:)](cplisttemplate/indexpath%28for_%29.md): Returns the index path for the specified item.

### Managing the supplemental content

- [title](cplisttemplate/title.md): The title to display in the navigation bar when the list is visible.
- [listHeader](cplisttemplate/listheader.md): An optional header to display between the navigation bar and first section of content.
- [headerGridButtons](cplisttemplate/headergridbuttons.md): Buttons to display in the header area above the list content.
- [assistantCellConfiguration](cplisttemplate/assistantcellconfiguration.md): The object that provides the configuration attributes for the assistant cell.

### Managing an empty list

- [showsSpinnerWhileEmpty](cplisttemplate/showsspinnerwhileempty.md): A Boolean value that indicates whether to display a spinning activity indicator when the list contains no items.
- [emptyViewTitleVariants](cplisttemplate/emptyviewtitlevariants.md): An array of localized title strings to display when the list contains no items.
- [emptyViewSubtitleVariants](cplisttemplate/emptyviewsubtitlevariants.md): An array of localized subtitle strings to display when the list contains no items.

### Deprecated

- [delegate](cplisttemplate/delegate.md): Deprecated. The list template’s delegate is informed of list selection events.
- [CPListTemplateDelegate](cplisttemplatedelegate.md): Deprecated.

## Relationships

### Inherits From

- [CPTemplate](cptemplate.md)

### Conforms To

- [CPBarButtonProviding](cpbarbuttonproviding.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interface templates

- [CPTabBarTemplate](cptabbartemplate.md): A container template that displays and manages other templates, presenting them as tabs.
- [CPGridTemplate](cpgridtemplate.md): A template that displays and manages a grid of items.
- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPNowPlayingTemplate](cpnowplayingtemplate.md): A shared system template that shows the currently selected audio content and offers controls to manage playback.
- [CPPointOfInterestTemplate](cppointofinteresttemplate.md): A template that displays a map with selectable points of interest.
- [CPInformationTemplate](cpinformationtemplate.md): A template that provides information for a point of interest, food order, parking location, or charging location.
- [CPContactTemplate](cpcontacttemplate.md): A template that displays information about a person or a business.
- [CPSearchTemplate](cpsearchtemplate.md): A template that provides the ability to search for a destination and see a list of search results.
- [CPVoiceControlTemplate](cpvoicecontroltemplate.md): A template that displays a voice control indicator during audio input.
- [CPActionSheetTemplate](cpactionsheettemplate.md): A template that displays a modal action sheet.
- [CPAlertTemplate](cpalerttemplate.md): A template that displays a modal alert.
- [All templates and supporting types](all-templates-and-supporting-types.md): Explore the templates you use to build the interface of your CarPlay app.

# CPListTemplate (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A template that displays a single-column list of items in one of several visual styles.

## Declaration

```objectivec
@interface CPListTemplate : CPTemplate
```

## Mentioned In

- [Building your app’s initial CarPlay interface](building-your-apps-initial-carplay-interface.md)

<a id="overview"></a>

## Overview

A `CPListTemplate` template presents a single column of items in a scrollable interface. Lists are a versatile way to display content, and frequently play a role in interfaces with hierarchical content. For example, an audio app might display playlists or albums using a list template on one page and allow someone to navigate to a second page with a list of individual songs. Similarly, a communication app might display a list of conversations on one page and a list of messages for a selected conversation on another.

To create a list interface, assemble the rows of content you want to display, organize them into sections, and create a `CPListTemplate` object with your data. Display a list template as the root template of your interface or in a tab of a tab bar template. You can also push a list template onto your app’s navigation stack using the [pushTemplate:animated:completion:](cpinterfacecontroller/pushtemplate%28__animated_completion_%29.md) method.

For a list template, choosing the right row type is the most important consideration because it determines the appearance of your content. Rows support a variety of formats and visual styles, including grid-like appearances. You can create rows with a single row type or mix and match types to create hybrid experiences. When creating the rows of your template, start with one of the following types:

- **[CPListItem](cplistitem.md)**: A type that displays a single item in the row. Present the row content using strings and an optional image.
- **[CPListImageRowItem](cplistimagerowitem.md)**: A versatile type that supports visually rich layouts and multiple items per row. Row elements present a grid-like appearance.
- **[CPMessageListItem](cpmessagelistitem.md)**: A type that displays message-specific conversation or contact details in a row. This row type is available only to communication apps.
- **[CPAssistantCellConfiguration](cpassistantcellconfiguration.md)**: A type that adds support for app-based interactions using Siri to your list interface. This row type is available only to audio and communication apps.

When configuring the sections and rows of your list template, keep in mind that list interfaces support a finite number of rows and sections. The [maximumSectionCount](cplisttemplate/maximumsectioncount.md) and [maximumItemCount](cplisttemplate/maximumitemcount.md) properties indicate the limits. If you include more items than the maximum values, CarPlay discards items past the specified limits.

In addition to rows, a list interface can display a prominent header with text, images, and interactive buttons above your row content. Specify the header when creating the template, or add it dynamically using the [listHeader](cplisttemplate/listheader.md) property. You can also add header content to each section object to make the start of the section more prominent.

## Topics

### Creating a list template

- [initWithTitle:sections:](cplisttemplate/init%28title_sections_%29.md): Creates a list template with a title and sections to display.
- [initWithTitle:sections:assistantCellConfiguration:](cplisttemplate/init%28title_sections_assistantcellconfiguration_%29.md): Creates a list template with a title, sections, and an assistant cell.
- [initWithTitle:listHeader:sections:assistantCellConfiguration:](cplisttemplate/init%28title_listheader_sections_assistantcellconfiguration_%29.md): Creates a list template with a title, sections, and a header and assistant cell with optional details.
- [initWithTitle:sections:assistantCellConfiguration:headerGridButtons:](cplisttemplate/init%28title_sections_assistantcellconfiguration_headergridbuttons_%29.md): Creates a list template with a title, sections, an optional assistant cell, and one or more buttons to display in the header.

### Getting the configuration limits

- [maximumSectionCount](cplisttemplate/maximumsectioncount.md): The maximum number of sections the template can display.
- [maximumItemCount](cplisttemplate/maximumitemcount.md): The maximum number of items, across all sections, that the template can display.
- [maximumGridButtonImageSize](cplisttemplate/maximumgridbuttonimagesize.md): The expected image size for any grid buttons you add to the header.
- [maximumHeaderGridButtonCount](cplisttemplate/maximumheadergridbuttoncount.md): The maximum number of grid buttons you can display in the header.

### Managing section content

- [sectionCount](cplisttemplate/sectioncount.md): The current number of sections in the list.
- [sections](cplisttemplate/sections.md): The sections that the list displays.
- [updateSections:](cplisttemplate/updatesections%28__%29.md): Adds, removes, reorders, or updates the current sections in the list.

### Getting item details

- [itemCount](cplisttemplate/itemcount.md): The total number of items, across all sections, in the list.
- [indexPathForItem:](cplisttemplate/indexpath%28for_%29.md): Returns the index path for the specified item.

### Managing the supplemental content

- [title](cplisttemplate/title.md): The title to display in the navigation bar when the list is visible.
- [listHeader](cplisttemplate/listheader.md): An optional header to display between the navigation bar and first section of content.
- [headerGridButtons](cplisttemplate/headergridbuttons.md): Buttons to display in the header area above the list content.
- [assistantCellConfiguration](cplisttemplate/assistantcellconfiguration.md): The object that provides the configuration attributes for the assistant cell.

### Managing an empty list

- [showsSpinnerWhileEmpty](cplisttemplate/showsspinnerwhileempty.md): A Boolean value that indicates whether to display a spinning activity indicator when the list contains no items.
- [emptyViewTitleVariants](cplisttemplate/emptyviewtitlevariants.md): An array of localized title strings to display when the list contains no items.
- [emptyViewSubtitleVariants](cplisttemplate/emptyviewsubtitlevariants.md): An array of localized subtitle strings to display when the list contains no items.

### Deprecated

- [delegate](cplisttemplate/delegate.md): Deprecated. The list template’s delegate is informed of list selection events.
- [CPListTemplateDelegate](cplisttemplatedelegate.md): Deprecated.

## Relationships

### Inherits From

- [CPTemplate](cptemplate.md)

### Conforms To

- [CPBarButtonProviding](cpbarbuttonproviding.md)

## See Also

### Interface templates

- [CPTabBarTemplate](cptabbartemplate.md): A container template that displays and manages other templates, presenting them as tabs.
- [CPGridTemplate](cpgridtemplate.md): A template that displays and manages a grid of items.
- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPNowPlayingTemplate](cpnowplayingtemplate.md): A shared system template that shows the currently selected audio content and offers controls to manage playback.
- [CPPointOfInterestTemplate](cppointofinteresttemplate.md): A template that displays a map with selectable points of interest.
- [CPInformationTemplate](cpinformationtemplate.md): A template that provides information for a point of interest, food order, parking location, or charging location.
- [CPContactTemplate](cpcontacttemplate.md): A template that displays information about a person or a business.
- [CPSearchTemplate](cpsearchtemplate.md): A template that provides the ability to search for a destination and see a list of search results.
- [CPVoiceControlTemplate](cpvoicecontroltemplate.md): A template that displays a voice control indicator during audio input.
- [CPActionSheetTemplate](cpactionsheettemplate.md): A template that displays a modal action sheet.
- [CPAlertTemplate](cpalerttemplate.md): A template that displays a modal alert.
- [All templates and supporting types](all-templates-and-supporting-types.md): Explore the templates you use to build the interface of your CarPlay app.
