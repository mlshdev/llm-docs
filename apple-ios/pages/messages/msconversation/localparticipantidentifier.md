> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msconversation/localparticipantidentifier](https://developer.apple.com/documentation/messages/msconversation/localparticipantidentifier)

# localParticipantIdentifier (Swift)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A UUID that identifies the user on this device.

## Declaration

```swift
var localParticipantIdentifier: UUID { get }
```

<a id="Discussion"></a>

## Discussion

This UUID is scoped to this device. It remains stable as long as the extension is enabled. If the extension is disabled and reenabled, or if the containing app is removed and reinstalled, the UUID for the local participant changes.

## See Also

### Accessing Participants

- [remoteParticipantIdentifiers](remoteparticipantidentifiers.md): An array of UUIDs representing the remote participants in this conversation.

# localParticipantIdentifier (Objective-C)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A UUID that identifies the user on this device.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUUID * localParticipantIdentifier;
```

<a id="Discussion"></a>

## Discussion

This UUID is scoped to this device. It remains stable as long as the extension is enabled. If the extension is disabled and reenabled, or if the containing app is removed and reinstalled, the UUID for the local participant changes.

## See Also

### Accessing Participants

- [remoteParticipantIdentifiers](remoteparticipantidentifiers.md): An array of UUIDs representing the remote participants in this conversation.
