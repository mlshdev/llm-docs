> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstintconfiguration](https://developer.apple.com/documentation/appkit/nstintconfiguration)

# NSTintConfiguration (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 11.0+

An object that gives you the ability to choose from system-provided tinting behaviors.

## Declaration

```swift
class NSTintConfiguration
```

## Topics

### Initializing a Tint Configuration

- [init(fixedColor:)](nstintconfiguration/init%28fixedcolor_%29.md): Creates a new tint configuration using a specific color value.
- [init(preferredColor:)](nstintconfiguration/init%28preferredcolor_%29.md): Creates a new tint configuration for the system to use when the app’s preferred accent color is in use.

### Changing an App’s Appearance

- [adaptsToUserAccentColor](nstintconfiguration/adaptstouseraccentcolor.md): A Boolean value that indicates whether the tint configuration alters its effect based on the user’s preferred accent color choice.

### Setting the Tint Color

- [default](nstintconfiguration/default.md): The system tints the content using the system default value for its context.
- [monochrome](nstintconfiguration/monochrome.md): The content always displays in monochrome.
- [baseTintColor](nstintconfiguration/basetintcolor.md): The color the system supplies when you create a tint configuration.
- [equivalentContentTintColor](nstintconfiguration/equivalentcontenttintcolor.md): A color object that matches the effective content tint.

### Initializers

- [init(coder:)](nstintconfiguration/init%28coder_%29.md)

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
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Customizing Tint Color

- [outlineView(\_:tintConfigurationForItem:)](nsoutlineviewdelegate/outlineview%28__tintconfigurationforitem_%29.md): Customizes an item’s tinting behavior.

# NSTintConfiguration (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 11.0+

An object that gives you the ability to choose from system-provided tinting behaviors.

## Declaration

```objectivec
@interface NSTintConfiguration : NSObject
```

## Topics

### Initializing a Tint Configuration

- [tintConfigurationWithFixedColor:](nstintconfiguration/init%28fixedcolor_%29.md): Creates a new tint configuration using a specific color value.
- [tintConfigurationWithPreferredColor:](nstintconfiguration/init%28preferredcolor_%29.md): Creates a new tint configuration for the system to use when the app’s preferred accent color is in use.

### Changing an App’s Appearance

- [adaptsToUserAccentColor](nstintconfiguration/adaptstouseraccentcolor.md): A Boolean value that indicates whether the tint configuration alters its effect based on the user’s preferred accent color choice.

### Setting the Tint Color

- [defaultTintConfiguration](nstintconfiguration/default.md): The system tints the content using the system default value for its context.
- [monochromeTintConfiguration](nstintconfiguration/monochrome.md): The content always displays in monochrome.
- [baseTintColor](nstintconfiguration/basetintcolor.md): The color the system supplies when you create a tint configuration.
- [equivalentContentTintColor](nstintconfiguration/equivalentcontenttintcolor.md): A color object that matches the effective content tint.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Customizing Tint Color

- [outlineView:tintConfigurationForItem:](nsoutlineviewdelegate/outlineview%28__tintconfigurationforitem_%29.md): Customizes an item’s tinting behavior.
