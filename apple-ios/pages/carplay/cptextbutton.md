> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptextbutton](https://developer.apple.com/documentation/carplay/cptextbutton)

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

### Creating a Text Button

- [init(title:textStyle:handler:)](cptextbutton/init%28title_textstyle_handler_%29.md): Creates a button that displays a title in a specific style.

### Managing the Title

- [title](cptextbutton/title.md): The text the button displays.

### Managing the Button Style

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

### Location and Information

- [CPPointOfInterestTemplate](cppointofinteresttemplate.md): A template that displays a map with selectable points of interest.
- [CPInformationTemplate](cpinformationtemplate.md): A template that provides information for a point of interest, food order, parking location, or charging location.
- [Integrating CarPlay with your quick-ordering app](integrating-carplay-with-your-quick-ordering-app.md): Configure your food-ordering app to work with CarPlay.

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

### Creating a Text Button

- [initWithTitle:textStyle:handler:](cptextbutton/init%28title_textstyle_handler_%29.md): Creates a button that displays a title in a specific style.

### Managing the Title

- [title](cptextbutton/title.md): The text the button displays.

### Managing the Button Style

- [textStyle](cptextbutton/textstyle.md): The text style the button applies to its title.
- [CPTextButtonStyle](cptextbuttonstyle.md): The styles a button can apply to its title to communicate its action.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Location and Information

- [CPPointOfInterestTemplate](cppointofinteresttemplate.md): A template that displays a map with selectable points of interest.
- [CPInformationTemplate](cpinformationtemplate.md): A template that provides information for a point of interest, food order, parking location, or charging location.
- [Integrating CarPlay with your quick-ordering app](integrating-carplay-with-your-quick-ordering-app.md): Configure your food-ordering app to work with CarPlay.
