> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptabbartemplatedelegate](https://developer.apple.com/documentation/carplay/cptabbartemplatedelegate)

# CPTabBarTemplateDelegate (Swift)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The methods an object implements to act as the delegate for a tab bar template.

## Declaration

```swift
@MainActor protocol CPTabBarTemplateDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You use the `CPTabBarTemplateDelegate` protocol to respond to a tab bar template’s events. The protocol defines methods that the template calls in response to these events, and your implementation provides the appropriate behavior when the events occur. For example, reloading a tab’s contents when the user selects it to make sure it’s displaying the latest data.

## Topics

### Managing the Selected Template

- [tabBarTemplate(\_:didSelect:)](cptabbartemplatedelegate/tabbartemplate%28__didselect_%29.md): Tells the delegate when the tab bar selects the specified template.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Managing Tab Bar Interactions

- [delegate](cptabbartemplate/delegate.md): The object that acts as the template’s delegate.

# CPTabBarTemplateDelegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The methods an object implements to act as the delegate for a tab bar template.

## Declaration

```objectivec
@protocol CPTabBarTemplateDelegate <NSObject>
```

<a id="overview"></a>

## Overview

You use the `CPTabBarTemplateDelegate` protocol to respond to a tab bar template’s events. The protocol defines methods that the template calls in response to these events, and your implementation provides the appropriate behavior when the events occur. For example, reloading a tab’s contents when the user selects it to make sure it’s displaying the latest data.

## Topics

### Managing the Selected Template

- [tabBarTemplate:didSelectTemplate:](cptabbartemplatedelegate/tabbartemplate%28__didselect_%29.md): Tells the delegate when the tab bar selects the specified template.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Managing Tab Bar Interactions

- [delegate](cptabbartemplate/delegate.md): The object that acts as the template’s delegate.
