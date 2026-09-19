> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/groupchatparticipantsremovedevent/removedparticipants

# removedParticipants

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

Array of handles indicating the participants that were removed.

## Declaration

```swift
let removedParticipants: [RCSHandle.URI]
```

## See Also

### Accessing event properties

- [cellularServiceID](cellularserviceid.md): Cellular service identifier associated with this event.
- [groupHandle](grouphandle.md): The group handle from which participants were removed.
- [removedBy](removedby.md): Handle of device that performed the operation.
- [removedCurrentUser](removedcurrentuser.md): Whether the current user was removed from the group.
