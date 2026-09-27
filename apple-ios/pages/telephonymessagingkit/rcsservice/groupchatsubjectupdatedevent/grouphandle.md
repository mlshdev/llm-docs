> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/groupchatsubjectupdatedevent/grouphandle

# groupHandle

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The group handle whose subject was updated.

## Declaration

```swift
let groupHandle: RCSHandle.Group
```

## See Also

### Accessing event properties

- [cellularServiceID](cellularserviceid.md): Cellular service identifier associated with this event.
- [newSubject](newsubject.md): The new subject for the group.
- [changedBy](changedby.md): Handle of device that performed the operation.
