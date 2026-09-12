> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginestateupdateevent/stateserialization](https://developer.apple.com/documentation/cloudkit/cksyncenginestateupdateevent/stateserialization)

# stateSerialization

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The current state of the sync engine.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) CKSyncEngineStateSerialization * stateSerialization;
```

<a id="discussion"></a>

## Discussion

> **Important**

> Always persist the most recent state to disk alongside your app data. The sync engine requires you to provide it with the most recent serialized state at initialization, and it’s your responsibility to make sure the state is available across app launches.

## See Also

### Accessing the state

- [CKSyncEngineStateSerialization](../cksyncenginestateserialization.md): An opaque object that contains the serialized representation of a sync engine’s current state.
