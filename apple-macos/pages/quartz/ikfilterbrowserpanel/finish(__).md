> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikfilterbrowserpanel/finish(_:)](https://developer.apple.com/documentation/quartz/ikfilterbrowserpanel/finish(_:))

# finish(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Closes a filter browser view.

## Declaration

```swift
func finish(_ sender: Any!)
```

## Parameters

- `sender`: The object that invokes the action, such as an OK or Cancel button.

<a id="Discussion"></a>

## Discussion

Invoke this action when you want to dismiss the filter browser.

## See Also

### Displaying and Running the Panel

- [filterBrowserView(options:)](filterbrowserview%28options_%29.md): Returns a view that contains a filter browser.
- [begin(options:modelessDelegate:didEnd:contextInfo:)](begin%28options_modelessdelegate_didend_contextinfo_%29.md): Displays the filter browser in a new utility window, unless the filter browser is already open.
- [beginSheet(options:modalFor:modalDelegate:didEnd:contextInfo:)](beginsheet%28options_modalfor_modaldelegate_didend_contextinfo_%29.md): Displays the filter browser in a sheet—that is, a dialog that is attached to its parent window and must be dismissed by the user.
- [runModal(options:)](runmodal%28options_%29.md): Displays the filter browser in a modal dialog that must be dismissed by the user but that is not attached to a window.

# finish: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Closes a filter browser view.

## Declaration

```objectivec
- (void) finish:(id) sender;
```

## Parameters

- `sender`: The object that invokes the action, such as an OK or Cancel button.

<a id="Discussion"></a>

## Discussion

Invoke this action when you want to dismiss the filter browser.

## See Also

### Displaying and Running the Panel

- [filterBrowserViewWithOptions:](filterbrowserview%28options_%29.md): Returns a view that contains a filter browser.
- [beginWithOptions:modelessDelegate:didEndSelector:contextInfo:](begin%28options_modelessdelegate_didend_contextinfo_%29.md): Displays the filter browser in a new utility window, unless the filter browser is already open.
- [beginSheetWithOptions:modalForWindow:modalDelegate:didEndSelector:contextInfo:](beginsheet%28options_modalfor_modaldelegate_didend_contextinfo_%29.md): Displays the filter browser in a sheet—that is, a dialog that is attached to its parent window and must be dismissed by the user.
- [runModalWithOptions:](runmodal%28options_%29.md): Displays the filter browser in a modal dialog that must be dismissed by the user but that is not attached to a window.
