> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/groupchatparticipantsremovedevent/removedby](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/groupchatparticipantsremovedevent/removedby)

# removedBy

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

Handle of device that performed the operation.

## Declaration

```swift
let removedBy: RCSHandle.URI
```

## See Also

### Accessing event properties

- [cellularServiceID](cellularserviceid.md): Cellular service identifier associated with this event.
- [groupHandle](grouphandle.md): The group handle from which participants were removed.
- [removedParticipants](removedparticipants.md): Array of handles indicating the participants that were removed.
- [removedCurrentUser](removedcurrentuser.md): Whether the current user was removed from the group.
