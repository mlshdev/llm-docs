> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/setaccessoryview:](https://developer.apple.com/documentation/appkit/nsprintoperation/setaccessoryview:)

# setAccessoryView:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Sets the custom accessory view to be displayed by the print operation’s print panel.

> Use the [addAccessoryController:](../nsprintpanel/addaccessorycontroller%28__%29.md) method of [NSPrintPanel](../nsprintpanel.md) instead.

## Declaration

```objectivec
- (void) setAccessoryView:(NSView *) view;
```

## Parameters

- `view`: The view to display in the print panel. You can use this view to specify additional print options.

<a id="Discussion"></a>

## Discussion

You can use this method to avoid subclassing `NSPrintPanel` or specifying your own print panel object. The print panel is automatically resized (as needed) to accommodate the accessory view when it is selected.

## See Also

### Related Documentation

- [printPanel](printpanel.md): The print panel object to use during the operation.

### Deprecated

- [jobStyleHint](jobstylehint.md): Deprecated. The type of content that the print job is printing.
- [setJobStyleHint:](setjobstylehint_.md): Deprecated. Sets the type of content that the print job is printing.
- [accessoryView](accessoryview.md): Deprecated. Returns the accessory view used by the print operation’s print panel.
- [showPanels](showpanels.md): Deprecated. Returns a Boolean value that indicates whether the print panel is to be displayed.
- [setShowPanels:](setshowpanels_.md): Deprecated. Sets whether the print operation should display a print panel.
