> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentconfiguration/fileurl](https://developer.apple.com/documentation/swiftui/documentconfiguration/fileurl)

# fileURL

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A URL of an open document.

## Declaration

```swift
var fileURL: URL? { get }
```

<a id="discussion"></a>

## Discussion

If the document has never been saved, returns `nil`.

## See Also

### Getting configuration values

- [isEditable](iseditable.md): A Boolean value that indicates whether you can edit the document.
