> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifyrecordzonesoperation/perrecordzonesaveblock-3txst](https://developer.apple.com/documentation/cloudkit/ckmodifyrecordzonesoperation/perrecordzonesaveblock-3txst)

# perRecordZoneSaveBlock

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The closure to execute when CloudKit saves a record zone.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^)(CKRecordZoneID *, CKRecordZone *, NSError *) perRecordZoneSaveBlock;
```

<a id="discussion"></a>

## Discussion

This property is a closure that returns no value and has the following parameters:

- The ID of the record zone that CloudKit saves.
- The record zone that CloudKit saves, or `nil` if CloudKit can’t save the record zone.
- If CloudKit can’t save the record zone, an error that provides information about the failure; otherwise, `nil`.

The closure executes once for each record zone in the [recordZonesToSave](recordzonestosave.md) property. Each time the closure executes, it executes serially with respect to the other record zone completion blocks of the operation.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.
