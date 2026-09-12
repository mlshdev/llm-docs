> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikfilterbrowserpanel/begin(options:modelessdelegate:didend:contextinfo:)](https://developer.apple.com/documentation/quartz/ikfilterbrowserpanel/begin(options:modelessdelegate:didend:contextinfo:))

# begin(options:modelessDelegate:didEnd:contextInfo:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Displays the filter browser in a new utility window, unless the filter browser is already open.

## Declaration

```swift
func begin(options inOptions: [AnyHashable : Any]! = [:], modelessDelegate: Any!, didEnd didEndSelector: Selector!, contextInfo: UnsafeMutableRawPointer!)
```

## Parameters

- `inOptions`: A dictionary of options that describe the configuration to use for the filter browser user interface. For the possible keys you can supply see  [Filter Browser Option Keys](../filter-browser-option-keys.md) and the constant [IKUISizeFlavor](../ikuisizeflavor.md).
- `modelessDelegate`: The object that will invoke the selector  `didEndSelector` when the filter browser session terminates.
- `didEndSelector`: The selector to invoke when the filter browser session terminates.
- `contextInfo`: Any data that must be passed as an argument to the delegate through `didEndSelector` after the filter browser session terminates.

<a id="Discussion"></a>

## Discussion

When the filter browser session ends, `didEndSelector` is invoked on the modeless delegate, passing `contextInfo` as an argument. The selector `didEndSelector` must have the following signature:

`- (void)openPanelDidEnd:(NSOpenPanel *)panel returnCode:(int)returnCode  contextInfo:(void  *)contextInfo`

The `returnCode` value passed to the selector is set to [NSOKButton](../../appkit/nsokbutton.md) if the user validates, or to [NSCancelButton](../../appkit/nscancelbutton.md) if the user cancels.

## See Also

### Displaying and Running the Panel

- [filterBrowserView(options:)](filterbrowserview%28options_%29.md): Returns a view that contains a filter browser.
- [beginSheet(options:modalFor:modalDelegate:didEnd:contextInfo:)](beginsheet%28options_modalfor_modaldelegate_didend_contextinfo_%29.md): Displays the filter browser in a sheet—that is, a dialog that is attached to its parent window and must be dismissed by the user.
- [runModal(options:)](runmodal%28options_%29.md): Displays the filter browser in a modal dialog that must be dismissed by the user but that is not attached to a window.
- [finish(\_:)](finish%28__%29.md): Closes a filter browser view.

# beginWithOptions:modelessDelegate:didEndSelector:contextInfo: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Displays the filter browser in a new utility window, unless the filter browser is already open.

## Declaration

```objectivec
- (void) beginWithOptions:(NSDictionary *) inOptions modelessDelegate:(id) modelessDelegate didEndSelector:(SEL) didEndSelector contextInfo:(void *) contextInfo;
```

## Parameters

- `inOptions`: A dictionary of options that describe the configuration to use for the filter browser user interface. For the possible keys you can supply see  [Filter Browser Option Keys](../filter-browser-option-keys.md) and the constant [IKUISizeFlavor](../ikuisizeflavor.md).
- `modelessDelegate`: The object that will invoke the selector  `didEndSelector` when the filter browser session terminates.
- `didEndSelector`: The selector to invoke when the filter browser session terminates.
- `contextInfo`: Any data that must be passed as an argument to the delegate through `didEndSelector` after the filter browser session terminates.

<a id="Discussion"></a>

## Discussion

When the filter browser session ends, `didEndSelector` is invoked on the modeless delegate, passing `contextInfo` as an argument. The selector `didEndSelector` must have the following signature:

`- (void)openPanelDidEnd:(NSOpenPanel *)panel returnCode:(int)returnCode  contextInfo:(void  *)contextInfo`

The `returnCode` value passed to the selector is set to [NSOKButton](../../appkit/nsokbutton.md) if the user validates, or to [NSCancelButton](../../appkit/nscancelbutton.md) if the user cancels.

## See Also

### Displaying and Running the Panel

- [filterBrowserViewWithOptions:](filterbrowserview%28options_%29.md): Returns a view that contains a filter browser.
- [beginSheetWithOptions:modalForWindow:modalDelegate:didEndSelector:contextInfo:](beginsheet%28options_modalfor_modaldelegate_didend_contextinfo_%29.md): Displays the filter browser in a sheet—that is, a dialog that is attached to its parent window and must be dismissed by the user.
- [runModalWithOptions:](runmodal%28options_%29.md): Displays the filter browser in a modal dialog that must be dismissed by the user but that is not attached to a window.
- [finish:](finish%28__%29.md): Closes a filter browser view.
