> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/searchable(text:tokens:suggestedtokens:placement:prompt:token:)](https://developer.apple.com/documentation/swiftui/view/searchable(text:tokens:suggestedtokens:placement:prompt:token:))

# searchable(text:tokens:suggestedTokens:placement:prompt:token:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Marks this view as searchable with text, tokens, and suggestions.

## Declaration

```swift
@export(implementation) nonisolated func searchable<C, T>(text: Binding<String>, tokens: Binding<C>, suggestedTokens: Binding<C>, placement: SearchFieldPlacement = .automatic, prompt: LocalizedStringResource, @ContentBuilder token: @escaping (C.Element) -> T) -> some View where C : MutableCollection, C : RandomAccessCollection, C : RangeReplaceableCollection, T : View, C.Element : Identifiable

```

## Parameters

- `text`: The text to display and edit in the search field.
- `tokens`: A collection of tokens to display and edit in the search field.
- `suggestedTokens`: A collection of tokens to display as suggestions.
- `placement`: The preferred placement of the search field within the containing view hierarchy.
- `prompt`: Text resource for the localized prompt of the search field which provides users with guidance on what to search for.
- `token`: A content builder that creates a view given an element in tokens.

## Mentioned In

- [Performing a search operation](../performing-a-search-operation.md)
- [Suggesting search terms](../suggesting-search-terms.md)

<a id="discussion"></a>

## Discussion

For more information about using searchable modifiers, see [Adding a search interface to your app](../adding-a-search-interface-to-your-app.md).

## See Also

### Making search suggestions

- [Suggesting search terms](../suggesting-search-terms.md): Provide suggestions to people searching for content in your app.
- [searchSuggestions(\_:)](searchsuggestions%28__%29.md): Configures the search suggestions for this view.
- [searchSuggestions(\_:for:)](searchsuggestions%28__for_%29.md): Configures how to display search suggestions within this view.
- [searchCompletion(\_:)](searchcompletion%28__%29.md): Associates a fully formed string with the value of this view when used as a search suggestion.
- [SearchSuggestionsPlacement](../searchsuggestionsplacement.md): The ways that SwiftUI displays search suggestions.
