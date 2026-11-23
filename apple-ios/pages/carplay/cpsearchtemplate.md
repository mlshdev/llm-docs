> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpsearchtemplate

# CPSearchTemplate (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A template that provides the ability to search for a destination and see a list of search results.

## Declaration

```swift
@MainActor class CPSearchTemplate
```

<a id="overview"></a>

## Overview

Use this template to provide the ability to search for a destination. When CarPlay displays the template, the user sees a search field, a Cancel button, and a localized keyboard. The template also shows the list of search results after your app completes the search request.

> **Note**

>  Some vehicles may limit the display of the keyboard. Check the [limitedUserInterfaces](cpsessionconfiguration/limiteduserinterfaces.md) property to determine whether there are limits.

To use a search template, create an instance of [CPSearchTemplate](cpsearchtemplate.md) and set its [delegate](cpsearchtemplate/delegate.md) to an object that conforms to the [CPSearchTemplateDelegate](cpsearchtemplatedelegate.md) protocol. Push the template onto the navigation hierarchy by calling [pushTemplate(\_:animated:completion:)](cpinterfacecontroller/pushtemplate%28__animated_completion_%29.md) on the interface controller. This presents the search template to the user.

As the user enters text into the search field, the system calls the delegate method [searchTemplate(\_:updatedSearchText:completionHandler:)](cpsearchtemplatedelegate/searchtemplate%28__updatedsearchtext_completionhandler_%29.md), indicating that your app should retrieve the search result. After retrieving the results, call `completionHandler` to return an array of [CPListItem](cplistitem.md) objects—one list item for each search result item.

When the user selects an item from the search result, the system calls the [searchTemplate(\_:selectedResult:completionHandler:)](cpsearchtemplatedelegate/searchtemplate%28__selectedresult_completionhandler_%29.md) method on the delegate object. The delegate performs any necessary operations to process the selected item, then calls the completion handler to let the system know it can continue.

## Topics

### Managing search behaviors

- [delegate](cpsearchtemplate/delegate.md): The object that serves as the search template’s delegate.
- [CPSearchTemplateDelegate](cpsearchtemplatedelegate.md): The interface for an object that serves as the search template’s delegate.

## Relationships

### Inherits From

- [CPTemplate](cptemplate.md)

### Conforms To

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
- [CPInformationTemplate](cpinformationtemplate.md): A template that provides information for a point of interest, food order, parking location, or charging location.
- [CPContactTemplate](cpcontacttemplate.md): A template that displays information about a person or a business.
- [CPVoiceControlTemplate](cpvoicecontroltemplate.md): A template that displays a voice control indicator during audio input.
- [CPActionSheetTemplate](cpactionsheettemplate.md): A template that displays a modal action sheet.
- [CPAlertTemplate](cpalerttemplate.md): A template that displays a modal alert.
- [All templates and supporting types](all-templates-and-supporting-types.md): Explore the templates you use to build the interface of your CarPlay app.

# CPSearchTemplate (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A template that provides the ability to search for a destination and see a list of search results.

## Declaration

```objectivec
@interface CPSearchTemplate : CPTemplate
```

<a id="overview"></a>

## Overview

Use this template to provide the ability to search for a destination. When CarPlay displays the template, the user sees a search field, a Cancel button, and a localized keyboard. The template also shows the list of search results after your app completes the search request.

> **Note**

>  Some vehicles may limit the display of the keyboard. Check the [limitedUserInterfaces](cpsessionconfiguration/limiteduserinterfaces.md) property to determine whether there are limits.

To use a search template, create an instance of [CPSearchTemplate](cpsearchtemplate.md) and set its [delegate](cpsearchtemplate/delegate.md) to an object that conforms to the [CPSearchTemplateDelegate](cpsearchtemplatedelegate.md) protocol. Push the template onto the navigation hierarchy by calling [pushTemplate:animated:completion:](cpinterfacecontroller/pushtemplate%28__animated_completion_%29.md) on the interface controller. This presents the search template to the user.

As the user enters text into the search field, the system calls the delegate method [searchTemplate:updatedSearchText:completionHandler:](cpsearchtemplatedelegate/searchtemplate%28__updatedsearchtext_completionhandler_%29.md), indicating that your app should retrieve the search result. After retrieving the results, call `completionHandler` to return an array of [CPListItem](cplistitem.md) objects—one list item for each search result item.

When the user selects an item from the search result, the system calls the [searchTemplate:selectedResult:completionHandler:](cpsearchtemplatedelegate/searchtemplate%28__selectedresult_completionhandler_%29.md) method on the delegate object. The delegate performs any necessary operations to process the selected item, then calls the completion handler to let the system know it can continue.

## Topics

### Managing search behaviors

- [delegate](cpsearchtemplate/delegate.md): The object that serves as the search template’s delegate.
- [CPSearchTemplateDelegate](cpsearchtemplatedelegate.md): The interface for an object that serves as the search template’s delegate.

## Relationships

### Inherits From

- [CPTemplate](cptemplate.md)

## See Also

### Interface templates

- [CPTabBarTemplate](cptabbartemplate.md): A container template that displays and manages other templates, presenting them as tabs.
- [CPListTemplate](cplisttemplate.md): A template that displays a single-column list of items in one of several visual styles.
- [CPGridTemplate](cpgridtemplate.md): A template that displays and manages a grid of items.
- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPNowPlayingTemplate](cpnowplayingtemplate.md): A shared system template that shows the currently selected audio content and offers controls to manage playback.
- [CPPointOfInterestTemplate](cppointofinteresttemplate.md): A template that displays a map with selectable points of interest.
- [CPInformationTemplate](cpinformationtemplate.md): A template that provides information for a point of interest, food order, parking location, or charging location.
- [CPContactTemplate](cpcontacttemplate.md): A template that displays information about a person or a business.
- [CPVoiceControlTemplate](cpvoicecontroltemplate.md): A template that displays a voice control indicator during audio input.
- [CPActionSheetTemplate](cpactionsheettemplate.md): A template that displays a modal action sheet.
- [CPAlertTemplate](cpalerttemplate.md): A template that displays a modal alert.
- [All templates and supporting types](all-templates-and-supporting-types.md): Explore the templates you use to build the interface of your CarPlay app.
