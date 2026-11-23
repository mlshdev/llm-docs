> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptextbutton

# CPTextButton (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A button that displays a stylized title.

## Declaration

```swift
class CPTextButton
```

<a id="overview"></a>

## Overview

You use a text button to attach custom actions to an instance of [CPPointOfInterest](cppointofinterest.md) or [CPInformationTemplate](cpinformationtemplate.md). When creating a button, you provide a closure that CarPlay invokes when the user taps the button. You communicate the button’s purpose using a title and a text style that the button applies to the title.

## Topics

### Creating a text button

- [init(title:textStyle:handler:)](cptextbutton/init%28title_textstyle_handler_%29.md): Creates a button that displays a title in a specific style.

### Managing the title

- [title](cptextbutton/title.md): The text the button displays.

### Managing the button style

- [textStyle](cptextbutton/textstyle.md): The text style the button applies to its title.
- [CPTextButtonStyle](cptextbuttonstyle.md): The styles a button can apply to its title to communicate its action.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

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
- [CPButton](cpbutton.md): A button that displays an image and invokes a handler when the user taps it.
- [CPImageSet](cpimageset.md): Light and dark representations of an image.
- [CPPanel](cppanel.md): A type that provides the common behaviors for panels you display on top of your app’s content.
- [CPPanelItem](cppanelitem.md): A type that provides the common behaviors for items you display in a section of a panel.
- [CPPanelButtonConfiguration](cppanelbuttonconfiguration.md): A type that provides the common behaviors for a button layout in a panel.

# CPTextButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A button that displays a stylized title.

## Declaration

```objectivec
@interface CPTextButton : NSObject
```

<a id="overview"></a>

## Overview

You use a text button to attach custom actions to an instance of [CPPointOfInterest](cppointofinterest.md) or [CPInformationTemplate](cpinformationtemplate.md). When creating a button, you provide a closure that CarPlay invokes when the user taps the button. You communicate the button’s purpose using a title and a text style that the button applies to the title.

## Topics

### Creating a text button

- [initWithTitle:textStyle:handler:](cptextbutton/init%28title_textstyle_handler_%29.md): Creates a button that displays a title in a specific style.

### Managing the title

- [title](cptextbutton/title.md): The text the button displays.

### Managing the button style

- [textStyle](cptextbutton/textstyle.md): The text style the button applies to its title.
- [CPTextButtonStyle](cptextbuttonstyle.md): The styles a button can apply to its title to communicate its action.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Common types

- [CPTemplate](cptemplate.md): An abstract base class for interface templates.
- [CPButton](cpbutton.md): A button that displays an image and invokes a handler when the user taps it.
- [CPImageSet](cpimageset.md): Light and dark representations of an image.
- [CPPanel](cppanel.md): A type that provides the common behaviors for panels you display on top of your app’s content.
- [CPPanelItem](cppanelitem.md): A type that provides the common behaviors for items you display in a section of a panel.
- [CPPanelButtonConfiguration](cppanelbuttonconfiguration.md): A type that provides the common behaviors for a button layout in a panel.
