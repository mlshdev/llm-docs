> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/resourcesarchiver/appenditem(at:pathinarchive:)](https://developer.apple.com/documentation/appmigrationkit/resourcesarchiver/appenditem(at:pathinarchive:))

# appendItem(at:pathInArchive:)

**Framework:** AppMigrationKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Sends a file to the archiver for export.

## Declaration

```swift
final func appendItem(at url: URL, pathInArchive: String? = nil) async throws
```

## Parameters

- `url`: The URL of a file to export. If this value doesn’t contain a path, the archiver infers a path based on the last path component of the URL.
- `pathInArchive`: A path relative to the root URL to use when the receiving device imports this resource. The migration system uses this value as-is and performs no normalizations.
