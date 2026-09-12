> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmenterror/code](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmenterror/code)

# AEAssessmentError.Code (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Enumeration  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 10.15.4+

Error codes that the framework returns if a session fails.

## Declaration

```swift
enum Code
```

## Topics

### Possible errors

- [AEAssessmentError.Code.configurationUpdatesNotSupported](code/configurationupdatesnotsupported.md): An active session fails to update its configuration because configuration updates are not supported by the current device or platform.
- [AEAssessmentError.Code.multipleParticipantsNotSupported](code/multipleparticipantsnotsupported.md): A session fails to begin or update with a configuration that contains one or more participant applications because mulitple participant configurations are not supported by the device or platform.
- [AEAssessmentError.Code.unknown](code/unknown.md): The session encountered an unknown error.
- [AEAssessmentError.Code.unsupportedPlatform](code/unsupportedplatform.md): The feature isn’t supported on this platform.

### Enumeration Cases

- [AEAssessmentError.Code.requiredParticipantsNotAvailable](code/requiredparticipantsnotavailable.md)

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [AEAssessmentError](../aeassessmenterror.md): Errors issued by an assessment session to its delegate.
- [AEAssessmentErrorDomain](../aeassessmenterrordomain.md): A constant representing the error domain that the framework uses when issuing errors.

# AEAssessmentErrorCode (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Enumeration  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · visionOS

Error codes that the framework returns if a session fails.

## Declaration

```objectivec
enum AEAssessmentErrorCode : NSInteger;
```

## Topics

### Possible errors

- [AEAssessmentErrorConfigurationUpdatesNotSupported](code/configurationupdatesnotsupported.md): An active session fails to update its configuration because configuration updates are not supported by the current device or platform.
- [AEAssessmentErrorMultipleParticipantsNotSupported](code/multipleparticipantsnotsupported.md): A session fails to begin or update with a configuration that contains one or more participant applications because mulitple participant configurations are not supported by the device or platform.
- [AEAssessmentErrorUnknown](code/unknown.md): The session encountered an unknown error.
- [AEAssessmentErrorUnsupportedPlatform](code/unsupportedplatform.md): The feature isn’t supported on this platform.

### Enumeration Cases

- [AEAssessmentErrorRequiredParticipantsNotAvailable](code/requiredparticipantsnotavailable.md)

## See Also

### Errors

- [AEAssessmentErrorDomain](../aeassessmenterrordomain.md): A constant representing the error domain that the framework uses when issuing errors.
