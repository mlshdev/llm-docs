> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/filesintent/openfile](https://developer.apple.com/documentation/appintents/appschema/filesintent/openfile)

# openFile

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

An intent schema that opens a selected file or folder.

## Declaration

```swift
var openFile: some AppSchemaIntent { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s actions available to Apple Intelligence, conform your [AppIntent](../../appintent.md) to a schema that describes your action to the system. If your app’s functionality aligns with the `files` domain and one of your app’s actions matches the `openFile` schema, you can generate the properties and protocol conformance the schema requires for your intent implementation with the `@AppIntent( .files.openFile)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an intent that conforms to the `openFile` schema:

```swift
@AppIntent(schema: .files.openFile)
struct OpenFileIntent: OpenIntent {
    var target: <#FileEntity#>

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

- [createFolder](createfolder.md): An intent schema that creates a new folder.
- [deleteFiles](deletefiles.md): An intent schema that deletes existing files or folders.
- [moveFiles](movefiles.md): An intent schema that moves existing files or folders.
- [renameFile](renamefile.md): An intent schema that renames an existing file or folder.
- [AppSchema.FilesIntent](../filesintent.md): Identifies intent schemas in the files domain.
