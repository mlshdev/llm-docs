> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/groupchatendedevent/endedby

# endedBy

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

Handle of device that performed the operation.

## Declaration

```swift
let endedBy: RCSHandle.URI
```

## See Also

### Accessing event properties

- [cellularServiceID](cellularserviceid.md): Cellular service identifier associated with this event.
- [CellularServiceID](../../cellularserviceid.md): An opaque identifier that represents the cellular service for which to provide operations.
- [groupHandle](grouphandle.md): The group handle of the group chat.
- [RCSHandle.Group](../../rcshandle/group.md): A structure that represents an RCS group handle.
- [RCSHandle.URI](../../rcshandle/uri.md): A structure that represents an RCS URI handle.
