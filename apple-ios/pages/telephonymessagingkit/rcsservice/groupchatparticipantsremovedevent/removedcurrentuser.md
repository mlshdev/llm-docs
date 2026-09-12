> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/groupchatparticipantsremovedevent/removedcurrentuser](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/groupchatparticipantsremovedevent/removedcurrentuser)

# removedCurrentUser

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

Whether the current user was removed from the group.

## Declaration

```swift
let removedCurrentUser: Bool
```

## See Also

### Accessing event properties

- [cellularServiceID](cellularserviceid.md): Cellular service identifier associated with this event.
- [groupHandle](grouphandle.md): The group handle from which participants were removed.
- [removedParticipants](removedparticipants.md): Array of handles indicating the participants that were removed.
- [removedBy](removedby.md): Handle of device that performed the operation.
