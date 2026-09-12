> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchsharemetadataoperation/rootrecorddesiredkeys-3xrex](https://developer.apple.com/documentation/cloudkit/ckfetchsharemetadataoperation/rootrecorddesiredkeys-3xrex)

# rootRecordDesiredKeys

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS · watchOS 3.0+ · Swift 4.2+

The fields to return when fetching the root record.

## Declaration

```swift
var rootRecordDesiredKeys: [CKRecord.FieldKey]? { get set }
```

<a id="discussion"></a>

## Discussion

For a shared record hierarchy, and when [shouldFetchRootRecord](shouldfetchrootrecord.md) is [true](https://developer.apple.com/documentation/swift/true), set this property to specify which of the root record’s fields the operation fetches. Use `nil` to fetch the entire record. CloudKit ignores this property for a shared record zone because, unlike a hierarchy, it doesn’t have a nominated root record.

The default value is `nil`.
