> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/participant/acceptancestatus-swift.property](https://developer.apple.com/documentation/cloudkit/ckshare/participant/acceptancestatus-swift.property)

# acceptanceStatus (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The current state of the user’s acceptance of the share.

## Declaration

```swift
var acceptanceStatus: CKShare.ParticipantAcceptanceStatus { get }
```

<a id="discussion"></a>

## Discussion

This property contains the current state of the participant’s acceptance of the share. For a list of possible values, see [CKShare.ParticipantAcceptanceStatus](../participantacceptancestatus.md).

## See Also

### Accessing the Participant’s Status

- [CKShare.Participant.AcceptanceStatus](acceptancestatus-swift.typealias.md): Deprecated. A type that represents the acceptance status of the participant.
- [CKShare.ParticipantAcceptanceStatus](../participantacceptancestatus.md): Constants that represent the status of a participant.

# acceptanceStatus (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The current state of the user’s acceptance of the share.

## Declaration

```objectivec
@property (assign, readonly) CKShareParticipantAcceptanceStatus acceptanceStatus;
```

<a id="discussion"></a>

## Discussion

This property contains the current state of the participant’s acceptance of the share. For a list of possible values, see [CKShareParticipantAcceptanceStatus](../participantacceptancestatus.md).

## See Also

### Accessing the Participant’s Status

- [CKShareParticipantAcceptanceStatus](../participantacceptancestatus.md): Constants that represent the status of a participant.
