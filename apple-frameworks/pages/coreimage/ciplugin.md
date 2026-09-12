> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciplugin](https://developer.apple.com/documentation/coreimage/ciplugin)

# CIPlugIn (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** macOS 10.4+

The mechanism for loading image units in macOS.

## Declaration

```swift
class CIPlugIn
```

<a id="overview"></a>

## Overview

An image unit is an image processing bundle that contains one or more Core Image filters. Th`e.plugin` extension indicates one or more filters packaged as an image unit.

> **Note**

>  Starting in macOS 10.15, loading executable CIFilter plugins is deprecated.

## Topics

### Loading Plug-ins

- [loadNonExecutablePlugIns()](ciplugin/loadnonexecutableplugins%28%29.md): Scans directories for plugins.
- [loadNonExecutablePlugIn(\_:)](ciplugin/loadnonexecutableplugin%28__%29.md): Loads a non-executable plug-in specified by its URL.

### Deprecated

- [loadAllPlugIns()](ciplugin/loadallplugins%28%29.md): Deprecated. Scans directories for files that have the `.plugin` extension and then loads the image units.
- [load(\_:allowExecutableCode:)](ciplugin/load%28__allowexecutablecode_%29.md): Deprecated. Loads filters from an image unit that have the appropriate executable status.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Image Units

- [CIFilterGenerator](cifiltergenerator.md): An object that creates and configures chains of individual image filters.
- [CIPlugInRegistration](cipluginregistration.md): The interface for loading Core Image image units.
- [CIFilterConstructor](cifilterconstructor.md): A general interface for objects that produce filters.

# CIPlugIn (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** macOS 10.4+

The mechanism for loading image units in macOS.

## Declaration

```objectivec
@interface CIPlugIn : NSObject
```

<a id="overview"></a>

## Overview

An image unit is an image processing bundle that contains one or more Core Image filters. Th`e.plugin` extension indicates one or more filters packaged as an image unit.

> **Note**

>  Starting in macOS 10.15, loading executable CIFilter plugins is deprecated.

## Topics

### Loading Plug-ins

- [loadNonExecutablePlugIns](ciplugin/loadnonexecutableplugins%28%29.md): Scans directories for plugins.
- [loadNonExecutablePlugIn:](ciplugin/loadnonexecutableplugin%28__%29.md): Loads a non-executable plug-in specified by its URL.

### Deprecated

- [loadAllPlugIns](ciplugin/loadallplugins%28%29.md): Deprecated. Scans directories for files that have the `.plugin` extension and then loads the image units.
- [loadPlugIn:allowExecutableCode:](ciplugin/load%28__allowexecutablecode_%29.md): Deprecated. Loads filters from an image unit that have the appropriate executable status.
- [loadPlugIn:allowNonExecutable:](ciplugin/loadplugin_allownonexecutable_.md): Deprecated. Loads filters from an image unit that have the appropriate executable status.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Image Units

- [CIFilterGenerator](cifiltergenerator.md): An object that creates and configures chains of individual image filters.
- [CIPlugInRegistration](cipluginregistration.md): The interface for loading Core Image image units.
- [CIFilterConstructor](cifilterconstructor.md): A general interface for objects that produce filters.
