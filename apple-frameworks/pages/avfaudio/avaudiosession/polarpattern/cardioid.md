> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/polarpattern/cardioid](https://developer.apple.com/documentation/avfaudio/avaudiosession/polarpattern/cardioid)

# cardioid (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A data source that’s most sensitive to sound from the direction of the data source and is nearly insensitive to sound from the opposite direction.

## Declaration

```swift
static let cardioid: AVAudioSession.PolarPattern
```

<a id="Discussion"></a>

## Discussion

The cardioid pattern is heart-shaped and picks up most sound from the front side.

![The cardioid pattern picks up sound from the direction of the data source. ](https://developer.apple.com/images/com.apple.avfaudio/media-3039129@2x.png)

## See Also

### Getting Standard Polar Patterns

- [stereo](stereo.md): A polar pattern that captures a stereo image of an audio source.
- [subcardioid](subcardioid.md): A data source that’s most sensitive to sound from the direction of the data source and is less sensitive to sound from the opposite direction.
- [omnidirectional](omnidirectional.md): A data source that’s equally sensitive to sound from any direction.

# AVAudioSessionPolarPatternCardioid (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A data source that’s most sensitive to sound from the direction of the data source and is nearly insensitive to sound from the opposite direction.

## Declaration

```objectivec
extern AVAudioSessionPolarPattern const AVAudioSessionPolarPatternCardioid;
```

<a id="Discussion"></a>

## Discussion

The cardioid pattern is heart-shaped and picks up most sound from the front side.

![The cardioid pattern picks up sound from the direction of the data source. ](https://developer.apple.com/images/com.apple.avfaudio/media-3039129@2x.png)

## See Also

### Getting Standard Polar Patterns

- [AVAudioSessionPolarPatternStereo](stereo.md): A polar pattern that captures a stereo image of an audio source.
- [AVAudioSessionPolarPatternSubcardioid](subcardioid.md): A data source that’s most sensitive to sound from the direction of the data source and is less sensitive to sound from the opposite direction.
- [AVAudioSessionPolarPatternOmnidirectional](omnidirectional.md): A data source that’s equally sensitive to sound from any direction.
