> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmultistopcardconfiguration](https://developer.apple.com/documentation/carplay/cpmultistopcardconfiguration)

# CPMultiStopCardConfiguration (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```swift
class CPMultiStopCardConfiguration
```

## Topics

### Initializers

- [init(coder:)](cpmultistopcardconfiguration/init%28coder_%29.md)
- [init(title:buttons:)](cpmultistopcardconfiguration/init%28title_buttons_%29.md): Initializes a MultiStopCardConfiguration with an optional title and an array of text buttons
- [init(title:buttons:image:)](cpmultistopcardconfiguration/init%28title_buttons_image_%29.md): Initializes a MultiStopCardConfiguration with an optional title, an array of text buttons, and an optional image

### Instance Properties

- [buttons](cpmultistopcardconfiguration/buttons.md): An array of text buttons to be displayed at the bottom of the card presented to configure waypoints along a route.
- [image](cpmultistopcardconfiguration/image.md): An optional image displayed alongside the @c title in the options panel, serving as an entry point to the multi-stop panel.
- [title](cpmultistopcardconfiguration/title.md): Title of panel presented to configure waypoints along a route. If no panel is provided, the panel title will default to “Add Stop”.

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

# CPMultiStopCardConfiguration (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```objectivec
@interface CPMultiStopCardConfiguration : NSObject
```

## Topics

### Instance Properties

- [buttons](cpmultistopcardconfiguration/buttons.md): An array of text buttons to be displayed at the bottom of the card presented to configure waypoints along a route.
- [image](cpmultistopcardconfiguration/image.md): An optional image displayed alongside the @c title in the options panel, serving as an entry point to the multi-stop panel.
- [title](cpmultistopcardconfiguration/title.md): Title of panel presented to configure waypoints along a route. If no panel is provided, the panel title will default to “Add Stop”.

### Instance Methods

- [initWithTitle:buttons:](cpmultistopcardconfiguration/init%28title_buttons_%29.md): Initializes a MultiStopCardConfiguration with an optional title and an array of text buttons
- [initWithTitle:buttons:image:](cpmultistopcardconfiguration/init%28title_buttons_image_%29.md): Initializes a MultiStopCardConfiguration with an optional title, an array of text buttons, and an optional image

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
