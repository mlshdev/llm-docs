> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpbarbutton

# CPBarButton (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A button that appears in a navigation bar.

## Declaration

```swift
class CPBarButton
```

<a id="overview"></a>

## Overview

A `CPBarButton` object is a button you display in the navigation bar of one of your app’s templates. Create buttons when you want to make custom actions available at all times from the template. For example, you might add a plus button to a list template to support adding items to the list. Configure buttons with either an image or custom text you provide.

> **Note**

> The back button always displays the system standard appearance, even if you provide a button with a custom image or text.

## Topics

### Creating a bar button

- [init(image:handler:)](cpbarbutton/init%28image_handler_%29.md): Creates a bar button that displays an image.
- [init(title:handler:)](cpbarbutton/init%28title_handler_%29.md): Creates a bar button that displays a text string.
- [CPBarButtonHandler](cpbarbuttonhandler.md): A block that CarPlay calls when the user taps a bar button.
- [init(coder:)](cpbarbutton/init%28coder_%29.md)

### Configuring the button

- [image](cpbarbutton/image.md): The image to display in the button.
- [title](cpbarbutton/title.md): The text to display in the button.
- [isEnabled](cpbarbutton/isenabled.md): A Boolean value that indicates whether the button is enabled.

### Getting the display style

- [buttonStyle](cpbarbutton/buttonstyle.md): The style to apply to the button.
- [CPBarButtonStyle](cpbarbuttonstyle.md): The display style of a bar button.

### Deprecated

- [init(type:handler:)](cpbarbutton/init%28type_handler_%29.md): Deprecated.
- [buttonType](cpbarbutton/buttontype.md): Deprecated.
- [CPBarButton.Type](cpbarbutton/type.md): Specifies the type of a @c CPBarButton.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPMessageComposeBarButton](cpmessagecomposebarbutton.md)

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
- [CPMessageComposeBarButton](cpmessagecomposebarbutton.md): A button that activates Siri and initiates the process for composing a message.

# CPBarButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A button that appears in a navigation bar.

## Declaration

```objectivec
@interface CPBarButton : NSObject
```

<a id="overview"></a>

## Overview

A `CPBarButton` object is a button you display in the navigation bar of one of your app’s templates. Create buttons when you want to make custom actions available at all times from the template. For example, you might add a plus button to a list template to support adding items to the list. Configure buttons with either an image or custom text you provide.

> **Note**

> The back button always displays the system standard appearance, even if you provide a button with a custom image or text.

## Topics

### Creating a bar button

- [initWithImage:handler:](cpbarbutton/init%28image_handler_%29.md): Creates a bar button that displays an image.
- [initWithTitle:handler:](cpbarbutton/init%28title_handler_%29.md): Creates a bar button that displays a text string.
- [CPBarButtonHandler](cpbarbuttonhandler.md): A block that CarPlay calls when the user taps a bar button.

### Configuring the button

- [image](cpbarbutton/image.md): The image to display in the button.
- [title](cpbarbutton/title.md): The text to display in the button.
- [enabled](cpbarbutton/isenabled.md): A Boolean value that indicates whether the button is enabled.

### Getting the display style

- [buttonStyle](cpbarbutton/buttonstyle.md): The style to apply to the button.
- [CPBarButtonStyle](cpbarbuttonstyle.md): The display style of a bar button.

### Deprecated

- [initWithType:handler:](cpbarbutton/init%28type_handler_%29.md): Deprecated.
- [buttonType](cpbarbutton/buttontype.md): Deprecated.
- [CPBarButtonType](cpbarbutton/type.md): Specifies the type of a @c CPBarButton.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPMessageComposeBarButton](cpmessagecomposebarbutton.md)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Navigation bar

- [CPBarButtonProviding](cpbarbuttonproviding.md): The interface templates you use to manage buttons in the navigation bar.
- [CPMessageComposeBarButton](cpmessagecomposebarbutton.md): A button that activates Siri and initiates the process for composing a message.
