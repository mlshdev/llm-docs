> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseculloption](https://developer.apple.com/documentation/phase/phaseculloption)

# PHASECullOption (Swift)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The actions the engine takes when it culls sound.

## Declaration

```swift
enum PHASECullOption
```

<a id="overview"></a>

## Overview

Culling refers to the temporary removal of a sound from the audio output. This enumeration determines the actions a sampler node performs after the engine culls its sound or queues it for culling. To indicate a preference, the app sets a sampler node’s [cullOption](phasesamplernodedefinition/culloption.md) property.

## Topics

### Options

- [PHASECullOption.terminate](phaseculloption/terminate.md): An option that culls sound by stopping playback.
- [PHASECullOption.doNotCull](phaseculloption/donotcull.md): An option that indicates the framework takes no action to cull sound.
- [PHASECullOption.sleepWakeAtRealtimeOffset](phaseculloption/sleepwakeatrealtimeoffset.md): An option that pauses playback and resumes where it left off.
- [PHASECullOption.sleepWakeAtZero](phaseculloption/sleepwakeatzero.md): An option that pauses playback and resumes at the beginning.
- [PHASECullOption.sleepWakeAtRandomOffset](phaseculloption/sleepwakeatrandomoffset.md): An option that pauses playback and resumes at a random position.

### Initializers

- [init(rawValue:)](phaseculloption/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining Cull Behavior

- [cullOption](phasesamplernodedefinition/culloption.md): The action the engine performs after it temporarily removes the node’s sound from the audio output.

# PHASECullOption (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The actions the engine takes when it culls sound.

## Declaration

```objectivec
enum PHASECullOption : NSInteger;
```

<a id="overview"></a>

## Overview

Culling refers to the temporary removal of a sound from the audio output. This enumeration determines the actions a sampler node performs after the engine culls its sound or queues it for culling. To indicate a preference, the app sets a sampler node’s [cullOption](phasesamplernodedefinition/culloption.md) property.

## Topics

### Options

- [PHASECullOptionTerminate](phaseculloption/terminate.md): An option that culls sound by stopping playback.
- [PHASECullOptionDoNotCull](phaseculloption/donotcull.md): An option that indicates the framework takes no action to cull sound.
- [PHASECullOptionSleepWakeAtRealtimeOffset](phaseculloption/sleepwakeatrealtimeoffset.md): An option that pauses playback and resumes where it left off.
- [PHASECullOptionSleepWakeAtZero](phaseculloption/sleepwakeatzero.md): An option that pauses playback and resumes at the beginning.
- [PHASECullOptionSleepWakeAtRandomOffset](phaseculloption/sleepwakeatrandomoffset.md): An option that pauses playback and resumes at a random position.

## See Also

### Defining Cull Behavior

- [cullOption](phasesamplernodedefinition/culloption.md): The action the engine performs after it temporarily removes the node’s sound from the audio output.
