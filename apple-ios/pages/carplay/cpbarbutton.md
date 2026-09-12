> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpbarbutton](https://developer.apple.com/documentation/carplay/cpbarbutton)

# CPBarButton (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A button for placement in a navigation bar.

## Declaration

```swift
class CPBarButton
```

## Topics

### Creating a CarPlay Bar Button

- [init(coder:)](cpbarbutton/init%28coder_%29.md): Creates a button initialized from data in the specified coder object.
- [init(type:handler:)](cpbarbutton/init%28type_handler_%29.md): Deprecated. Creates a bar button with a type and handler.
- [init(image:handler:)](cpbarbutton/init%28image_handler_%29.md): Creates a bar button that displays an image.
- [init(title:handler:)](cpbarbutton/init%28title_handler_%29.md): Creates a bar button that displays a text label.
- [CPBarButton.Type](cpbarbutton/type.md): Types of bar buttons.
- [CPBarButtonHandler](cpbarbuttonhandler.md): A block that CarPlay calls when the user taps a bar button.

### Configuring the Button

- [isEnabled](cpbarbutton/isenabled.md): A Boolean value that enables and disables the bar button.
- [image](cpbarbutton/image.md): The image displayed on the bar button.
- [title](cpbarbutton/title.md): The title displayed on the bar button.

### Getting the Button Style

- [buttonType](cpbarbutton/buttontype.md): Deprecated. The display type for the bar button.
- [buttonStyle](cpbarbutton/buttonstyle.md): The style to use when displaying the button.
- [CPBarButtonStyle](cpbarbuttonstyle.md): The display style of a bar button.

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

### Providing Navigation Bar Buttons

- [backButton](cpbarbuttonproviding/backbutton.md): A button to display as the Back button on the navigation bar.
- [leadingNavigationBarButtons](cpbarbuttonproviding/leadingnavigationbarbuttons.md): An array of bar buttons to display on the leading side of the navigation bar.
- [trailingNavigationBarButtons](cpbarbuttonproviding/trailingnavigationbarbuttons.md): An array of bar buttons to display on the trailing side of the navigation bar.
- [CPMessageComposeBarButton](cpmessagecomposebarbutton.md): A button that activates Siri and initiates the compose message flow.

# CPBarButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A button for placement in a navigation bar.

## Declaration

```objectivec
@interface CPBarButton : NSObject
```

## Topics

### Creating a CarPlay Bar Button

- [initWithType:handler:](cpbarbutton/init%28type_handler_%29.md): Deprecated. Creates a bar button with a type and handler.
- [initWithImage:handler:](cpbarbutton/init%28image_handler_%29.md): Creates a bar button that displays an image.
- [initWithTitle:handler:](cpbarbutton/init%28title_handler_%29.md): Creates a bar button that displays a text label.
- [CPBarButtonType](cpbarbutton/type.md): Types of bar buttons.
- [CPBarButtonHandler](cpbarbuttonhandler.md): A block that CarPlay calls when the user taps a bar button.

### Configuring the Button

- [enabled](cpbarbutton/isenabled.md): A Boolean value that enables and disables the bar button.
- [image](cpbarbutton/image.md): The image displayed on the bar button.
- [title](cpbarbutton/title.md): The title displayed on the bar button.

### Getting the Button Style

- [buttonType](cpbarbutton/buttontype.md): Deprecated. The display type for the bar button.
- [buttonStyle](cpbarbutton/buttonstyle.md): The style to use when displaying the button.
- [CPBarButtonStyle](cpbarbuttonstyle.md): The display style of a bar button.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPMessageComposeBarButton](cpmessagecomposebarbutton.md)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Providing Navigation Bar Buttons

- [backButton](cpbarbuttonproviding/backbutton.md): A button to display as the Back button on the navigation bar.
- [leadingNavigationBarButtons](cpbarbuttonproviding/leadingnavigationbarbuttons.md): An array of bar buttons to display on the leading side of the navigation bar.
- [trailingNavigationBarButtons](cpbarbuttonproviding/trailingnavigationbarbuttons.md): An array of bar buttons to display on the trailing side of the navigation bar.
- [CPMessageComposeBarButton](cpmessagecomposebarbutton.md): A button that activates Siri and initiates the compose message flow.
