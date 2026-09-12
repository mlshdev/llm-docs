> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikfilterbrowserpanel/runmodal(options:)](https://developer.apple.com/documentation/quartz/ikfilterbrowserpanel/runmodal(options:))

# runModal(options:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Displays the filter browser in a modal dialog that must be dismissed by the user but that is not  attached to a window.

## Declaration

```swift
func runModal(options inOptions: [AnyHashable : Any]! = [:]) -> Int32
```

## Parameters

- `inOptions`: A dictionary of options that describe the configuration to use for the filter browser user interface. For the possible keys you can supply see  [Filter Browser Option Keys](../filter-browser-option-keys.md) and the constant [IKUISizeFlavor](../ikuisizeflavor.md).

<a id="return-value"></a>

## Return Value

Either [NSOKButton](../../appkit/nsokbutton.md) if the user validates, or [NSCancelButton](../../appkit/nscancelbutton.md) if the user cancels.

## See Also

### Displaying and Running the Panel

- [filterBrowserView(options:)](filterbrowserview%28options_%29.md): Returns a view that contains a filter browser.
- [begin(options:modelessDelegate:didEnd:contextInfo:)](begin%28options_modelessdelegate_didend_contextinfo_%29.md): Displays the filter browser in a new utility window, unless the filter browser is already open.
- [beginSheet(options:modalFor:modalDelegate:didEnd:contextInfo:)](beginsheet%28options_modalfor_modaldelegate_didend_contextinfo_%29.md): Displays the filter browser in a sheet—that is, a dialog that is attached to its parent window and must be dismissed by the user.
- [finish(\_:)](finish%28__%29.md): Closes a filter browser view.

# runModalWithOptions: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Displays the filter browser in a modal dialog that must be dismissed by the user but that is not  attached to a window.

## Declaration

```objectivec
- (int) runModalWithOptions:(NSDictionary *) inOptions;
```

## Parameters

- `inOptions`: A dictionary of options that describe the configuration to use for the filter browser user interface. For the possible keys you can supply see  [Filter Browser Option Keys](../filter-browser-option-keys.md) and the constant [IKUISizeFlavor](../ikuisizeflavor.md).

<a id="return-value"></a>

## Return Value

Either [NSOKButton](../../appkit/nsokbutton.md) if the user validates, or [NSCancelButton](../../appkit/nscancelbutton.md) if the user cancels.

## See Also

### Displaying and Running the Panel

- [filterBrowserViewWithOptions:](filterbrowserview%28options_%29.md): Returns a view that contains a filter browser.
- [beginWithOptions:modelessDelegate:didEndSelector:contextInfo:](begin%28options_modelessdelegate_didend_contextinfo_%29.md): Displays the filter browser in a new utility window, unless the filter browser is already open.
- [beginSheetWithOptions:modalForWindow:modalDelegate:didEndSelector:contextInfo:](beginsheet%28options_modalfor_modaldelegate_didend_contextinfo_%29.md): Displays the filter browser in a sheet—that is, a dialog that is attached to its parent window and must be dismissed by the user.
- [finish:](finish%28__%29.md): Closes a filter browser view.
