> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/jobstylehint](https://developer.apple.com/documentation/appkit/nsprintoperation/jobstylehint)

# jobStyleHint

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.2+ (deprecated in 10.5)

The type of content that the print job is printing.

> Use the [jobStyleHint](../nsprintpanel/jobstylehint-swift.property.md) property of [NSPrintPanel](../nsprintpanel.md) instead.

## Declaration

```objectivec
- (NSString *) jobStyleHint;
```

<a id="return-value"></a>

## Return Value

The content description, or `nil` if no job style hint has been set.

## See Also

### Deprecated

- [setJobStyleHint:](setjobstylehint_.md): Deprecated. Sets the type of content that the print job is printing.
- [accessoryView](accessoryview.md): Deprecated. Returns the accessory view used by the print operation’s print panel.
- [setAccessoryView:](setaccessoryview_.md): Deprecated. Sets the custom accessory view to be displayed by the print operation’s print panel.
- [showPanels](showpanels.md): Deprecated. Returns a Boolean value that indicates whether the print panel is to be displayed.
- [setShowPanels:](setshowpanels_.md): Deprecated. Sets whether the print operation should display a print panel.
