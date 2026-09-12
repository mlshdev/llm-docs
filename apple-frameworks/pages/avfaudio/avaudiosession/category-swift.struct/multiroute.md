> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/category-swift.struct/multiroute](https://developer.apple.com/documentation/avfaudio/avaudiosession/category-swift.struct/multiroute)

# multiRoute (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The category for routing distinct streams of audio data to different output devices at the same time.

## Declaration

```swift
static let multiRoute: AVAudioSession.Category
```

<a id="Discussion"></a>

## Discussion

This category can be used for input, output, or both. For example, use this category to route audio to both a USB device and a set of headphones. Use of this category requires a more detailed knowledge of, and interaction with, the capabilities of the available audio routes.

> **Important**

>  Route changes can invalidate part or all of your multi-route configuration.  When using the [multiRoute](multiroute.md) category, it is essential that you register to observe [routeChangeNotification](../routechangenotification.md) notifications and update your configuration as necessary.

## See Also

### Getting Standard Categories

- [ambient](ambient.md): The category for an app in which sound playback is nonprimary — that is, your app also works with the sound turned off.
- [playAndRecord](playandrecord.md): The category for recording (input) and playback (output) of audio, such as for a Voice over Internet Protocol (VoIP) app.
- [playback](playback.md): The category for playing recorded music or other sounds that are central to the successful use of your app.
- [record](record.md): The category for recording audio while also silencing playback audio.
- [soloAmbient](soloambient.md): The default audio session category.
- [audioProcessing](audioprocessing.md): Deprecated. The category for using an audio hardware codec or signal processor while not playing or recording audio.

# AVAudioSessionCategoryMultiRoute (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The category for routing distinct streams of audio data to different output devices at the same time.

## Declaration

```objectivec
extern AVAudioSessionCategory const AVAudioSessionCategoryMultiRoute;
```

<a id="Discussion"></a>

## Discussion

This category can be used for input, output, or both. For example, use this category to route audio to both a USB device and a set of headphones. Use of this category requires a more detailed knowledge of, and interaction with, the capabilities of the available audio routes.

> **Important**

>  Route changes can invalidate part or all of your multi-route configuration.  When using the [AVAudioSessionCategoryMultiRoute](multiroute.md) category, it is essential that you register to observe [AVAudioSessionRouteChangeNotification](../routechangenotification.md) notifications and update your configuration as necessary.

## See Also

### Getting Standard Categories

- [AVAudioSessionCategoryAmbient](ambient.md): The category for an app in which sound playback is nonprimary — that is, your app also works with the sound turned off.
- [AVAudioSessionCategoryPlayAndRecord](playandrecord.md): The category for recording (input) and playback (output) of audio, such as for a Voice over Internet Protocol (VoIP) app.
- [AVAudioSessionCategoryPlayback](playback.md): The category for playing recorded music or other sounds that are central to the successful use of your app.
- [AVAudioSessionCategoryRecord](record.md): The category for recording audio while also silencing playback audio.
- [AVAudioSessionCategorySoloAmbient](soloambient.md): The default audio session category.
- [AVAudioSessionCategoryAudioProcessing](audioprocessing.md): Deprecated. The category for using an audio hardware codec or signal processor while not playing or recording audio.
