> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/groupchatsubjectupdatedevent/changedby

# changedBy

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

Handle of device that performed the operation.

## Declaration

```swift
let changedBy: RCSHandle.URI
```

## See Also

### Accessing event properties

- [cellularServiceID](cellularserviceid.md): Cellular service identifier associated with this event.
- [groupHandle](grouphandle.md): The group handle whose subject was updated.
- [newSubject](newsubject.md): The new subject for the group.
