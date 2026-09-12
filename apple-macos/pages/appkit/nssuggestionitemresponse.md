> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssuggestionitemresponse](https://developer.apple.com/documentation/appkit/nssuggestionitemresponse)

# NSSuggestionItemResponse

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 15.0+

Describes the result of a batch of suggestion items from a search

## Declaration

```swift
struct NSSuggestionItemResponse<SuggestionItemType>
```

## Topics

### Initializers

- [init()](nssuggestionitemresponse/init%28%29.md)
- [init(itemSections:)](nssuggestionitemresponse/init%28itemsections_%29.md)
- [init(items:)](nssuggestionitemresponse/init%28items_%29.md)

### Instance Properties

- [itemSections](nssuggestionitemresponse/itemsections.md): The items (organized in sections) representing the results of the search request
- [phase](nssuggestionitemresponse/phase-swift.property.md): Describes the phase of results. In other words, whether this batch of items represents an intermediate set of results–and more are coming, or whether these results are complete/final. Defaults to `.final`.
- [preferredHighlight](nssuggestionitemresponse/preferredhighlight.md): The preferred response that the control should take when this batch of results comes in (like whether or not to highlight the first selectable item). Defaults to `.automatic`.

### Type Aliases

- [NSSuggestionItemResponse.Item](nssuggestionitemresponse/item.md): A suggestion item with the same suggestion item type as the response
- [NSSuggestionItemResponse.ItemSection](nssuggestionitemresponse/itemsection.md): A suggestion item section with the same suggestion item type as the response

### Enumerations

- [NSSuggestionItemResponse.Highlight](nssuggestionitemresponse/highlight.md): Describes the possible ways the highlighted item may be impacted by these results
- [NSSuggestionItemResponse.Phase](nssuggestionitemresponse/phase-swift.enum.md): Describes the different possible phases of results

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
- [NSSuggestionItemSection](nssuggestionitemsection.md): Describes a section of suggestions items in a suggestions menu
