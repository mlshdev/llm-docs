> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setprefersinterruptiononroutedisconnect(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setprefersinterruptiononroutedisconnect(_:))

# setPrefersInterruptionOnRouteDisconnect(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Sets a preference to interrupt the audio session when the active route disconnects.

## Declaration

```swift
func setPrefersInterruptionOnRouteDisconnect(_ inValue: Bool) throws
```

## Parameters

- `inValue`: Specify a [false](https://developer.apple.com/documentation/swift/false) value to opt out of interruption on route disconnect. Set to [true](https://developer.apple.com/documentation/swift/true) to reset to the default behavior.

<a id="Discussion"></a>

## Discussion

The expected behavior of an app is to pause playback if a route change occurs due to a device no longer being available ([AVAudioSession.RouteChangeReason.oldDeviceUnavailable](routechangereason/olddeviceunavailable.md)). Starting in iOS 17, the system interrupts active Now Playing sessions when a route change occurs due to a disconnection event, but doesn’t interrupt other sessions.

## See Also

### Handling interruptions

- [prefersNoInterruptionsFromSystemAlerts](prefersnointerruptionsfromsystemalerts.md): A Boolean value that indicates a preference for not interrupting the session with system alerts.
- [setPrefersNoInterruptionsFromSystemAlerts(\_:)](setprefersnointerruptionsfromsystemalerts%28__%29.md): Sets the preference for not interrupting the audio session with system alerts.
- [prefersInterruptionOnRouteDisconnect](prefersinterruptiononroutedisconnect.md): A Boolean value that indicates whether the system interrupts the audio session when the active route disconnects.
- [interruptionNotification](interruptionnotification.md): Deprecated. A notification the system posts when an audio interruption occurs.

# setPrefersInterruptionOnRouteDisconnect:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Sets a preference to interrupt the audio session when the active route disconnects.

## Declaration

```objectivec
- (BOOL) setPrefersInterruptionOnRouteDisconnect:(BOOL) inValue error:(NSError **) outError;
```

## Parameters

- `inValue`: Specify a [false](https://developer.apple.com/documentation/swift/false) value to opt out of interruption on route disconnect. Set to [true](https://developer.apple.com/documentation/swift/true) to reset to the default behavior.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="Discussion"></a>

## Discussion

The expected behavior of an app is to pause playback if a route change occurs due to a device no longer being available ([AVAudioSessionRouteChangeReasonOldDeviceUnavailable](routechangereason/olddeviceunavailable.md)). Starting in iOS 17, the system interrupts active Now Playing sessions when a route change occurs due to a disconnection event, but doesn’t interrupt other sessions.

## See Also

### Handling interruptions

- [prefersNoInterruptionsFromSystemAlerts](prefersnointerruptionsfromsystemalerts.md): A Boolean value that indicates a preference for not interrupting the session with system alerts.
- [setPrefersNoInterruptionsFromSystemAlerts:error:](setprefersnointerruptionsfromsystemalerts%28__%29.md): Sets the preference for not interrupting the audio session with system alerts.
- [prefersInterruptionOnRouteDisconnect](prefersinterruptiononroutedisconnect.md): A Boolean value that indicates whether the system interrupts the audio session when the active route disconnects.
- [AVAudioSessionInterruptionNotification](interruptionnotification.md): Deprecated. A notification the system posts when an audio interruption occurs.
