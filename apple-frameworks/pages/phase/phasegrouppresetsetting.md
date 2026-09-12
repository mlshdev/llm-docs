> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasegrouppresetsetting](https://developer.apple.com/documentation/phase/phasegrouppresetsetting)

# PHASEGroupPresetSetting (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Settings for group presets.

## Declaration

```swift
class PHASEGroupPresetSetting
```

<a id="overview"></a>

## Overview

This class defines playback speed and volume rates of change that an app can apply to groups. To create a group preset setting, instantiate an object of this type and pass it to the `settings` parameter of [init(engine:settings:timeToTarget:timeToReset:)](phasegrouppreset/init%28engine_settings_timetotarget_timetoreset_%29.md).

For an example of preset settings, see [PHASEGroupPreset](phasegrouppreset.md).

## Topics

### Creating a Setting

- [init(gain:rate:gainCurveType:rateCurveType:)](phasegrouppresetsetting/init%28gain_rate_gaincurvetype_ratecurvetype_%29.md): Creates a group preset setting.

### Setting Loudness

- [gain](phasegrouppresetsetting/gain.md): The volume of audio playback.
- [gainCurveType](phasegrouppresetsetting/gaincurvetype.md): A rate of change for the setting’s volume.

### Setting Playback Speed

- [rate](phasegrouppresetsetting/rate.md): The playback speed for audio.
- [rateCurveType](phasegrouppresetsetting/ratecurvetype.md): A rate of change for the setting’s playback speed.

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

### Sound Grouping and Management

- [PHASEGroup](phasegroup.md): A container that shares audio parameters with a collection of sounds.
- [PHASEGroupPreset](phasegrouppreset.md): A collection of settings for groups.
- [PHASEDucker](phaseducker.md): An object that manages competing sounds.

# PHASEGroupPresetSetting (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Settings for group presets.

## Declaration

```objectivec
@interface PHASEGroupPresetSetting : NSObject
```

<a id="overview"></a>

## Overview

This class defines playback speed and volume rates of change that an app can apply to groups. To create a group preset setting, instantiate an object of this type and pass it to the `settings` parameter of [initWithEngine:settings:timeToTarget:timeToReset:](phasegrouppreset/init%28engine_settings_timetotarget_timetoreset_%29.md).

For an example of preset settings, see [PHASEGroupPreset](phasegrouppreset.md).

## Topics

### Creating a Setting

- [initWithGain:rate:gainCurveType:rateCurveType:](phasegrouppresetsetting/init%28gain_rate_gaincurvetype_ratecurvetype_%29.md): Creates a group preset setting.

### Setting Loudness

- [gain](phasegrouppresetsetting/gain.md): The volume of audio playback.
- [gainCurveType](phasegrouppresetsetting/gaincurvetype.md): A rate of change for the setting’s volume.

### Setting Playback Speed

- [rate](phasegrouppresetsetting/rate.md): The playback speed for audio.
- [rateCurveType](phasegrouppresetsetting/ratecurvetype.md): A rate of change for the setting’s playback speed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Sound Grouping and Management

- [PHASEGroup](phasegroup.md): A container that shares audio parameters with a collection of sounds.
- [PHASEGroupPreset](phasegrouppreset.md): A collection of settings for groups.
- [PHASEDucker](phaseducker.md): An object that manages competing sounds.
