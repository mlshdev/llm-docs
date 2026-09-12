> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/changeattributes(_:)](https://developer.apple.com/documentation/webkit/webview-swift.class/changeattributes(_:))

# changeAttributes(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method that changes the attributes of the current selection.

## Declaration

```swift
func changeAttributes(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

This method behaves similar to the [changeAttributes(\_:)](https://developer.apple.com/documentation/appkit/nstextview/changeattributes%28_:%29) method in [NSTextView](https://developer.apple.com/documentation/appkit/nstextview).

## See Also

### Changing the Font, Color and Other Attributes When Editing

- [changeFont(\_:)](changefont%28__%29.md): An action method that changes the font of the selection, or all content if there is no selection.
- [changeDocumentBackgroundColor(\_:)](changedocumentbackgroundcolor%28__%29.md): Sets the background color of the selected content.
- [changeColor(\_:)](changecolor%28__%29.md): Sets the color of the selected content.

# changeAttributes: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method that changes the attributes of the current selection.

## Declaration

```objectivec
- (void) changeAttributes:(id) sender;
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

This method behaves similar to the [changeAttributes:](https://developer.apple.com/documentation/appkit/nstextview/changeattributes%28_:%29) method in [NSTextView](https://developer.apple.com/documentation/appkit/nstextview).

## See Also

### Changing the Font, Color and Other Attributes When Editing

- [changeFont:](changefont%28__%29.md): An action method that changes the font of the selection, or all content if there is no selection.
- [changeDocumentBackgroundColor:](changedocumentbackgroundcolor%28__%29.md): Sets the background color of the selected content.
- [changeColor:](changecolor%28__%29.md): Sets the color of the selected content.
