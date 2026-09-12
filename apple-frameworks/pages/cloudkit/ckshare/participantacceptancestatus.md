> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/participantacceptancestatus](https://developer.apple.com/documentation/cloudkit/ckshare/participantacceptancestatus)

# CKShare.ParticipantAcceptanceStatus (Swift)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Constants that represent the status of a participant.

## Declaration

```swift
enum ParticipantAcceptanceStatus
```

## Topics

### Constants

- [CKShare.ParticipantAcceptanceStatus.unknown](participantacceptancestatus/unknown.md): The participant’s status is unknown.
- [CKShare.ParticipantAcceptanceStatus.pending](participantacceptancestatus/pending.md): The participant’s acceptance of the share request is pending.
- [CKShare.ParticipantAcceptanceStatus.accepted](participantacceptancestatus/accepted.md): The participant accepted the share request.
- [CKShare.ParticipantAcceptanceStatus.removed](participantacceptancestatus/removed.md): The system removed the participant from the share.

### Initializers

- [init(rawValue:)](participantacceptancestatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the Participant’s Status

- [acceptanceStatus](participant/acceptancestatus-swift.property.md): The current state of the user’s acceptance of the share.
- [CKShare.Participant.AcceptanceStatus](participant/acceptancestatus-swift.typealias.md): Deprecated. A type that represents the acceptance status of the participant.

# CKShareParticipantAcceptanceStatus (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Constants that represent the status of a participant.

## Declaration

```objectivec
enum CKShareParticipantAcceptanceStatus : NSInteger;
```

## Topics

### Constants

- [CKShareParticipantAcceptanceStatusUnknown](participantacceptancestatus/unknown.md): The participant’s status is unknown.
- [CKShareParticipantAcceptanceStatusPending](participantacceptancestatus/pending.md): The participant’s acceptance of the share request is pending.
- [CKShareParticipantAcceptanceStatusAccepted](participantacceptancestatus/accepted.md): The participant accepted the share request.
- [CKShareParticipantAcceptanceStatusRemoved](participantacceptancestatus/removed.md): The system removed the participant from the share.

## See Also

### Accessing the Participant’s Status

- [acceptanceStatus](participant/acceptancestatus-swift.property.md): The current state of the user’s acceptance of the share.
