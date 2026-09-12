> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/prefersnointerruptionsfromsystemalerts](https://developer.apple.com/documentation/avfaudio/avaudiosession/prefersnointerruptionsfromsystemalerts)

# prefersNoInterruptionsFromSystemAlerts (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.3+

A Boolean value that indicates a preference for not interrupting the session with system alerts.

## Declaration

```swift
var prefersNoInterruptionsFromSystemAlerts: Bool { get }
```

## See Also

### Handling interruptions

- [setPrefersNoInterruptionsFromSystemAlerts(\_:)](setprefersnointerruptionsfromsystemalerts%28__%29.md): Sets the preference for not interrupting the audio session with system alerts.
- [prefersInterruptionOnRouteDisconnect](prefersinterruptiononroutedisconnect.md): A Boolean value that indicates whether the system interrupts the audio session when the active route disconnects.
- [setPrefersInterruptionOnRouteDisconnect(\_:)](setprefersinterruptiononroutedisconnect%28__%29.md): Sets a preference to interrupt the audio session when the active route disconnects.
- [interruptionNotification](interruptionnotification.md): Deprecated. A notification the system posts when an audio interruption occurs.

# prefersNoInterruptionsFromSystemAlerts (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.3+

A Boolean value that indicates a preference for not interrupting the session with system alerts.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL prefersNoInterruptionsFromSystemAlerts;
```

## See Also

### Handling interruptions

- [setPrefersNoInterruptionsFromSystemAlerts:error:](setprefersnointerruptionsfromsystemalerts%28__%29.md): Sets the preference for not interrupting the audio session with system alerts.
- [prefersInterruptionOnRouteDisconnect](prefersinterruptiononroutedisconnect.md): A Boolean value that indicates whether the system interrupts the audio session when the active route disconnects.
- [setPrefersInterruptionOnRouteDisconnect:error:](setprefersinterruptiononroutedisconnect%28__%29.md): Sets a preference to interrupt the audio session when the active route disconnects.
- [AVAudioSessionInterruptionNotification](interruptionnotification.md): Deprecated. A notification the system posts when an audio interruption occurs.
