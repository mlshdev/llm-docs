> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/keyboard/3678707-onsuggestionselected](https://developer.apple.com/documentation/tvmljs/keyboard/3678707-onsuggestionselected)

# onSuggestionSelected

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 14.0+

A function the system calls when the user selects a suggestion on a search field.

## Declaration

```
attribute function onSuggestionSelected;
```

<a id="discussion"></a>

## Discussion

Provide a callback function for the [onSuggestionSelected](3678707-onsuggestionselected.md) attribute to respond to the user selecting one of a `searchField`’s [suggestions](3589336-suggestions.md). This value of this attribute must be a function; for example, k`eyboard.onSuggestionSelected = function (searchTerm) {}`.

## See Also

### Providing and Handling Search Suggestions

- [suggestions](3589336-suggestions.md): Search parameters to offer as shortcuts.
