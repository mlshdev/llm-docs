> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvmljs/keyboard/1627355-ontextchange

# onTextChange

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

A function the system calls when the text in a search or text field changes.

## Declaration

```
attribute function onTextChange;
```

<a id="discussion"></a>

## Discussion

Provide a callback function for the `onTextChange` attribute to respond to changes in the `searchField` or `textField` elements. You can respond to user inputs as the changes happen. This attribute must be set to a function; for example, `Keyboard.onTextChange = function () {}`.

## See Also

### Setting and Retrieving Text

- [text](1627359-text.md): The text inside a search or text field.
