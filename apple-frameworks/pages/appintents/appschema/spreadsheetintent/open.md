> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/spreadsheetintent/open](https://developer.apple.com/documentation/appintents/appschema/spreadsheetintent/open)

# open

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

An intent schema that opens the app into an existing spreadsheet.

## Declaration

```swift
var open: some AppSchemaIntent { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s actions available to Apple Intelligence, conform your [AppIntent](../../appintent.md) to a schema that describes your action to the system. If your app’s functionality aligns with the `spreadsheet` domain and one of your app’s actions matches the `open` schema, you can generate the properties and protocol conformance the schema requires for your intent implementation with the `@AppIntent( .spreadsheet.open)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an intent that conforms to the `open` schema:

```swift
@AppIntent(schema: .spreadsheet.open)
struct OpenSpreadsheetIntent: OpenIntent {
    var target: <#SpreadsheetEntity#>

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

- [addAudioToSheet](addaudiotosheet.md): An intent schema that adds an audio clip to a sheet.
- [addCommentToSheet](addcommenttosheet.md): An intent schema that adds a comment to a sheet.
- [addImageToSheet](addimagetosheet.md): An intent schema that adds an image to a sheet.
- [addTextBoxToSheet](addtextboxtosheet.md): An intent schema that adds text to a sheet.
- [addVideoToSheet](addvideotosheet.md): An intent schema that adds a video to a sheet.
- [addWebVideoToSheet](addwebvideotosheet.md): An intent schema that adds a web video to a sheet.
- [create](create.md): An intent schema that opens the app for composing a new spreadsheet.
- [createSheet](createsheet.md): An intent schema that creates a new sheet in a spreadsheet.
- [delete](delete.md): An intent schema that deletes existing spreadsheets.
- [deleteSheet](deletesheet.md): An intent schema that deletes sheets in a spreadsheet.
- [openSheet](opensheet.md): An intent schema that opens a sheet.
- [update](update.md): An intent schema that renames an existing spreadsheet.
- [updateSheet](updatesheet.md): An intent schema that updates an existing sheet.
- [AppSchema.SpreadsheetIntent](../spreadsheetintent.md): Identifies intent schemas in the spreadsheet domain.
