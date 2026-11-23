> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpgridbutton

# CPGridButton (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A menu item button displayed on a grid template.

## Declaration

```swift
class CPGridButton
```

## Topics

### Creating a grid button

- [init(titleVariants:image:handler:)](cpgridbutton/init%28titlevariants_image_handler_%29.md): Creates a grid button with the specified title variants, image, and action handler.
- [init(titleVariants:image:messageConfiguration:handler:)](cpgridbutton/init%28titlevariants_image_messageconfiguration_handler_%29.md): Initialize a button with a title, image, and message configuration.
- [init(coder:)](cpgridbutton/init%28coder_%29.md)

### Managing the button content

- [image](cpgridbutton/image.md): The image displayed on the button.
- [updateImage(\_:)](cpgridbutton/updateimage%28__%29.md)
- [titleVariants](cpgridbutton/titlevariants.md): An array of title variants for the button.
- [updateTitleVariants(\_:)](cpgridbutton/updatetitlevariants%28__%29.md)

### Enabling and disabling the button

- [isEnabled](cpgridbutton/isenabled.md): A Boolean value that enables and disables the grid button.

### Instance Properties

- [messageConfiguration](cpgridbutton/messageconfiguration.md)

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

### Grids

- [CPGridTemplate](cpgridtemplate.md): A template that displays and manages a grid of items.
- [CPMessageGridItemConfiguration](cpmessagegriditemconfiguration.md): A type that associates message-related information with a grid button.
- [CPGridTemplateMaximumItems](cpgridtemplatemaximumitems.md): The maximum number of buttons that a grid template displays.

# CPGridButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A menu item button displayed on a grid template.

## Declaration

```objectivec
@interface CPGridButton : NSObject
```

## Topics

### Creating a grid button

- [initWithTitleVariants:image:handler:](cpgridbutton/init%28titlevariants_image_handler_%29.md): Creates a grid button with the specified title variants, image, and action handler.
- [initWithTitleVariants:image:messageConfiguration:handler:](cpgridbutton/init%28titlevariants_image_messageconfiguration_handler_%29.md): Initialize a button with a title, image, and message configuration.

### Managing the button content

- [image](cpgridbutton/image.md): The image displayed on the button.
- [updateImage:](cpgridbutton/updateimage%28__%29.md)
- [titleVariants](cpgridbutton/titlevariants.md): An array of title variants for the button.
- [updateTitleVariants:](cpgridbutton/updatetitlevariants%28__%29.md)

### Enabling and disabling the button

- [enabled](cpgridbutton/isenabled.md): A Boolean value that enables and disables the grid button.

### Instance Properties

- [messageConfiguration](cpgridbutton/messageconfiguration.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Grids

- [CPGridTemplate](cpgridtemplate.md): A template that displays and manages a grid of items.
- [CPMessageGridItemConfiguration](cpmessagegriditemconfiguration.md): A type that associates message-related information with a grid button.
- [CPGridTemplateMaximumItems](cpgridtemplatemaximumitems.md): The maximum number of buttons that a grid template displays.
