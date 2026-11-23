> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpcontactcallbutton

# CPContactCallButton (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A button for calling the contact.

## Declaration

```swift
class CPContactCallButton
```

<a id="overview"></a>

## Overview

Use this button to call the template’s contact.

If your app doesn’t provide VoIP functionality, use the `tel` URL scheme to start a phone call with the contact. Invoke your template application scene’s [open(\_:options:completionHandler:)](https://developer.apple.com/documentation/uikit/uiscene/open%28_:options:completionhandler:%29) method and pass the URL. CarPlay provides this scene to your [CPTemplateApplicationSceneDelegate](cptemplateapplicationscenedelegate.md) when the scene connects.

## Topics

### Creating a contact call button

- [init(handler:)](cpcontactcallbutton/init%28handler_%29.md): Creates a button that invokes a handler when the user taps it.

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
- [CPContactDirectionsButton](cpcontactdirectionsbutton.md): A button for getting directions to the contact’s location.
- [CPContactMessageButton](cpcontactmessagebutton.md): A button that activates Siri and initiates the compose message flow.

# CPContactCallButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A button for calling the contact.

## Declaration

```objectivec
@interface CPContactCallButton : CPButton
```

<a id="overview"></a>

## Overview

Use this button to call the template’s contact.

If your app doesn’t provide VoIP functionality, use the `tel` URL scheme to start a phone call with the contact. Invoke your template application scene’s [openURL:options:completionHandler:](https://developer.apple.com/documentation/uikit/uiscene/open%28_:options:completionhandler:%29) method and pass the URL. CarPlay provides this scene to your [CPTemplateApplicationSceneDelegate](cptemplateapplicationscenedelegate.md) when the scene connects.

## Topics

### Creating a contact call button

- [initWithHandler:](cpcontactcallbutton/init%28handler_%29.md): Creates a button that invokes a handler when the user taps it.

## Relationships

### Inherits From

- [CPButton](cpbutton.md)

## See Also

### Contacts

- [CPContactTemplate](cpcontacttemplate.md): A template that displays information about a person or a business.
- [CPContact](cpcontact.md): A data object that contains information about a contact.
- [CPContactDirectionsButton](cpcontactdirectionsbutton.md): A button for getting directions to the contact’s location.
- [CPContactMessageButton](cpcontactmessagebutton.md): A button that activates Siri and initiates the compose message flow.
