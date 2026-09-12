> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasegroup](https://developer.apple.com/documentation/phase/phasegroup)

# PHASEGroup (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A container that shares audio parameters with a collection of sounds.

## Declaration

```swift
class PHASEGroup
```

<a id="overview"></a>

## Overview

With all the sounds it contains, a group shares settings like gain, playback rate, mute, and solo. Groups are nonhierarchical and don’t overlap — that is, each sound event associates with only one group.

<a id="Apply-Group-Settings-to-Sounds"></a>

### Apply Group Settings to Sounds

You can apply settings to the sounds a group contains. For instance, an app can share volume settings with various sound effects and dialogue audio groups. The following example creates a group for background audio, such as environmental sound layers played with ambient music. By interpolating the group’s gain setting, the audio fade applies to every sound in the group.

**Swift**

```swift
// Allocate an engine and stereo mixer.
let stereoLayout = AVAudioChannelLayout(layoutTag: kAudioChannelLayoutTag_Stereo)!
let myEngine = PHASEEngine(updateMode: .automatic)
let stereoMixer = PHASEChannelMixerDefinition(channelLayout:stereoLayout)

// Create a group object.
let bgmGroup = PHASEGroup(identifier:"backgroundMusicGroup")
bgmGroup.register(engine: myEngine)

// Create a sound event node definition for background music.
let backgroundMusicSampler = PHASESamplerNodeDefinition(soundAssetIdentifier: "backgroundMusic", mixerDefinition: stereoMixer)
        
// Add the sound node to the group.
backgroundMusicSampler.group = myEngine.groups["backgroundMusicGroup"]
        
// Set group gain to zero.
bgmGroup.gain = 0
        
// Create a sound event to play the music.
var bgmEvent: PHASESoundEvent?
do {
    try bgmEvent = PHASESoundEvent(engine: myEngine, assetIdentifier: "backgroundMusicEventAsset")
} catch {
    fatalError("Error occurred: \(error.localizedDescription)")
}
        
// Queue the background music to play.
bgmEvent?.start() { reason in
    print("Started. Status: \(reason)")
}
        
// Fade in the music over two seconds.
bgmGroup.fadeGain(gain: 1.0, duration: 2.0, curveType: .linear)
```

**Objective-C**

```objc
// Create a group object.
PHASEGroup* bgmGroup = [[PHASEGroup alloc] initWithEngine:myEngine uid@"backgroundMusicGroup"];

// Create a sound event node definition for background music. 
PHASESamplerNodeDefinition* backgroundMusicSampler = [[PHASESamplerNodeDefinition alloc] initWithSoundAssetUID:@"backgroundMusic" mixerDefinition:mixer];

// Add the sound node to the group.
backgroundMusicSampler.group = myPHASEEngine.activeGroups[@"backgroundMusicGroup"];

// Set group gain to zero. 
bgmGroup.gain = 0;

// Create a sound event to play the music.
PHASESoundEvent* bgmEvent = [[PHASESoundEvent alloc] initWithEngine:_objects->mEngine
    registeredSoundEventNodeAssetUID:@"backgroundMusicEventAsset" outError:nil];

// Queue the background music to play.
NSError* myError = nil;
[bgmEvent startAndReturnError:&myError];
 
// Fade in the music over two seconds.
[bgmGroup fadeGain:1.0 duration:2.0 curveType:PHASECurveTypeLinear];
```

## Topics

### Creating a Group

- [init(identifier:)](phasegroup/init%28identifier_%29.md): Creates a group with a unique name.

### Identifying the Group

- [identifier](phasegroup/identifier.md): A unique name for the group.

### Defining the Group

- [register(engine:)](phasegroup/register%28engine_%29.md): Adds the group to the engine’s dictionary.
- [unregisterFromEngine()](phasegroup/unregisterfromengine%28%29.md): Removes the group from the engine’s dictionary.

### Conrolling Loudness

- [gain](phasegroup/gain.md): Modifies the volume of the group’s sounds.
- [fadeGain(gain:duration:curveType:)](phasegroup/fadegain%28gain_duration_curvetype_%29.md): Adjusts the volume of the sounds in a group gradually.

### Adjusting Playback Speed

- [rate](phasegroup/rate.md): The group’s playback speed.
- [fadeRate(rate:duration:curveType:)](phasegroup/faderate%28rate_duration_curvetype_%29.md): Adjusts the playback speed of the sounds in a group gradually.

### Silencing Sounds

- [mute()](phasegroup/mute%28%29.md): Silences the group.
- [unmute()](phasegroup/unmute%28%29.md): Restores the group’s volume.
- [isMuted](phasegroup/ismuted.md): A Boolean value that indicates whether the app silences the group.
- [solo()](phasegroup/solo%28%29.md): Silences all other groups.
- [unsolo()](phasegroup/unsolo%28%29.md): Restores the other groups’ volume.
- [isSoloed](phasegroup/issoloed.md): A Boolean value that indicates whether the app silences all groups other than this group.

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

- [PHASEGroupPreset](phasegrouppreset.md): A collection of settings for groups.
- [PHASEGroupPresetSetting](phasegrouppresetsetting.md): Settings for group presets.
- [PHASEDucker](phaseducker.md): An object that manages competing sounds.

# PHASEGroup (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A container that shares audio parameters with a collection of sounds.

## Declaration

```objectivec
@interface PHASEGroup : NSObject
```

<a id="overview"></a>

## Overview

With all the sounds it contains, a group shares settings like gain, playback rate, mute, and solo. Groups are nonhierarchical and don’t overlap — that is, each sound event associates with only one group.

<a id="Apply-Group-Settings-to-Sounds"></a>

### Apply Group Settings to Sounds

You can apply settings to the sounds a group contains. For instance, an app can share volume settings with various sound effects and dialogue audio groups. The following example creates a group for background audio, such as environmental sound layers played with ambient music. By interpolating the group’s gain setting, the audio fade applies to every sound in the group.

**Swift**

```swift
// Allocate an engine and stereo mixer.
let stereoLayout = AVAudioChannelLayout(layoutTag: kAudioChannelLayoutTag_Stereo)!
let myEngine = PHASEEngine(updateMode: .automatic)
let stereoMixer = PHASEChannelMixerDefinition(channelLayout:stereoLayout)

// Create a group object.
let bgmGroup = PHASEGroup(identifier:"backgroundMusicGroup")
bgmGroup.register(engine: myEngine)

// Create a sound event node definition for background music.
let backgroundMusicSampler = PHASESamplerNodeDefinition(soundAssetIdentifier: "backgroundMusic", mixerDefinition: stereoMixer)
        
// Add the sound node to the group.
backgroundMusicSampler.group = myEngine.groups["backgroundMusicGroup"]
        
// Set group gain to zero.
bgmGroup.gain = 0
        
// Create a sound event to play the music.
var bgmEvent: PHASESoundEvent?
do {
    try bgmEvent = PHASESoundEvent(engine: myEngine, assetIdentifier: "backgroundMusicEventAsset")
} catch {
    fatalError("Error occurred: \(error.localizedDescription)")
}
        
// Queue the background music to play.
bgmEvent?.start() { reason in
    print("Started. Status: \(reason)")
}
        
// Fade in the music over two seconds.
bgmGroup.fadeGain(gain: 1.0, duration: 2.0, curveType: .linear)
```

**Objective-C**

```objc
// Create a group object.
PHASEGroup* bgmGroup = [[PHASEGroup alloc] initWithEngine:myEngine uid@"backgroundMusicGroup"];

// Create a sound event node definition for background music. 
PHASESamplerNodeDefinition* backgroundMusicSampler = [[PHASESamplerNodeDefinition alloc] initWithSoundAssetUID:@"backgroundMusic" mixerDefinition:mixer];

// Add the sound node to the group.
backgroundMusicSampler.group = myPHASEEngine.activeGroups[@"backgroundMusicGroup"];

// Set group gain to zero. 
bgmGroup.gain = 0;

// Create a sound event to play the music.
PHASESoundEvent* bgmEvent = [[PHASESoundEvent alloc] initWithEngine:_objects->mEngine
    registeredSoundEventNodeAssetUID:@"backgroundMusicEventAsset" outError:nil];

// Queue the background music to play.
NSError* myError = nil;
[bgmEvent startAndReturnError:&myError];
 
// Fade in the music over two seconds.
[bgmGroup fadeGain:1.0 duration:2.0 curveType:PHASECurveTypeLinear];
```

## Topics

### Creating a Group

- [initWithIdentifier:](phasegroup/init%28identifier_%29.md): Creates a group with a unique name.

### Identifying the Group

- [identifier](phasegroup/identifier.md): A unique name for the group.

### Defining the Group

- [registerWithEngine:](phasegroup/register%28engine_%29.md): Adds the group to the engine’s dictionary.
- [unregisterFromEngine](phasegroup/unregisterfromengine%28%29.md): Removes the group from the engine’s dictionary.

### Conrolling Loudness

- [gain](phasegroup/gain.md): Modifies the volume of the group’s sounds.
- [fadeGain:duration:curveType:](phasegroup/fadegain%28gain_duration_curvetype_%29.md): Adjusts the volume of the sounds in a group gradually.

### Adjusting Playback Speed

- [rate](phasegroup/rate.md): The group’s playback speed.
- [fadeRate:duration:curveType:](phasegroup/faderate%28rate_duration_curvetype_%29.md): Adjusts the playback speed of the sounds in a group gradually.

### Silencing Sounds

- [mute](phasegroup/mute%28%29.md): Silences the group.
- [unmute](phasegroup/unmute%28%29.md): Restores the group’s volume.
- [muted](phasegroup/ismuted.md): A Boolean value that indicates whether the app silences the group.
- [solo](phasegroup/solo%28%29.md): Silences all other groups.
- [unsolo](phasegroup/unsolo%28%29.md): Restores the other groups’ volume.
- [soloed](phasegroup/issoloed.md): A Boolean value that indicates whether the app silences all groups other than this group.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Sound Grouping and Management

- [PHASEGroupPreset](phasegrouppreset.md): A collection of settings for groups.
- [PHASEGroupPresetSetting](phasegrouppresetsetting.md): Settings for group presets.
- [PHASEDucker](phaseducker.md): An object that manages competing sounds.
