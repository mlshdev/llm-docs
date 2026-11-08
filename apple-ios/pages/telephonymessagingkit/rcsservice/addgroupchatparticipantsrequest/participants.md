> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/addgroupchatparticipantsrequest/participants

# participants

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

Array of participants to be added to group.

## Declaration

```swift
var participants: [RCSHandle.URI]
```

## See Also

### Accessing request properties

- [cellularServiceID](cellularserviceid.md): Service identifier to use for this request.
- [groupHandle](grouphandle.md): Group handle indicating the group to which to add participants.
