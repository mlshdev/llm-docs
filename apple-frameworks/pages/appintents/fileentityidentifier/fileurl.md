> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/fileentityidentifier/fileurl](https://developer.apple.com/documentation/appintents/fileentityidentifier/fileurl)

# fileURL

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A URL that locates a file saved to disk.

## Declaration

```swift
var fileURL: URL? { get async throws }
```

<a id="discussion"></a>

## Discussion

If the file is saved outside of your app’s container, make sure to surround access to file contents with `startAccessingSecurityScopedResource()` and `stopAccessingSecurityScopedResource()`.
