> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/view/searchable(text:placement:prompt:suggestions:)

# searchable(text:placement:prompt:suggestions:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 27.2) · iPadOS 15.0+ (deprecated in 27.2) · Mac Catalyst 15.0+ (deprecated in 27.2) · macOS 12.0+ (deprecated in 27.2) · tvOS 15.0+ (deprecated in 27.2) · visionOS 1.0+ · watchOS 8.0+ (deprecated in 27.2)

Marks this view as searchable, which configures the display of a search field.

> Use the searchable modifier with the searchSuggestions modifier

## Declaration

```swift
nonisolated func searchable<S>(text: Binding<String>, placement: SearchFieldPlacement = .automatic, prompt: LocalizedStringKey, @ContentBuilder suggestions: () -> S) -> some View where S : View

```

## Parameters

- `text`: The text to display and edit in the search field.
- `placement`: Where the search field should attempt to be placed based on the containing view hierarchy.
- `prompt`: A key for the localized prompt of the search field which provides users with guidance on what to search for.
- `suggestions`: A content builder that produces content that populates a list of suggestions.

<a id="discussion"></a>

## Discussion

For more information about using searchable modifiers, see [Adding a search interface to your app](../adding-a-search-interface-to-your-app.md).
