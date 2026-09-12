> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/avaudiosession/errorcode](https://developer.apple.com/documentation/coreaudiotypes/avaudiosession/errorcode)

# AVAudioSession.ErrorCode (Swift)

**Framework:** Core Audio Types  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Codes that describe error conditions that may occur when performing audio session operations.

## Declaration

```swift
enum ErrorCode
```

## Topics

### Error codes

- [AVAudioSession.ErrorCode.none](errorcode/none.md): An error code that indicates the operation succeeded.
- [AVAudioSession.ErrorCode.badParam](errorcode/badparam.md): An error code that indicates an attempt to set a property to an illegal value.
- [AVAudioSession.ErrorCode.cannotInterruptOthers](errorcode/cannotinterruptothers.md): An error code that indictates an attempt to make a nonmixable audio session active while the app was in the background.
- [AVAudioSession.ErrorCode.cannotStartPlaying](errorcode/cannotstartplaying.md): An error code that indicates an attempt to start audio playback when it wasn’t allowed.
- [AVAudioSession.ErrorCode.cannotStartRecording](errorcode/cannotstartrecording.md): An error code that indicates an attempt to start audio recording, but the operation failed.
- [AVAudioSession.ErrorCode.expiredSession](errorcode/expiredsession.md): An error code that indicates that an operation failed because the system deallocated the associated session.
- [AVAudioSession.ErrorCode.incompatibleCategory](errorcode/incompatiblecategory.md): An error code that indicates an attempt to perform an operation that the current audio session category doesn’t support.
- [AVAudioSession.ErrorCode.isBusy](errorcode/isbusy.md): An error code that indicates an attempt to deactivate the audio session while it’s still playing or recording.
- [AVAudioSession.ErrorCode.mediaServicesFailed](errorcode/mediaservicesfailed.md): An error code that indictates an attempt to use the audio session during or after a Media Services failure.
- [AVAudioSession.ErrorCode.missingEntitlement](errorcode/missingentitlement.md): An error code that indicates an attempt to perform an operation for which the app doesn’t have the required entitlements.
- [AVAudioSession.ErrorCode.resourceNotAvailable](errorcode/resourcenotavailable.md): An error code that indicates that an operation failed because the device doesn’t have sufficient hardware resources to complete the action.
- [AVAudioSession.ErrorCode.sessionNotActive](errorcode/sessionnotactive.md): An error code that indicates the operation failed because the session isn’t active.
- [AVAudioSession.ErrorCode.siriIsRecording](errorcode/siriisrecording.md): An error code that indicates an attempt to perform an operation that isn’t allowed while Siri is recording.
- [AVAudioSession.ErrorCode.unspecified](errorcode/unspecified.md): An error code that indicates an unspecified error occurred.
- [AVAudioSession.ErrorCode.insufficientPriority](errorcode/insufficientpriority.md): An error code that indicates the app isn’t allowed to set the audio category because it’s in use by another app.

### Initializers

- [init(rawValue:)](https://developer.apple.com/documentation/coreaudiotypes/avaudiosession/errorcode/init%28rawvalue:%29)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# AVAudioSessionErrorCode (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Codes that describe error conditions that may occur when performing audio session operations.

## Declaration

```objectivec
enum AVAudioSessionErrorCode : AVAudioInteger;
```

## Topics

### Error codes

- [AVAudioSessionErrorCodeNone](errorcode/none.md): An error code that indicates the operation succeeded.
- [AVAudioSessionErrorCodeBadParam](errorcode/badparam.md): An error code that indicates an attempt to set a property to an illegal value.
- [AVAudioSessionErrorCodeCannotInterruptOthers](errorcode/cannotinterruptothers.md): An error code that indictates an attempt to make a nonmixable audio session active while the app was in the background.
- [AVAudioSessionErrorCodeCannotStartPlaying](errorcode/cannotstartplaying.md): An error code that indicates an attempt to start audio playback when it wasn’t allowed.
- [AVAudioSessionErrorCodeCannotStartRecording](errorcode/cannotstartrecording.md): An error code that indicates an attempt to start audio recording, but the operation failed.
- [AVAudioSessionErrorCodeExpiredSession](errorcode/expiredsession.md): An error code that indicates that an operation failed because the system deallocated the associated session.
- [AVAudioSessionErrorCodeIncompatibleCategory](errorcode/incompatiblecategory.md): An error code that indicates an attempt to perform an operation that the current audio session category doesn’t support.
- [AVAudioSessionErrorCodeIsBusy](errorcode/isbusy.md): An error code that indicates an attempt to deactivate the audio session while it’s still playing or recording.
- [AVAudioSessionErrorCodeMediaServicesFailed](errorcode/mediaservicesfailed.md): An error code that indictates an attempt to use the audio session during or after a Media Services failure.
- [AVAudioSessionErrorCodeMissingEntitlement](errorcode/missingentitlement.md): An error code that indicates an attempt to perform an operation for which the app doesn’t have the required entitlements.
- [AVAudioSessionErrorCodeResourceNotAvailable](errorcode/resourcenotavailable.md): An error code that indicates that an operation failed because the device doesn’t have sufficient hardware resources to complete the action.
- [AVAudioSessionErrorCodeSessionNotActive](errorcode/sessionnotactive.md): An error code that indicates the operation failed because the session isn’t active.
- [AVAudioSessionErrorCodeSiriIsRecording](errorcode/siriisrecording.md): An error code that indicates an attempt to perform an operation that isn’t allowed while Siri is recording.
- [AVAudioSessionErrorCodeUnspecified](errorcode/unspecified.md): An error code that indicates an unspecified error occurred.
- [AVAudioSessionErrorCodeInsufficientPriority](errorcode/insufficientpriority.md): An error code that indicates the app isn’t allowed to set the audio category because it’s in use by another app.
