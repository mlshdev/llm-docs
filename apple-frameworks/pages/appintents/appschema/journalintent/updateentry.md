> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/journalintent/updateentry](https://developer.apple.com/documentation/appintents/appschema/journalintent/updateentry)

# updateEntry

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

An intent schema that updates journal entry.

## Declaration

```swift
var updateEntry: some AppSchemaIntent { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s actions available to Apple Intelligence, conform your [AppIntent](../../appintent.md) to a schema that describes your action to the system. If your app’s functionality aligns with the `journal` domain and one of your app’s actions matches the `updateEntry` schema, you can generate the properties and protocol conformance the schema requires for your intent implementation with the `@AppIntent( .journal.updateEntry)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an intent that conforms to the `updateEntry` schema:

```swift
@AppIntent(schema: .journal.updateEntry)
struct UpdateJournalEntryIntent {
    var target: <#JournalEntity#>
    var title: String?
    var message: AttributedString?
    var mediaItems: [IntentFile]?
    var entryDate: Date?
    var location: GeoToolbox.PlaceDescriptor?

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

- [createAudioEntry](createaudioentry.md): An intent schema that creates a new audio journal entry.
- [createEntry](createentry.md): An intent schema that creates a new journal entry.
- [deleteEntry](deleteentry.md): An intent schema that deletes the specified journal entries.
- [AppSchema.JournalIntent](../journalintent.md): Identifies intent schemas in the journal domain.
