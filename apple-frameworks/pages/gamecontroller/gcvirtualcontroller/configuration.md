> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcvirtualcontroller/configuration](https://developer.apple.com/documentation/gamecontroller/gcvirtualcontroller/configuration)

# GCVirtualController.Configuration (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The configuration of a virtual controller.

## Declaration

```swift
class Configuration
```

## Mentioned In

- [Adding virtual controls to games that support game controllers in iOS](../adding-virtual-controls-to-games-that-support-game-controllers-in-ios.md)

<a id="overview"></a>

## Overview

You configure a virtual controller by specifying the input elements it contains. Then using the [updateConfiguration(forElement:configuration:)](updateconfiguration%28forelement_configuration_%29.md) method, you can customize individual elements.

## Topics

### Setting the elements

- [elements](configuration/elements.md): The input elements of a virtual controller.

### Presenting a custom interface

- [isHidden](configuration/ishidden.md): A Boolean value that indicates whether the system or the app presents the virtual interface.

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

### Creating virtual controllers

- [init(configuration:)](init%28configuration_%29.md): Creates a new virtual controller using the configuration you specify.

# GCVirtualControllerConfiguration (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The configuration of a virtual controller.

## Declaration

```objectivec
@interface GCVirtualControllerConfiguration : NSObject
```

## Mentioned In

- [Adding virtual controls to games that support game controllers in iOS](../adding-virtual-controls-to-games-that-support-game-controllers-in-ios.md)

<a id="overview"></a>

## Overview

You configure a virtual controller by specifying the input elements it contains. Then using the [updateConfigurationForElement:configuration:](updateconfiguration%28forelement_configuration_%29.md) method, you can customize individual elements.

## Topics

### Setting the elements

- [elements](configuration/elements.md): The input elements of a virtual controller.

### Presenting a custom interface

- [hidden](configuration/ishidden.md): A Boolean value that indicates whether the system or the app presents the virtual interface.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Creating virtual controllers

- [virtualControllerWithConfiguration:](virtualcontrollerwithconfiguration_.md): Creates a new virtual controller using the configuration you specify.
- [initWithConfiguration:](init%28configuration_%29.md): Creates a new virtual controller using the configuration you specify.
