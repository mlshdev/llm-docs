> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-4b4w9/database](https://developer.apple.com/documentation/cloudkit/cksyncengine-4b4w9/database)

# database

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The associated database.

## Declaration

```objectivec
@property (strong, readonly) CKDatabase * database;
```

<a id="discussion"></a>

## Discussion

Multiple sync engines can run in the same process, each targeting a different database. For example, you may use one sync engine for a person’s private database and another for their shared database.

## See Also

### Accessing the engine’s attributes

- [state](state.md): A collection of state properties used to efficiently manage sync engine operation.
- [CKSyncEngineState](../cksyncenginestate.md): An object that manages the sync engine’s state.
