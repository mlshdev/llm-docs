> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitmidiinstrument/init(audiocomponentdescription:)](https://developer.apple.com/documentation/avfaudio/avaudiounitmidiinstrument/init(audiocomponentdescription:))

# init(audioComponentDescription:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Creates a MIDI instrument audio unit with the component description you specify.

## Declaration

```swift
init(audioComponentDescription description: AudioComponentDescription)
```

## Parameters

- `description`: The description of the audio component.

<a id="return-value"></a>

## Return Value

A new [AVAudioUnitMIDIInstrument](../avaudiounitmidiinstrument.md) instance.

<a id="Discussion"></a>

## Discussion

The component type must be `kAudioUnitType_MusicDevice` or `kAudioUnitType_RemoteInstrument`.

# initWithAudioComponentDescription: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Creates a MIDI instrument audio unit with the component description you specify.

## Declaration

```objectivec
- (instancetype) initWithAudioComponentDescription:(AudioComponentDescription) description;
```

## Parameters

- `description`: The description of the audio component.

<a id="return-value"></a>

## Return Value

A new [AVAudioUnitMIDIInstrument](../avaudiounitmidiinstrument.md) instance.

<a id="Discussion"></a>

## Discussion

The component type must be `kAudioUnitType_MusicDevice` or `kAudioUnitType_RemoteInstrument`.
