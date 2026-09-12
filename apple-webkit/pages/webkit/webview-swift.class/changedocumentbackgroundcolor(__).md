> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/changedocumentbackgroundcolor(_:)](https://developer.apple.com/documentation/webkit/webview-swift.class/changedocumentbackgroundcolor(_:))

# changeDocumentBackgroundColor(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the background color of the selected content.

## Declaration

```swift
func changeDocumentBackgroundColor(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

This method is invoked by the `NSColorPanel` sender and behaves similar to the [changeDocumentBackgroundColor(\_:)](https://developer.apple.com/documentation/appkit/nstextview/changedocumentbackgroundcolor%28_:%29) method in [NSTextView](https://developer.apple.com/documentation/appkit/nstextview).

## See Also

### Changing the Font, Color and Other Attributes When Editing

- [changeFont(\_:)](changefont%28__%29.md): An action method that changes the font of the selection, or all content if there is no selection.
- [changeAttributes(\_:)](changeattributes%28__%29.md): An action method that changes the attributes of the current selection.
- [changeColor(\_:)](changecolor%28__%29.md): Sets the color of the selected content.

# changeDocumentBackgroundColor: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the background color of the selected content.

## Declaration

```objectivec
- (void) changeDocumentBackgroundColor:(id) sender;
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

This method is invoked by the `NSColorPanel` sender and behaves similar to the [changeDocumentBackgroundColor:](https://developer.apple.com/documentation/appkit/nstextview/changedocumentbackgroundcolor%28_:%29) method in [NSTextView](https://developer.apple.com/documentation/appkit/nstextview).

## See Also

### Changing the Font, Color and Other Attributes When Editing

- [changeFont:](changefont%28__%29.md): An action method that changes the font of the selection, or all content if there is no selection.
- [changeAttributes:](changeattributes%28__%29.md): An action method that changes the attributes of the current selection.
- [changeColor:](changecolor%28__%29.md): Sets the color of the selected content.
