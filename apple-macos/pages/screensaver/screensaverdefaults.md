> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/screensaver/screensaverdefaults](https://developer.apple.com/documentation/screensaver/screensaverdefaults)

# ScreenSaverDefaults (Swift)

**Framework:** Screen Saver  
**Kind:** Class  
**Availability:** macOS 10.0+

A class that defines a set of methods for saving and restoring user defaults for screen savers.

## Declaration

```swift
class ScreenSaverDefaults
```

<a id="overview"></a>

## Overview

[ScreenSaverDefaults](screensaverdefaults.md) gives you access to preference values you need to configure your screen saver. Because multiple apps can load a screen saver, you can’t use the standard [UserDefaults](https://developer.apple.com/documentation/foundation/userdefaults) object to store preferences. Instead, instantiate this class using the [init(forModuleWithName:)](screensaverdefaults/init%28formodulewithname_%29.md) method, which takes your screen saver’s bundle identifier as a parameter. The resulting object gives you a way to store your preference values and associate them only with your screen saver. Use the inherited [UserDefaults](https://developer.apple.com/documentation/foundation/userdefaults) methods to load, store, or modify values.

## Topics

### Creating the screen saver defaults

- [init(forModuleWithName:)](screensaverdefaults/init%28formodulewithname_%29.md): Returns a screen saver defaults instance that reads and writes defaults for the specified module.

## Relationships

### Inherits From

- [UserDefaults](https://developer.apple.com/documentation/foundation/userdefaults)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interface

- [ScreenSaverView](screensaverview.md): An abstract class that defines the interface for subclassers to interact with the screen saver infrastructure.

# ScreenSaverDefaults (Objective-C)

**Framework:** Screen Saver  
**Kind:** Class  
**Availability:** macOS 10.0+

A class that defines a set of methods for saving and restoring user defaults for screen savers.

## Declaration

```objectivec
@interface ScreenSaverDefaults : NSUserDefaults
```

<a id="overview"></a>

## Overview

[ScreenSaverDefaults](screensaverdefaults.md) gives you access to preference values you need to configure your screen saver. Because multiple apps can load a screen saver, you can’t use the standard [NSUserDefaults](https://developer.apple.com/documentation/foundation/userdefaults) object to store preferences. Instead, instantiate this class using the [defaultsForModuleWithName:](screensaverdefaults/init%28formodulewithname_%29.md) method, which takes your screen saver’s bundle identifier as a parameter. The resulting object gives you a way to store your preference values and associate them only with your screen saver. Use the inherited [NSUserDefaults](https://developer.apple.com/documentation/foundation/userdefaults) methods to load, store, or modify values.

## Topics

### Creating the screen saver defaults

- [defaultsForModuleWithName:](screensaverdefaults/init%28formodulewithname_%29.md): Returns a screen saver defaults instance that reads and writes defaults for the specified module.

## Relationships

### Inherits From

- [NSUserDefaults](https://developer.apple.com/documentation/foundation/userdefaults)

## See Also

### Interface

- [ScreenSaverView](screensaverview.md): An abstract class that defines the interface for subclassers to interact with the screen saver infrastructure.
