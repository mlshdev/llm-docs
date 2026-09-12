> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/state-swift.class/haspendinguntrackedchanges](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/state-swift.class/haspendinguntrackedchanges)

# hasPendingUntrackedChanges

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A Boolean value that indicates whether there are pending changes that the sync engine is unaware of.

## Declaration

```swift
final var hasPendingUntrackedChanges: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to inform the sync engine that there are pending changes other than those available in [pendingRecordZoneChanges](pendingrecordzonechanges.md). After you set this property, the sync engine automatically schedules a send operation and, when that operation executes, asks your delegate to provide those changes by invoking the [nextRecordZoneChangeBatch(\_:syncEngine:)](../../cksyncenginedelegate-1q7g8/nextrecordzonechangebatch%28__syncengine_%29.md) method.

Using this property is optional and is necessary only if you track pending changes manually, outside of the sync engine’s state.

## See Also

### Accessing pending changes

- [pendingDatabaseChanges](pendingdatabasechanges.md): A list of database changes that the sync engine has yet to send to the iCloud servers.
- [pendingRecordZoneChanges](pendingrecordzonechanges.md): A list of record zone changes that the sync engine has yet to send to the iCloud servers.
