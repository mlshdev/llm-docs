> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpcontactcallbutton](https://developer.apple.com/documentation/carplay/cpcontactcallbutton)

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

### Creating a Contact Call Button

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

### Managing Interactions with the Contact

- [actions](cpcontact/actions.md): The actions that the template displays for this contact.
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

### Creating a Contact Call Button

- [initWithHandler:](cpcontactcallbutton/init%28handler_%29.md): Creates a button that invokes a handler when the user taps it.

## Relationships

### Inherits From

- [CPButton](cpbutton.md)

## See Also

### Managing Interactions with the Contact

- [actions](cpcontact/actions.md): The actions that the template displays for this contact.
- [CPContactDirectionsButton](cpcontactdirectionsbutton.md): A button for getting directions to the contact’s location.
- [CPContactMessageButton](cpcontactmessagebutton.md): A button that activates Siri and initiates the compose message flow.
