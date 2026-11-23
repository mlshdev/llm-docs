> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptabbartemplate

# CPTabBarTemplate (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A container template that displays and manages other templates, presenting them as tabs.

## Declaration

```swift
@MainActor class CPTabBarTemplate
```

## Mentioned In

- [Building your app’s initial CarPlay interface](building-your-apps-initial-carplay-interface.md)

<a id="overview"></a>

## Overview

`CPTabBarTemplate` is a container template that displays a collection of other templates, where each template occupies a single tab in the tab bar. At runtime, use [maximumTabCount](cptabbartemplate/maximumtabcount.md) to determine the maximum number of tabs that your tab bar can display.

When creating an instance of `CPTabBarTemplate`, provide an array of templates for the tab bar to display. CarPlay treats the array’s templates as root templates, each with its own navigation hierarchy. When a tab bar template is the [rootTemplate](cpinterfacecontroller/roottemplate.md) of your app’s interface controller and you use the controller to add and remove templates, CarPlay applies those changes to the selected tab’s navigation hierarchy.

> **Note**

>  You can’t add a tab bar template to an existing navigation hierarchy, or present one modally. Instead, use [setRootTemplate(\_:animated:completion:)](cpinterfacecontroller/setroottemplate%28__animated_completion_%29.md) to set the tab bar as your app’s root template.

Use a transactional approach when making changes to the tab bar. Retrieve the current set of templates using the [templates](cptabbartemplate/templates.md) property. Add, remove, reorder, or make appearance changes to one or more of the array’s templates. For example, use the [tabTitle](cptemplate/tabtitle.md) property to update a template’s tab title, or set [showsTabBadge](cptemplate/showstabbadge.md) to `true` to add an indicator to a template’s tab. Then call the [updateTemplates(\_:)](cptabbartemplate/updatetemplates%28__%29.md) method and pass it the updated array. CarPlay commits those changes and updates the tab bar.

When the user selects a tab, the template calls the [tabBarTemplate(\_:didSelect:)](cptabbartemplatedelegate/tabbartemplate%28__didselect_%29.md) method on its delegate, which is an object you provide that conforms to the [CPTabBarTemplateDelegate](cptabbartemplatedelegate.md) protocol.

## Topics

### Creating a tab bar template

- [init(templates:)](cptabbartemplate/init%28templates_%29.md): Creates a tab bar template that displays the provided root templates as tabs.

### Responding to tab selections

- [delegate](cptabbartemplate/delegate.md): The object that acts as the template’s delegate.
- [CPTabBarTemplateDelegate](cptabbartemplatedelegate.md): The methods an object implements to act as the delegate for a tab bar template.

### Managing the tabs

- [templates](cptabbartemplate/templates.md): The tab bar’s templates.
- [updateTemplates(\_:)](cptabbartemplate/updatetemplates%28__%29.md): Adds, removes, reorders, or updates the tab bar’s templates.
- [maximumTabCount](cptabbartemplate/maximumtabcount.md): The maximum number of tabs that the template can display.

### Selecting a tab

- [select(\_:)](cptabbartemplate/select%28__%29.md)
- [selectTemplate(at:)](cptabbartemplate/selecttemplate%28at_%29.md)
- [selectedTemplate](cptabbartemplate/selectedtemplate.md): The currently selected template in the tab bar.

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

- [CPListTemplate](cplisttemplate.md): A template that displays a single-column list of items in one of several visual styles.
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

# CPTabBarTemplate (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A container template that displays and manages other templates, presenting them as tabs.

## Declaration

```objectivec
@interface CPTabBarTemplate : CPTemplate
```

## Mentioned In

- [Building your app’s initial CarPlay interface](building-your-apps-initial-carplay-interface.md)

<a id="overview"></a>

## Overview

`CPTabBarTemplate` is a container template that displays a collection of other templates, where each template occupies a single tab in the tab bar. At runtime, use [maximumTabCount](cptabbartemplate/maximumtabcount.md) to determine the maximum number of tabs that your tab bar can display.

When creating an instance of `CPTabBarTemplate`, provide an array of templates for the tab bar to display. CarPlay treats the array’s templates as root templates, each with its own navigation hierarchy. When a tab bar template is the [rootTemplate](cpinterfacecontroller/roottemplate.md) of your app’s interface controller and you use the controller to add and remove templates, CarPlay applies those changes to the selected tab’s navigation hierarchy.

> **Note**

>  You can’t add a tab bar template to an existing navigation hierarchy, or present one modally. Instead, use [setRootTemplate:animated:completion:](cpinterfacecontroller/setroottemplate%28__animated_completion_%29.md) to set the tab bar as your app’s root template.

Use a transactional approach when making changes to the tab bar. Retrieve the current set of templates using the [templates](cptabbartemplate/templates.md) property. Add, remove, reorder, or make appearance changes to one or more of the array’s templates. For example, use the [tabTitle](cptemplate/tabtitle.md) property to update a template’s tab title, or set [showsTabBadge](cptemplate/showstabbadge.md) to `true` to add an indicator to a template’s tab. Then call the [updateTemplates:](cptabbartemplate/updatetemplates%28__%29.md) method and pass it the updated array. CarPlay commits those changes and updates the tab bar.

When the user selects a tab, the template calls the [tabBarTemplate:didSelectTemplate:](cptabbartemplatedelegate/tabbartemplate%28__didselect_%29.md) method on its delegate, which is an object you provide that conforms to the [CPTabBarTemplateDelegate](cptabbartemplatedelegate.md) protocol.

## Topics

### Creating a tab bar template

- [initWithTemplates:](cptabbartemplate/init%28templates_%29.md): Creates a tab bar template that displays the provided root templates as tabs.

### Responding to tab selections

- [delegate](cptabbartemplate/delegate.md): The object that acts as the template’s delegate.
- [CPTabBarTemplateDelegate](cptabbartemplatedelegate.md): The methods an object implements to act as the delegate for a tab bar template.

### Managing the tabs

- [templates](cptabbartemplate/templates.md): The tab bar’s templates.
- [updateTemplates:](cptabbartemplate/updatetemplates%28__%29.md): Adds, removes, reorders, or updates the tab bar’s templates.
- [maximumTabCount](cptabbartemplate/maximumtabcount.md): The maximum number of tabs that the template can display.

### Selecting a tab

- [selectTemplate:](cptabbartemplate/select%28__%29.md)
- [selectTemplateAtIndex:](cptabbartemplate/selecttemplate%28at_%29.md)
- [selectedTemplate](cptabbartemplate/selectedtemplate.md): The currently selected template in the tab bar.

## Relationships

### Inherits From

- [CPTemplate](cptemplate.md)

## See Also

### Interface templates

- [CPListTemplate](cplisttemplate.md): A template that displays a single-column list of items in one of several visual styles.
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
