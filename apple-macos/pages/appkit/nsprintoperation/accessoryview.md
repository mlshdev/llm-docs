> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/accessoryview](https://developer.apple.com/documentation/appkit/nsprintoperation/accessoryview)

# accessoryView

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Returns the accessory view used by the print operation’s print panel.

> Use the [accessoryControllers](../nsprintpanel/accessorycontrollers.md) property of [NSPrintPanel](../nsprintpanel.md) instead.

## Declaration

```objectivec
- (NSView *) accessoryView;
```

<a id="return-value"></a>

## Return Value

The custom accessory view.

<a id="Discussion"></a>

## Discussion

You use the [setAccessoryView:](setaccessoryview_.md) method to customize the default `NSPrintPanel` object without having to subclass `NSPrintPanel` or specify your own print panel object.

## See Also

### Related Documentation

- [printPanel](printpanel.md): The print panel object to use during the operation.

### Deprecated

- [jobStyleHint](jobstylehint.md): Deprecated. The type of content that the print job is printing.
- [setJobStyleHint:](setjobstylehint_.md): Deprecated. Sets the type of content that the print job is printing.
- [setAccessoryView:](setaccessoryview_.md): Deprecated. Sets the custom accessory view to be displayed by the print operation’s print panel.
- [showPanels](showpanels.md): Deprecated. Returns a Boolean value that indicates whether the print panel is to be displayed.
- [setShowPanels:](setshowpanels_.md): Deprecated. Sets whether the print operation should display a print panel.
