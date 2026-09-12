> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasereverbpreset](https://developer.apple.com/documentation/phase/phasereverbpreset)

# PHASEReverbPreset (Swift)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The manner in which PHASE diffuses resonating sound.

## Declaration

```swift
enum PHASEReverbPreset
```

<a id="overview"></a>

## Overview

The PHASE engine requires your app to choose an option of this enumeration and assign it to the [defaultReverbPreset](phaseengine/defaultreverbpreset.md) property.

The value you choose adds resonation to sound that simulates the experience of hearing it in a particular environment. For example, a small room, [PHASEReverbPreset.smallRoom](phasereverbpreset/smallroom.md), adds very little reverberation compared to a large chamber, [PHASEReverbPreset.largeChamber](phasereverbpreset/largechamber.md).

## Topics

### Presets

- [PHASEReverbPreset.cathedral](phasereverbpreset/cathedral.md): A resonation that simulates the experience of hearing a sound in a cathedral.
- [PHASEReverbPreset.largeChamber](phasereverbpreset/largechamber.md): A resonation that simulates the experience of hearing a sound in a large chamber with specific dimensions.
- [PHASEReverbPreset.largeHall](phasereverbpreset/largehall.md): A resonation that simulates the experience of hearing a sound in a large hall with specific dimensions.
- [PHASEReverbPreset.largeHall2](phasereverbpreset/largehall2.md): A resonation that simulates the experience of hearing a sound in one kind of large hall with specific dimensions.
- [PHASEReverbPreset.largeRoom](phasereverbpreset/largeroom.md): A resonation that simulates the experience of hearing a sound in a large room with specific dimensions.
- [PHASEReverbPreset.largeRoom2](phasereverbpreset/largeroom2.md): A resonation that simulates the experience of hearing a sound in one kind of large room with specific dimensions.
- [PHASEReverbPreset.mediumChamber](phasereverbpreset/mediumchamber.md): A resonation that simulates the experience of hearing a sound in a medium-size chamber with specific dimensions.
- [PHASEReverbPreset.mediumHall](phasereverbpreset/mediumhall.md): A resonation that simulates the experience of hearing a sound in a medium-size hall with specific dimensions.
- [PHASEReverbPreset.mediumHall2](phasereverbpreset/mediumhall2.md): A resonation that simulates the experience of hearing a sound in one kind of medium-size hall with specific dimensions.
- [PHASEReverbPreset.mediumHall3](phasereverbpreset/mediumhall3.md): A resonation that simulates the experience of hearing a sound in another kind of medium-size hall with specific dimensions.
- [PHASEReverbPreset.mediumRoom](phasereverbpreset/mediumroom.md): A resonation that simulates the experience of hearing a sound in a medium-size room with specific dimensions.
- [PHASEReverbPreset.none](phasereverbpreset/none.md): An option that adds no reverberation to a sound.
- [PHASEReverbPreset.smallRoom](phasereverbpreset/smallroom.md): A resonation that simulates the experience of hearing a sound in a small room with specific dimensions.

### Initializers

- [init(rawValue:)](phasereverbpreset/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setup

- [PHASEEngine](phaseengine.md): An object that manages audio assets, controls playback, and configures environmental effects.
- [PHASEEngine.UpdateMode](phaseengine/updatemode.md): Modes that determine when the framework consumes API calls and updates internal state.
- [PHASEEngine.RenderingMode](phaseengine/renderingmode.md): Modes that determine whether the system renders audio in process or out of process.
- [PHASEAssetRegistry](phaseassetregistry.md): A central repository of audio assets.
- [PHASENormalizationMode](phasenormalizationmode.md): Options that determine whether the framework adjusts a sound asset’s loudness for the user’s output device.
- [PHASESpatializationMode](phasespatializationmode.md): The manner in which PHASE outputs spatial audio.
- [PHASEMedium](phasemedium.md): A property or quality of the environment that affects how sound travels.

# PHASEReverbPreset (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The manner in which PHASE diffuses resonating sound.

## Declaration

```objectivec
enum PHASEReverbPreset : NSInteger;
```

<a id="overview"></a>

## Overview

The PHASE engine requires your app to choose an option of this enumeration and assign it to the [defaultReverbPreset](phaseengine/defaultreverbpreset.md) property.

The value you choose adds resonation to sound that simulates the experience of hearing it in a particular environment. For example, a small room, [PHASEReverbPresetSmallRoom](phasereverbpreset/smallroom.md), adds very little reverberation compared to a large chamber, [PHASEReverbPresetLargeChamber](phasereverbpreset/largechamber.md).

## Topics

### Presets

- [PHASEReverbPresetCathedral](phasereverbpreset/cathedral.md): A resonation that simulates the experience of hearing a sound in a cathedral.
- [PHASEReverbPresetLargeChamber](phasereverbpreset/largechamber.md): A resonation that simulates the experience of hearing a sound in a large chamber with specific dimensions.
- [PHASEReverbPresetLargeHall](phasereverbpreset/largehall.md): A resonation that simulates the experience of hearing a sound in a large hall with specific dimensions.
- [PHASEReverbPresetLargeHall2](phasereverbpreset/largehall2.md): A resonation that simulates the experience of hearing a sound in one kind of large hall with specific dimensions.
- [PHASEReverbPresetLargeRoom](phasereverbpreset/largeroom.md): A resonation that simulates the experience of hearing a sound in a large room with specific dimensions.
- [PHASEReverbPresetLargeRoom2](phasereverbpreset/largeroom2.md): A resonation that simulates the experience of hearing a sound in one kind of large room with specific dimensions.
- [PHASEReverbPresetMediumChamber](phasereverbpreset/mediumchamber.md): A resonation that simulates the experience of hearing a sound in a medium-size chamber with specific dimensions.
- [PHASEReverbPresetMediumHall](phasereverbpreset/mediumhall.md): A resonation that simulates the experience of hearing a sound in a medium-size hall with specific dimensions.
- [PHASEReverbPresetMediumHall2](phasereverbpreset/mediumhall2.md): A resonation that simulates the experience of hearing a sound in one kind of medium-size hall with specific dimensions.
- [PHASEReverbPresetMediumHall3](phasereverbpreset/mediumhall3.md): A resonation that simulates the experience of hearing a sound in another kind of medium-size hall with specific dimensions.
- [PHASEReverbPresetMediumRoom](phasereverbpreset/mediumroom.md): A resonation that simulates the experience of hearing a sound in a medium-size room with specific dimensions.
- [PHASEReverbPresetNone](phasereverbpreset/none.md): An option that adds no reverberation to a sound.
- [PHASEReverbPresetSmallRoom](phasereverbpreset/smallroom.md): A resonation that simulates the experience of hearing a sound in a small room with specific dimensions.

## See Also

### Setup

- [PHASEEngine](phaseengine.md): An object that manages audio assets, controls playback, and configures environmental effects.
- [PHASEUpdateMode](phaseengine/updatemode.md): Modes that determine when the framework consumes API calls and updates internal state.
- [PHASERenderingMode](phaseengine/renderingmode.md): Modes that determine whether the system renders audio in process or out of process.
- [PHASEAssetRegistry](phaseassetregistry.md): A central repository of audio assets.
- [PHASENormalizationMode](phasenormalizationmode.md): Options that determine whether the framework adjusts a sound asset’s loudness for the user’s output device.
- [PHASESpatializationMode](phasespatializationmode.md): The manner in which PHASE outputs spatial audio.
- [PHASEMedium](phasemedium.md): A property or quality of the environment that affects how sound travels.
