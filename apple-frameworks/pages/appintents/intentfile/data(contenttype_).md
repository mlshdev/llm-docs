> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/intentfile/data(contenttype:)

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
