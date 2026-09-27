> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/groupchatsubjectupdatedevent/cellularserviceid

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

- [groupHandle](grouphandle.md): The group handle whose subject was updated.
- [newSubject](newsubject.md): The new subject for the group.
- [changedBy](changedby.md): Handle of device that performed the operation.
