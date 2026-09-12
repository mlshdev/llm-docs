> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/program-swift.class](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/program-swift.class)

# PhysicallyBasedMaterial.Program

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

An object that represents the backing shader compilation required for physically based materials.

## Declaration

```swift
final class Program
```

<a id="overview"></a>

## Overview

You can use this type to control when RealityKit compiles shaders, and to initialize `PhysicallyBasedMaterial` objects with more predicitable loading performance.

When initializing a `PhysicallyBasedMaterial` this way, a `Program` object is created first asynchronously, which is used to cache the material’s shader program so the `PhysicallyBasedMaterial` can be loaded immediately later.

For example:

```swift
// Initialize descriptor with desired properties
var descriptor = PhysicallyBasedMaterial.Descriptor()
descriptor.blendMode = .add

// Create program object
let program = await PhysicallyBasedMaterial.Program(descriptor: descriptor)

// Create material (returns immediately)
let material = PhysicallyBasedMaterial(program: program)
```

## Topics

### Structures

- [PhysicallyBasedMaterial.Program.Descriptor](program-swift.class/descriptor-swift.struct.md): Specifies all parameters necessary to initialize `PhysicallyBasedMaterial` programs

### Initializers

- [init(descriptor:)](program-swift.class/init%28descriptor_%29.md)

### Instance Properties

- [descriptor](program-swift.class/descriptor-swift.property.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
