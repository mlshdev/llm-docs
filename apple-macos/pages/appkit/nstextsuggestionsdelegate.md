> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextsuggestionsdelegate](https://developer.apple.com/documentation/appkit/nstextsuggestionsdelegate)

# NSTextSuggestionsDelegate

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 15.0+

A protocol for suggestion delegates of text fields to conform to in order to provide text suggestions in response to the user typing.

## Declaration

```swift
@MainActor protocol NSTextSuggestionsDelegate<SuggestionItemType> : AnyObject
```

## Topics

### Associated Types

- [SuggestionItemType](nstextsuggestionsdelegate/suggestionitemtype.md): The type of the `representedValue` property of the provided suggestion items (`NSSuggestionItem`).

### Instance Methods

- [appending(\_:)](nstextsuggestionsdelegate/appending%28__%29-1gb8y.md): Conforms when `SuggestionItemType` conforms to `Hashable`. Returns a new text suggestions delegate of the same suggestion item type with the items and behaviors of the receiving delegate and `other` concatenated. When the returned delegate is connected to a text field, all suggestion items provided from the first suggestions delegate appear before all those from the second suggestions delegate, visually separated by a separator.
- [appending(\_:)](nstextsuggestionsdelegate/appending%28__%29-5x8a.md): Conforms when `SuggestionItemType` conforms to `Hashable`. Returns a new text suggestions delegate of a different, but `Hashable` suggestion item type with the items and behaviors of the receiving delegate and `other` concatenated. When the returned delegate is connected to a text field, all suggestion items provided from the first suggestions delegate appear before all those from the second suggestions delegate, visually separated by a separator.
- [textField(\_:didSelect:)](nstextsuggestionsdelegate/textfield%28__didselect_%29.md): Called when an item in the suggestions menu has been selected.
- [textField(\_:provideUpdatedSuggestions:)](nstextsuggestionsdelegate/textfield%28__provideupdatedsuggestions_%29.md): Called when the text field’s text (or tokens) have changed and when the text field is going to display a new list of suggestion items.
- [textField(\_:textCompletionFor:)](nstextsuggestionsdelegate/textfield%28__textcompletionfor_%29.md): Returns the full completion text for a particular item to use when the item is highlighted or selected.

### Type Aliases

- [NSTextSuggestionsDelegate.Item](nstextsuggestionsdelegate/item.md): A suggestion item with the same suggestion item type as the delegate.
- [NSTextSuggestionsDelegate.ItemResponse](nstextsuggestionsdelegate/itemresponse.md): A suggestion item response with the same generic type as the delegate.
- [NSTextSuggestionsDelegate.ItemSection](nstextsuggestionsdelegate/itemsection.md): A suggestion item section with the same suggestion item type as the controller.

## See Also

### Supporting text completion and suggestions

- [isAutomaticTextCompletionEnabled](nstextfield/isautomatictextcompletionenabled.md): A Boolean value that indicates whether the text field automatically completes text as the user types.
- [suggestionsDelegate](nstextfield/suggestionsdelegate.md): The delegate that provides text suggestions for the receiving text field and responds to the user highlighting and selecting items.
- [NSSuggestionItem](nssuggestionitem.md): The items that appear in suggestion menus.
- [NSSuggestionItemResponse](nssuggestionitemresponse.md): Describes the result of a batch of suggestion items from a search
- [NSSuggestionItemSection](nssuggestionitemsection.md): Describes a section of suggestions items in a suggestions menu
