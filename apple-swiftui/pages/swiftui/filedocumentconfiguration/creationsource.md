> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/filedocumentconfiguration/creationsource

# creationSource

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ (deprecated in 27.2) · iPadOS 27.0+ (deprecated in 27.2) · Mac Catalyst 27.0+ (deprecated in 27.2) · visionOS 27.0+ (deprecated in 27.2)

The source associated with the button that created this document.

> Use the Document protocol and URLDocumentConfiguration.

## Declaration

```swift
var creationSource: DocumentCreationSource? { get }
```

<a id="discussion"></a>

## Discussion

On iOS, you can specify the source via a [NewDocumentButton](../newdocumentbutton.md) in [DocumentGroupLaunchScene](../documentgrouplaunchscene.md):

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

Use this property to determine which [NewDocumentButton](../newdocumentbutton.md) triggered the creation of the current document, allowing you to customize the UI accordingly.
