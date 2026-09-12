> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/polarpattern/subcardioid](https://developer.apple.com/documentation/avfaudio/avaudiosession/polarpattern/subcardioid)

# subcardioid (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A data source that’s most sensitive to sound from the direction of the data source and is less sensitive to sound from the opposite direction.

## Declaration

```swift
static let subcardioid: AVAudioSession.PolarPattern
```

<a id="Discussion"></a>

## Discussion

The subcardioid pattern picks up a sound from a wide radius in the front and in the back.

![The subcardioid pattern picks up more sound from the direction of the data source than from the rear. ](https://developer.apple.com/images/com.apple.avfaudio/media-3039130@2x.png)

## See Also

### Getting Standard Polar Patterns

- [stereo](stereo.md): A polar pattern that captures a stereo image of an audio source.
- [cardioid](cardioid.md): A data source that’s most sensitive to sound from the direction of the data source and is nearly insensitive to sound from the opposite direction.
- [omnidirectional](omnidirectional.md): A data source that’s equally sensitive to sound from any direction.

# AVAudioSessionPolarPatternSubcardioid (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A data source that’s most sensitive to sound from the direction of the data source and is less sensitive to sound from the opposite direction.

## Declaration

```objectivec
extern AVAudioSessionPolarPattern const AVAudioSessionPolarPatternSubcardioid;
```

<a id="Discussion"></a>

## Discussion

The subcardioid pattern picks up a sound from a wide radius in the front and in the back.

![The subcardioid pattern picks up more sound from the direction of the data source than from the rear. ](https://developer.apple.com/images/com.apple.avfaudio/media-3039130@2x.png)

## See Also

### Getting Standard Polar Patterns

- [AVAudioSessionPolarPatternStereo](stereo.md): A polar pattern that captures a stereo image of an audio source.
- [AVAudioSessionPolarPatternCardioid](cardioid.md): A data source that’s most sensitive to sound from the direction of the data source and is nearly insensitive to sound from the opposite direction.
- [AVAudioSessionPolarPatternOmnidirectional](omnidirectional.md): A data source that’s equally sensitive to sound from any direction.
