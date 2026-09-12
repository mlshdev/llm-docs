> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssuggestionitemsection](https://developer.apple.com/documentation/appkit/nssuggestionitemsection)

# NSSuggestionItemSection

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 15.0+

Describes a section of suggestions items in a suggestions menu

## Declaration

```swift
struct NSSuggestionItemSection<SuggestionItemType>
```

## Topics

### Initializers

- [init(items:)](nssuggestionitemsection/init%28items_%29.md)
- [init(title:items:)](nssuggestionitemsection/init%28title_items_%29.md)

### Instance Properties

- [items](nssuggestionitemsection/items.md): The items that appear in this section
- [title](nssuggestionitemsection/title.md): The title of this section of items, or `nil` to have a untitled section of items

### Type Aliases

- [NSSuggestionItemSection.Item](nssuggestionitemsection/item.md): A suggestion item with the same suggestion item type as the section

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Supporting text completion and suggestions

- [isAutomaticTextCompletionEnabled](nstextfield/isautomatictextcompletionenabled.md): A Boolean value that indicates whether the text field automatically completes text as the user types.
- [suggestionsDelegate](nstextfield/suggestionsdelegate.md): The delegate that provides text suggestions for the receiving text field and responds to the user highlighting and selecting items.
- [NSTextSuggestionsDelegate](nstextsuggestionsdelegate.md): A protocol for suggestion delegates of text fields to conform to in order to provide text suggestions in response to the user typing.
- [NSSuggestionItem](nssuggestionitem.md): The items that appear in suggestion menus.
- [NSSuggestionItemResponse](nssuggestionitemresponse.md): Describes the result of a batch of suggestion items from a search
