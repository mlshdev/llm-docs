> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpcontactmessagebutton](https://developer.apple.com/documentation/carplay/cpcontactmessagebutton)

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

### Creating a Contact Message Button

- [init(phoneOrEmail:)](cpcontactmessagebutton/init%28phoneoremail_%29.md): Creates a contact message button with the provided contact information.

### Getting the Contact Information

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

### Managing Interactions with the Contact

- [actions](cpcontact/actions.md): The actions that the template displays for this contact.
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

### Creating a Contact Message Button

- [initWithPhoneOrEmail:](cpcontactmessagebutton/init%28phoneoremail_%29.md): Creates a contact message button with the provided contact information.

### Getting the Contact Information

- [phoneOrEmail](cpcontactmessagebutton/phoneoremail.md): The contact’s phone number or email address.

## Relationships

### Inherits From

- [CPButton](cpbutton.md)

## See Also

### Managing Interactions with the Contact

- [actions](cpcontact/actions.md): The actions that the template displays for this contact.
- [CPContactCallButton](cpcontactcallbutton.md): A button for calling the contact.
- [CPContactDirectionsButton](cpcontactdirectionsbutton.md): A button for getting directions to the contact’s location.
