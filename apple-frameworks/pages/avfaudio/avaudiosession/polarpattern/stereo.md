> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/polarpattern/stereo](https://developer.apple.com/documentation/avfaudio/avaudiosession/polarpattern/stereo)

# stereo (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A polar pattern that captures a stereo image of an audio source.

## Declaration

```swift
static let stereo: AVAudioSession.PolarPattern
```

<a id="Discussion"></a>

## Discussion

If you select a data source with this polar pattern, call [setPreferredInputOrientation(\_:)](../setpreferredinputorientation%28__%29.md) on your audio session to ensure that left and right are correctly oriented in the captured audio.

## See Also

### Getting Standard Polar Patterns

- [cardioid](cardioid.md): A data source that’s most sensitive to sound from the direction of the data source and is nearly insensitive to sound from the opposite direction.
- [subcardioid](subcardioid.md): A data source that’s most sensitive to sound from the direction of the data source and is less sensitive to sound from the opposite direction.
- [omnidirectional](omnidirectional.md): A data source that’s equally sensitive to sound from any direction.

# AVAudioSessionPolarPatternStereo (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A polar pattern that captures a stereo image of an audio source.

## Declaration

```objectivec
extern AVAudioSessionPolarPattern const AVAudioSessionPolarPatternStereo;
```

<a id="Discussion"></a>

## Discussion

If you select a data source with this polar pattern, call [setPreferredInputOrientation:error:](../setpreferredinputorientation%28__%29.md) on your audio session to ensure that left and right are correctly oriented in the captured audio.

## See Also

### Getting Standard Polar Patterns

- [AVAudioSessionPolarPatternCardioid](cardioid.md): A data source that’s most sensitive to sound from the direction of the data source and is nearly insensitive to sound from the opposite direction.
- [AVAudioSessionPolarPatternSubcardioid](subcardioid.md): A data source that’s most sensitive to sound from the direction of the data source and is less sensitive to sound from the opposite direction.
- [AVAudioSessionPolarPatternOmnidirectional](omnidirectional.md): A data source that’s equally sensitive to sound from any direction.
