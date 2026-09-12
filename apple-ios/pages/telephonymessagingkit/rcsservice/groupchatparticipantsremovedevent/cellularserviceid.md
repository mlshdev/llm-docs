> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/groupchatparticipantsremovedevent/cellularserviceid](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/groupchatparticipantsremovedevent/cellularserviceid)

# cellularServiceID

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

Cellular service identifier associated with this event.

## Declaration

```swift
let cellularServiceID: CellularServiceID
```

## See Also

### Accessing event properties

- [groupHandle](grouphandle.md): The group handle from which participants were removed.
- [removedParticipants](removedparticipants.md): Array of handles indicating the participants that were removed.
- [removedBy](removedby.md): Handle of device that performed the operation.
- [removedCurrentUser](removedcurrentuser.md): Whether the current user was removed from the group.
