> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/databasechange/deletion/purged](https://developer.apple.com/documentation/cloudkit/ckdatabase/databasechange/deletion/purged)

# purged

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 12.0+ (deprecated in 14.0) · tvOS 15.0+ (deprecated in 17.0) · visionOS · watchOS 8.0+ (deprecated in 10.0)

A Boolean value that indicates whether the user deleted the record zone when managing their iCloud storage.

> now surfaced as Reason.purged

## Declaration

```swift
var purged: Bool { get }
```

## See Also

### Identifying the Deleted Record Zone

- [zoneID](zoneid.md): The identifier of the deleted record zone.
