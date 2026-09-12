> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengineconfiguration/stateserialization](https://developer.apple.com/documentation/cloudkit/cksyncengineconfiguration/stateserialization)

# stateSerialization

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The sync engine’s serialized state.

## Declaration

```objectivec
@property (copy, nullable) CKSyncEngineStateSerialization * stateSerialization;
```

<a id="discussion"></a>

## Discussion

This property returns the value you specify for the initializer’s `stateSerialization` parameter. If you choose to set this property after initialization, assign the state from the most recent [CKSyncEngineStateUpdateEvent](../cksyncenginestateupdateevent.md) handled by your delegate. However, if this is the first initialization of the associated sync engine, specify `nil` instead.

The default value is `nil`.

## See Also

### Managing attributes

- [automaticallySync](automaticallysync.md): A Boolean value that determines whether the engine syncs automatically.
- [database](database.md): The associated database.
- [subscriptionID](subscriptionid.md): The subscription identifier for the associated database.
