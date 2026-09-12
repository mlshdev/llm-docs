> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/routesharingpolicy-swift.enum/longform](https://developer.apple.com/documentation/avfaudio/avaudiosession/routesharingpolicy-swift.enum/longform)

# longForm (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 11.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 6.0)

A policy that routes output to the shared long-form audio output.

> Use [AVAudioSession.RouteSharingPolicy.longFormAudio](longformaudio.md) instead.

## Declaration

```swift
static var longForm: AVAudioSession.RouteSharingPolicy { get }
```

<a id="Discussion"></a>

## Discussion

An audio session whose primary use case is as a music or podcast player may use this value to play to the same output as the Music and Podcasts apps. All applications on the system that use this policy have their audio routed to the same location.

## See Also

### Route-sharing policies

- [AVAudioSession.RouteSharingPolicy.default](default.md): A policy that follows standard rules for routing audio output.
- [AVAudioSession.RouteSharingPolicy.longFormAudio](longformaudio.md): A policy that routes output to the shared long-form audio output.
- [AVAudioSession.RouteSharingPolicy.longFormVideo](longformvideo.md): A policy that routes output to the shared long-form video output.
- [AVAudioSession.RouteSharingPolicy.independent](independent.md): A policy in which the route picker UI directs videos to a wireless route.

# AVAudioSessionRouteSharingPolicyLongForm (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 11.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 6.0)

A policy that routes output to the shared long-form audio output.

> Use [AVAudioSessionRouteSharingPolicyLongFormAudio](longformaudio.md) instead.

## Declaration

```objectivec
AVAudioSessionRouteSharingPolicyLongForm
```

<a id="Discussion"></a>

## Discussion

An audio session whose primary use case is as a music or podcast player may use this value to play to the same output as the Music and Podcasts apps. All applications on the system that use this policy have their audio routed to the same location.

## See Also

### Route-sharing policies

- [AVAudioSessionRouteSharingPolicyDefault](default.md): A policy that follows standard rules for routing audio output.
- [AVAudioSessionRouteSharingPolicyLongFormAudio](longformaudio.md): A policy that routes output to the shared long-form audio output.
- [AVAudioSessionRouteSharingPolicyLongFormVideo](longformvideo.md): A policy that routes output to the shared long-form video output.
- [AVAudioSessionRouteSharingPolicyIndependent](independent.md): A policy in which the route picker UI directs videos to a wireless route.
