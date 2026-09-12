> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmenterror](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmenterror)

# AEAssessmentError

**Framework:** Automatic Assessment Configuration  
**Kind:** Structure  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 10.15.4+

Errors issued by an assessment session to its delegate.

## Declaration

```swift
struct AEAssessmentError
```

## Topics

### Error codes

- [unknown](aeassessmenterror/unknown.md): The session encountered an unknown error.
- [unsupportedPlatform](aeassessmenterror/unsupportedplatform.md): The feature isn’t supported on this platform.
- [AEAssessmentError.Code](aeassessmenterror/code.md): Error codes that the framework returns if a session fails.

### Error characteristics

- [AEAssessmentErrorDomain](aeassessmenterrordomain.md): A constant representing the error domain that the framework uses when issuing errors.

### Instance Properties

- [notInstalledParticipants](aeassessmenterror/notinstalledparticipants.md)
- [restrictedSystemParticipants](aeassessmenterror/restrictedsystemparticipants.md)

### Type Properties

- [configurationUpdatesNotSupported](aeassessmenterror/configurationupdatesnotsupported.md)
- [errorDomain](aeassessmenterror/errordomain.md)
- [multipleParticipantsNotSupported](aeassessmenterror/multipleparticipantsnotsupported.md)
- [requiredParticipantsNotAvailable](aeassessmenterror/requiredparticipantsnotavailable.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [AEAssessmentError.Code](aeassessmenterror/code.md): Error codes that the framework returns if a session fails.
- [AEAssessmentErrorDomain](aeassessmenterrordomain.md): A constant representing the error domain that the framework uses when issuing errors.
