> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpbutton

# CPButton (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A button that displays an image and invokes a handler when the user taps it.

## Declaration

```swift
class CPButton
```

<a id="overview"></a>

## Overview

You create instances of `CPButton` to provide a template’s actions. The button displays a custom image that communicates its function. When a user taps the button, CarPlay invokes the handler you provide. The template that contains the button manages its appearance.

The framework provides specialized subclasses for common actions, such as [CPContactCallButton](cpcontactcallbutton.md) or [CPContactMessageButton](cpcontactmessagebutton.md).

## Topics

### Creating a button

- [init(image:handler:)](cpbutton/init%28image_handler_%29.md): Creates a button that displays an image and invokes a handler when the user taps it.
- [CPButtonMaximumImageSize](cpbuttonmaximumimagesize.md): The maximum size of a button’s image that CarPlay supports.

### Getting the button’s content

- [image](cpbutton/image.md): The button’s image.
- [title](cpbutton/title.md): The button’s title.

### Enabling and disabling the button

- [isEnabled](cpbutton/isenabled.md): A Boolean value that determines whether the button is in an enabled state.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPContactCallButton](cpcontactcallbutton.md)
- [CPContactDirectionsButton](cpcontactdirectionsbutton.md)
- [CPContactMessageButton](cpcontactmessagebutton.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Common types

- [CPTemplate](cptemplate.md): An abstract base class for interface templates.
- [CPTextButton](cptextbutton.md): A button that displays a stylized title.
- [CPImageSet](cpimageset.md): Light and dark representations of an image.
- [CPPanel](cppanel.md): A type that provides the common behaviors for panels you display on top of your app’s content.
- [CPPanelItem](cppanelitem.md): A type that provides the common behaviors for items you display in a section of a panel.
- [CPPanelButtonConfiguration](cppanelbuttonconfiguration.md): A type that provides the common behaviors for a button layout in a panel.

# CPButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A button that displays an image and invokes a handler when the user taps it.

## Declaration

```objectivec
@interface CPButton : NSObject
```

<a id="overview"></a>

## Overview

You create instances of `CPButton` to provide a template’s actions. The button displays a custom image that communicates its function. When a user taps the button, CarPlay invokes the handler you provide. The template that contains the button manages its appearance.

The framework provides specialized subclasses for common actions, such as [CPContactCallButton](cpcontactcallbutton.md) or [CPContactMessageButton](cpcontactmessagebutton.md).

## Topics

### Creating a button

- [initWithImage:handler:](cpbutton/init%28image_handler_%29.md): Creates a button that displays an image and invokes a handler when the user taps it.
- [CPButtonMaximumImageSize](cpbuttonmaximumimagesize.md): The maximum size of a button’s image that CarPlay supports.

### Getting the button’s content

- [image](cpbutton/image.md): The button’s image.
- [title](cpbutton/title.md): The button’s title.

### Enabling and disabling the button

- [enabled](cpbutton/isenabled.md): A Boolean value that determines whether the button is in an enabled state.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPContactCallButton](cpcontactcallbutton.md)
- [CPContactDirectionsButton](cpcontactdirectionsbutton.md)
- [CPContactMessageButton](cpcontactmessagebutton.md)

## See Also

### Common types

- [CPTemplate](cptemplate.md): An abstract base class for interface templates.
- [CPTextButton](cptextbutton.md): A button that displays a stylized title.
- [CPImageSet](cpimageset.md): Light and dark representations of an image.
- [CPPanel](cppanel.md): A type that provides the common behaviors for panels you display on top of your app’s content.
- [CPPanelItem](cppanelitem.md): A type that provides the common behaviors for items you display in a section of a panel.
- [CPPanelButtonConfiguration](cppanelbuttonconfiguration.md): A type that provides the common behaviors for a button layout in a panel.
