> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseducker](https://developer.apple.com/documentation/phase/phaseducker)

# PHASEDucker (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An object that manages competing sounds.

## Declaration

```swift
class PHASEDucker
```

<a id="overview"></a>

## Overview

When a sound plays in any of the source groups, this class lowers the volume of all the target groups so the listener hears the source sound more clearly. You set the source and target using [PHASEGroup](phasegroup.md) objects; see [sourceGroups](phaseducker/sourcegroups.md) and [targetGroups](phaseducker/targetgroups.md).

<a id="Lower-Background-Music-During-a-Monologue"></a>

### Lower Background Music During a Monologue

When an app plays a monologue, the background music may need to lower, or *duck*, to enhance the clarity of the vocals. The following code demonstrates a ducker that configures a group for background music, and another group for the vocals.

**Swift**

```swift
let bgmGroup = PHASEGroup(identifier: "backgroundMusicGroup")
let voGroup = PHASEGroup(identifier: "voiceOverGroup")

let ducker = PHASEDucker(engine: myEngine, sourceGroups: [voGroup],
    targetGroups: [bgmGroup], gain: 0.25, attackTime: 0.25, releaseTime: 0.5,
    attackCurve: .linear, releaseCurve: .linear)

ducker.activate()
```

**Objective-C**

```objc
PHASEGroup* bgmGroup = [[PHASEGroup alloc] 
    initWithEngine:_objects->mEngine uid:@"backgroundMusicGroup"];
PHASEGroup* voGroup = [[PHASEGroup alloc] 
    initWithEngine:_objects->mEngine uid:@"voiceOverGroup"];

auto ducker = [[PHASEDucker alloc] 
    initWithEngine:_objects->mEngine
        sourceGroups:[NSSet setWithObject:voGroup]
        targetGroups:[NSSet setWithObject:bgmGroup]
        gain:0.25
        attackTime:0.25
        releaseTime:0.5
        attackCurve:PHASECurveTypeLinear
        releaseCurve:PHASECurveTypeLinear];

[ducker activate];
```

When an app sets up the ducking configuration in advance, PHASE automatically lowers the background music at runtime when the vocals play.

## Topics

### Creating a Ducker

- [init(engine:sourceGroups:targetGroups:gain:attackTime:releaseTime:attackCurve:releaseCurve:)](phaseducker/init%28engine_sourcegroups_targetgroups_gain_attacktime_releasetime_attackcurve_releasecurve_%29.md): Creates an object that manages competing sounds.

### Specifying Sounds

- [sourceGroups](phaseducker/sourcegroups.md): The sounds that determine volume reduction.
- [targetGroups](phaseducker/targetgroups.md): The sounds that reduce in volume.

### Configuring Volume Reduction

- [gain](phaseducker/gain.md): The amount of volume reduction.
- [identifier](phaseducker/identifier.md): A unique value for the ducker.
- [isActive](phaseducker/isactive.md): A Boolean value that determines whether the ducker reduces sound.
- [attackTime](phaseducker/attacktime.md): The amount of time for sound reduction to reach maximum strength.
- [attackCurve](phaseducker/attackcurve.md): A mathematical curve that shapes transition progress as sound reduction begins.
- [releaseTime](phaseducker/releasetime.md): The amount of time to transition from maximum sound reduction to no reduction.
- [releaseCurve](phaseducker/releasecurve.md): A mathematical curve that shapes transition progress as sound reduction ends.

### Altering Sound

- [activate()](phaseducker/activate%28%29.md): Instructs the ducker to begin altering sound.
- [deactivate()](phaseducker/deactivate%28%29.md): Stops the ducker from altering sound.

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
- [PHASEGroupPresetSetting](phasegrouppresetsetting.md): Settings for group presets.

# PHASEDucker (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An object that manages competing sounds.

## Declaration

```objectivec
@interface PHASEDucker : NSObject
```

<a id="overview"></a>

## Overview

When a sound plays in any of the source groups, this class lowers the volume of all the target groups so the listener hears the source sound more clearly. You set the source and target using [PHASEGroup](phasegroup.md) objects; see [sourceGroups](phaseducker/sourcegroups.md) and [targetGroups](phaseducker/targetgroups.md).

<a id="Lower-Background-Music-During-a-Monologue"></a>

### Lower Background Music During a Monologue

When an app plays a monologue, the background music may need to lower, or *duck*, to enhance the clarity of the vocals. The following code demonstrates a ducker that configures a group for background music, and another group for the vocals.

**Swift**

```swift
let bgmGroup = PHASEGroup(identifier: "backgroundMusicGroup")
let voGroup = PHASEGroup(identifier: "voiceOverGroup")

let ducker = PHASEDucker(engine: myEngine, sourceGroups: [voGroup],
    targetGroups: [bgmGroup], gain: 0.25, attackTime: 0.25, releaseTime: 0.5,
    attackCurve: .linear, releaseCurve: .linear)

ducker.activate()
```

**Objective-C**

```objc
PHASEGroup* bgmGroup = [[PHASEGroup alloc] 
    initWithEngine:_objects->mEngine uid:@"backgroundMusicGroup"];
PHASEGroup* voGroup = [[PHASEGroup alloc] 
    initWithEngine:_objects->mEngine uid:@"voiceOverGroup"];

auto ducker = [[PHASEDucker alloc] 
    initWithEngine:_objects->mEngine
        sourceGroups:[NSSet setWithObject:voGroup]
        targetGroups:[NSSet setWithObject:bgmGroup]
        gain:0.25
        attackTime:0.25
        releaseTime:0.5
        attackCurve:PHASECurveTypeLinear
        releaseCurve:PHASECurveTypeLinear];

[ducker activate];
```

When an app sets up the ducking configuration in advance, PHASE automatically lowers the background music at runtime when the vocals play.

## Topics

### Creating a Ducker

- [initWithEngine:sourceGroups:targetGroups:gain:attackTime:releaseTime:attackCurve:releaseCurve:](phaseducker/init%28engine_sourcegroups_targetgroups_gain_attacktime_releasetime_attackcurve_releasecurve_%29.md): Creates an object that manages competing sounds.

### Specifying Sounds

- [sourceGroups](phaseducker/sourcegroups.md): The sounds that determine volume reduction.
- [targetGroups](phaseducker/targetgroups.md): The sounds that reduce in volume.

### Configuring Volume Reduction

- [gain](phaseducker/gain.md): The amount of volume reduction.
- [identifier](phaseducker/identifier.md): A unique value for the ducker.
- [active](phaseducker/isactive.md): A Boolean value that determines whether the ducker reduces sound.
- [attackTime](phaseducker/attacktime.md): The amount of time for sound reduction to reach maximum strength.
- [attackCurve](phaseducker/attackcurve.md): A mathematical curve that shapes transition progress as sound reduction begins.
- [releaseTime](phaseducker/releasetime.md): The amount of time to transition from maximum sound reduction to no reduction.
- [releaseCurve](phaseducker/releasecurve.md): A mathematical curve that shapes transition progress as sound reduction ends.

### Altering Sound

- [activate](phaseducker/activate%28%29.md): Instructs the ducker to begin altering sound.
- [deactivate](phaseducker/deactivate%28%29.md): Stops the ducker from altering sound.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Sound Grouping and Management

- [PHASEGroup](phasegroup.md): A container that shares audio parameters with a collection of sounds.
- [PHASEGroupPreset](phasegrouppreset.md): A collection of settings for groups.
- [PHASEGroupPresetSetting](phasegrouppresetsetting.md): Settings for group presets.
