> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftdata/modelcontainer/deletealldata()

# deleteAllData()

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ (deprecated in 27.2) · iPadOS 17.0+ (deprecated in 27.2) · Mac Catalyst 17.0+ (deprecated in 27.2) · macOS 14.0+ (deprecated in 27.2) · tvOS 17.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 10.0+ (deprecated in 27.2) · Swift 5.9+

Removes all persisted model data from the app’s persistent storage.

## Declaration

```swift
func deleteAllData()
```

<a id="discussion"></a>

## Discussion

> **Warning**

> After you call this method, the container immediately deletes all data from the app’s persistent storage. This deletion is permanent and cannot be undone.
