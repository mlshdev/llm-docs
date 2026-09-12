> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/photosintent/search](https://developer.apple.com/documentation/appintents/appschema/photosintent/search)

# search

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ (deprecated in 27.0) · iPadOS 18.0+ (deprecated in 27.0) · Mac Catalyst 18.0+ (deprecated in 27.0) · macOS 15.0+ (deprecated in 27.0) · visionOS 2.0+ (deprecated in 27.0)

An intent schema that navigates to search results.

> Use .system.searchInApp instead

## Declaration

```swift
var search: some AppSchemaIntent { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s actions available to Apple Intelligence, conform your [AppIntent](../../appintent.md) to a schema that describes your action to the system. If your app’s functionality aligns with the `photos` domain and one of your app’s actions matches the `search` schema, you can generate the properties and protocol conformance the schema requires for your intent implementation with the `@AppIntent( .photos.search)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an intent that conforms to the `search` schema:

```swift
@AppIntent(schema: .photos.search)
struct SearchMediaIntent: ShowInAppSearchResultsIntent {
    static var searchScopes: [StringSearchScope] = [.general]

    var criteria: StringSearchCriteria

    func perform() async throws -> some IntentResult {
        <#code#>
    }
}
```

The schema supports the following system experiences:

- Siri
- Shortcuts

For more information about the App Intents framework and the experiences it supports, see [Getting started with the App Intents framework](../../getting-started-with-the-app-intents-framework.md).
