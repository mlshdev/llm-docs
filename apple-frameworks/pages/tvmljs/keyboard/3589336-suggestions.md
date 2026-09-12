> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/keyboard/3589336-suggestions](https://developer.apple.com/documentation/tvmljs/keyboard/3589336-suggestions)

# suggestions

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 14.0+

Search parameters to offer as shortcuts.

## Declaration

```
attribute Array suggestions;
```

<a id="discussion"></a>

## Discussion

Provide search suggestions to help the user complete their query quickly. Update the suggestions as the user types. This property is only available if the [Keyboard](../keyboard.md) is associated with a [searchField](../../tvml/searchfield.md).

Each suggestion in this array should have the following properties:

- **`text`**: A label for the suggestion, usually the search term the suggestion represents.
- **`badge`**: The name of an image for display alongside the suggestion’s text. This property is optional.
- **`searchTerm`**: A string containing search criteria. This property is optional.

## See Also

### Providing and Handling Search Suggestions

- [onSuggestionSelected](3678707-onsuggestionselected.md): A function the system calls when the user selects a suggestion on a search field.
