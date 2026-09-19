> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/ckdatabase/databasechange/deletion/reason-swift.enum/purged

# CKDatabase.DatabaseChange.Deletion.Reason.purged

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A deletion from the user via the iCloud storage UI.

## Declaration

```swift
case purged
```

<a id="discussion"></a>

## Discussion

This is an indication that the user wanted all data deleted, including locally-cached data.
