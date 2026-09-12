> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msconversation/remoteparticipantidentifiers](https://developer.apple.com/documentation/messages/msconversation/remoteparticipantidentifiers)

# remoteParticipantIdentifiers (Swift)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

An array of UUIDs representing the remote participants in this conversation.

## Declaration

```swift
var remoteParticipantIdentifiers: [UUID] { get }
```

<a id="Discussion"></a>

## Discussion

These UUIDs are scoped to this device. They remain stable as long as the extension is enabled. If the extension is disabled and reenabled, or if the containing app is removed and reinstalled, the UUIDs for remote participants change.

## See Also

### Accessing Participants

- [localParticipantIdentifier](localparticipantidentifier.md): A UUID that identifies the user on this device.

# remoteParticipantIdentifiers (Objective-C)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

An array of UUIDs representing the remote participants in this conversation.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSUUID *> * remoteParticipantIdentifiers;
```

<a id="Discussion"></a>

## Discussion

These UUIDs are scoped to this device. They remain stable as long as the extension is enabled. If the extension is disabled and reenabled, or if the containing app is removed and reinstalled, the UUIDs for remote participants change.

## See Also

### Accessing Participants

- [localParticipantIdentifier](localparticipantidentifier.md): A UUID that identifies the user on this device.
