> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpvoicecontrolstate](https://developer.apple.com/documentation/carplay/cpvoicecontrolstate)

# CPVoiceControlState (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A voice control state containing title variants and images for use by a voice control template.

## Declaration

```swift
class CPVoiceControlState
```

## Topics

### Creating a Voice Control State

- [init(identifier:titleVariants:image:repeats:)](cpvoicecontrolstate/init%28identifier_titlevariants_image_repeats_%29.md): Creates a voice control state.

### Getting State Information

- [identifier](cpvoicecontrolstate/identifier.md): The string that your app uses to identify the voice control state.
- [titleVariants](cpvoicecontrolstate/titlevariants.md): The array of title variants for the voice control state.
- [image](cpvoicecontrolstate/image.md): The image displayed while the voice control template is in this state.
- [repeats](cpvoicecontrolstate/repeats.md): A Boolean value that indicates whether the display of an animated image repeats the animation sequence indefinitely.

### Initializers

- [init(coder:)](cpvoicecontrolstate/init%28coder_%29.md)
- [init(identifier:titleVariants:image:backgroundImage:repeats:)](cpvoicecontrolstate/init%28identifier_titlevariants_image_backgroundimage_repeats_%29.md): Initialize a voice control state with a title and image.

### Instance Properties

- [actionButtons](cpvoicecontrolstate/actionbuttons.md): An array of action buttons displayed in the template.
- [backgroundImage](cpvoicecontrolstate/backgroundimage.md): A custom background image to be displayed behind the voice control template content.

### Type Properties

- [maximumActionButtonCount](cpvoicecontrolstate/maximumactionbuttoncount.md): The maximum number of action buttons that can be displayed in the CPVoiceControlTemplate.

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

### Creating a Voice Control Template

- [init(voiceControlStates:)](cpvoicecontroltemplate/init%28voicecontrolstates_%29.md): Creates a voice control template with a list of voice control states.

# CPVoiceControlState (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A voice control state containing title variants and images for use by a voice control template.

## Declaration

```objectivec
@interface CPVoiceControlState : NSObject
```

## Topics

### Creating a Voice Control State

- [initWithIdentifier:titleVariants:image:repeats:](cpvoicecontrolstate/init%28identifier_titlevariants_image_repeats_%29.md): Creates a voice control state.

### Getting State Information

- [identifier](cpvoicecontrolstate/identifier.md): The string that your app uses to identify the voice control state.
- [titleVariants](cpvoicecontrolstate/titlevariants.md): The array of title variants for the voice control state.
- [image](cpvoicecontrolstate/image.md): The image displayed while the voice control template is in this state.
- [repeats](cpvoicecontrolstate/repeats.md): A Boolean value that indicates whether the display of an animated image repeats the animation sequence indefinitely.

### Instance Properties

- [actionButtons](cpvoicecontrolstate/actionbuttons.md): An array of action buttons displayed in the template.
- [backgroundImage](cpvoicecontrolstate/backgroundimage.md): A custom background image to be displayed behind the voice control template content.

### Instance Methods

- [initWithIdentifier:titleVariants:image:backgroundImage:repeats:](cpvoicecontrolstate/init%28identifier_titlevariants_image_backgroundimage_repeats_%29.md): Initialize a voice control state with a title and image.

### Type Properties

- [maximumActionButtonCount](cpvoicecontrolstate/maximumactionbuttoncount.md): The maximum number of action buttons that can be displayed in the CPVoiceControlTemplate.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Creating a Voice Control Template

- [initWithVoiceControlStates:](cpvoicecontroltemplate/init%28voicecontrolstates_%29.md): Creates a voice control template with a list of voice control states.
