> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/routesharingpolicy-swift.enum/longformvideo](https://developer.apple.com/documentation/avfaudio/avaudiosession/routesharingpolicy-swift.enum/longformvideo)

# AVAudioSession.RouteSharingPolicy.longFormVideo (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A policy that routes output to the shared long-form video output.

## Declaration

```swift
case longFormVideo
```

<a id="Discussion"></a>

## Discussion

Apps that play long-form video content can use this policy to play to the same output as other long-form video apps, such as the built-in TV app. These apps should also set the `AVInitialRouteSharingPolicy` key in their `Info.plist` to `LongFormVideo`. Video content not using this route sharing policy remains local to the playback device even when the system is routing long-form video content to AirPlay.

## See Also

### Route-sharing policies

- [AVAudioSession.RouteSharingPolicy.default](default.md): A policy that follows standard rules for routing audio output.
- [AVAudioSession.RouteSharingPolicy.longFormAudio](longformaudio.md): A policy that routes output to the shared long-form audio output.
- [AVAudioSession.RouteSharingPolicy.independent](independent.md): A policy in which the route picker UI directs videos to a wireless route.
- [longForm](longform.md): Deprecated. A policy that routes output to the shared long-form audio output.

# AVAudioSessionRouteSharingPolicyLongFormVideo (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A policy that routes output to the shared long-form video output.

## Declaration

```objectivec
AVAudioSessionRouteSharingPolicyLongFormVideo
```

<a id="Discussion"></a>

## Discussion

Apps that play long-form video content can use this policy to play to the same output as other long-form video apps, such as the built-in TV app. These apps should also set the `AVInitialRouteSharingPolicy` key in their `Info.plist` to `LongFormVideo`. Video content not using this route sharing policy remains local to the playback device even when the system is routing long-form video content to AirPlay.

## See Also

### Route-sharing policies

- [AVAudioSessionRouteSharingPolicyDefault](default.md): A policy that follows standard rules for routing audio output.
- [AVAudioSessionRouteSharingPolicyLongFormAudio](longformaudio.md): A policy that routes output to the shared long-form audio output.
- [AVAudioSessionRouteSharingPolicyIndependent](independent.md): A policy in which the route picker UI directs videos to a wireless route.
- [AVAudioSessionRouteSharingPolicyLongForm](longform.md): Deprecated. A policy that routes output to the shared long-form audio output.
