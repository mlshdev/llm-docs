> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/configuration/stateserialization](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/configuration/stateserialization)

# stateSerialization

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The sync engine’s serialized state.

## Declaration

```swift
var stateSerialization: CKSyncEngine.State.Serialization?
```

<a id="discussion"></a>

## Discussion

This property returns the value you specify for the initializer’s `stateSerialization` parameter. If you choose to set this property after initialization, assign the state from the most recent [CKSyncEngine.Event.stateUpdate(\_:)](../event/stateupdate%28__%29.md) event handled by your delegate. However, if this is the first initialization of the associated sync engine, specify `nil` instead.

The default value is `nil`.

## See Also

### Managing attributes

- [automaticallySync](automaticallysync.md): A Boolean value that determines whether the engine syncs automatically.
- [database](database.md): The associated database.
- [subscriptionID](subscriptionid.md): The subscription identifier for the associated database.
