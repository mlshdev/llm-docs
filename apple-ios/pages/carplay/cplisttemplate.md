> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplisttemplate](https://developer.apple.com/documentation/carplay/cplisttemplate)

# CPListTemplate (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A template that displays and manages a list of items.

## Declaration

```swift
@MainActor class CPListTemplate
```

<a id="overview"></a>

## Overview

Use the list template to display a list of items, grouped into one or more sections. When the user selects an item, CarPlay invokes Siri or a custom handler that you provide, depending on the type of list item. If your list displays hierarchical data, use the handler to add templates to the navigation hierarchy.

To create a list template, call the [init(title:sections:)](cplisttemplate/init%28title_sections_%29.md) method and provide an array of [CPListSection](cplistsection.md) objects. At runtime, use [maximumSectionCount](cplisttemplate/maximumsectioncount.md) to determine the maximum number of sections your list can display. Use [maximumItemCount](cplisttemplate/maximumitemcount.md) to determine the maximum number of items across all sections that your list can display.

Each section contains an array of list items — objects that conform to either the [CPListTemplateItem](cplisttemplateitem.md) or the [CPSelectableListItem](cpselectablelistitem.md) protocol. CarPlay provides three concrete implementations of these protocols:

- **[CPListItem](cplistitem.md)**: A generic, selectable list item.
- **[CPListImageRowItem](cplistimagerowitem.md)**: A list item that displays a series of images.
- **[CPMessageListItem](cpmessagelistitem.md)**: A list item that represents a conversation or contact.

> **Note**

>  The depth of a hierarchical list in CarPlay depends on your app’s entitlements. Food-ordering apps must not exceed two levels. The framework restricts all other categories of apps to five levels. Also, some vehicles limit the number of items that the list displays. See [CPSessionConfiguration](cpsessionconfiguration.md) for more information.

To display the list, call your interface controller’s [pushTemplate(\_:animated:completion:)](cpinterfacecontroller/pushtemplate%28__animated_completion_%29.md) method, passing in the list template to add it to your navigation hierarchy. Alternatively, add the template as a tab in your [CPTabBarTemplate](cptabbartemplate.md).

<a id="Integrating-Siri-Into-Your-Template-App"></a>

### Integrating Siri Into Your Template App

For audio and communication apps, CarPlay provides an *assistant cell* to let users interact with your app using Siri\_.\_

![Screenshot that shows the assistant cell at the top of a list template.](https://developer.apple.com/images/com.apple.carplay/media-3786976@2x.png)

To enable the assistant cell, your app must support specific Siri intents:

- To play audio, audio apps must support [INPlayMediaIntent](https://developer.apple.com/documentation/intents/inplaymediaintent).
- To make phone calls, communication apps must support [INStartCallIntent](https://developer.apple.com/documentation/intents/instartcallintent).

To enable the assistant cell in your list template, use [init(title:sections:assistantCellConfiguration:)](cplisttemplate/init%28title_sections_assistantcellconfiguration_%29.md) and provide the required configuration. For more information, see [CPAssistantCellConfiguration](cpassistantcellconfiguration.md). CarPlay automatically updates your app’s interface if you change the template’s [assistantCellConfiguration](cplisttemplate/assistantcellconfiguration.md) property.

## Topics

### Creating a List Template

- [init(title:sections:)](cplisttemplate/init%28title_sections_%29.md): Creates a list template with an array of list sections and optional title.
- [init(title:sections:assistantCellConfiguration:)](cplisttemplate/init%28title_sections_assistantcellconfiguration_%29.md): Creates a sectioned list template that optionally displays the assistant cell.

### Managing Sections

- [maximumSectionCount](cplisttemplate/maximumsectioncount.md): The maximum number of sections that the template can display.
- [sectionCount](cplisttemplate/sectioncount.md): The number of sections in the list.
- [sections](cplisttemplate/sections.md): The sections that the list displays.
- [updateSections(\_:)](cplisttemplate/updatesections%28__%29.md): Adds, removes, reorders, or updates the list’s sections.
- [CPListSection](cplistsection.md): A container that groups your list items into sections.

### Managing the Assistant Cell

- [assistantCellConfiguration](cplisttemplate/assistantcellconfiguration.md): The object that provides the configuration attributes for the assistant cell.
- [CPAssistantCellConfiguration](cpassistantcellconfiguration.md): An object that provides the configuration attributes for the assistant cell.

### Managing an Empty List

- [emptyViewTitleVariants](cplisttemplate/emptyviewtitlevariants.md): An array of title variants for the template’s empty view.
- [emptyViewSubtitleVariants](cplisttemplate/emptyviewsubtitlevariants.md): An array of subtitle variants for the template’s empty view.

### Getting Supplementary Information

- [maximumItemCount](cplisttemplate/maximumitemcount.md): The maximum number of items, across all sections, that the template can display.
- [itemCount](cplisttemplate/itemcount.md): The total number of items, across all sections, in the list.
- [indexPath(for:)](cplisttemplate/indexpath%28for_%29.md): Returns the index path for the specified item.
- [title](cplisttemplate/title.md): The title that the navigation bar displays when the template is visible.

### Responding to List Events

- [delegate](cplisttemplate/delegate.md): Deprecated. The object that serves as the delegate to the list template.
- [CPListTemplateDelegate](cplisttemplatedelegate.md): Deprecated. The interface an object implements to serve as the delegate for a list template.

### Initializers

- [init(title:listHeader:sections:assistantCellConfiguration:)](cplisttemplate/init%28title_listheader_sections_assistantcellconfiguration_%29.md): Initialize a list template with a details list header.
- [init(title:sections:assistantCellConfiguration:headerGridButtons:)](cplisttemplate/init%28title_sections_assistantcellconfiguration_headergridbuttons_%29.md): Initialize a list template with one or more grid buttons to displayed in a list header.

### Instance Properties

- [headerGridButtons](cplisttemplate/headergridbuttons.md): Assigning to this property will dynamically update the List Template and show the new header.
- [listHeader](cplisttemplate/listheader.md): An optional details header displayed at the top of the list template.
- [showsSpinnerWhileEmpty](cplisttemplate/showsspinnerwhileempty.md): If YES, a spinning activity indicator will be displayed while the list template contains no items. The activity indicator will be displayed in addition to any @c emptyViewTitleVariants or

### Type Properties

- [maximumGridButtonImageSize](cplisttemplate/maximumgridbuttonimagesize.md): The expected image size for your @c CPGridButton.
- [maximumHeaderGridButtonCount](cplisttemplate/maximumheadergridbuttoncount.md): The maximum number of grid buttons that may appear in a @c CPListTemplate.

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

### General Purpose Templates

- [CPGridTemplate](cpgridtemplate.md): A template that displays and manages a grid of items.
- [CPTabBarTemplate](cptabbartemplate.md): A container template that displays and manages other templates, presenting them as tabs.
- [CPTemplate](cptemplate.md): An abstract base class for interface templates.
- [CPBarButtonProviding](cpbarbuttonproviding.md): The methods that templates use to provide buttons for the navigation bar.

# CPListTemplate (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A template that displays and manages a list of items.

## Declaration

```objectivec
@interface CPListTemplate : CPTemplate
```

<a id="overview"></a>

## Overview

Use the list template to display a list of items, grouped into one or more sections. When the user selects an item, CarPlay invokes Siri or a custom handler that you provide, depending on the type of list item. If your list displays hierarchical data, use the handler to add templates to the navigation hierarchy.

To create a list template, call the [initWithTitle:sections:](cplisttemplate/init%28title_sections_%29.md) method and provide an array of [CPListSection](cplistsection.md) objects. At runtime, use [maximumSectionCount](cplisttemplate/maximumsectioncount.md) to determine the maximum number of sections your list can display. Use [maximumItemCount](cplisttemplate/maximumitemcount.md) to determine the maximum number of items across all sections that your list can display.

Each section contains an array of list items — objects that conform to either the [CPListTemplateItem](cplisttemplateitem.md) or the [CPSelectableListItem](cpselectablelistitem.md) protocol. CarPlay provides three concrete implementations of these protocols:

- **[CPListItem](cplistitem.md)**: A generic, selectable list item.
- **[CPListImageRowItem](cplistimagerowitem.md)**: A list item that displays a series of images.
- **[CPMessageListItem](cpmessagelistitem.md)**: A list item that represents a conversation or contact.

> **Note**

>  The depth of a hierarchical list in CarPlay depends on your app’s entitlements. Food-ordering apps must not exceed two levels. The framework restricts all other categories of apps to five levels. Also, some vehicles limit the number of items that the list displays. See [CPSessionConfiguration](cpsessionconfiguration.md) for more information.

To display the list, call your interface controller’s [pushTemplate:animated:completion:](cpinterfacecontroller/pushtemplate%28__animated_completion_%29.md) method, passing in the list template to add it to your navigation hierarchy. Alternatively, add the template as a tab in your [CPTabBarTemplate](cptabbartemplate.md).

<a id="Integrating-Siri-Into-Your-Template-App"></a>

### Integrating Siri Into Your Template App

For audio and communication apps, CarPlay provides an *assistant cell* to let users interact with your app using Siri\_.\_

![Screenshot that shows the assistant cell at the top of a list template.](https://developer.apple.com/images/com.apple.carplay/media-3786976@2x.png)

To enable the assistant cell, your app must support specific Siri intents:

- To play audio, audio apps must support [INPlayMediaIntent](https://developer.apple.com/documentation/intents/inplaymediaintent).
- To make phone calls, communication apps must support [INStartCallIntent](https://developer.apple.com/documentation/intents/instartcallintent).

To enable the assistant cell in your list template, use [initWithTitle:sections:assistantCellConfiguration:](cplisttemplate/init%28title_sections_assistantcellconfiguration_%29.md) and provide the required configuration. For more information, see [CPAssistantCellConfiguration](cpassistantcellconfiguration.md). CarPlay automatically updates your app’s interface if you change the template’s [assistantCellConfiguration](cplisttemplate/assistantcellconfiguration.md) property.

## Topics

### Creating a List Template

- [initWithTitle:sections:](cplisttemplate/init%28title_sections_%29.md): Creates a list template with an array of list sections and optional title.
- [initWithTitle:sections:assistantCellConfiguration:](cplisttemplate/init%28title_sections_assistantcellconfiguration_%29.md): Creates a sectioned list template that optionally displays the assistant cell.

### Managing Sections

- [maximumSectionCount](cplisttemplate/maximumsectioncount.md): The maximum number of sections that the template can display.
- [sectionCount](cplisttemplate/sectioncount.md): The number of sections in the list.
- [sections](cplisttemplate/sections.md): The sections that the list displays.
- [updateSections:](cplisttemplate/updatesections%28__%29.md): Adds, removes, reorders, or updates the list’s sections.
- [CPListSection](cplistsection.md): A container that groups your list items into sections.

### Managing the Assistant Cell

- [assistantCellConfiguration](cplisttemplate/assistantcellconfiguration.md): The object that provides the configuration attributes for the assistant cell.
- [CPAssistantCellConfiguration](cpassistantcellconfiguration.md): An object that provides the configuration attributes for the assistant cell.

### Managing an Empty List

- [emptyViewTitleVariants](cplisttemplate/emptyviewtitlevariants.md): An array of title variants for the template’s empty view.
- [emptyViewSubtitleVariants](cplisttemplate/emptyviewsubtitlevariants.md): An array of subtitle variants for the template’s empty view.

### Getting Supplementary Information

- [maximumItemCount](cplisttemplate/maximumitemcount.md): The maximum number of items, across all sections, that the template can display.
- [itemCount](cplisttemplate/itemcount.md): The total number of items, across all sections, in the list.
- [indexPathForItem:](cplisttemplate/indexpath%28for_%29.md): Returns the index path for the specified item.
- [title](cplisttemplate/title.md): The title that the navigation bar displays when the template is visible.

### Responding to List Events

- [delegate](cplisttemplate/delegate.md): Deprecated. The object that serves as the delegate to the list template.
- [CPListTemplateDelegate](cplisttemplatedelegate.md): Deprecated. The interface an object implements to serve as the delegate for a list template.

### Instance Properties

- [headerGridButtons](cplisttemplate/headergridbuttons.md): Assigning to this property will dynamically update the List Template and show the new header.
- [listHeader](cplisttemplate/listheader.md): An optional details header displayed at the top of the list template.
- [showsSpinnerWhileEmpty](cplisttemplate/showsspinnerwhileempty.md): If YES, a spinning activity indicator will be displayed while the list template contains no items. The activity indicator will be displayed in addition to any @c emptyViewTitleVariants or

### Instance Methods

- [initWithTitle:listHeader:sections:assistantCellConfiguration:](cplisttemplate/init%28title_listheader_sections_assistantcellconfiguration_%29.md): Initialize a list template with a details list header.
- [initWithTitle:sections:assistantCellConfiguration:headerGridButtons:](cplisttemplate/init%28title_sections_assistantcellconfiguration_headergridbuttons_%29.md): Initialize a list template with one or more grid buttons to displayed in a list header.

### Type Properties

- [maximumGridButtonImageSize](cplisttemplate/maximumgridbuttonimagesize.md): The expected image size for your @c CPGridButton.
- [maximumHeaderGridButtonCount](cplisttemplate/maximumheadergridbuttoncount.md): The maximum number of grid buttons that may appear in a @c CPListTemplate.

## Relationships

### Inherits From

- [CPTemplate](cptemplate.md)

### Conforms To

- [CPBarButtonProviding](cpbarbuttonproviding.md)

## See Also

### General Purpose Templates

- [CPGridTemplate](cpgridtemplate.md): A template that displays and manages a grid of items.
- [CPTabBarTemplate](cptabbartemplate.md): A container template that displays and manages other templates, presenting them as tabs.
- [CPTemplate](cptemplate.md): An abstract base class for interface templates.
- [CPBarButtonProviding](cpbarbuttonproviding.md): The methods that templates use to provide buttons for the navigation bar.
