> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/syncreason/manual](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/syncreason/manual)

# CKSyncEngine.SyncReason.manual

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A manual sync operation.

## Declaration

```swift
case manual
```

<a id="discussion"></a>

## Discussion

The sync engine uses this reason only when your app invokes the [fetchChanges(\_:)](../fetchchanges%28__%29.md) and [sendChanges(\_:)](../sendchanges%28__%29.md) methods.

## See Also

### Sync reasons

- [CKSyncEngine.SyncReason.scheduled](scheduled.md): The sync engine automatically scheduled this sync.
