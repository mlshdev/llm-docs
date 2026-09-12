> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/routesharingpolicy-swift.enum/longformaudio](https://developer.apple.com/documentation/avfaudio/avaudiosession/routesharingpolicy-swift.enum/longformaudio)

# AVAudioSession.RouteSharingPolicy.longFormAudio (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

A policy that routes output to the shared long-form audio output.

## Declaration

```swift
case longFormAudio
```

<a id="Discussion"></a>

## Discussion

Apps that play long-form audio, such as music or audio books, can use this policy to play to the same output as the built-in Music and Podcast apps. Long-form audio apps should also use the [Media Player](../../../mediaplayer.md) framework to add support for remote control events and to provide Now Playing information.

Apps running in watchOS that use this policy are able to play audio in the background, as long as the audio session can activate an eligible audio route. These apps must activate their audio session using the [activate(options:completionHandler:)](../activate%28options_completionhandler_%29.md) method. This ensures that the user has the opportunity to pick an appropriate audio route when the audio session can’t select one automatically.

## See Also

### Route-sharing policies

- [AVAudioSession.RouteSharingPolicy.default](default.md): A policy that follows standard rules for routing audio output.
- [AVAudioSession.RouteSharingPolicy.longFormVideo](longformvideo.md): A policy that routes output to the shared long-form video output.
- [AVAudioSession.RouteSharingPolicy.independent](independent.md): A policy in which the route picker UI directs videos to a wireless route.
- [longForm](longform.md): Deprecated. A policy that routes output to the shared long-form audio output.

# AVAudioSessionRouteSharingPolicyLongFormAudio (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A policy that routes output to the shared long-form audio output.

## Declaration

```objectivec
AVAudioSessionRouteSharingPolicyLongFormAudio
```

<a id="Discussion"></a>

## Discussion

Apps that play long-form audio, such as music or audio books, can use this policy to play to the same output as the built-in Music and Podcast apps. Long-form audio apps should also use the [Media Player](../../../mediaplayer.md) framework to add support for remote control events and to provide Now Playing information.

Apps running in watchOS that use this policy are able to play audio in the background, as long as the audio session can activate an eligible audio route. These apps must activate their audio session using the [activateWithOptions:completionHandler:](../activate%28options_completionhandler_%29.md) method. This ensures that the user has the opportunity to pick an appropriate audio route when the audio session can’t select one automatically.

## See Also

### Route-sharing policies

- [AVAudioSessionRouteSharingPolicyDefault](default.md): A policy that follows standard rules for routing audio output.
- [AVAudioSessionRouteSharingPolicyLongFormVideo](longformvideo.md): A policy that routes output to the shared long-form video output.
- [AVAudioSessionRouteSharingPolicyIndependent](independent.md): A policy in which the route picker UI directs videos to a wireless route.
- [AVAudioSessionRouteSharingPolicyLongForm](longform.md): Deprecated. A policy that routes output to the shared long-form audio output.
