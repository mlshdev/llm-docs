> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentfile/file(contenttype:destinationdirectory:)](https://developer.apple.com/documentation/appintents/intentfile/file(contenttype:destinationdirectory:))

# file(contentType:destinationDirectory:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Requests an `IntentFile` representation as a file url.

## Declaration

```swift
func file(contentType: UTType, destinationDirectory: URL? = nil) async throws -> (fileURL: URL, openedInPlace: Bool)
```

## Parameters

- `contentType`: A content type of the returned data.
- `destinationDirectory`: The directory the file should be copied to, if no directory is provided the file is opened in place.

<a id="discussion"></a>

## Discussion

If a destination directory is not given the file is opened in place, falling back to a temporary directory if this fails. If the file is not opened in place and a destination directory is used it is the caller’s responsibility to remove the file.
