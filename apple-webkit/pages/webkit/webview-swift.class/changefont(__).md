> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/changefont(_:)](https://developer.apple.com/documentation/webkit/webview-swift.class/changefont(_:))

# changeFont(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method that changes the font of the selection, or all content if there is no selection.

## Declaration

```swift
func changeFont(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

If the receiver doesn’t use the Fonts panel, this method does nothing.

## See Also

### Changing the Font, Color and Other Attributes When Editing

- [changeAttributes(\_:)](changeattributes%28__%29.md): An action method that changes the attributes of the current selection.
- [changeDocumentBackgroundColor(\_:)](changedocumentbackgroundcolor%28__%29.md): Sets the background color of the selected content.
- [changeColor(\_:)](changecolor%28__%29.md): Sets the color of the selected content.

# changeFont: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method that changes the font of the selection, or all content if there is no selection.

## Declaration

```objectivec
- (void) changeFont:(id) sender;
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

If the receiver doesn’t use the Fonts panel, this method does nothing.

## See Also

### Changing the Font, Color and Other Attributes When Editing

- [changeAttributes:](changeattributes%28__%29.md): An action method that changes the attributes of the current selection.
- [changeDocumentBackgroundColor:](changedocumentbackgroundcolor%28__%29.md): Sets the background color of the selected content.
- [changeColor:](changecolor%28__%29.md): Sets the color of the selected content.
