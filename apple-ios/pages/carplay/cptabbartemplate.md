> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptabbartemplate](https://developer.apple.com/documentation/carplay/cptabbartemplate)

# CPTabBarTemplate (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A container template that displays and manages other templates, presenting them as tabs.

## Declaration

```swift
@MainActor class CPTabBarTemplate
```

<a id="overview"></a>

## Overview

`CPTabBarTemplate` is a container template that displays a collection of other templates, where each template occupies a single tab in the tab bar. At runtime, use [maximumTabCount](cptabbartemplate/maximumtabcount.md) to determine the maximum number of tabs that your tab bar can display.

When creating an instance of `CPTabBarTemplate`, provide an array of templates for the tab bar to display. CarPlay treats the array’s templates as root templates, each with its own navigation hierarchy. When a tab bar template is the [rootTemplate](cpinterfacecontroller/roottemplate.md) of your app’s interface controller and you use the controller to add and remove templates, CarPlay applies those changes to the selected tab’s navigation hierarchy.

> **Note**

>  You can’t add a tab bar template to an existing navigation hierarchy, or present one modally. Instead, use [setRootTemplate(\_:animated:completion:)](cpinterfacecontroller/setroottemplate%28__animated_completion_%29.md) to set the tab bar as your app’s root template.

Use a transactional approach when making changes to the tab bar. Retrieve the current set of templates using the [templates](cptabbartemplate/templates.md) property. Add, remove, reorder, or make appearance changes to one or more of the array’s templates. For example, use the [tabTitle](cptemplate/tabtitle.md) property to update a template’s tab title, or set [showsTabBadge](cptemplate/showstabbadge.md) to `true` to add an indicator to a template’s tab. Then call the [updateTemplates(\_:)](cptabbartemplate/updatetemplates%28__%29.md) method and pass it the updated array. CarPlay commits those changes and updates the tab bar.

When the user selects a tab, the template calls the [tabBarTemplate(\_:didSelect:)](cptabbartemplatedelegate/tabbartemplate%28__didselect_%29.md) method on its delegate, which is an object you provide that conforms to the [CPTabBarTemplateDelegate](cptabbartemplatedelegate.md) protocol.

## Topics

### Creating a Tab Bar Template

- [init(templates:)](cptabbartemplate/init%28templates_%29.md): Creates a tab bar template that displays the provided root templates as tabs.

### Managing Tab Bar Interactions

- [delegate](cptabbartemplate/delegate.md): The object that acts as the template’s delegate.
- [CPTabBarTemplateDelegate](cptabbartemplatedelegate.md): The methods an object implements to act as the delegate for a tab bar template.

### Managing the Templates

- [templates](cptabbartemplate/templates.md): The tab bar’s templates.
- [updateTemplates(\_:)](cptabbartemplate/updatetemplates%28__%29.md): Adds, removes, reorders, or updates the tab bar’s templates.
- [maximumTabCount](cptabbartemplate/maximumtabcount.md): The maximum number of tabs that the template can display.

### Getting the Selected Template

- [selectedTemplate](cptabbartemplate/selectedtemplate.md): The currently selected template in the tab bar.

### Instance Methods

- [select(\_:)](cptabbartemplate/select%28__%29.md)
- [selectTemplate(at:)](cptabbartemplate/selecttemplate%28at_%29.md)

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

### General Purpose Templates

- [CPListTemplate](cplisttemplate.md): A template that displays and manages a list of items.
- [CPGridTemplate](cpgridtemplate.md): A template that displays and manages a grid of items.
- [CPTemplate](cptemplate.md): An abstract base class for interface templates.
- [CPBarButtonProviding](cpbarbuttonproviding.md): The methods that templates use to provide buttons for the navigation bar.

# CPTabBarTemplate (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A container template that displays and manages other templates, presenting them as tabs.

## Declaration

```objectivec
@interface CPTabBarTemplate : CPTemplate
```

<a id="overview"></a>

## Overview

`CPTabBarTemplate` is a container template that displays a collection of other templates, where each template occupies a single tab in the tab bar. At runtime, use [maximumTabCount](cptabbartemplate/maximumtabcount.md) to determine the maximum number of tabs that your tab bar can display.

When creating an instance of `CPTabBarTemplate`, provide an array of templates for the tab bar to display. CarPlay treats the array’s templates as root templates, each with its own navigation hierarchy. When a tab bar template is the [rootTemplate](cpinterfacecontroller/roottemplate.md) of your app’s interface controller and you use the controller to add and remove templates, CarPlay applies those changes to the selected tab’s navigation hierarchy.

> **Note**

>  You can’t add a tab bar template to an existing navigation hierarchy, or present one modally. Instead, use [setRootTemplate:animated:completion:](cpinterfacecontroller/setroottemplate%28__animated_completion_%29.md) to set the tab bar as your app’s root template.

Use a transactional approach when making changes to the tab bar. Retrieve the current set of templates using the [templates](cptabbartemplate/templates.md) property. Add, remove, reorder, or make appearance changes to one or more of the array’s templates. For example, use the [tabTitle](cptemplate/tabtitle.md) property to update a template’s tab title, or set [showsTabBadge](cptemplate/showstabbadge.md) to `true` to add an indicator to a template’s tab. Then call the [updateTemplates:](cptabbartemplate/updatetemplates%28__%29.md) method and pass it the updated array. CarPlay commits those changes and updates the tab bar.

When the user selects a tab, the template calls the [tabBarTemplate:didSelectTemplate:](cptabbartemplatedelegate/tabbartemplate%28__didselect_%29.md) method on its delegate, which is an object you provide that conforms to the [CPTabBarTemplateDelegate](cptabbartemplatedelegate.md) protocol.

## Topics

### Creating a Tab Bar Template

- [initWithTemplates:](cptabbartemplate/init%28templates_%29.md): Creates a tab bar template that displays the provided root templates as tabs.

### Managing Tab Bar Interactions

- [delegate](cptabbartemplate/delegate.md): The object that acts as the template’s delegate.
- [CPTabBarTemplateDelegate](cptabbartemplatedelegate.md): The methods an object implements to act as the delegate for a tab bar template.

### Managing the Templates

- [templates](cptabbartemplate/templates.md): The tab bar’s templates.
- [updateTemplates:](cptabbartemplate/updatetemplates%28__%29.md): Adds, removes, reorders, or updates the tab bar’s templates.
- [maximumTabCount](cptabbartemplate/maximumtabcount.md): The maximum number of tabs that the template can display.

### Getting the Selected Template

- [selectedTemplate](cptabbartemplate/selectedtemplate.md): The currently selected template in the tab bar.

### Instance Methods

- [selectTemplate:](cptabbartemplate/select%28__%29.md)
- [selectTemplateAtIndex:](cptabbartemplate/selecttemplate%28at_%29.md)

## Relationships

### Inherits From

- [CPTemplate](cptemplate.md)

## See Also

### General Purpose Templates

- [CPListTemplate](cplisttemplate.md): A template that displays and manages a list of items.
- [CPGridTemplate](cpgridtemplate.md): A template that displays and manages a grid of items.
- [CPTemplate](cptemplate.md): An abstract base class for interface templates.
- [CPBarButtonProviding](cpbarbuttonproviding.md): The methods that templates use to provide buttons for the navigation bar.
