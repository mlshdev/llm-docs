> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiouniteffect/init(audiocomponentdescription:)

# init(audioComponentDescription:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Creates an audio unit effect object with the specified description.

## Declaration

```swift
init(audioComponentDescription: AudioComponentDescription)
```

## Parameters

- `audioComponentDescription`: The description of the audio unit to create.

  The `audioComponentDescription` must be one of these types `kAudioUnitType_Effect`, `kAudioUnitType_MusicEffect`, `kAudioUnitType_Panner`, `kAudioUnitType_RemoteEffect`, or `kAudioUnitType_RemoteMusicEffect`.

<a id="return-value"></a>

## Return Value

A new `AVAudioUnitEffect` instance.

# initWithAudioComponentDescription: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Creates an audio unit effect object with the specified description.

## Declaration

```objectivec
- (instancetype) initWithAudioComponentDescription:(AudioComponentDescription) audioComponentDescription;
```

## Parameters

- `audioComponentDescription`: The description of the audio unit to create.

  The `audioComponentDescription` must be one of these types `kAudioUnitType_Effect`, `kAudioUnitType_MusicEffect`, `kAudioUnitType_Panner`, `kAudioUnitType_RemoteEffect`, or `kAudioUnitType_RemoteMusicEffect`.

<a id="return-value"></a>

## Return Value

A new `AVAudioUnitEffect` instance.
