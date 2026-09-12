> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/searchable(text:tokens:suggestedtokens:ispresented:placement:prompt:token:)](https://developer.apple.com/documentation/swiftui/view/searchable(text:tokens:suggestedtokens:ispresented:placement:prompt:token:))

# searchable(text:tokens:suggestedTokens:isPresented:placement:prompt:token:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Marks this view as searchable with text, tokens, and suggestions, as well as programmatic presentation.

## Declaration

```swift
@export(implementation) nonisolated func searchable<C, T>(text: Binding<String>, tokens: Binding<C>, suggestedTokens: Binding<C>, isPresented: Binding<Bool>, placement: SearchFieldPlacement = .automatic, prompt: LocalizedStringResource, @ContentBuilder token: @escaping (C.Element) -> T) -> some View where C : RandomAccessCollection, C : RangeReplaceableCollection, T : View, C.Element : Identifiable

```

## Parameters

- `text`: The text to display and edit in the search field.
- `tokens`: A collection of tokens to display and edit in the search field.
- `suggestedTokens`: A collection of tokens to display as suggestions.
- `isPresented`: A [Binding](../binding.md) that controls the presented state of search.
- `placement`: The preferred placement of the search field within the containing view hierarchy.
- `prompt`: Text resource for the localized prompt of the search field which provides users with guidance on what to search for.
- `token`: A content builder that creates a view given an element in tokens.

<a id="discussion"></a>

## Discussion

For more information about using searchable modifiers, see [Adding a search interface to your app](../adding-a-search-interface-to-your-app.md). For information about presenting a search field programmatically, see [Managing search interface activation](../managing-search-interface-activation.md).

## See Also

### Detecting, activating, and dismissing search

- [Managing search interface activation](../managing-search-interface-activation.md): Programmatically detect and dismiss a search field.
- [isSearching](../environmentvalues/issearching.md): A Boolean value that indicates when the user is searching.
- [dismissSearch](../environmentvalues/dismisssearch.md): An action that ends the current search interaction.
- [DismissSearchAction](../dismisssearchaction.md): An action that can end a search interaction.
- [searchable(text:isPresented:placement:prompt:)](searchable%28text_ispresented_placement_prompt_%29.md): Marks this view as searchable with programmatic presentation of the search field.
- [searchable(text:tokens:isPresented:placement:prompt:token:)](searchable%28text_tokens_ispresented_placement_prompt_token_%29.md): Marks this view as searchable with text and tokens, as well as programmatic presentation.
- [searchable(text:editableTokens:isPresented:placement:prompt:token:)](searchable%28text_editabletokens_ispresented_placement_prompt_token_%29.md): Marks this view as searchable, which configures the display of a search field.
