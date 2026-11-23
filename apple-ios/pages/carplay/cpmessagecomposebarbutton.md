> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmessagecomposebarbutton

# CPMessageComposeBarButton (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A button that activates Siri and initiates the process for composing a message.

## Declaration

```swift
class CPMessageComposeBarButton
```

<a id="overview"></a>

## Overview

Include a `CPMessageComposeBarButton` in your template’s navigation bar to support the creation of new messages in your communication app. When someone taps the button, CarPlay launches Siri to compose the message. The message composition workflow relies on your app’s SiriKit support for messages to build and send the message.

> **Note**

> This button works only in communication apps.

## Topics

### Creating a message compose bar button

- [init()](cpmessagecomposebarbutton/init%28%29.md): Creates a button for composing messages that uses the system-provided image.
- [init(image:)](cpmessagecomposebarbutton/init%28image_%29.md): Creates a button for composing messages that uses a custom image you provide.

## Relationships

### Inherits From

- [CPBarButton](cpbarbutton.md)

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

### Navigation bar

- [CPBarButtonProviding](cpbarbuttonproviding.md): The interface templates you use to manage buttons in the navigation bar.
- [CPBarButton](cpbarbutton.md): A button that appears in a navigation bar.

# CPMessageComposeBarButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A button that activates Siri and initiates the process for composing a message.

## Declaration

```objectivec
@interface CPMessageComposeBarButton : CPBarButton
```

<a id="overview"></a>

## Overview

Include a `CPMessageComposeBarButton` in your template’s navigation bar to support the creation of new messages in your communication app. When someone taps the button, CarPlay launches Siri to compose the message. The message composition workflow relies on your app’s SiriKit support for messages to build and send the message.

> **Note**

> This button works only in communication apps.

## Topics

### Creating a message compose bar button

- [init](cpmessagecomposebarbutton/init%28%29.md): Creates a button for composing messages that uses the system-provided image.
- [initWithImage:](cpmessagecomposebarbutton/init%28image_%29.md): Creates a button for composing messages that uses a custom image you provide.
- [new](cpmessagecomposebarbutton/new.md)

## Relationships

### Inherits From

- [CPBarButton](cpbarbutton.md)

## See Also

### Navigation bar

- [CPBarButtonProviding](cpbarbuttonproviding.md): The interface templates you use to manage buttons in the navigation bar.
- [CPBarButton](cpbarbutton.md): A button that appears in a navigation bar.
