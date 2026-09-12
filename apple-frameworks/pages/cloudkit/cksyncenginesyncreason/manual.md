> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginesyncreason/manual](https://developer.apple.com/documentation/cloudkit/cksyncenginesyncreason/manual)

# CKSyncEngineSyncReason.manual (Swift)

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A manual sync operation.

## Declaration

```swift
case manual
```

<a id="discussion"></a>

## Discussion

The sync engine uses this reason only when your app invokes the [fetchChangesWithCompletionHandler:](../cksyncengine-4b4w9/fetchchangeswithcompletionhandler_.md) and [sendChangesWithCompletionHandler:](../cksyncengine-4b4w9/sendchangeswithcompletionhandler_.md) methods and their variants.

## See Also

### Sync reasons

- [CKSyncEngineSyncReason.scheduled](scheduled.md): The sync engine automatically scheduled this sync.

# CKSyncEngineSyncReasonManual (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A manual sync operation.

## Declaration

```objectivec
CKSyncEngineSyncReasonManual
```

<a id="discussion"></a>

## Discussion

The sync engine uses this reason only when your app invokes the [fetchChangesWithCompletionHandler:](../cksyncengine-4b4w9/fetchchangeswithcompletionhandler_.md) and [sendChangesWithCompletionHandler:](../cksyncengine-4b4w9/sendchangeswithcompletionhandler_.md) methods and their variants.

## See Also

### Sync reasons

- [CKSyncEngineSyncReasonScheduled](scheduled.md): The sync engine automatically scheduled this sync.
