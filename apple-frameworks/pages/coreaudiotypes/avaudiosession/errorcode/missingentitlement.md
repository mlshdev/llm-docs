> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/avaudiosession/errorcode/missingentitlement](https://developer.apple.com/documentation/coreaudiotypes/avaudiosession/errorcode/missingentitlement)

# AVAudioSession.ErrorCode.missingEntitlement (Swift)

**Framework:** Core Audio Types  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An error code that indicates an attempt to perform an operation for which the app doesn’t have the required entitlements.

## Declaration

```swift
case missingEntitlement
```

## See Also

### Error codes

- [AVAudioSession.ErrorCode.none](none.md): An error code that indicates the operation succeeded.
- [AVAudioSession.ErrorCode.badParam](badparam.md): An error code that indicates an attempt to set a property to an illegal value.
- [AVAudioSession.ErrorCode.cannotInterruptOthers](cannotinterruptothers.md): An error code that indictates an attempt to make a nonmixable audio session active while the app was in the background.
- [AVAudioSession.ErrorCode.cannotStartPlaying](cannotstartplaying.md): An error code that indicates an attempt to start audio playback when it wasn’t allowed.
- [AVAudioSession.ErrorCode.cannotStartRecording](cannotstartrecording.md): An error code that indicates an attempt to start audio recording, but the operation failed.
- [AVAudioSession.ErrorCode.expiredSession](expiredsession.md): An error code that indicates that an operation failed because the system deallocated the associated session.
- [AVAudioSession.ErrorCode.incompatibleCategory](incompatiblecategory.md): An error code that indicates an attempt to perform an operation that the current audio session category doesn’t support.
- [AVAudioSession.ErrorCode.isBusy](isbusy.md): An error code that indicates an attempt to deactivate the audio session while it’s still playing or recording.
- [AVAudioSession.ErrorCode.mediaServicesFailed](mediaservicesfailed.md): An error code that indictates an attempt to use the audio session during or after a Media Services failure.
- [AVAudioSession.ErrorCode.resourceNotAvailable](resourcenotavailable.md): An error code that indicates that an operation failed because the device doesn’t have sufficient hardware resources to complete the action.
- [AVAudioSession.ErrorCode.sessionNotActive](sessionnotactive.md): An error code that indicates the operation failed because the session isn’t active.
- [AVAudioSession.ErrorCode.siriIsRecording](siriisrecording.md): An error code that indicates an attempt to perform an operation that isn’t allowed while Siri is recording.
- [AVAudioSession.ErrorCode.unspecified](unspecified.md): An error code that indicates an unspecified error occurred.
- [AVAudioSession.ErrorCode.insufficientPriority](insufficientpriority.md): An error code that indicates the app isn’t allowed to set the audio category because it’s in use by another app.

# AVAudioSessionErrorCodeMissingEntitlement (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An error code that indicates an attempt to perform an operation for which the app doesn’t have the required entitlements.

## Declaration

```objectivec
AVAudioSessionErrorCodeMissingEntitlement
```

## See Also

### Error codes

- [AVAudioSessionErrorCodeNone](none.md): An error code that indicates the operation succeeded.
- [AVAudioSessionErrorCodeBadParam](badparam.md): An error code that indicates an attempt to set a property to an illegal value.
- [AVAudioSessionErrorCodeCannotInterruptOthers](cannotinterruptothers.md): An error code that indictates an attempt to make a nonmixable audio session active while the app was in the background.
- [AVAudioSessionErrorCodeCannotStartPlaying](cannotstartplaying.md): An error code that indicates an attempt to start audio playback when it wasn’t allowed.
- [AVAudioSessionErrorCodeCannotStartRecording](cannotstartrecording.md): An error code that indicates an attempt to start audio recording, but the operation failed.
- [AVAudioSessionErrorCodeExpiredSession](expiredsession.md): An error code that indicates that an operation failed because the system deallocated the associated session.
- [AVAudioSessionErrorCodeIncompatibleCategory](incompatiblecategory.md): An error code that indicates an attempt to perform an operation that the current audio session category doesn’t support.
- [AVAudioSessionErrorCodeIsBusy](isbusy.md): An error code that indicates an attempt to deactivate the audio session while it’s still playing or recording.
- [AVAudioSessionErrorCodeMediaServicesFailed](mediaservicesfailed.md): An error code that indictates an attempt to use the audio session during or after a Media Services failure.
- [AVAudioSessionErrorCodeResourceNotAvailable](resourcenotavailable.md): An error code that indicates that an operation failed because the device doesn’t have sufficient hardware resources to complete the action.
- [AVAudioSessionErrorCodeSessionNotActive](sessionnotactive.md): An error code that indicates the operation failed because the session isn’t active.
- [AVAudioSessionErrorCodeSiriIsRecording](siriisrecording.md): An error code that indicates an attempt to perform an operation that isn’t allowed while Siri is recording.
- [AVAudioSessionErrorCodeUnspecified](unspecified.md): An error code that indicates an unspecified error occurred.
- [AVAudioSessionErrorCodeInsufficientPriority](insufficientpriority.md): An error code that indicates the app isn’t allowed to set the audio category because it’s in use by another app.
