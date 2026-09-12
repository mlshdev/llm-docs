> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpcontactdirectionsbutton](https://developer.apple.com/documentation/carplay/cpcontactdirectionsbutton)

# CPContactDirectionsButton (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A button for getting directions to the contact’s location.

## Declaration

```swift
class CPContactDirectionsButton
```

<a id="overview"></a>

## Overview

Use this button to get directions to the location of the template’s contact.

If your app doesn’t provide turn-by-turn navigation, use the `maps` URL scheme to launch the most recent navigation app. Call your template application scene’s [open(\_:options:completionHandler:)](https://developer.apple.com/documentation/uikit/uiscene/open%28_:options:completionhandler:%29) method and pass a URL that embeds the contact’s location. CarPlay provides this scene to your [CPTemplateApplicationSceneDelegate](cptemplateapplicationscenedelegate.md) when the scene connects.

## Topics

### Creating a Contact Directions Button

- [init(handler:)](cpcontactdirectionsbutton/init%28handler_%29.md): Creates a button that invokes a handler when the user taps it.

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
- [CPContactMessageButton](cpcontactmessagebutton.md): A button that activates Siri and initiates the compose message flow.

# CPContactDirectionsButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A button for getting directions to the contact’s location.

## Declaration

```objectivec
@interface CPContactDirectionsButton : CPButton
```

<a id="overview"></a>

## Overview

Use this button to get directions to the location of the template’s contact.

If your app doesn’t provide turn-by-turn navigation, use the `maps` URL scheme to launch the most recent navigation app. Call your template application scene’s [openURL:options:completionHandler:](https://developer.apple.com/documentation/uikit/uiscene/open%28_:options:completionhandler:%29) method and pass a URL that embeds the contact’s location. CarPlay provides this scene to your [CPTemplateApplicationSceneDelegate](cptemplateapplicationscenedelegate.md) when the scene connects.

## Topics

### Creating a Contact Directions Button

- [initWithHandler:](cpcontactdirectionsbutton/init%28handler_%29.md): Creates a button that invokes a handler when the user taps it.

## Relationships

### Inherits From

- [CPButton](cpbutton.md)

## See Also

### Managing Interactions with the Contact

- [actions](cpcontact/actions.md): The actions that the template displays for this contact.
- [CPContactCallButton](cpcontactcallbutton.md): A button for calling the contact.
- [CPContactMessageButton](cpcontactmessagebutton.md): A button that activates Siri and initiates the compose message flow.
