> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/booksenum/contenttype](https://developer.apple.com/documentation/appintents/appschema/booksenum/contenttype)

# contentType

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

An enum schema for a content type parameter.

## Declaration

```swift
var contentType: some AppSchemaEnum { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s parameter types available to Apple Intelligence, conform your [AppEnum](../../appenum.md) to a schema that describes a parameter’s possible values to the system. If your app’s functionality aligns with the `books` domain and a parameter type matches the `contentType` schema, you can generate the protocol conformance the schema requires for your app enum implementation with the `@AppEnum( .books.contentType)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an app enum that conforms to the `contentType` schema:

```swift
@AppEnum(schema: .books.contentType)
enum BookContentType: String {
    case <#BookContentType Case#>

    static let caseDisplayRepresentations: [Self: DisplayRepresentation] = [
        <#DisplayRepresentations#>
    ]
}
```

The schema supports the following system experiences:

- Shortcuts

For more information about the App Intents framework and the experiences it supports, see [Getting started with the App Intents framework](../../getting-started-with-the-app-intents-framework.md).

## See Also

### Types for static parameters

- [font](font.md): An enum schema for a font parameter.
- [fontSize](fontsize.md): An enum schema for a font size parameter.
- [navigationDirection](navigationdirection.md): An enum schema for a navigation direction parameter.
- [pageNavigationSetting](pagenavigationsetting.md): An enum schema for a page navigation setting parameter.
- [relativeCharacterSpacingChange](relativecharacterspacingchange.md): An enum schema for a relative character spacing change parameter.
- [relativeFontChange](relativefontchange.md): An enum schema for a relative font change parameter.
- [relativeLineSpacingChange](relativelinespacingchange.md): An enum schema for a relative line spacing change parameter.
- [relativeWordSpacingChange](relativewordspacingchange.md): An enum schema for a relative word spacing change parameter.
- [theme](theme.md): An enum schema for a theme parameter.
- [AppSchema.BooksEnum](../booksenum.md): Identifies enum schemas in the books domain.
