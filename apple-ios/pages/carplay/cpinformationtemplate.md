> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinformationtemplate

# CPInformationTemplate (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A template that provides information for a point of interest, food order, parking location, or charging location.

## Declaration

```swift
@MainActor class CPInformationTemplate
```

<a id="overview"></a>

## Overview

An information template displays a list of items, and up to three actions the user can perform.

You use an information template to display informative, actionable content to the user. For example, you might display a summary of the user’s food order, and provide actions to place or cancel the order.

When creating an information template, you populate the list with an array of [CPInformationItem](cpinformationitem.md) objects, and provide any contextual actions as an array of [CPTextButton](cptextbutton.md) objects. The template then arranges the list’s items using your choice of layout — see [CPInformationTemplateLayout](cpinformationtemplatelayout.md) for more information.

To display an information template, call your interface controller’s [pushTemplate(\_:animated:completion:)](cpinterfacecontroller/pushtemplate%28__animated_completion_%29.md) method to push it onto the navigation hierarchy, or [presentTemplate(\_:animated:completion:)](cpinterfacecontroller/presenttemplate%28__animated_completion_%29.md) to present it modally.

> **Note**

>  You can’t use `CPInformationTemplate` in apps with the audio entitlement.

## Topics

### Creating an information template

- [init(title:layout:items:actions:)](cpinformationtemplate/init%28title_layout_items_actions_%29.md): Creates an information template that displays the provided items using the chosen layout.

### Accessing the layout

- [layout](cpinformationtemplate/layout.md): The layout that the template uses to arrange its items.
- [CPInformationTemplateLayout](cpinformationtemplatelayout.md): The layout that an information template uses to arrange its items.

### Managing the title

- [title](cpinformationtemplate/title.md): The template’s title.

### Managing the items

- [items](cpinformationtemplate/items.md): The items that the template displays.
- [CPInformationItem](cpinformationitem.md): A data object that provides content for an information template.
- [CPInformationRatingItem](cpinformationratingitem.md): A data object that provides rated content for an information template.

### Managing the actions

- [actions](cpinformationtemplate/actions.md): The actions that the template displays.

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
- [CPListTemplate](cplisttemplate.md): A template that displays a single-column list of items in one of several visual styles.
- [CPGridTemplate](cpgridtemplate.md): A template that displays and manages a grid of items.
- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPNowPlayingTemplate](cpnowplayingtemplate.md): A shared system template that shows the currently selected audio content and offers controls to manage playback.
- [CPPointOfInterestTemplate](cppointofinteresttemplate.md): A template that displays a map with selectable points of interest.
- [CPContactTemplate](cpcontacttemplate.md): A template that displays information about a person or a business.
- [CPSearchTemplate](cpsearchtemplate.md): A template that provides the ability to search for a destination and see a list of search results.
- [CPVoiceControlTemplate](cpvoicecontroltemplate.md): A template that displays a voice control indicator during audio input.
- [CPActionSheetTemplate](cpactionsheettemplate.md): A template that displays a modal action sheet.
- [CPAlertTemplate](cpalerttemplate.md): A template that displays a modal alert.
- [All templates and supporting types](all-templates-and-supporting-types.md): Explore the templates you use to build the interface of your CarPlay app.

# CPInformationTemplate (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A template that provides information for a point of interest, food order, parking location, or charging location.

## Declaration

```objectivec
@interface CPInformationTemplate : CPTemplate
```

<a id="overview"></a>

## Overview

An information template displays a list of items, and up to three actions the user can perform.

You use an information template to display informative, actionable content to the user. For example, you might display a summary of the user’s food order, and provide actions to place or cancel the order.

When creating an information template, you populate the list with an array of [CPInformationItem](cpinformationitem.md) objects, and provide any contextual actions as an array of [CPTextButton](cptextbutton.md) objects. The template then arranges the list’s items using your choice of layout — see [CPInformationTemplateLayout](cpinformationtemplatelayout.md) for more information.

To display an information template, call your interface controller’s [pushTemplate:animated:completion:](cpinterfacecontroller/pushtemplate%28__animated_completion_%29.md) method to push it onto the navigation hierarchy, or [presentTemplate:animated:completion:](cpinterfacecontroller/presenttemplate%28__animated_completion_%29.md) to present it modally.

> **Note**

>  You can’t use `CPInformationTemplate` in apps with the audio entitlement.

## Topics

### Creating an information template

- [initWithTitle:layout:items:actions:](cpinformationtemplate/init%28title_layout_items_actions_%29.md): Creates an information template that displays the provided items using the chosen layout.

### Accessing the layout

- [layout](cpinformationtemplate/layout.md): The layout that the template uses to arrange its items.
- [CPInformationTemplateLayout](cpinformationtemplatelayout.md): The layout that an information template uses to arrange its items.

### Managing the title

- [title](cpinformationtemplate/title.md): The template’s title.

### Managing the items

- [items](cpinformationtemplate/items.md): The items that the template displays.
- [CPInformationItem](cpinformationitem.md): A data object that provides content for an information template.
- [CPInformationRatingItem](cpinformationratingitem.md): A data object that provides rated content for an information template.

### Managing the actions

- [actions](cpinformationtemplate/actions.md): The actions that the template displays.

## Relationships

### Inherits From

- [CPTemplate](cptemplate.md)

### Conforms To

- [CPBarButtonProviding](cpbarbuttonproviding.md)

## See Also

### Interface templates

- [CPTabBarTemplate](cptabbartemplate.md): A container template that displays and manages other templates, presenting them as tabs.
- [CPListTemplate](cplisttemplate.md): A template that displays a single-column list of items in one of several visual styles.
- [CPGridTemplate](cpgridtemplate.md): A template that displays and manages a grid of items.
- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPNowPlayingTemplate](cpnowplayingtemplate.md): A shared system template that shows the currently selected audio content and offers controls to manage playback.
- [CPPointOfInterestTemplate](cppointofinteresttemplate.md): A template that displays a map with selectable points of interest.
- [CPContactTemplate](cpcontacttemplate.md): A template that displays information about a person or a business.
- [CPSearchTemplate](cpsearchtemplate.md): A template that provides the ability to search for a destination and see a list of search results.
- [CPVoiceControlTemplate](cpvoicecontroltemplate.md): A template that displays a voice control indicator during audio input.
- [CPActionSheetTemplate](cpactionsheettemplate.md): A template that displays a modal action sheet.
- [CPAlertTemplate](cpalerttemplate.md): A template that displays a modal alert.
- [All templates and supporting types](all-templates-and-supporting-types.md): Explore the templates you use to build the interface of your CarPlay app.
