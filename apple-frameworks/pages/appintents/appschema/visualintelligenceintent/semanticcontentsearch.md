> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/visualintelligenceintent/semanticcontentsearch](https://developer.apple.com/documentation/appintents/appschema/visualintelligenceintent/semanticcontentsearch)

# semanticContentSearch

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 27.0+

An intent schema that shows more and richer visual search results in the app.

## Declaration

```swift
var semanticContentSearch: some AppSchemaIntent { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s actions available to Apple Intelligence, conform your [AppIntent](../../appintent.md) to a schema that describes your action to the system. If your app’s functionality aligns with the `visualIntelligence` domain and one of your app’s actions matches the `semanticContentSearch` schema, you can generate the properties and protocol conformance the schema requires for your intent implementation with the `@AppIntent( .visualIntelligence.semanticContentSearch)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an intent that conforms to the `semanticContentSearch` schema:

```swift
@AppIntent(schema: .visualIntelligence.semanticContentSearch)
struct ShowVisualSearchResultsInAppIntent {
    var semanticContent: VisualIntelligence.SceneDescriptor

    func perform() async throws -> some IntentResult {
        <#code#>
    }
}
```

The schema supports the following system experiences:

- Shortcuts
- Visual Intelligence

For more information about the App Intents framework and the experiences it supports, see [Getting started with the App Intents framework](../../getting-started-with-the-app-intents-framework.md).

## See Also

### Actions

- [AppSchema.VisualIntelligenceIntent](../visualintelligenceintent.md): Identifies intent schemas in the visual intelligence domain.
