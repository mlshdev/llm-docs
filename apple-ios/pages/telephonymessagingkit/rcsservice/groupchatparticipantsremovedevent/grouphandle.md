> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/groupchatparticipantsremovedevent/grouphandle](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/groupchatparticipantsremovedevent/grouphandle)

# groupHandle

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The group handle from which participants were removed.

## Declaration

```swift
let groupHandle: RCSHandle.Group
```

## See Also

### Accessing event properties

- [cellularServiceID](cellularserviceid.md): Cellular service identifier associated with this event.
- [removedParticipants](removedparticipants.md): Array of handles indicating the participants that were removed.
- [removedBy](removedby.md): Handle of device that performed the operation.
- [removedCurrentUser](removedcurrentuser.md): Whether the current user was removed from the group.
