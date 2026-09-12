> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cppanelbuttonconfiguration](https://developer.apple.com/documentation/carplay/cppanelbuttonconfiguration)

# CPPanelButtonConfiguration (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```swift
class CPPanelButtonConfiguration
```

<a id="overview"></a>

## Overview

A panel list section. It contains a primary and secondary action button.

## Topics

### Initializers

- [init(coder:)](cppanelbuttonconfiguration/init%28coder_%29.md)
- [init(primaryAction:secondaryAction:)](cppanelbuttonconfiguration/init%28primaryaction_secondaryaction_%29.md): Initializes a button configuration with a primary action and an optional secondary action.

### Instance Properties

- [primaryAction](cppanelbuttonconfiguration/primaryaction.md): The primary action button.
- [secondaryAction](cppanelbuttonconfiguration/secondaryaction.md): The secondary action button, or @c nil if excluded.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPMapPanelButtonConfiguration](cpmappanelbuttonconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

# CPPanelButtonConfiguration (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```objectivec
@interface CPPanelButtonConfiguration : NSObject
```

<a id="overview"></a>

## Overview

A panel list section. It contains a primary and secondary action button.

## Topics

### Instance Properties

- [primaryAction](cppanelbuttonconfiguration/primaryaction.md): The primary action button.
- [secondaryAction](cppanelbuttonconfiguration/secondaryaction.md): The secondary action button, or @c nil if excluded.

### Instance Methods

- [initWithPrimaryAction:secondaryAction:](cppanelbuttonconfiguration/init%28primaryaction_secondaryaction_%29.md): Initializes a button configuration with a primary action and an optional secondary action.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPMapPanelButtonConfiguration](cpmappanelbuttonconfiguration.md)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
