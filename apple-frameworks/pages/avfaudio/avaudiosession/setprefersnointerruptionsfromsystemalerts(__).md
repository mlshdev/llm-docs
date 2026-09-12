> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setprefersnointerruptionsfromsystemalerts(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setprefersnointerruptionsfromsystemalerts(_:))

# setPrefersNoInterruptionsFromSystemAlerts(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.3+

Sets the preference for not interrupting the audio session with system alerts.

## Declaration

```swift
func setPrefersNoInterruptionsFromSystemAlerts(_ inValue: Bool) throws
```

## Parameters

- `inValue`: The interruption preference value.

## Mentioned In

- [Handling audio interruptions](../handling-audio-interruptions.md)

<a id="Discussion"></a>

## Discussion

Beginning in iOS 14, users can set a global preference that indicates whether the system displays incoming calls using a banner or a full-screen display style. If using the banner style, setting this value to [true](https://developer.apple.com/documentation/swift/true) prevents the system from interrupting the audio session with incoming call notifications, and gives the user an opportunity to accept or decline the call. The system only interrupts the audio session if the user accepts the call.

Enabling this preference can improve the user experience of apps with audio sessions that you don’t want to interrupt, such as those that record audiovisual media or that you use for music performance.

> **Important**

>  This preference has no effect if the device uses the full-screen display style—the system interrupts the audio session on incoming calls.

## See Also

### Handling interruptions

- [prefersNoInterruptionsFromSystemAlerts](prefersnointerruptionsfromsystemalerts.md): A Boolean value that indicates a preference for not interrupting the session with system alerts.
- [prefersInterruptionOnRouteDisconnect](prefersinterruptiononroutedisconnect.md): A Boolean value that indicates whether the system interrupts the audio session when the active route disconnects.
- [setPrefersInterruptionOnRouteDisconnect(\_:)](setprefersinterruptiononroutedisconnect%28__%29.md): Sets a preference to interrupt the audio session when the active route disconnects.
- [interruptionNotification](interruptionnotification.md): Deprecated. A notification the system posts when an audio interruption occurs.

# setPrefersNoInterruptionsFromSystemAlerts:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.3+

Sets the preference for not interrupting the audio session with system alerts.

## Declaration

```objectivec
- (BOOL) setPrefersNoInterruptionsFromSystemAlerts:(BOOL) inValue error:(NSError **) outError;
```

## Parameters

- `inValue`: The interruption preference value.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

## Mentioned In

- [Handling audio interruptions](../handling-audio-interruptions.md)

<a id="Discussion"></a>

## Discussion

Beginning in iOS 14, users can set a global preference that indicates whether the system displays incoming calls using a banner or a full-screen display style. If using the banner style, setting this value to [true](https://developer.apple.com/documentation/swift/true) prevents the system from interrupting the audio session with incoming call notifications, and gives the user an opportunity to accept or decline the call. The system only interrupts the audio session if the user accepts the call.

Enabling this preference can improve the user experience of apps with audio sessions that you don’t want to interrupt, such as those that record audiovisual media or that you use for music performance.

> **Important**

>  This preference has no effect if the device uses the full-screen display style—the system interrupts the audio session on incoming calls.

## See Also

### Handling interruptions

- [prefersNoInterruptionsFromSystemAlerts](prefersnointerruptionsfromsystemalerts.md): A Boolean value that indicates a preference for not interrupting the session with system alerts.
- [prefersInterruptionOnRouteDisconnect](prefersinterruptiononroutedisconnect.md): A Boolean value that indicates whether the system interrupts the audio session when the active route disconnects.
- [setPrefersInterruptionOnRouteDisconnect:error:](setprefersinterruptiononroutedisconnect%28__%29.md): Sets a preference to interrupt the audio session when the active route disconnects.
- [AVAudioSessionInterruptionNotification](interruptionnotification.md): Deprecated. A notification the system posts when an audio interruption occurs.
