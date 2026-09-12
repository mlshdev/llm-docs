> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/prefersinterruptiononroutedisconnect](https://developer.apple.com/documentation/avfaudio/avaudiosession/prefersinterruptiononroutedisconnect)

# prefersInterruptionOnRouteDisconnect (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A Boolean value that indicates whether the system interrupts the audio session when the active route disconnects.

## Declaration

```swift
var prefersInterruptionOnRouteDisconnect: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Handling interruptions

- [prefersNoInterruptionsFromSystemAlerts](prefersnointerruptionsfromsystemalerts.md): A Boolean value that indicates a preference for not interrupting the session with system alerts.
- [setPrefersNoInterruptionsFromSystemAlerts(\_:)](setprefersnointerruptionsfromsystemalerts%28__%29.md): Sets the preference for not interrupting the audio session with system alerts.
- [setPrefersInterruptionOnRouteDisconnect(\_:)](setprefersinterruptiononroutedisconnect%28__%29.md): Sets a preference to interrupt the audio session when the active route disconnects.
- [interruptionNotification](interruptionnotification.md): Deprecated. A notification the system posts when an audio interruption occurs.

# prefersInterruptionOnRouteDisconnect (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A Boolean value that indicates whether the system interrupts the audio session when the active route disconnects.

## Declaration

```objectivec
@property (readonly) BOOL prefersInterruptionOnRouteDisconnect;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Handling interruptions

- [prefersNoInterruptionsFromSystemAlerts](prefersnointerruptionsfromsystemalerts.md): A Boolean value that indicates a preference for not interrupting the session with system alerts.
- [setPrefersNoInterruptionsFromSystemAlerts:error:](setprefersnointerruptionsfromsystemalerts%28__%29.md): Sets the preference for not interrupting the audio session with system alerts.
- [setPrefersInterruptionOnRouteDisconnect:error:](setprefersinterruptiononroutedisconnect%28__%29.md): Sets a preference to interrupt the audio session when the active route disconnects.
- [AVAudioSessionInterruptionNotification](interruptionnotification.md): Deprecated. A notification the system posts when an audio interruption occurs.
