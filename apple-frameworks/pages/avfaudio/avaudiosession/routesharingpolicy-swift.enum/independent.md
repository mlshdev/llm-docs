> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/routesharingpolicy-swift.enum/independent](https://developer.apple.com/documentation/avfaudio/avaudiosession/routesharingpolicy-swift.enum/independent)

# AVAudioSession.RouteSharingPolicy.independent (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

A policy in which the route picker UI directs videos to a wireless route.

## Declaration

```swift
case independent
```

<a id="Discussion"></a>

## Discussion

In iOS, the system sets this policy in cases where the user directs video to a wireless route using the route picker UI. Apps shouldn’t try to set this value directly.

## See Also

### Route-sharing policies

- [AVAudioSession.RouteSharingPolicy.default](default.md): A policy that follows standard rules for routing audio output.
- [AVAudioSession.RouteSharingPolicy.longFormAudio](longformaudio.md): A policy that routes output to the shared long-form audio output.
- [AVAudioSession.RouteSharingPolicy.longFormVideo](longformvideo.md): A policy that routes output to the shared long-form video output.
- [longForm](longform.md): Deprecated. A policy that routes output to the shared long-form audio output.

# AVAudioSessionRouteSharingPolicyIndependent (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A policy in which the route picker UI directs videos to a wireless route.

## Declaration

```objectivec
AVAudioSessionRouteSharingPolicyIndependent
```

<a id="Discussion"></a>

## Discussion

In iOS, the system sets this policy in cases where the user directs video to a wireless route using the route picker UI. Apps shouldn’t try to set this value directly.

## See Also

### Route-sharing policies

- [AVAudioSessionRouteSharingPolicyDefault](default.md): A policy that follows standard rules for routing audio output.
- [AVAudioSessionRouteSharingPolicyLongFormAudio](longformaudio.md): A policy that routes output to the shared long-form audio output.
- [AVAudioSessionRouteSharingPolicyLongFormVideo](longformvideo.md): A policy that routes output to the shared long-form video output.
- [AVAudioSessionRouteSharingPolicyLongForm](longform.md): Deprecated. A policy that routes output to the shared long-form audio output.
