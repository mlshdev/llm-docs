> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/isautomatictextcompletionenabled](https://developer.apple.com/documentation/appkit/nstextfield/isautomatictextcompletionenabled)

# isAutomaticTextCompletionEnabled (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A Boolean value that indicates whether the text field automatically completes text as the user types.

## Declaration

```swift
var isAutomaticTextCompletionEnabled: Bool { get set }
```

## See Also

### Supporting text completion and suggestions

- [suggestionsDelegate](suggestionsdelegate.md): The delegate that provides text suggestions for the receiving text field and responds to the user highlighting and selecting items.
- [NSTextSuggestionsDelegate](../nstextsuggestionsdelegate.md): A protocol for suggestion delegates of text fields to conform to in order to provide text suggestions in response to the user typing.
- [NSSuggestionItem](../nssuggestionitem.md): The items that appear in suggestion menus.
- [NSSuggestionItemResponse](../nssuggestionitemresponse.md): Describes the result of a batch of suggestion items from a search
- [NSSuggestionItemSection](../nssuggestionitemsection.md): Describes a section of suggestions items in a suggestions menu

# automaticTextCompletionEnabled (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A Boolean value that indicates whether the text field automatically completes text as the user types.

## Declaration

```objectivec
@property (getter=isAutomaticTextCompletionEnabled) BOOL automaticTextCompletionEnabled;
```
