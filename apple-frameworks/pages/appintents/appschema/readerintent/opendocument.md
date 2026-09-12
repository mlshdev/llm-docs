> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/readerintent/opendocument](https://developer.apple.com/documentation/appintents/appschema/readerintent/opendocument)

# openDocument

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

An intent schema that opens the specified files in the reader.

## Declaration

```swift
var openDocument: some AppSchemaIntent { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s actions available to Apple Intelligence, conform your [AppIntent](../../appintent.md) to a schema that describes your action to the system. If your app’s functionality aligns with the `reader` domain and one of your app’s actions matches the `openDocument` schema, you can generate the properties and protocol conformance the schema requires for your intent implementation with the `@AppIntent( .reader.openDocument)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an intent that conforms to the `openDocument` schema:

```swift
@AppIntent(schema: .reader.openDocument)
struct ReaderOpenDocumentsIntent {
    var files: [IntentFile]

    func perform() async throws -> some IntentResult {
        <#code#>
    }
}
```

The schema supports the following system experiences:

- Shortcuts

For more information about the App Intents framework and the experiences it supports, see [Getting started with the App Intents framework](../../getting-started-with-the-app-intents-framework.md).

## See Also

### Actions

- [deletePages](deletepages.md): An intent schema that deletes the specified pages.
- [enhanceDocuments](enhancedocuments.md): An intent schema that enhances the documents.
- [insertPages](insertpages.md): An intent schema that inserts pages from the specified files.
- [openPage](openpage.md): An intent schema that opens the app to the specified document page.
- [resizeDocuments](resizedocuments.md): An intent schema that resizes the documents to a particular width and height.
- [rotateDocuments](rotatedocuments.md): An intent schema that rotates the documents in the specified direction.
- [rotatePages](rotatepages.md): An intent schema that rotates the pages in the specified direction.
- [searchDocuments](searchdocuments.md): An intent schema that searches for text in the documents.
- [AppSchema.ReaderIntent](../readerintent.md): Identifies intent schemas in the reader domain.
