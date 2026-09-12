> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextsuggestionsdelegate/textfield(_:textcompletionfor:)-4utmm](https://developer.apple.com/documentation/appkit/nstextsuggestionsdelegate/textfield(_:textcompletionfor:)-4utmm)

# textField(\_:textCompletionFor:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Returns the full completion text for a particular item to use when the item is highlighted or selected.

## Declaration

```swift
@MainActor func textField(_ textField: NSTextField, textCompletionFor item: Self.Item) -> String?
```

## Parameters

- `textField`: The text field whose suggestions item may be highlighted or selected.
- `item`: The item that may be highlighted or selected.

<a id="return-value"></a>

## Return Value

The full text to insert, including the matched partial word and its potential completion, or `nil` if no text completion should be used.

<a id="discussion"></a>

## Discussion

This function may be used by the control to display a preview of the text that would appear if the highlighted item is selected. Additionally, the default implementation of `textField(_:didSelect:)` uses this function to inform what changes are made to the control’s text.

For example, given a user interface with a text field and suggestions menu that looks like:

```
        ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
Recipe: ┃ apple│                       ┃
        ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
        ┌────────────────┐
        │ Applesauce     │
        │ Apple juice    │
        │ Apple pie      │
        └────────────────┘
```

where “│” denotes the text insertion point.

If this function returns `"Applesauce"` for the first suggestion item, when the first suggestion item is highlighted, the user interface will look like:

```
        ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
Recipe: ┃ apple│sauce|                 ┃
        ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
        ┌────────────────┐
        │|Applesauce    |│
        │ Apple juice    │
        │ Apple pie      │
        └────────────────┘
```

where the text between “|” is shown as a preview in the field

Upon selection of that first suggestion item:

```
        ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
Recipe: ┃ Applesauce                   ┃
        ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

> **Note**

> This function may or may not be called when an item is highlighted, depending on a variety of factors. Don’t depend upon the timing of when this function is called. Solely use it to return the full completion text for a particular item.
