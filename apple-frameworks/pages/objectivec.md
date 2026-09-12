> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec](https://developer.apple.com/documentation/objectivec)

# Objective-C Runtime (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Framework  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gain low-level access to the Objective-C runtime and the Objective-C root types.

<a id="overview"></a>

## Overview

The [Objective-C Runtime](objectivec.md) module APIs define the base of the Objective-C language. These APIs include:

- Types such as the [NSObject](objectivec/nsobject-swift.class.md) class and the [NSObjectProtocol](objectivec/nsobjectprotocol.md) protocol that provide the root functionality of most Objective-C classes
- Functions and data structures that comprise the Objective-C runtime, which provides support for the dynamic properties of the Objective-C language

You typically don’t need to use this module directly.

## Topics

### Classes

- [NSObject](objectivec/nsobject-swift.class.md): The root class of most Objective-C class hierarchies, from which subclasses inherit a basic interface to the runtime system and the ability to behave as Objective-C objects.
- [Protocol](objectivec/protocol.md)

### Protocols

- [NSObjectProtocol](objectivec/nsobjectprotocol.md): The group of methods that are fundamental to all Objective-C objects.

### Reference

- [Objective-C Runtime](objectivec/objective-c-runtime.md): Describes the macOS Objective-C runtime library support functions and data structures.
- [Objective-C Structures](objectivec/objective-c-structures.md)
- [Objective-C Constants](objectivec/objective-c-constants.md)
- [Objective-C Functions](objectivec/objective-c-functions.md)
- [Objective-C Data Types](objectivec/objective-c-data-types.md)
- [Objective-C Macros](objectivec/objective-c-macros.md)
- [Objective-C Enumerations](objectivec/objective-c-enums.md)

### Functions

- [objc_copyImageHeaders(\_:)](objectivec/objc_copyimageheaders%28__%29.md): Returns the Mach headers of all the images loaded into the current process that contain Objective-C or Swift code.

# Objective-C Runtime (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Framework  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gain low-level access to the Objective-C runtime and the Objective-C root types.

<a id="overview"></a>

## Overview

The [Objective-C Runtime](objectivec.md) module APIs define the base of the Objective-C language. These APIs include:

- Types such as the [NSObject](objectivec/nsobject-swift.class.md) class and the [NSObject](objectivec/nsobjectprotocol.md) protocol that provide the root functionality of most Objective-C classes
- Functions and data structures that comprise the Objective-C runtime, which provides support for the dynamic properties of the Objective-C language

You typically don’t need to use this module directly.

## Topics

### Classes

- [NSObject](objectivec/nsobject-swift.class.md): The root class of most Objective-C class hierarchies, from which subclasses inherit a basic interface to the runtime system and the ability to behave as Objective-C objects.

### Protocols

- [NSObject](objectivec/nsobjectprotocol.md): The group of methods that are fundamental to all Objective-C objects.

### Reference

- [Objective-C Runtime](objectivec/objective-c-runtime.md): Describes the macOS Objective-C runtime library support functions and data structures.
- [Objective-C Structures](objectivec/objective-c-structures.md)
- [Objective-C Constants](objectivec/objective-c-constants.md)
- [Objective-C Functions](objectivec/objective-c-functions.md)
- [Objective-C Data Types](objectivec/objective-c-data-types.md)
- [Objective-C Macros](objectivec/objective-c-macros.md)
- [Objective-C Enumerations](objectivec/objective-c-enums.md)

### Functions

- [objc_copyImageHeaders](objectivec/objc_copyimageheaders%28__%29.md): Returns the Mach headers of all the images loaded into the current process that contain Objective-C or Swift code.
