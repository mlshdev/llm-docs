> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/urldocumentconfiguration](https://developer.apple.com/documentation/swiftui/urldocumentconfiguration)

# URLDocumentConfiguration

**Framework:** SwiftUI  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The configuration of an open document that stores its file URL, last modification date, and related metadata.

## Declaration

```swift
@MainActor final class URLDocumentConfiguration
```

<a id="overview"></a>

## Overview

SwiftUI passes a `URLDocumentConfiguration` to the `makeDocument` closure of [DocumentGroup](documentgroup.md). This class is `@Observable` — views and other observers can track changes to [fileURL](urldocumentconfiguration/fileurl.md) and other properties.

Use [makeFileCoordinator()](urldocumentconfiguration/makefilecoordinator%28%29.md) to perform coordinated reads or writes outside the normal [DocumentReader](documentreader.md)/[DocumentWriter](documentwriter.md) flow — for example, to read a single sub-file of a package document on demand:

```swift
let coordinator = configuration.makeFileCoordinator()
var error: NSError?
coordinator.coordinate(
    readingItemAt: pageURL, options: [], error: &error
) { url in
    let data = try? Data(contentsOf: url)
    // ...
}
```

> **Important**

> Inside [read(from:progress:)](documentreader/read%28from_progress_%29.md) and `DocumentWriter/write(content:to:previous:progress:)`, use the `source` / `destination` URL parameter — not [fileURL](urldocumentconfiguration/fileurl.md). The configuration’s URL reflects current state and may differ from the operation’s URL after a Save As or rename.

## Topics

### Accessing document properties

- [fileURL](urldocumentconfiguration/fileurl.md): A URL of the open document if it is saved to disk.
- [lastContentModificationDate](urldocumentconfiguration/lastcontentmodificationdate.md): The date on which the contents of the document were last modified, if available.
- [creationSource](urldocumentconfiguration/creationsource.md): The source associated with the button that created this document.

### Coordinating file access

- [makeFileCoordinator()](urldocumentconfiguration/makefilecoordinator%28%29.md): Creates a file coordinator for coordinated disk access outside the normal read/write flow.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Storing document data in a reference type instance

- [Document](document.md): A document that supports both reading and writing.
- [ReadableDocument](readabledocument.md): A document type that supports reading from file.
- [WritableDocument](writabledocument.md): A document type that supports writing to file.
- [DocumentCreationContext](documentcreationcontext.md): Context about how a document was created.
- [DocumentBaseBox](documentbasebox.md): A Box that allows setting its Document base not requiring the caller to know the exact types of the box and its base.
