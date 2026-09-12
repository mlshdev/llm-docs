> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/routesharingpolicy-swift.enum](https://developer.apple.com/documentation/avfaudio/avaudiosession/routesharingpolicy-swift.enum)

# AVAudioSession.RouteSharingPolicy (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Cases that indicate the possible route-sharing policies for an audio session.

## Declaration

```swift
enum RouteSharingPolicy
```

<a id="overview"></a>

## Overview

A route-sharing policy allows you to specify that an audio session should route its output to somewhere other than the default system output when alternative routes are available.

## Topics

### Route-sharing policies

- [AVAudioSession.RouteSharingPolicy.default](routesharingpolicy-swift.enum/default.md): A policy that follows standard rules for routing audio output.
- [AVAudioSession.RouteSharingPolicy.longFormAudio](routesharingpolicy-swift.enum/longformaudio.md): A policy that routes output to the shared long-form audio output.
- [AVAudioSession.RouteSharingPolicy.longFormVideo](routesharingpolicy-swift.enum/longformvideo.md): A policy that routes output to the shared long-form video output.
- [AVAudioSession.RouteSharingPolicy.independent](routesharingpolicy-swift.enum/independent.md): A policy in which the route picker UI directs videos to a wireless route.
- [longForm](routesharingpolicy-swift.enum/longform.md): Deprecated. A policy that routes output to the shared long-form audio output.

### Initializers

- [init(rawValue:)](routesharingpolicy-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting the route sharing policy

- [routeSharingPolicy](routesharingpolicy-swift.property.md): The active route-sharing policy.

# AVAudioSessionRouteSharingPolicy (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Cases that indicate the possible route-sharing policies for an audio session.

## Declaration

```objectivec
enum AVAudioSessionRouteSharingPolicy : NSUInteger;
```

<a id="overview"></a>

## Overview

A route-sharing policy allows you to specify that an audio session should route its output to somewhere other than the default system output when alternative routes are available.

## Topics

### Route-sharing policies

- [AVAudioSessionRouteSharingPolicyDefault](routesharingpolicy-swift.enum/default.md): A policy that follows standard rules for routing audio output.
- [AVAudioSessionRouteSharingPolicyLongFormAudio](routesharingpolicy-swift.enum/longformaudio.md): A policy that routes output to the shared long-form audio output.
- [AVAudioSessionRouteSharingPolicyLongFormVideo](routesharingpolicy-swift.enum/longformvideo.md): A policy that routes output to the shared long-form video output.
- [AVAudioSessionRouteSharingPolicyIndependent](routesharingpolicy-swift.enum/independent.md): A policy in which the route picker UI directs videos to a wireless route.
- [AVAudioSessionRouteSharingPolicyLongForm](routesharingpolicy-swift.enum/longform.md): Deprecated. A policy that routes output to the shared long-form audio output.

## See Also

### Inspecting the route sharing policy

- [routeSharingPolicy](routesharingpolicy-swift.property.md): The active route-sharing policy.
