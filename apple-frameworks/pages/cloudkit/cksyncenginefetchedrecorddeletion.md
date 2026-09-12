> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginefetchedrecorddeletion](https://developer.apple.com/documentation/cloudkit/cksyncenginefetchedrecorddeletion)

# CKSyncEngineFetchedRecordDeletion

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An object that describes the deletion of an individual record.

## Declaration

```objectivec
@interface CKSyncEngineFetchedRecordDeletion : NSObject
```

## Topics

### Understanding the deletion

- [recordID](cksyncenginefetchedrecorddeletion/recordid.md): The deleted record’s unique identifier.
- [recordType](cksyncenginefetchedrecorddeletion/recordtype.md): The record type of the deleted record.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Accessing changes

- [deletions](cksyncenginefetchedrecordzonechangesevent/deletions.md): The fetched record deletions.
- [modifications](cksyncenginefetchedrecordzonechangesevent/modifications.md): The fetched record modifications.
