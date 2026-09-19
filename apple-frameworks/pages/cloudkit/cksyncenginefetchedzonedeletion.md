> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/cksyncenginefetchedzonedeletion

# CKSyncEngineFetchedZoneDeletion

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An object that describes the deletion of a record zone.

## Declaration

```objectivec
@interface CKSyncEngineFetchedZoneDeletion : NSObject
```

## Topics

### Understanding the deletion

- [zoneID](cksyncenginefetchedzonedeletion/zoneid.md): The identifier of the deleted record zone.
- [reason](cksyncenginefetchedzonedeletion/reason.md): The reason for the deletion.
- [CKSyncEngineZoneDeletionReason](cksyncenginezonedeletionreason.md): Describes the reason for a record zone deletion.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Accessing changes

- [deletions](cksyncenginefetcheddatabasechangesevent/deletions.md): The fetched record zone deletions.
- [modifications](cksyncenginefetcheddatabasechangesevent/modifications.md): The fetched record zone modifications.
