> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentfile/data(contenttype:)](https://developer.apple.com/documentation/appintents/intentfile/data(contenttype:))

# data(contentType:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Requests an `IntentFile` representation as binary data of the requested content type if possible.

## Declaration

```swift
func data(contentType: UTType) async throws -> Data
```

## Parameters

- `contentType`: A content type of the returned data.

<a id="discussion"></a>

## Discussion

If the `IntentFile` is backed by a file `URL`, this might cause loading the entire file contents into memory.
