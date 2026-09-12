> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginerecordzonechangebatch](https://developer.apple.com/documentation/cloudkit/cksyncenginerecordzonechangebatch)

# CKSyncEngineRecordZoneChangeBatch

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An object that contains the record changes for a single send operation.

## Declaration

```objectivec
@interface CKSyncEngineRecordZoneChangeBatch : NSObject
```

## Topics

### Creating a batch

- [initWithPendingChanges:recordProvider:](cksyncenginerecordzonechangebatch/initwithpendingchanges_recordprovider_.md): Creates a batch of records to modify using the provided record zone changes.
- [CKSyncEnginePendingRecordZoneChange](cksyncenginependingrecordzonechange.md): An object that describes an unsent record modification.
- [initWithRecordsToSave:recordIDsToDelete:atomicByZone:](cksyncenginerecordzonechangebatch/initwithrecordstosave_recordidstodelete_atomicbyzone_.md): Creates a batch of records to modify.

### Managing atomicity

- [atomicByZone](cksyncenginerecordzonechangebatch/atomicbyzone.md): A Boolean value that determines whether CloudKit modifies records atomically by record zone.

### Managing the records

- [recordIDsToDelete](cksyncenginerecordzonechangebatch/recordidstodelete.md): The unique identifiers of the records to delete.
- [recordsToSave](cksyncenginerecordzonechangebatch/recordstosave.md): The records to save.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Sending changes

- [syncEngine:nextRecordZoneChangeBatchForContext:](cksyncenginedelegate-3c38p/syncengine_nextrecordzonechangebatchforcontext_.md): Asks the delegate to provide the next set of record changes to send to the server.
- [CKSyncEngineSendChangesContext](cksyncenginesendchangescontext.md): The context of an attempt to send changes to the server.
