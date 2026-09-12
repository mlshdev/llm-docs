> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpgridbutton](https://developer.apple.com/documentation/carplay/cpgridbutton)

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

### Creating a Grid Button

- [init(titleVariants:image:handler:)](cpgridbutton/init%28titlevariants_image_handler_%29.md): Creates a grid button with the specified title variants, image, and action handler.

### Controlling the Grid Button

- [isEnabled](cpgridbutton/isenabled.md): A Boolean value that enables and disables the grid button.

### Obtaining Grid Button Information

- [titleVariants](cpgridbutton/titlevariants.md): An array of title variants for the button.
- [image](cpgridbutton/image.md): The image displayed on the button.

### Initializers

- [init(coder:)](cpgridbutton/init%28coder_%29.md)
- [init(titleVariants:image:messageConfiguration:handler:)](cpgridbutton/init%28titlevariants_image_messageconfiguration_handler_%29.md): Initialize a button with a title, image, and message configuration.

### Instance Properties

- [messageConfiguration](cpgridbutton/messageconfiguration.md)

### Instance Methods

- [updateImage(\_:)](cpgridbutton/updateimage%28__%29.md)
- [updateTitleVariants(\_:)](cpgridbutton/updatetitlevariants%28__%29.md)

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

### Creating a Grid Template

- [init(title:gridButtons:)](cpgridtemplate/init%28title_gridbuttons_%29.md): Creates a grid template with a title and a set of buttons.

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

### Creating a Grid Button

- [initWithTitleVariants:image:handler:](cpgridbutton/init%28titlevariants_image_handler_%29.md): Creates a grid button with the specified title variants, image, and action handler.

### Controlling the Grid Button

- [enabled](cpgridbutton/isenabled.md): A Boolean value that enables and disables the grid button.

### Obtaining Grid Button Information

- [titleVariants](cpgridbutton/titlevariants.md): An array of title variants for the button.
- [image](cpgridbutton/image.md): The image displayed on the button.

### Instance Properties

- [messageConfiguration](cpgridbutton/messageconfiguration.md)

### Instance Methods

- [initWithTitleVariants:image:messageConfiguration:handler:](cpgridbutton/init%28titlevariants_image_messageconfiguration_handler_%29.md): Initialize a button with a title, image, and message configuration.
- [updateImage:](cpgridbutton/updateimage%28__%29.md)
- [updateTitleVariants:](cpgridbutton/updatetitlevariants%28__%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Creating a Grid Template

- [initWithTitle:gridButtons:](cpgridtemplate/init%28title_gridbuttons_%29.md): Creates a grid template with a title and a set of buttons.
