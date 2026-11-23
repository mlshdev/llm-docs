> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpcontactmessagebutton

# CPContactMessageButton (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A button that activates Siri and initiates the compose message flow.

## Declaration

```swift
class CPContactMessageButton
```

<a id="overview"></a>

## Overview

> **Important**

>  This subclass of [CPButton](cpbutton.md) doesn’t use a handler. Instead, tapping this button activates Siri and launches the compose message flow using the contact information in the [phoneOrEmail](cpcontactmessagebutton/phoneoremail.md) property.

## Topics

### Creating a contact message button

- [init(phoneOrEmail:)](cpcontactmessagebutton/init%28phoneoremail_%29.md): Creates a contact message button with the provided contact information.

### Getting the contact information

- [phoneOrEmail](cpcontactmessagebutton/phoneoremail.md): The contact’s phone number or email address.

## Relationships

### Inherits From

- [CPButton](cpbutton.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Contacts

- [CPContactTemplate](cpcontacttemplate.md): A template that displays information about a person or a business.
- [CPContact](cpcontact.md): A data object that contains information about a contact.
- [CPContactCallButton](cpcontactcallbutton.md): A button for calling the contact.
- [CPContactDirectionsButton](cpcontactdirectionsbutton.md): A button for getting directions to the contact’s location.

# CPContactMessageButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A button that activates Siri and initiates the compose message flow.

## Declaration

```objectivec
@interface CPContactMessageButton : CPButton
```

<a id="overview"></a>

## Overview

> **Important**

>  This subclass of [CPButton](cpbutton.md) doesn’t use a handler. Instead, tapping this button activates Siri and launches the compose message flow using the contact information in the [phoneOrEmail](cpcontactmessagebutton/phoneoremail.md) property.

## Topics

### Creating a contact message button

- [initWithPhoneOrEmail:](cpcontactmessagebutton/init%28phoneoremail_%29.md): Creates a contact message button with the provided contact information.

### Getting the contact information

- [phoneOrEmail](cpcontactmessagebutton/phoneoremail.md): The contact’s phone number or email address.

## Relationships

### Inherits From

- [CPButton](cpbutton.md)

## See Also

### Contacts

- [CPContactTemplate](cpcontacttemplate.md): A template that displays information about a person or a business.
- [CPContact](cpcontact.md): A data object that contains information about a contact.
- [CPContactCallButton](cpcontactcallbutton.md): A button for calling the contact.
- [CPContactDirectionsButton](cpcontactdirectionsbutton.md): A button for getting directions to the contact’s location.
