> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasemedium/preset](https://developer.apple.com/documentation/phase/phasemedium/preset)

# PHASEMedium.Preset (Swift)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Predetermined qualities of an environment that affect how sound transmits.

## Declaration

```swift
enum Preset
```

<a id="overview"></a>

## Overview

Currently, this enumeration refers only to sound traveling through air.

## Topics

### Medium Types

- [PHASEMedium.Preset.air](preset/air.md): A medium that simulates sound traveling through air.

### Initializers

- [init(rawValue:)](preset/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Medium

- [init(engine:preset:)](init%28engine_preset_%29.md): Creates a medium.

# PHASEMediumPreset (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Predetermined qualities of an environment that affect how sound transmits.

## Declaration

```objectivec
enum PHASEMediumPreset : NSInteger;
```

<a id="overview"></a>

## Overview

Currently, this enumeration refers only to sound traveling through air.

## Topics

### Medium Types

- [PHASEMediumPresetAir](preset/air.md): A medium that simulates sound traveling through air.

## See Also

### Creating a Medium

- [initWithEngine:preset:](init%28engine_preset_%29.md): Creates a medium.
