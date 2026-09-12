> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/presentationintent/update](https://developer.apple.com/documentation/appintents/appschema/presentationintent/update)

# update

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

An intent schema that renames an existing presentation.

## Declaration

```swift
var update: some AppSchemaIntent { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s actions available to Apple Intelligence, conform your [AppIntent](../../appintent.md) to a schema that describes your action to the system. If your app’s functionality aligns with the `presentation` domain and one of your app’s actions matches the `update` schema, you can generate the properties and protocol conformance the schema requires for your intent implementation with the `@AppIntent( .presentation.update)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an intent that conforms to the `update` schema:

```swift
@AppIntent(schema: .presentation.update)
struct UpdatePresentationIntent {
    var target: <#PresentationEntity#>
    var name: String?

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

- [addAudioToSlide](addaudiotoslide.md): An intent schema that adds an audio clip to a slide.
- [addCommentToSlide](addcommenttoslide.md): An intent schema that adds a comment to a slide.
- [addImageToSlide](addimagetoslide.md): An intent schema that adds an image to a slide.
- [addTextBoxToSlide](addtextboxtoslide.md): An intent schema that adds a text box to a slide.
- [addWebVideoToSlide](addwebvideotoslide.md): An intent schema that adds a web video to a slide.
- [create](create.md): An intent schema that opens the app for composing a new presentation.
- [createSlide](createslide.md): An intent schema that creates a new slide in a presentation document.
- [deleteSlide](deleteslide.md): An intent schema that deletes slides in a presentation.
- [open](open.md): An intent schema that opens the app into an existing presentation.
- [openSlide](openslide.md): An intent schema that opens a slide.
- [setSlideTitle](setslidetitle.md): An intent schema that sets the title of the slide.
- [startPlayback](startplayback.md): An intent schema that plays the presentation from the start or selected slide.
- [stopPlayback](stopplayback.md): An intent schema that stops the currently playing presentation.
- [AppSchema.PresentationIntent](../presentationintent.md): Identifies intent schemas in the presentation domain.
