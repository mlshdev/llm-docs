> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssuggestion/localizedattributedsuggestion-3ssly](https://developer.apple.com/documentation/corespotlight/cssuggestion/localizedattributedsuggestion-3ssly)

# localizedAttributedSuggestion

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An attributed string for the localized suggestion.

## Declaration

```swift
var localizedAttributedSuggestion: AttributedString { get }
```

<a id="Discussion"></a>

## Discussion

The `localizedAttributedString` provides the suggestion text that the system uses to replace the text in the search bar. The system uses the attributed string to highlight the range of the suggestion string that matches the user query string.

For example, the user types “search”, and the system offers a suggestion for “search suggestion”, where the system marks up “search” using the [CSSuggestionHighlightAttributeName](../cssuggestionhighlightattributename.md). Your app can use the range to add a bold highlight, if desired.

## See Also

### Setting suggestion attributes

- [suggestionKind](suggestionkind-swift.property.md): The type of suggestion.
- [CSSuggestion.SuggestionKind](suggestionkind-swift.enum.md): The suggestion type that determines how the system handles a suggestion.
