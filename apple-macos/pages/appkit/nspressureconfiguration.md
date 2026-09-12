> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspressureconfiguration](https://developer.apple.com/documentation/appkit/nspressureconfiguration)

# NSPressureConfiguration (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10.3+

An encapsulation of the behavior and progression of a Force Touch trackpad as it responds to specific events.

## Declaration

```swift
class NSPressureConfiguration
```

<a id="overview"></a>

## Overview

Use an [NSPressureConfiguration](nspressureconfiguration.md) object to configure the behavior and progression of a Force Touch trackpad when it responds to a mouse drag or pressure event sequence. Pressure configurations are assigned to views ([NSView](nsview.md)) and gesture recognizers ([NSGestureRecognizer](nsgesturerecognizer.md)).

## Topics

### Creating a Pressure Configuration Object

- [init(pressureBehavior:)](nspressureconfiguration/init%28pressurebehavior_%29.md): Initializes a pressure configuration object with a specified pressure behavior.
- [set()](nspressureconfiguration/set%28%29.md): Changes the pressure configuration of the trackpad to the initialized pressure configuration.

### Accessing Pressure Configuration Object Properties

- [pressureBehavior](nspressureconfiguration/pressurebehavior.md): The pressure behavior of the pressure configuration object.

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

### Trackpad

- [NSHapticFeedbackManager](nshapticfeedbackmanager.md): An object that provides access to the haptic feedback management attributes on a system with a Force Touch trackpad.

# NSPressureConfiguration (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10.3+

An encapsulation of the behavior and progression of a Force Touch trackpad as it responds to specific events.

## Declaration

```objectivec
@interface NSPressureConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Use an [NSPressureConfiguration](nspressureconfiguration.md) object to configure the behavior and progression of a Force Touch trackpad when it responds to a mouse drag or pressure event sequence. Pressure configurations are assigned to views ([NSView](nsview.md)) and gesture recognizers ([NSGestureRecognizer](nsgesturerecognizer.md)).

## Topics

### Creating a Pressure Configuration Object

- [initWithPressureBehavior:](nspressureconfiguration/init%28pressurebehavior_%29.md): Initializes a pressure configuration object with a specified pressure behavior.
- [set](nspressureconfiguration/set%28%29.md): Changes the pressure configuration of the trackpad to the initialized pressure configuration.

### Accessing Pressure Configuration Object Properties

- [pressureBehavior](nspressureconfiguration/pressurebehavior.md): The pressure behavior of the pressure configuration object.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Trackpad

- [NSHapticFeedbackManager](nshapticfeedbackmanager.md): An object that provides access to the haptic feedback management attributes on a system with a Force Touch trackpad.
