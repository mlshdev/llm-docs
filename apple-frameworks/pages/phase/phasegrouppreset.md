> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasegrouppreset](https://developer.apple.com/documentation/phase/phasegrouppreset)

# PHASEGroupPreset (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A collection of settings for groups.

## Declaration

```swift
class PHASEGroupPreset
```

<a id="overview"></a>

## Overview

Group presets pair groups with audio settings that your app can apply to specific sounds at a particular time in your app’s life cycle. This class enables many predefined group settings to take effect all at once.

<a id="Toggle-Between-Group-Presets"></a>

### Toggle Between Group Presets

The group preset’s utility materializes when you switch between settings. The following example creates two group presets: one for an in-game experience and another for a menu that displays when the user pauses the app.

**Swift**

```swift
// Create sound group objects.
let bgmGroup = PHASEGroup(identifier:"backgroundMusicGroup")
let voGroup = PHASEGroup(identifier:"voiceOverGroup")
let menuGroup = PHASEGroup(identifier:"menuSoundsGroup")

// Register the groups with the engine.
bgmGroup.register(engine: myEngine)
voGroup.register(engine: myEngine)
menuGroup.register(engine: myEngine)
        
// Create settings for the groups.
let groupSettingFullVolume = PHASEGroupPresetSetting(gain: 1.0, rate: 1.0, gainCurveType: .linear, rateCurveType: .linear)
let groupSettingZeroVolume = PHASEGroupPresetSetting(gain: 0.0, rate: 1.0, gainCurveType: .linear, rateCurveType: .linear)
        
// Create a dictionary for the `settings` argument of the group preset initializer.
var pauseMenuDictionary: [String : PHASEGroupPresetSetting] = [:]
        
// Enable volume only for menu group sounds.
pauseMenuDictionary[menuGroup.identifier] = groupSettingFullVolume
pauseMenuDictionary[bgmGroup.identifier] = groupSettingZeroVolume
pauseMenuDictionary[voGroup.identifier] = groupSettingZeroVolume
let pauseMenuPreset = PHASEGroupPreset(engine: myEngine, settings: pauseMenuDictionary, timeToTarget: 1.0, timeToReset: 1.0)
        
// Create a settings dictionary for the in-game experience.
var inGameDictionary: [String : PHASEGroupPresetSetting] = [:]

// Enable volume only for in-game sounds.
inGameDictionary[menuGroup.identifier] = groupSettingZeroVolume
inGameDictionary[bgmGroup.identifier] = groupSettingFullVolume
inGameDictionary[voGroup.identifier] = groupSettingFullVolume
let inGamePreset = PHASEGroupPreset(engine: myEngine, settings: inGameDictionary, timeToTarget: 1.0, timeToReset: 1.0)
        
// Activate the pause menu preset when the user pauses the app.
pauseMenuPreset.activate()

// Activate the in-game preset when the user resumes the app.
inGamePreset.activate()

// Clear the current preset by deactivating it.
if let groupPreset = myEngine.activeGroupPreset {
    groupPreset.deactivate()
}
```

**Objective-C**

```objc
// Create groups for the sounds. 
PHASEGroup* bgmGroup = [[PHASEGroup alloc] initWithEngine:_objects->mEngine uid:@"backgroundMusicGroup"];
PHASEGroup* voGroup = [[PHASEGroup alloc] initWithEngine:_objects->mEngine uid:@"voiceOverGroup"];
PHASEGroup* menuGroup = [[PHASEGroup alloc] initWithEngine:_objects->mEngine uid:@"menuSoundsGroup"];

// Create settings for the groups.
PHASEGroupPresetSetting* groupSettingFullVolume = [PHASEGroupPresetSetting alloc] initWithGain:1
    rate:1 gainCurveType:PHASECurveTypeLinear rateCurveType:PHASECurveTypeLinear];
                                                
PHASEGroupPresetSetting* groupSettingZeroVolume = [PHASEGroupPresetSetting alloc] initWithGain:0
    rate:1 gainCurveType:PHASECurveTypeLinear rateCurveType:PHASECurveTypeLinear];

// Create a dictionary for the `settings` argument of the group preset initializer.
NSMutableDictionary<PHASEGroup*, PHASEGroupPresetSetting*> pauseMenuDictionary;

// Enable volume only for menu group sounds.
[pauseMenuDictionary setObject:groupSettingFullVolume forKey:menuGroup]
[pauseMenuDictionary setObject:groupSettingZeroVolume forKey:bgmGroup]
[pauseMenuDictionary setObject:groupSettingZeroVolume forKey:voGroup]
PHASEGroupPreset* pauseMenuPreset = [[PHASEGroupPreset alloc] initWithEngine:myPHASEEngine
    settings:pauseMenuDictionary timeToTarget:1 timeToReset:1];

// Create a settings dictionary for the in-game experience.
NSMutableDictionary<PHASEGroup*, PHASEGroupPresetSetting*> inGameDictionary;

// Enable volume only for in-game sounds.
[inGameDictionary setObject:groupSettingZeroVolume forKey:menuGroup]
[inGameDictionary setObject:groupSettingFullVolume forKey:bgmGroup]
[inGameDictionary setObject:groupSettingFullVolume forKey:voGroup]
PHASEGroupPreset* inGamePreset = [[PHASEGroupPreset alloc] initWithEngine:myPHASEEngine
    settings:inGameDictionary timeToTarget:1 timeToReset:1];

// Activate the pause menu preset when the user pauses the app.
[pauseMenuPreset activate];

// Activate the in-game preset when the user resumes the app. 
[inGamePreset activate];

// Clear the current preset by deactivating it.
[myPHASEEngine.activeGroupPreset deactivate]

```

## Topics

### Creating a Group Preset

- [init(engine:settings:timeToTarget:timeToReset:)](phasegrouppreset/init%28engine_settings_timetotarget_timetoreset_%29.md): Creates a group preset with the designated engine, settings, and fade parameters.

### Applying Settings

- [settings](phasegrouppreset/settings.md): A dictionary with preset setting values and group objects as keys.

### Fading Between Settings

- [timeToTarget](phasegrouppreset/timetotarget.md): A duration in which the engine fades the settings from their original value to their new value.
- [timeToReset](phasegrouppreset/timetoreset.md): A duration in which the framework restores the group’s original state.

### Activating a Group Preset

- [activate()](phasegrouppreset/activate%28%29.md): Applies settings to the designated groups.
- [activate(timeToTargetOverride:)](phasegrouppreset/activate%28timetotargetoverride_%29.md): Applies settings with an overriden fade duration.

### Deactivating a Group Preset

- [deactivate()](phasegrouppreset/deactivate%28%29.md): Reverts settings for the preset’s groups.
- [deactivate(timeToResetOverride:)](phasegrouppreset/deactivate%28timetoresetoverride_%29.md): Reverts settings for the preset’s groups using a timed adjustment.

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
- [PHASEGroupPresetSetting](phasegrouppresetsetting.md): Settings for group presets.
- [PHASEDucker](phaseducker.md): An object that manages competing sounds.

# PHASEGroupPreset (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A collection of settings for groups.

## Declaration

```objectivec
@interface PHASEGroupPreset : NSObject
```

<a id="overview"></a>

## Overview

Group presets pair groups with audio settings that your app can apply to specific sounds at a particular time in your app’s life cycle. This class enables many predefined group settings to take effect all at once.

<a id="Toggle-Between-Group-Presets"></a>

### Toggle Between Group Presets

The group preset’s utility materializes when you switch between settings. The following example creates two group presets: one for an in-game experience and another for a menu that displays when the user pauses the app.

**Swift**

```swift
// Create sound group objects.
let bgmGroup = PHASEGroup(identifier:"backgroundMusicGroup")
let voGroup = PHASEGroup(identifier:"voiceOverGroup")
let menuGroup = PHASEGroup(identifier:"menuSoundsGroup")

// Register the groups with the engine.
bgmGroup.register(engine: myEngine)
voGroup.register(engine: myEngine)
menuGroup.register(engine: myEngine)
        
// Create settings for the groups.
let groupSettingFullVolume = PHASEGroupPresetSetting(gain: 1.0, rate: 1.0, gainCurveType: .linear, rateCurveType: .linear)
let groupSettingZeroVolume = PHASEGroupPresetSetting(gain: 0.0, rate: 1.0, gainCurveType: .linear, rateCurveType: .linear)
        
// Create a dictionary for the `settings` argument of the group preset initializer.
var pauseMenuDictionary: [String : PHASEGroupPresetSetting] = [:]
        
// Enable volume only for menu group sounds.
pauseMenuDictionary[menuGroup.identifier] = groupSettingFullVolume
pauseMenuDictionary[bgmGroup.identifier] = groupSettingZeroVolume
pauseMenuDictionary[voGroup.identifier] = groupSettingZeroVolume
let pauseMenuPreset = PHASEGroupPreset(engine: myEngine, settings: pauseMenuDictionary, timeToTarget: 1.0, timeToReset: 1.0)
        
// Create a settings dictionary for the in-game experience.
var inGameDictionary: [String : PHASEGroupPresetSetting] = [:]

// Enable volume only for in-game sounds.
inGameDictionary[menuGroup.identifier] = groupSettingZeroVolume
inGameDictionary[bgmGroup.identifier] = groupSettingFullVolume
inGameDictionary[voGroup.identifier] = groupSettingFullVolume
let inGamePreset = PHASEGroupPreset(engine: myEngine, settings: inGameDictionary, timeToTarget: 1.0, timeToReset: 1.0)
        
// Activate the pause menu preset when the user pauses the app.
pauseMenuPreset.activate()

// Activate the in-game preset when the user resumes the app.
inGamePreset.activate()

// Clear the current preset by deactivating it.
if let groupPreset = myEngine.activeGroupPreset {
    groupPreset.deactivate()
}
```

**Objective-C**

```objc
// Create groups for the sounds. 
PHASEGroup* bgmGroup = [[PHASEGroup alloc] initWithEngine:_objects->mEngine uid:@"backgroundMusicGroup"];
PHASEGroup* voGroup = [[PHASEGroup alloc] initWithEngine:_objects->mEngine uid:@"voiceOverGroup"];
PHASEGroup* menuGroup = [[PHASEGroup alloc] initWithEngine:_objects->mEngine uid:@"menuSoundsGroup"];

// Create settings for the groups.
PHASEGroupPresetSetting* groupSettingFullVolume = [PHASEGroupPresetSetting alloc] initWithGain:1
    rate:1 gainCurveType:PHASECurveTypeLinear rateCurveType:PHASECurveTypeLinear];
                                                
PHASEGroupPresetSetting* groupSettingZeroVolume = [PHASEGroupPresetSetting alloc] initWithGain:0
    rate:1 gainCurveType:PHASECurveTypeLinear rateCurveType:PHASECurveTypeLinear];

// Create a dictionary for the `settings` argument of the group preset initializer.
NSMutableDictionary<PHASEGroup*, PHASEGroupPresetSetting*> pauseMenuDictionary;

// Enable volume only for menu group sounds.
[pauseMenuDictionary setObject:groupSettingFullVolume forKey:menuGroup]
[pauseMenuDictionary setObject:groupSettingZeroVolume forKey:bgmGroup]
[pauseMenuDictionary setObject:groupSettingZeroVolume forKey:voGroup]
PHASEGroupPreset* pauseMenuPreset = [[PHASEGroupPreset alloc] initWithEngine:myPHASEEngine
    settings:pauseMenuDictionary timeToTarget:1 timeToReset:1];

// Create a settings dictionary for the in-game experience.
NSMutableDictionary<PHASEGroup*, PHASEGroupPresetSetting*> inGameDictionary;

// Enable volume only for in-game sounds.
[inGameDictionary setObject:groupSettingZeroVolume forKey:menuGroup]
[inGameDictionary setObject:groupSettingFullVolume forKey:bgmGroup]
[inGameDictionary setObject:groupSettingFullVolume forKey:voGroup]
PHASEGroupPreset* inGamePreset = [[PHASEGroupPreset alloc] initWithEngine:myPHASEEngine
    settings:inGameDictionary timeToTarget:1 timeToReset:1];

// Activate the pause menu preset when the user pauses the app.
[pauseMenuPreset activate];

// Activate the in-game preset when the user resumes the app. 
[inGamePreset activate];

// Clear the current preset by deactivating it.
[myPHASEEngine.activeGroupPreset deactivate]

```

## Topics

### Creating a Group Preset

- [initWithEngine:settings:timeToTarget:timeToReset:](phasegrouppreset/init%28engine_settings_timetotarget_timetoreset_%29.md): Creates a group preset with the designated engine, settings, and fade parameters.

### Applying Settings

- [settings](phasegrouppreset/settings.md): A dictionary with preset setting values and group objects as keys.

### Fading Between Settings

- [timeToTarget](phasegrouppreset/timetotarget.md): A duration in which the engine fades the settings from their original value to their new value.
- [timeToReset](phasegrouppreset/timetoreset.md): A duration in which the framework restores the group’s original state.

### Activating a Group Preset

- [activate](phasegrouppreset/activate%28%29.md): Applies settings to the designated groups.
- [activateWithTimeToTargetOverride:](phasegrouppreset/activate%28timetotargetoverride_%29.md): Applies settings with an overriden fade duration.

### Deactivating a Group Preset

- [deactivate](phasegrouppreset/deactivate%28%29.md): Reverts settings for the preset’s groups.
- [deactivateWithTimeToResetOverride:](phasegrouppreset/deactivate%28timetoresetoverride_%29.md): Reverts settings for the preset’s groups using a timed adjustment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Sound Grouping and Management

- [PHASEGroup](phasegroup.md): A container that shares audio parameters with a collection of sounds.
- [PHASEGroupPresetSetting](phasegrouppresetsetting.md): Settings for group presets.
- [PHASEDucker](phaseducker.md): An object that manages competing sounds.
