> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/sharemetadata(for:)](https://developer.apple.com/documentation/cloudkit/ckcontainer/sharemetadata(for:))

# shareMetadata(for:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Fetches the share metadata for the specified share URL.

## Declaration

```swift
func shareMetadata(for url: URL) async throws -> CKShare.Metadata
```

## Parameters

- `url`: The share URL that CloudKit uses to locate the metadata.

<a id="return-value"></a>

## Return Value

The share metadata for the share URL.
