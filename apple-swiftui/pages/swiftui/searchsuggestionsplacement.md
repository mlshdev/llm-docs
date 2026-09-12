> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/searchsuggestionsplacement](https://developer.apple.com/documentation/swiftui/searchsuggestionsplacement)

# SearchSuggestionsPlacement

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The ways that SwiftUI displays search suggestions.

## Declaration

```swift
struct SearchSuggestionsPlacement
```

<a id="overview"></a>

## Overview

You can influence which modes SwiftUI displays search suggestions for by using the [searchSuggestions(\_:for:)](view/searchsuggestions%28__for_%29.md) modifier:

```swift
enum FruitSuggestion: String, Identifiable {
    case apple, banana, orange
    var id: Self { self }
}

@State private var text = ""
@State private var suggestions: [FruitSuggestion] = []

var body: some View {
    MainContent()
        .searchable(text: $text) {
            ForEach(suggestions) { suggestion in
                Text(suggestion.rawValue)
                    .searchCompletion(suggestion.rawValue)
            }
            .searchSuggestions(.hidden, for: .content)
        }
}
```

In the above example, SwiftUI only displays search suggestions in a suggestions menu. You might want to do this when you want to render search suggestions in a container, like inline with your own set of search results.

You can get the current search suggestion placement by querying the [searchSuggestionsPlacement](environmentvalues/searchsuggestionsplacement.md) environment value in your search suggestions.

## Topics

### Getting placements

- [automatic](searchsuggestionsplacement/automatic.md): Search suggestions render automatically based on the surrounding context.
- [content](searchsuggestionsplacement/content.md): Search suggestions render in the main content of the app.
- [menu](searchsuggestionsplacement/menu.md): Search suggestions render inside of a menu attached to the search field.

### Supporting types

- [SearchSuggestionsPlacement.Set](searchsuggestionsplacement/set.md): An efficient set of search suggestion display modes.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Making search suggestions

- [Suggesting search terms](suggesting-search-terms.md): Provide suggestions to people searching for content in your app.
- [searchSuggestions(\_:)](view/searchsuggestions%28__%29.md): Configures the search suggestions for this view.
- [searchSuggestions(\_:for:)](view/searchsuggestions%28__for_%29.md): Configures how to display search suggestions within this view.
- [searchCompletion(\_:)](view/searchcompletion%28__%29.md): Associates a fully formed string with the value of this view when used as a search suggestion.
- [searchable(text:tokens:suggestedTokens:placement:prompt:token:)](view/searchable%28text_tokens_suggestedtokens_placement_prompt_token_%29.md): Marks this view as searchable with text, tokens, and suggestions.
