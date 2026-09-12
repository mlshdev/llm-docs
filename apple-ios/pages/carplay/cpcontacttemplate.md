> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpcontacttemplate](https://developer.apple.com/documentation/carplay/cpcontacttemplate)

# CPContactTemplate (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A template that displays information about a person or a business.

## Declaration

```swift
@MainActor class CPContactTemplate
```

<a id="overview"></a>

## Overview

The contact template can provide up to four contextual actions a user can invoke. For example, you might have an action that provides directions to the contact’s address.

When creating a contact template, you provide an instance of [CPContact](cpcontact.md) that contains a contact’s name and image, and optional subtitle. The object also contains any actions relevant to the contact. CarPlay provides specialized buttons for common actions, such as [CPContactCallButton](cpcontactcallbutton.md) or [CPContactMessageButton](cpcontactmessagebutton.md).

To display a contact template, call your interface controller’s [pushTemplate(\_:animated:completion:)](cpinterfacecontroller/pushtemplate%28__animated_completion_%29.md) method to push it onto the navigation hierarchy, or [presentTemplate(\_:animated:completion:)](cpinterfacecontroller/presenttemplate%28__animated_completion_%29.md) to present it modally.

> **Note**

>  `CPContactTemplate` is only available in apps that have the communication or navigation entitlements.

## Topics

### Creating a Contact Template

- [init(contact:)](cpcontacttemplate/init%28contact_%29.md): Creates a contact template that displays the provided contact.

### Configuring the Contact

- [contact](cpcontacttemplate/contact.md): The contact that the template displays.
- [CPContact](cpcontact.md): A data object that contains information about a contact.

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

# CPContactTemplate (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A template that displays information about a person or a business.

## Declaration

```objectivec
@interface CPContactTemplate : CPTemplate
```

<a id="overview"></a>

## Overview

The contact template can provide up to four contextual actions a user can invoke. For example, you might have an action that provides directions to the contact’s address.

When creating a contact template, you provide an instance of [CPContact](cpcontact.md) that contains a contact’s name and image, and optional subtitle. The object also contains any actions relevant to the contact. CarPlay provides specialized buttons for common actions, such as [CPContactCallButton](cpcontactcallbutton.md) or [CPContactMessageButton](cpcontactmessagebutton.md).

To display a contact template, call your interface controller’s [pushTemplate:animated:completion:](cpinterfacecontroller/pushtemplate%28__animated_completion_%29.md) method to push it onto the navigation hierarchy, or [presentTemplate:animated:completion:](cpinterfacecontroller/presenttemplate%28__animated_completion_%29.md) to present it modally.

> **Note**

>  `CPContactTemplate` is only available in apps that have the communication or navigation entitlements.

## Topics

### Creating a Contact Template

- [initWithContact:](cpcontacttemplate/init%28contact_%29.md): Creates a contact template that displays the provided contact.

### Configuring the Contact

- [contact](cpcontacttemplate/contact.md): The contact that the template displays.
- [CPContact](cpcontact.md): A data object that contains information about a contact.

## Relationships

### Inherits From

- [CPTemplate](cptemplate.md)

### Conforms To

- [CPBarButtonProviding](cpbarbuttonproviding.md)
