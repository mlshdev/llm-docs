> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/searchsuggestions(_:)](https://developer.apple.com/documentation/swiftui/view/searchsuggestions(_:))

# searchSuggestions(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Configures the search suggestions for this view.

## Declaration

```swift
nonisolated func searchSuggestions<S>(@ContentBuilder _ suggestions: () -> S) -> some View where S : View

```

## Parameters

- `suggestions`: A content builder that produces content that populates a list of suggestions.

## Mentioned In

- [Scoping a search operation](../scoping-a-search-operation.md)
- [Suggesting search terms](../suggesting-search-terms.md)

<a id="discussion"></a>

## Discussion

You can suggest search terms during a search operation by providing a collection of view to this modifier. The interface presents the suggestion views as a list of choices when someone activates the search interface. Associate a string with each suggestion view by adding the [searchCompletion(\_:)](searchcompletion%28__%29.md) modifier to the view. For example, you can suggest fruit types by displaying their emoji, and provide the corresponding search string as a search completion in each case:

```swift
ProductList()
    .searchable(text: $text)
    .searchSuggestions {
        Text("🍎").searchCompletion("apple")
        Text("🍐").searchCompletion("pear")
        Text("🍌").searchCompletion("banana")
    }
```

When someone chooses a suggestion, SwiftUI replaces the text in the search field with the search completion string. If you omit the search completion modifier for a particular suggestion view, SwiftUI displays the suggestion, but the suggestion view doesn’t react to taps or clicks.

> **Important**

> In tvOS, searchable modifiers only support suggestion views of type [Text](../text.md), like in the above example. Other platforms can use any view for the suggestions, including custom views.

You can update the suggestions that you provide as conditions change.

For example, you can specify an array of suggestions that you store in a model:

```swift
ProductList()
    .searchable(text: $text)
    .searchSuggestions {
        ForEach(model.suggestedSearches) { suggestion in
            Label(suggestion.title, image: suggestion.image)
                .searchCompletion(suggestion.text)
        }
    }
```

If the model’s `suggestedSearches` begins as an empty array, the interface doesn’t display any suggestions to start. You can then provide logic that updates the array based on some condition. For example, you might update the completions based on the current search text. Note that certain events or actions, like when someone moves a macOS window, might dismiss the suggestion view.

For more information about using search modifiers, see [Adding a search interface to your app](../adding-a-search-interface-to-your-app.md).

## See Also

### Making search suggestions

- [Suggesting search terms](../suggesting-search-terms.md): Provide suggestions to people searching for content in your app.
- [searchSuggestions(\_:for:)](searchsuggestions%28__for_%29.md): Configures how to display search suggestions within this view.
- [searchCompletion(\_:)](searchcompletion%28__%29.md): Associates a fully formed string with the value of this view when used as a search suggestion.
- [searchable(text:tokens:suggestedTokens:placement:prompt:token:)](searchable%28text_tokens_suggestedtokens_placement_prompt_token_%29.md): Marks this view as searchable with text, tokens, and suggestions.
- [SearchSuggestionsPlacement](../searchsuggestionsplacement.md): The ways that SwiftUI displays search suggestions.
