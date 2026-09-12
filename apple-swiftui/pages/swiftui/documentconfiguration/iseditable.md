> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentconfiguration/iseditable](https://developer.apple.com/documentation/swiftui/documentconfiguration/iseditable)

# isEditable

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether you can edit the document.

## Declaration

```swift
var isEditable: Bool { get }
```

<a id="discussion"></a>

## Discussion

On macOS, the document could be non-editable if the user lacks write permissions, the parent directory or volume is read-only, or the document couldn’t be autosaved.

On iOS, the document is not editable if there was an error reading or saving it, there’s an unresolved conflict, the document is being uploaded or downloaded, or otherwise, it is currently busy and unsafe for user edits.

## See Also

### Getting configuration values

- [fileURL](fileurl.md): A URL of an open document.
