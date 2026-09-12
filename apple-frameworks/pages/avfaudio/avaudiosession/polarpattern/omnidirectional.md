> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/polarpattern/omnidirectional](https://developer.apple.com/documentation/avfaudio/avaudiosession/polarpattern/omnidirectional)

# omnidirectional (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A data source that’s equally sensitive to sound from any direction.

## Declaration

```swift
static let omnidirectional: AVAudioSession.PolarPattern
```

<a id="Discussion"></a>

## Discussion

The omnidirectional pattern is circular and picks up sounds from all directions at the same level.

![The omnidirectional pattern picks up sounds equally from all directions.](https://developer.apple.com/images/com.apple.avfaudio/media-3039131@2x.png)

## See Also

### Getting Standard Polar Patterns

- [stereo](stereo.md): A polar pattern that captures a stereo image of an audio source.
- [cardioid](cardioid.md): A data source that’s most sensitive to sound from the direction of the data source and is nearly insensitive to sound from the opposite direction.
- [subcardioid](subcardioid.md): A data source that’s most sensitive to sound from the direction of the data source and is less sensitive to sound from the opposite direction.

# AVAudioSessionPolarPatternOmnidirectional (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A data source that’s equally sensitive to sound from any direction.

## Declaration

```objectivec
extern AVAudioSessionPolarPattern const AVAudioSessionPolarPatternOmnidirectional;
```

<a id="Discussion"></a>

## Discussion

The omnidirectional pattern is circular and picks up sounds from all directions at the same level.

![The omnidirectional pattern picks up sounds equally from all directions.](https://developer.apple.com/images/com.apple.avfaudio/media-3039131@2x.png)

## See Also

### Getting Standard Polar Patterns

- [AVAudioSessionPolarPatternStereo](stereo.md): A polar pattern that captures a stereo image of an audio source.
- [AVAudioSessionPolarPatternCardioid](cardioid.md): A data source that’s most sensitive to sound from the direction of the data source and is nearly insensitive to sound from the opposite direction.
- [AVAudioSessionPolarPatternSubcardioid](subcardioid.md): A data source that’s most sensitive to sound from the direction of the data source and is less sensitive to sound from the opposite direction.
