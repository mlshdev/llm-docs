> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitgenerator/init(audiocomponentdescription:)](https://developer.apple.com/documentation/avfaudio/avaudiounitgenerator/init(audiocomponentdescription:))

# init(audioComponentDescription:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Creates a generator audio unit with the specified description.

## Declaration

```swift
init(audioComponentDescription: AudioComponentDescription)
```

## Parameters

- `audioComponentDescription`: The audio component description.

<a id="return-value"></a>

## Return Value

A new `AVAudioUnitGenerator` instance.

<a id="Discussion"></a>

## Discussion

The [AudioComponentDescription](../../audiotoolbox/audiocomponentdescription.md) structure `componentType` field must be `kAudioUnitType_Generator` or [kAudioUnitType_RemoteGenerator](../../audiotoolbox/kaudiounittype_remotegenerator.md).

# initWithAudioComponentDescription: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Creates a generator audio unit with the specified description.

## Declaration

```objectivec
- (instancetype) initWithAudioComponentDescription:(AudioComponentDescription) audioComponentDescription;
```

## Parameters

- `audioComponentDescription`: The audio component description.

<a id="return-value"></a>

## Return Value

A new `AVAudioUnitGenerator` instance.

<a id="Discussion"></a>

## Discussion

The [AudioComponentDescription](../../audiotoolbox/audiocomponentdescription.md) structure `componentType` field must be `kAudioUnitType_Generator` or [kAudioUnitType_RemoteGenerator](../../audiotoolbox/kaudiounittype_remotegenerator.md).
