> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengineevent/stateupdateevent](https://developer.apple.com/documentation/cloudkit/cksyncengineevent/stateupdateevent)

# stateUpdateEvent

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The event downcast to the subclass that represents an update to the sync engine’s state.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) CKSyncEngineStateUpdateEvent * stateUpdateEvent;
```

## See Also

### Accessing state updates

- [CKSyncEngineStateUpdateEvent](../cksyncenginestateupdateevent.md): The sync engine state was updated, and you should persist it locally.
