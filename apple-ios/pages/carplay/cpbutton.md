> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpbutton](https://developer.apple.com/documentation/carplay/cpbutton)

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

### Creating a Button

- [init(image:handler:)](cpbutton/init%28image_handler_%29.md): Creates a button that displays an image and invokes a handler when the user taps it.
- [CPButtonMaximumImageSize](cpbuttonmaximumimagesize.md): The maximum size of a button’s image that CarPlay supports.

### Getting the Button’s Image

- [image](cpbutton/image.md): The button’s image.

### Configuring the Button’s Attributes

- [title](cpbutton/title.md): The button’s title.
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

### Related Types

- [CPImageSet](cpimageset.md): Light and dark representations of an image.
- [CarPlayErrorDomain](carplayerrordomain.md): The domain that CarPlay uses for any errors it provides.

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

### Creating a Button

- [initWithImage:handler:](cpbutton/init%28image_handler_%29.md): Creates a button that displays an image and invokes a handler when the user taps it.
- [CPButtonMaximumImageSize](cpbuttonmaximumimagesize.md): The maximum size of a button’s image that CarPlay supports.

### Getting the Button’s Image

- [image](cpbutton/image.md): The button’s image.

### Configuring the Button’s Attributes

- [title](cpbutton/title.md): The button’s title.
- [enabled](cpbutton/isenabled.md): A Boolean value that determines whether the button is in an enabled state.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPContactCallButton](cpcontactcallbutton.md)
- [CPContactDirectionsButton](cpcontactdirectionsbutton.md)
- [CPContactMessageButton](cpcontactmessagebutton.md)

## See Also

### Related Types

- [CPImageSet](cpimageset.md): Light and dark representations of an image.
- [CarPlayErrorDomain](carplayerrordomain.md): The domain that CarPlay uses for any errors it provides.
