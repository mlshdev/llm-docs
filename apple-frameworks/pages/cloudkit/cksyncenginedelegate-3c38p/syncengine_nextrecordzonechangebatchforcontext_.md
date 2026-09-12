> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginedelegate-3c38p/syncengine:nextrecordzonechangebatchforcontext:](https://developer.apple.com/documentation/cloudkit/cksyncenginedelegate-3c38p/syncengine:nextrecordzonechangebatchforcontext:)

# syncEngine:nextRecordZoneChangeBatchForContext:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Asks the delegate to provide the next set of record changes to send to the server.

## Declaration

```objectivec
- (CKSyncEngineRecordZoneChangeBatch *) syncEngine:(CKSyncEngine *) syncEngine nextRecordZoneChangeBatchForContext:(CKSyncEngineSendChangesContext *) context;
```

## Parameters

- `syncEngine`: The sync engine requesting changes.
- `context`: The reason for the sync engine’s request, and any additional options that request is using.

<a id="return-value"></a>

## Return Value

If there are pending record changes, a batch of those changes for the sync engine to process; otherwise, `nil` to indicate there are no changes to send.

<a id="discussion"></a>

## Discussion

In your implementation, ask the sync engine’s state for any pending record zone changes and then return a change batch containing an instance of [CKRecord](../ckrecord.md) for each record identifier the state provides. For both scheduled and manual send operations, the sync engine calls this method repeatedly until your app has no more changes and returns `nil`.

## See Also

### Sending changes

- [CKSyncEngineSendChangesContext](../cksyncenginesendchangescontext.md): The context of an attempt to send changes to the server.
- [CKSyncEngineRecordZoneChangeBatch](../cksyncenginerecordzonechangebatch.md): An object that contains the record changes for a single send operation.
