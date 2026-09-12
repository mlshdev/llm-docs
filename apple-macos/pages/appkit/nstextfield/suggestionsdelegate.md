> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/suggestionsdelegate](https://developer.apple.com/documentation/appkit/nstextfield/suggestionsdelegate)

# suggestionsDelegate

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The delegate that provides text suggestions for the receiving text field and responds to the user highlighting and selecting items.

## Declaration

```swift
@MainActor @preconcurrency weak var suggestionsDelegate: (any NSTextSuggestionsDelegate)? { get set }
```

## See Also

### Supporting text completion and suggestions

- [isAutomaticTextCompletionEnabled](isautomatictextcompletionenabled.md): A Boolean value that indicates whether the text field automatically completes text as the user types.
- [NSTextSuggestionsDelegate](../nstextsuggestionsdelegate.md): A protocol for suggestion delegates of text fields to conform to in order to provide text suggestions in response to the user typing.
- [NSSuggestionItem](../nssuggestionitem.md): The items that appear in suggestion menus.
- [NSSuggestionItemResponse](../nssuggestionitemresponse.md): Describes the result of a batch of suggestion items from a search
- [NSSuggestionItemSection](../nssuggestionitemsection.md): Describes a section of suggestions items in a suggestions menu
