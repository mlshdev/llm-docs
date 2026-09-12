> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/urldocumentconfiguration/fileurl](https://developer.apple.com/documentation/swiftui/urldocumentconfiguration/fileurl)

# fileURL

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A URL of the open document if it is saved to disk.

## Declaration

```swift
@MainActor final var fileURL: URL? { get set }
```

<a id="discussion"></a>

## Discussion

Returns `nil` if the document has never been saved.

## See Also

### Accessing document properties

- [lastContentModificationDate](lastcontentmodificationdate.md): The date on which the contents of the document were last modified, if available.
- [creationSource](creationsource.md): The source associated with the button that created this document.
