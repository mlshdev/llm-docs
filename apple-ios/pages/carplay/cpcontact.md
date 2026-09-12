> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpcontact](https://developer.apple.com/documentation/carplay/cpcontact)

# CPContact (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A data object that contains information about a contact.

## Declaration

```swift
class CPContact
```

<a id="overview"></a>

## Overview

`CPContact` is an object that represents information about a person or a business, and can include a set of contextually relevant actions that a user can perform when CarPlay displays the contact, such as getting directions to its location.

You display a contact using [CPContactTemplate](cpcontacttemplate.md). The template manages the appearance of the contact, and can display up to four action buttons. After displaying it, you can update the buttons for the template by assigning a new array to the contact’s [actions](cpcontact/actions.md) property.

The framework provides specialized buttons for common actions, such as [CPContactCallButton](cpcontactcallbutton.md) or [CPContactMessageButton](cpcontactmessagebutton.md).

## Topics

### Creating a Contact

- [init(name:image:)](cpcontact/init%28name_image_%29.md): Creates a contact with a name and an image.

### Configuring the Contact’s Attributes

- [image](cpcontact/image.md): The contact’s image.
- [name](cpcontact/name.md): The contact’s name.
- [subtitle](cpcontact/subtitle.md): A subtitle that the template displays in addition to the contact’s name.
- [informativeText](cpcontact/informativetext.md): Additional text that the template displays.

### Managing Interactions with the Contact

- [actions](cpcontact/actions.md): The actions that the template displays for this contact.
- [CPContactCallButton](cpcontactcallbutton.md): A button for calling the contact.
- [CPContactDirectionsButton](cpcontactdirectionsbutton.md): A button for getting directions to the contact’s location.
- [CPContactMessageButton](cpcontactmessagebutton.md): A button that activates Siri and initiates the compose message flow.

### Initializers

- [init(coder:)](cpcontact/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Configuring the Contact

- [contact](cpcontacttemplate/contact.md): The contact that the template displays.

# CPContact (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A data object that contains information about a contact.

## Declaration

```objectivec
@interface CPContact : NSObject
```

<a id="overview"></a>

## Overview

`CPContact` is an object that represents information about a person or a business, and can include a set of contextually relevant actions that a user can perform when CarPlay displays the contact, such as getting directions to its location.

You display a contact using [CPContactTemplate](cpcontacttemplate.md). The template manages the appearance of the contact, and can display up to four action buttons. After displaying it, you can update the buttons for the template by assigning a new array to the contact’s [actions](cpcontact/actions.md) property.

The framework provides specialized buttons for common actions, such as [CPContactCallButton](cpcontactcallbutton.md) or [CPContactMessageButton](cpcontactmessagebutton.md).

## Topics

### Creating a Contact

- [initWithName:image:](cpcontact/init%28name_image_%29.md): Creates a contact with a name and an image.

### Configuring the Contact’s Attributes

- [image](cpcontact/image.md): The contact’s image.
- [name](cpcontact/name.md): The contact’s name.
- [subtitle](cpcontact/subtitle.md): A subtitle that the template displays in addition to the contact’s name.
- [informativeText](cpcontact/informativetext.md): Additional text that the template displays.

### Managing Interactions with the Contact

- [actions](cpcontact/actions.md): The actions that the template displays for this contact.
- [CPContactCallButton](cpcontactcallbutton.md): A button for calling the contact.
- [CPContactDirectionsButton](cpcontactdirectionsbutton.md): A button for getting directions to the contact’s location.
- [CPContactMessageButton](cpcontactmessagebutton.md): A button that activates Siri and initiates the compose message flow.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Configuring the Contact

- [contact](cpcontacttemplate/contact.md): The contact that the template displays.
