> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/fileentityidentifier/draft(identifier:)](https://developer.apple.com/documentation/appintents/fileentityidentifier/draft(identifier:))

# draft(identifier:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates and returns an identifier for a draft document.

## Declaration

```swift
static func draft(identifier: String) -> FileEntityIdentifier
```

<a id="discussion"></a>

## Discussion

Only use this method to initialize identifiers for documents which aren’t materialized on disk yet and don’t have a file URL.
