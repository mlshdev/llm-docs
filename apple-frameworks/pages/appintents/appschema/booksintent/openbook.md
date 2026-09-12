> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/booksintent/openbook](https://developer.apple.com/documentation/appintents/appschema/booksintent/openbook)

# openBook

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

An intent schema that opens the specified book.

## Declaration

```swift
var openBook: some AppSchemaIntent { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s actions available to Apple Intelligence, conform your [AppIntent](../../appintent.md) to a schema that describes your action to the system. If your app’s functionality aligns with the `books` domain and one of your app’s actions matches the `openBook` schema, you can generate the properties and protocol conformance the schema requires for your intent implementation with the `@AppIntent( .books.openBook)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an intent that conforms to the `openBook` schema:

```swift
@AppIntent(schema: .books.openBook)
struct OpenBookIntent: OpenIntent {
    var target: <#BookEntity#>

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

- [navigatePage](navigatepage.md): An intent schema that navigates to the next or previous page.
- [updateCharacterSpacing](updatecharacterspacing.md): An intent schema that updates the character spacing for a book.
- [updateFontSize](updatefontsize.md): An intent schema that updates the font size for a book.
- [updateLineSpacing](updatelinespacing.md): An intent schema that updates the line spacing for a book.
- [updateSettings](updatesettings.md): An intent schema that updates the settings for a book.
- [updateWordSpacing](updatewordspacing.md): An intent schema that updates the word spacing for a book.
- [AppSchema.BooksIntent](../booksintent.md): Identifies intent schemas in the books domain.
