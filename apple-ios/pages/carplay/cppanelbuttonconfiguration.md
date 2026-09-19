> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cppanelbuttonconfiguration

# CPPanelButtonConfiguration (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A type that provides the common behaviors for a button layout in a panel.

## Declaration

```swift
class CPPanelButtonConfiguration
```

<a id="overview"></a>

## Overview

The `CPPanelButtonConfiguration` type defines the default behaviors for button configurations in a panel. You don’t create this type directly or use it to configure your panel. Instead, instantiate one of the defined subclasses based on the type of panel you’re configuring. For example, create a [CPMapPanelButtonConfiguration](cpmappanelbuttonconfiguration.md) object when configuring content for a [CPMapPanel](cpmappanel.md) type.

## Topics

### Initializers

- [init(coder:)](cppanelbuttonconfiguration/init%28coder_%29.md)
- [init(primaryAction:secondaryAction:)](cppanelbuttonconfiguration/init%28primaryaction_secondaryaction_%29.md): Initializes the button configuration object with the specified buttons.

### Instance Properties

- [primaryAction](cppanelbuttonconfiguration/primaryaction.md): The primary action button for the panel.
- [secondaryAction](cppanelbuttonconfiguration/secondaryaction.md): An optional action button to display in the panel.

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

A type that provides the common behaviors for a button layout in a panel.

## Declaration

```objectivec
@interface CPPanelButtonConfiguration : NSObject
```

<a id="overview"></a>

## Overview

The `CPPanelButtonConfiguration` type defines the default behaviors for button configurations in a panel. You don’t create this type directly or use it to configure your panel. Instead, instantiate one of the defined subclasses based on the type of panel you’re configuring. For example, create a [CPMapPanelButtonConfiguration](cpmappanelbuttonconfiguration.md) object when configuring content for a [CPMapPanel](cpmappanel.md) type.

## Topics

### Instance Properties

- [primaryAction](cppanelbuttonconfiguration/primaryaction.md): The primary action button for the panel.
- [secondaryAction](cppanelbuttonconfiguration/secondaryaction.md): An optional action button to display in the panel.

### Instance Methods

- [initWithPrimaryAction:secondaryAction:](cppanelbuttonconfiguration/init%28primaryaction_secondaryaction_%29.md): Initializes the button configuration object with the specified buttons.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPMapPanelButtonConfiguration](cpmappanelbuttonconfiguration.md)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
