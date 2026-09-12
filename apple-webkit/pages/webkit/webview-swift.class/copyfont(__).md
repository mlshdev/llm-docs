> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/copyfont(_:)](https://developer.apple.com/documentation/webkit/webview-swift.class/copyfont(_:))

# copyFont(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method that copies font information onto the font pasteboard.

## Declaration

```swift
func copyFont(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

This action method copies the font information for the first character of the selection (or for the insertion point) onto the font pasteboard as `NSFontPboardType`.

## See Also

### Cut, Copy and Paste Action Methods

- [copy(\_:)](copy%28__%29.md): Action method that copies the selected content to the general pasteboard.
- [cut(\_:)](cut%28__%29.md): An action method that deletes selected content and puts it on the general pasteboard.
- [delete(\_:)](delete%28__%29.md): An action method that deletes the selected content.
- [paste(\_:)](paste%28__%29.md): An action method that pastes content from the pasteboard at the insertion point or over the selection.
- [pasteFont(\_:)](pastefont%28__%29.md): An action method that pastes font information from the font pasteboard.
- [pasteAsPlainText(\_:)](pasteasplaintext%28__%29.md): An action method that pastes pasteboard content as plain text.
- [pasteAsRichText(\_:)](pasteasrichtext%28__%29.md): An action method that pastes pasteboard content into the receiver as rich text, maintaining its attributes.

# copyFont: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method that copies font information onto the font pasteboard.

## Declaration

```objectivec
- (void) copyFont:(id) sender;
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

This action method copies the font information for the first character of the selection (or for the insertion point) onto the font pasteboard as `NSFontPboardType`.

## See Also

### Cut, Copy and Paste Action Methods

- [copy:](copy%28__%29.md): Action method that copies the selected content to the general pasteboard.
- [cut:](cut%28__%29.md): An action method that deletes selected content and puts it on the general pasteboard.
- [delete:](delete%28__%29.md): An action method that deletes the selected content.
- [paste:](paste%28__%29.md): An action method that pastes content from the pasteboard at the insertion point or over the selection.
- [pasteFont:](pastefont%28__%29.md): An action method that pastes font information from the font pasteboard.
- [pasteAsPlainText:](pasteasplaintext%28__%29.md): An action method that pastes pasteboard content as plain text.
- [pasteAsRichText:](pasteasrichtext%28__%29.md): An action method that pastes pasteboard content into the receiver as rich text, maintaining its attributes.
