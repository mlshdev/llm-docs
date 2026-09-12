> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentcreationsource/init(id:)](https://developer.apple.com/documentation/swiftui/documentcreationsource/init(id:))

# init(id:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Creates a document creation source with the given identifier.

## Declaration

```swift
init(id: String)
```

## Parameters

- `id`: A string that uniquely identifies the creation flow within your app.

<a id="discussion"></a>

## Discussion

Use different sources to distinguish between document creation flows in your app.

```swift
extension DocumentCreationSource {
    static let scanner: Self =
        DocumentCreationSource(id: "document-from-scanner")

    static let template: Self =
        DocumentCreationSource(id: "document-from-template")
}

DocumentGroupLaunchScene("Documents") {
    NewDocumentButton("Scan Document", source: .scanner)
    NewDocumentButton("New from Template", source: .template)
}
```

When a document is created, you can retrieve its source from [URLDocumentConfiguration](../urldocumentconfiguration.md) or [FileDocumentConfiguration](../filedocumentconfiguration.md).
