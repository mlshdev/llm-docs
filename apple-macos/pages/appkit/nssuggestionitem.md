> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssuggestionitem](https://developer.apple.com/documentation/appkit/nssuggestionitem)

# NSSuggestionItem

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 15.0+

The items that appear in suggestion menus.

## Declaration

```swift
struct NSSuggestionItem<SuggestionItemType>
```

## Topics

### Initializers

- [init(representedValue:attributedTitle:)](nssuggestionitem/init%28representedvalue_attributedtitle_%29.md)
- [init(representedValue:title:)](nssuggestionitem/init%28representedvalue_title_%29.md)

### Instance Properties

- [attributedSecondaryTitle](nssuggestionitem/attributedsecondarytitle.md): An optional second attributed string to display for a suggestion menu item. This value should be localized. This value is an attributed string representation of `secondaryTitle`.
- [attributedTitle](nssuggestionitem/attributedtitle.md): An attributed string to display for a suggestion menu item. This value should be localized. This value is an attributed string representation of `title`.
- [image](nssuggestionitem/image.md): An optional image to display before the title. This value should be localized.
- [representedValue](nssuggestionitem/representedvalue.md): The value represented by the receiver.
- [secondaryTitle](nssuggestionitem/secondarytitle.md): An optional second string to display for a suggestion menu item. This value should be localized. This value is a non-attributed string representation of `attributedSecondaryTitle`.
- [title](nssuggestionitem/title.md): A string to display for a suggestion menu item. This value should be localized. This value is a non-attributed string representation of `attributedTitle`.
- [toolTip](nssuggestionitem/tooltip.md): An optional tool tip to display on hover for a suggestion menu item. This value should be localized.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Supporting text completion and suggestions

- [isAutomaticTextCompletionEnabled](nstextfield/isautomatictextcompletionenabled.md): A Boolean value that indicates whether the text field automatically completes text as the user types.
- [suggestionsDelegate](nstextfield/suggestionsdelegate.md): The delegate that provides text suggestions for the receiving text field and responds to the user highlighting and selecting items.
- [NSTextSuggestionsDelegate](nstextsuggestionsdelegate.md): A protocol for suggestion delegates of text fields to conform to in order to provide text suggestions in response to the user typing.
- [NSSuggestionItemResponse](nssuggestionitemresponse.md): Describes the result of a batch of suggestion items from a search
- [NSSuggestionItemSection](nssuggestionitemsection.md): Describes a section of suggestions items in a suggestions menu
