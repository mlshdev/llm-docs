> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/database](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/database)

# database

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The associated database.

## Declaration

```swift
final var database: CKDatabase { get }
```

<a id="discussion"></a>

## Discussion

Multiple sync engines can run in the same process, each targeting a different database. For example, you may use one sync engine for a person’s private database and another for their shared database.

## See Also

### Accessing the engine’s attributes

- [state](state-swift.property.md): A collection of state properties used to efficiently manage sync engine operation.
- [CKSyncEngine.State](state-swift.class.md): An object that manages the sync engine’s state.
