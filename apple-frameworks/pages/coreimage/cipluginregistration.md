> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cipluginregistration](https://developer.apple.com/documentation/coreimage/cipluginregistration)

# CIPlugInRegistration (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** macOS

The interface for loading Core Image image units.

## Declaration

```swift
protocol CIPlugInRegistration
```

<a id="overview"></a>

## Overview

The principal class of an image unit—a loadable bundle containing custom Core Image filters for macOS—must support this protocol.

## Topics

### Initializing Plug-ins

- [load(\_:)](cipluginregistration/load%28__%29.md): Loads and initializes an image unit, performing custom tasks as needed.

## See Also

### Image Units

- [CIPlugIn](ciplugin.md): The mechanism for loading image units in macOS.
- [CIFilterGenerator](cifiltergenerator.md): An object that creates and configures chains of individual image filters.
- [CIFilterConstructor](cifilterconstructor.md): A general interface for objects that produce filters.

# CIPlugInRegistration (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** macOS

The interface for loading Core Image image units.

## Declaration

```objectivec
@protocol CIPlugInRegistration
```

<a id="overview"></a>

## Overview

The principal class of an image unit—a loadable bundle containing custom Core Image filters for macOS—must support this protocol.

## Topics

### Initializing Plug-ins

- [load:](cipluginregistration/load%28__%29.md): Loads and initializes an image unit, performing custom tasks as needed.

## See Also

### Image Units

- [CIPlugIn](ciplugin.md): The mechanism for loading image units in macOS.
- [CIFilterGenerator](cifiltergenerator.md): An object that creates and configures chains of individual image filters.
- [CIFilterConstructor](cifilterconstructor.md): A general interface for objects that produce filters.
