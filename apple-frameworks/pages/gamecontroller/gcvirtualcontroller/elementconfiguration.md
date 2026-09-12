> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcvirtualcontroller/elementconfiguration](https://developer.apple.com/documentation/gamecontroller/gcvirtualcontroller/elementconfiguration)

# GCVirtualController.ElementConfiguration (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The properties of a virtual controller’s element that you can customize.

## Declaration

```swift
class ElementConfiguration
```

## Topics

### Configuring elements

- [path](elementconfiguration/path.md): The Bezier path for the shape of an element.
- [isHidden](elementconfiguration/ishidden.md): A Boolean value that determines whether the virtual controller hides the element.
- [actsAsTouchpad](elementconfiguration/actsastouchpad.md): A Boolean value that determines whether the thumbstick element behaves as a touchpad.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Customizing the elements

- [updateConfiguration(forElement:configuration:)](updateconfiguration%28forelement_configuration_%29.md): Changes the configuration for one of the virtual controller’s input elements.

# GCVirtualControllerElementConfiguration (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The properties of a virtual controller’s element that you can customize.

## Declaration

```objectivec
@interface GCVirtualControllerElementConfiguration : NSObject
```

## Topics

### Configuring elements

- [path](elementconfiguration/path.md): The Bezier path for the shape of an element.
- [hidden](elementconfiguration/ishidden.md): A Boolean value that determines whether the virtual controller hides the element.
- [actsAsTouchpad](elementconfiguration/actsastouchpad.md): A Boolean value that determines whether the thumbstick element behaves as a touchpad.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Customizing the elements

- [updateConfigurationForElement:configuration:](updateconfiguration%28forelement_configuration_%29.md): Changes the configuration for one of the virtual controller’s input elements.
