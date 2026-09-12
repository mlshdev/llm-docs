> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpdashboardbutton](https://developer.apple.com/documentation/carplay/cpdashboardbutton)

# CPDashboardButton (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

A shortcut button for placement on the CarPlay Dashboard.

## Declaration

```swift
class CPDashboardButton
```

## Topics

### Creating a Dashboard Button

- [init(titleVariants:subtitleVariants:image:handler:)](cpdashboardbutton/init%28titlevariants_subtitlevariants_image_handler_%29.md): Creates a dashboard button that displays a title, an optional subtitle, and an image.

### Accessing the Button Configuration

- [titleVariants](cpdashboardbutton/titlevariants.md): The array of title variants for the button.
- [subtitleVariants](cpdashboardbutton/subtitlevariants.md): The array of subtitle variants for the button.
- [image](cpdashboardbutton/image.md): The image the button displays.

### Initializers

- [init(coder:)](cpdashboardbutton/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

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

### Providing Dashboard Buttons

- [shortcutButtons](cpdashboardcontroller/shortcutbuttons.md): An array of shortcut buttons to display on the CarPlay Dashboard.

# CPDashboardButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

A shortcut button for placement on the CarPlay Dashboard.

## Declaration

```objectivec
@interface CPDashboardButton : NSObject
```

## Topics

### Creating a Dashboard Button

- [initWithTitleVariants:subtitleVariants:image:handler:](cpdashboardbutton/init%28titlevariants_subtitlevariants_image_handler_%29.md): Creates a dashboard button that displays a title, an optional subtitle, and an image.

### Accessing the Button Configuration

- [titleVariants](cpdashboardbutton/titlevariants.md): The array of title variants for the button.
- [subtitleVariants](cpdashboardbutton/subtitlevariants.md): The array of subtitle variants for the button.
- [image](cpdashboardbutton/image.md): The image the button displays.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Providing Dashboard Buttons

- [shortcutButtons](cpdashboardcontroller/shortcutbuttons.md): An array of shortcut buttons to display on the CarPlay Dashboard.
