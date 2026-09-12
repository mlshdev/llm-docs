> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelcontainer/deletealldata()](https://developer.apple.com/documentation/swiftdata/modelcontainer/deletealldata())

# deleteAllData()

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ (deprecated in 27.0) · iPadOS 17.0+ (deprecated in 27.0) · Mac Catalyst 17.0+ (deprecated in 27.0) · macOS 14.0+ (deprecated in 27.0) · tvOS 17.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 10.0+ (deprecated in 27.0) · Swift 5.9+

Removes all persisted model data from the app’s persistent storage.

## Declaration

```swift
func deleteAllData()
```

<a id="discussion"></a>

## Discussion

> **Warning**

> After you call this method, the container immediately deletes all data from the app’s persistent storage. This deletion is permanent and cannot be undone.
