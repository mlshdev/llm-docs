> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextsuggestionsdelegate/textfield(_:didselect:)](https://developer.apple.com/documentation/appkit/nstextsuggestionsdelegate/textfield(_:didselect:))

# textField(\_:didSelect:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Called when an item in the suggestions menu has been selected.

## Declaration

```swift
@MainActor func textField(_ textField: NSTextField, didSelect item: Self.Item)
```

## Parameters

- `textField`: The text field whose suggestions item was highlighted.
- `item`: The item that was selected.

<a id="discussion"></a>

## Discussion

The default implementation inserts the item’s text completion (`textField(_:textCompletionFor:)`) into the control, replacing its existing text. Overriding this method allows you to do a custom behavior instead.

## Default Implementations

### NSTextSuggestionsDelegate Implementations

- [textField(\_:didSelect:)](textfield%28__didselect_%29-1pke6.md): Called when an item in the suggestions menu has been selected.
