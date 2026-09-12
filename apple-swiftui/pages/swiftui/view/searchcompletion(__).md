> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/searchcompletion(_:)](https://developer.apple.com/documentation/swiftui/view/searchcompletion(_:))

# searchCompletion(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Associates a fully formed string with the value of this view when used as a search suggestion.

## Declaration

```swift
nonisolated func searchCompletion(_ completion: String) -> some View

```

## Parameters

- `completion`: A string to use as the view’s completion.

## Mentioned In

- [Suggesting search terms](../suggesting-search-terms.md)

<a id="discussion"></a>

## Discussion

Use this method to associate a fully formed string with a view that is within a search suggestion list context. The system uses this value when the view is selected to replace the partial text being currently edited of the associated search field.

On tvOS, the string that you provide to the this modifier is used when displaying the associated suggestion and when replacing the partial text of the search field.

```swift
SearchPlaceholderView()
    .searchable(text: $text) {
        Text("🍎").searchCompletion("apple")
        Text("🍐").searchCompletion("pear")
        Text("🍌").searchCompletion("banana")
    }
```

## See Also

### Making search suggestions

- [Suggesting search terms](../suggesting-search-terms.md): Provide suggestions to people searching for content in your app.
- [searchSuggestions(\_:)](searchsuggestions%28__%29.md): Configures the search suggestions for this view.
- [searchSuggestions(\_:for:)](searchsuggestions%28__for_%29.md): Configures how to display search suggestions within this view.
- [searchable(text:tokens:suggestedTokens:placement:prompt:token:)](searchable%28text_tokens_suggestedtokens_placement_prompt_token_%29.md): Marks this view as searchable with text, tokens, and suggestions.
- [SearchSuggestionsPlacement](../searchsuggestionsplacement.md): The ways that SwiftUI displays search suggestions.
