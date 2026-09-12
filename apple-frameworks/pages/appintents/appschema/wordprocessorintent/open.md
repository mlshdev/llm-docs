> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/wordprocessorintent/open](https://developer.apple.com/documentation/appintents/appschema/wordprocessorintent/open)

# open

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

An intent schema that opens the app to an editor.

## Declaration

```swift
var open: some AppSchemaIntent { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s actions available to Apple Intelligence, conform your [AppIntent](../../appintent.md) to a schema that describes your action to the system. If your app’s functionality aligns with the `wordProcessor` domain and one of your app’s actions matches the `open` schema, you can generate the properties and protocol conformance the schema requires for your intent implementation with the `@AppIntent( .wordProcessor.open)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an intent that conforms to the `open` schema:

```swift
@AppIntent(schema: .wordProcessor.open)
struct OpenWordProcessorDocumentIntent: OpenIntent {
    var target: <#WordProcessorDocumentEntity#>

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

- [addAudioToPage](addaudiotopage.md): An intent schema that adds an audio clip to a page.
- [addImageToPage](addimagetopage.md): An intent schema that adds an image to a page.
- [addTextBoxToPage](addtextboxtopage.md): An intent schema that adds a textbox to a page.
- [addVideoToPage](addvideotopage.md): An intent schema that adds a video to a page.
- [addWebVideoToPage](addwebvideotopage.md): An intent schema that adds a web video to a page.
- [create](create.md): An intent schema that opens the app for composing a new text document.
- [createPage](createpage.md): An intent schema that creates a new page in an editor document.
- [openPage](openpage.md): An intent schema that opens an editor document page.
- [AppSchema.WordProcessorIntent](../wordprocessorintent.md): Identifies intent schemas in the word processor domain.
