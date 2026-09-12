> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/changecolor(_:)](https://developer.apple.com/documentation/webkit/webview-swift.class/changecolor(_:))

# changeColor(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the color of the selected content.

## Declaration

```swift
func changeColor(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

This method is invoked by the `NSColorPanel` sender and behaves similar to the [changeColor(\_:)](https://developer.apple.com/documentation/appkit/nstextview/changecolor%28_:%29) method in [NSTextView](https://developer.apple.com/documentation/appkit/nstextview).

## See Also

### Changing the Font, Color and Other Attributes When Editing

- [changeFont(\_:)](changefont%28__%29.md): An action method that changes the font of the selection, or all content if there is no selection.
- [changeAttributes(\_:)](changeattributes%28__%29.md): An action method that changes the attributes of the current selection.
- [changeDocumentBackgroundColor(\_:)](changedocumentbackgroundcolor%28__%29.md): Sets the background color of the selected content.

# changeColor: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the color of the selected content.

## Declaration

```objectivec
- (void) changeColor:(id) sender;
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

This method is invoked by the `NSColorPanel` sender and behaves similar to the [changeColor:](https://developer.apple.com/documentation/appkit/nstextview/changecolor%28_:%29) method in [NSTextView](https://developer.apple.com/documentation/appkit/nstextview).

## See Also

### Changing the Font, Color and Other Attributes When Editing

- [changeFont:](changefont%28__%29.md): An action method that changes the font of the selection, or all content if there is no selection.
- [changeAttributes:](changeattributes%28__%29.md): An action method that changes the attributes of the current selection.
- [changeDocumentBackgroundColor:](changedocumentbackgroundcolor%28__%29.md): Sets the background color of the selected content.
