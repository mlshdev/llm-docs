> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/referencefiledocument/writablecontenttypes-41rwk](https://developer.apple.com/documentation/swiftui/referencefiledocument/writablecontenttypes-41rwk)

# writableContentTypes

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The file types that the document supports saving or exporting to.

## Declaration

```swift
static var writableContentTypes: [UTType] { get }
```

<a id="discussion"></a>

## Discussion

By default, SwiftUI assumes that your document reads and writes the same set of content types. Only define this property if you need to indicate a different set of types for writing files. Otherwise, the default implementation of this property returns the list that you specify in your implementation of [readableContentTypes](readablecontenttypes.md).
