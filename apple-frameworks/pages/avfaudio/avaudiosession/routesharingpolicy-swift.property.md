> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/routesharingpolicy-swift.property](https://developer.apple.com/documentation/avfaudio/avaudiosession/routesharingpolicy-swift.property)

# routeSharingPolicy (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

The active route-sharing policy.

## Declaration

```swift
var routeSharingPolicy: AVAudioSession.RouteSharingPolicy { get }
```

<a id="Discussion"></a>

## Discussion

Use this value to indicate that the system should route this app’s audio somewhere other than the default system output when other suitable alternative routes exist.

## See Also

### Inspecting the route sharing policy

- [AVAudioSession.RouteSharingPolicy](routesharingpolicy-swift.enum.md): Cases that indicate the possible route-sharing policies for an audio session.

# routeSharingPolicy (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

The active route-sharing policy.

## Declaration

```objectivec
@property (readonly) AVAudioSessionRouteSharingPolicy routeSharingPolicy;
```

<a id="Discussion"></a>

## Discussion

Use this value to indicate that the system should route this app’s audio somewhere other than the default system output when other suitable alternative routes exist.

## See Also

### Inspecting the route sharing policy

- [AVAudioSessionRouteSharingPolicy](routesharingpolicy-swift.enum.md): Cases that indicate the possible route-sharing policies for an audio session.
