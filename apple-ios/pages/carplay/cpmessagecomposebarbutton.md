> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmessagecomposebarbutton](https://developer.apple.com/documentation/carplay/cpmessagecomposebarbutton)

# CPMessageComposeBarButton (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A button that activates Siri and initiates the compose message flow.

## Declaration

```swift
class CPMessageComposeBarButton
```

<a id="overview"></a>

## Overview

> **Note**

>  This button type does not use a handler. Instead, tapping this button activates Siri and initiates the compose message flow.

## Topics

### Creating a Message Compose Bar Button

- [init()](cpmessagecomposebarbutton/init%28%29.md): Creates a message compose button with a system-provided image.
- [init(image:)](cpmessagecomposebarbutton/init%28image_%29.md): Creates a message compose button that displays a custom image.

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

### Providing Navigation Bar Buttons

- [backButton](cpbarbuttonproviding/backbutton.md): A button to display as the Back button on the navigation bar.
- [leadingNavigationBarButtons](cpbarbuttonproviding/leadingnavigationbarbuttons.md): An array of bar buttons to display on the leading side of the navigation bar.
- [trailingNavigationBarButtons](cpbarbuttonproviding/trailingnavigationbarbuttons.md): An array of bar buttons to display on the trailing side of the navigation bar.
- [CPBarButton](cpbarbutton.md): A button for placement in a navigation bar.

# CPMessageComposeBarButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A button that activates Siri and initiates the compose message flow.

## Declaration

```objectivec
@interface CPMessageComposeBarButton : CPBarButton
```

<a id="overview"></a>

## Overview

> **Note**

>  This button type does not use a handler. Instead, tapping this button activates Siri and initiates the compose message flow.

## Topics

### Creating a Message Compose Bar Button

- [init](cpmessagecomposebarbutton/init%28%29.md): Creates a message compose button with a system-provided image.
- [initWithImage:](cpmessagecomposebarbutton/init%28image_%29.md): Creates a message compose button that displays a custom image.
- [new](cpmessagecomposebarbutton/new.md): Creates a message compose button with a system-provided image.

## Relationships

### Inherits From

- [CPBarButton](cpbarbutton.md)

## See Also

### Providing Navigation Bar Buttons

- [backButton](cpbarbuttonproviding/backbutton.md): A button to display as the Back button on the navigation bar.
- [leadingNavigationBarButtons](cpbarbuttonproviding/leadingnavigationbarbuttons.md): An array of bar buttons to display on the leading side of the navigation bar.
- [trailingNavigationBarButtons](cpbarbuttonproviding/trailingnavigationbarbuttons.md): An array of bar buttons to display on the trailing side of the navigation bar.
- [CPBarButton](cpbarbutton.md): A button for placement in a navigation bar.
