> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounittimeeffect/init(audiocomponentdescription:)](https://developer.apple.com/documentation/avfaudio/avaudiounittimeeffect/init(audiocomponentdescription:))

# init(audioComponentDescription:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Creates a time effect audio unit with the specified description.

## Declaration

```swift
init(audioComponentDescription: AudioComponentDescription)
```

## Parameters

- `audioComponentDescription`: The description of the audio unit to create.

<a id="return-value"></a>

## Return Value

A new `AVAudioUnitTimeEffect` instance.

<a id="Discussion"></a>

## Discussion

The `componentType` field of the description structure must be `kAudioUnitType_FormatConverter` (”`aufc`”); otherwise, the method raises an exception.

# initWithAudioComponentDescription: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Creates a time effect audio unit with the specified description.

## Declaration

```objectivec
- (instancetype) initWithAudioComponentDescription:(AudioComponentDescription) audioComponentDescription;
```

## Parameters

- `audioComponentDescription`: The description of the audio unit to create.

<a id="return-value"></a>

## Return Value

A new `AVAudioUnitTimeEffect` instance.

<a id="Discussion"></a>

## Discussion

The `componentType` field of the description structure must be `kAudioUnitType_FormatConverter` (”`aufc`”); otherwise, the method raises an exception.
