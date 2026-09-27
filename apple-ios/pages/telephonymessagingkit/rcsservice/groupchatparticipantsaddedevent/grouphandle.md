> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/groupchatparticipantsaddedevent/grouphandle

# groupHandle

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The group handle to which participants were added.

## Declaration

```swift
let groupHandle: RCSHandle.Group
```

## See Also

### Accessing event properties

- [cellularServiceID](cellularserviceid.md): Cellular service identifier associated with this event.
- [addedParticipants](addedparticipants.md): Array of handles indicating the participants that were added.
- [addedBy](addedby.md): Handle of device that performed the operation.
