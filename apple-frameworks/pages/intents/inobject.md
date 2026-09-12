> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inobject](https://developer.apple.com/documentation/intents/inobject)

# INObject (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

A representation of a custom intent parameter or response property.

## Declaration

```swift
class INObject
```

<a id="overview"></a>

## Overview

Use [INObject](inobject.md) to create custom parameters and response properties for intent data that doesn’t fit into one of the System Types, such as Boolean, Duration, or Location. Define custom types and associate them with your custom intents and responses in the Intent Definition file.

Xcode uses the type defined in the Intent Definition file to generate a subclass of `INObject`. Create an instance of this subclass to structure data in intents and intent responses.

> **Tip**

>  If your app supports intents on iOS 12, use the Custom parameter type in your Intent Definition file and create instances of [INObject](inobject.md) (not a subclass) for custom parameters of those intents.

## Topics

### Creating a Custom Object

- [init(identifier:display:subtitle:image:)](inobject/init%28identifier_display_subtitle_image_%29.md): Creates a custom intent object with full display information.
- [init(identifier:display:)](inobject/init%28identifier_display_%29.md): Creates a custom intent object with the specified identifier and display string.
- [init(identifier:display:pronunciationHint:subtitle:image:)](inobject/init%28identifier_display_pronunciationhint_subtitle_image_%29.md): Creates a custom intent object with the specified attributes.
- [init(identifier:display:pronunciationHint:)](inobject/init%28identifier_display_pronunciationhint_%29.md): Creates a custom intent object with the specified attributes.

### Displaying the Object

- [displayString](inobject/displaystring.md): A name or description for the custom intent object.
- [subtitleString](inobject/subtitlestring.md): Additional details about the custom intent object.
- [displayImage](inobject/displayimage.md): An image to display alongside the custom intent object’s text.

### Describing the Object for the System

- [identifier](inobject/identifier.md): A string that identifies the custom intent object within your app.
- [pronunciationHint](inobject/pronunciationhint.md): A hint that describes how to pronounce the custom intent object.
- [alternativeSpeakableMatches](inobject/alternativespeakablematches.md): An array of alternative speakable strings that identify the object.

### Initializers

- [init(coder:)](inobject/init%28coder_%29.md)
- [init(identifier:displayString:)](inobject/init%28identifier_displaystring_%29.md)
- [init(identifier:displayString:pronunciationHint:)](inobject/init%28identifier_displaystring_pronunciationhint_%29.md)
- [init(identifier:displayString:pronunciationHint:subtitleString:displayImage:)](inobject/init%28identifier_displaystring_pronunciationhint_subtitlestring_displayimage_%29.md)
- [init(identifier:displayString:subtitleString:displayImage:)](inobject/init%28identifier_displaystring_subtitlestring_displayimage_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INSpeakable](inspeakable.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Custom Objects

- [INObjectCollection](inobjectcollection.md)
- [INObjectSection](inobjectsection.md)

# INObject (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

A representation of a custom intent parameter or response property.

## Declaration

```objectivec
@interface INObject : NSObject
```

<a id="overview"></a>

## Overview

Use [INObject](inobject.md) to create custom parameters and response properties for intent data that doesn’t fit into one of the System Types, such as Boolean, Duration, or Location. Define custom types and associate them with your custom intents and responses in the Intent Definition file.

Xcode uses the type defined in the Intent Definition file to generate a subclass of `INObject`. Create an instance of this subclass to structure data in intents and intent responses.

> **Tip**

>  If your app supports intents on iOS 12, use the Custom parameter type in your Intent Definition file and create instances of [INObject](inobject.md) (not a subclass) for custom parameters of those intents.

## Topics

### Creating a Custom Object

- [initWithIdentifier:displayString:subtitleString:displayImage:](inobject/init%28identifier_display_subtitle_image_%29.md): Creates a custom intent object with full display information.
- [initWithIdentifier:displayString:](inobject/init%28identifier_display_%29.md): Creates a custom intent object with the specified identifier and display string.
- [initWithIdentifier:displayString:pronunciationHint:subtitleString:displayImage:](inobject/init%28identifier_display_pronunciationhint_subtitle_image_%29.md): Creates a custom intent object with the specified attributes.
- [initWithIdentifier:displayString:pronunciationHint:](inobject/init%28identifier_display_pronunciationhint_%29.md): Creates a custom intent object with the specified attributes.

### Displaying the Object

- [displayString](inobject/displaystring.md): A name or description for the custom intent object.
- [subtitleString](inobject/subtitlestring.md): Additional details about the custom intent object.
- [displayImage](inobject/displayimage.md): An image to display alongside the custom intent object’s text.

### Describing the Object for the System

- [identifier](inobject/identifier.md): A string that identifies the custom intent object within your app.
- [pronunciationHint](inobject/pronunciationhint.md): A hint that describes how to pronounce the custom intent object.
- [alternativeSpeakableMatches](inobject/alternativespeakablematches.md): An array of alternative speakable strings that identify the object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [INSpeakable](inspeakable.md)
- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Custom Objects

- [INObjectCollection](inobjectcollection.md)
- [INObjectSection](inobjectsection.md)
