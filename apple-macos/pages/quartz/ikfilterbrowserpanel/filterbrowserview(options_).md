> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikfilterbrowserpanel/filterbrowserview(options:)](https://developer.apple.com/documentation/quartz/ikfilterbrowserpanel/filterbrowserview(options:))

# filterBrowserView(options:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns a view that contains a filter browser.

## Declaration

```swift
func filterBrowserView(options inOptions: [AnyHashable : Any]! = [:]) -> IKFilterBrowserView!
```

## Parameters

- `inOptions`: A dictionary of options that describe the configuration to use for the filter browser user interface. For the possible keys you can supply see  [Filter Browser Option Keys](../filter-browser-option-keys.md) and the constant [IKUISizeFlavor](../ikuisizeflavor.md).

<a id="return-value"></a>

## Return Value

A filter browser view that is configured as specified.

<a id="Discussion"></a>

## Discussion

Use this method to add a view that contains the filter browser to your custom user interface. To dismiss the filter browser view, invoke the [finish(\_:)](finish%28__%29.md) method.

## See Also

### Displaying and Running the Panel

- [begin(options:modelessDelegate:didEnd:contextInfo:)](begin%28options_modelessdelegate_didend_contextinfo_%29.md): Displays the filter browser in a new utility window, unless the filter browser is already open.
- [beginSheet(options:modalFor:modalDelegate:didEnd:contextInfo:)](beginsheet%28options_modalfor_modaldelegate_didend_contextinfo_%29.md): Displays the filter browser in a sheet—that is, a dialog that is attached to its parent window and must be dismissed by the user.
- [runModal(options:)](runmodal%28options_%29.md): Displays the filter browser in a modal dialog that must be dismissed by the user but that is not attached to a window.
- [finish(\_:)](finish%28__%29.md): Closes a filter browser view.

# filterBrowserViewWithOptions: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns a view that contains a filter browser.

## Declaration

```objectivec
- (IKFilterBrowserView *) filterBrowserViewWithOptions:(NSDictionary *) inOptions;
```

## Parameters

- `inOptions`: A dictionary of options that describe the configuration to use for the filter browser user interface. For the possible keys you can supply see  [Filter Browser Option Keys](../filter-browser-option-keys.md) and the constant [IKUISizeFlavor](../ikuisizeflavor.md).

<a id="return-value"></a>

## Return Value

A filter browser view that is configured as specified.

<a id="Discussion"></a>

## Discussion

Use this method to add a view that contains the filter browser to your custom user interface. To dismiss the filter browser view, invoke the [finish:](finish%28__%29.md) method.

## See Also

### Displaying and Running the Panel

- [beginWithOptions:modelessDelegate:didEndSelector:contextInfo:](begin%28options_modelessdelegate_didend_contextinfo_%29.md): Displays the filter browser in a new utility window, unless the filter browser is already open.
- [beginSheetWithOptions:modalForWindow:modalDelegate:didEndSelector:contextInfo:](beginsheet%28options_modalfor_modaldelegate_didend_contextinfo_%29.md): Displays the filter browser in a sheet—that is, a dialog that is attached to its parent window and must be dismissed by the user.
- [runModalWithOptions:](runmodal%28options_%29.md): Displays the filter browser in a modal dialog that must be dismissed by the user but that is not attached to a window.
- [finish:](finish%28__%29.md): Closes a filter browser view.
