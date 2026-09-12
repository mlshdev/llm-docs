> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/setjobstylehint:](https://developer.apple.com/documentation/appkit/nsprintoperation/setjobstylehint:)

# setJobStyleHint:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.2+ (deprecated in 10.5)

Sets the type of content that the print job is printing.

> Use the [jobStyleHint](../nsprintpanel/jobstylehint-swift.property.md) property of [NSPrintPanel](../nsprintpanel.md) instead.

## Declaration

```objectivec
- (void) setJobStyleHint:(NSString *) hint;
```

## Parameters

- `hint`: A supported job style hint. Valid values for this parameter are described in the `Constants` section of the `NSPrintPanel` class. If this value is `nil`, the standard interface is used.

<a id="Discussion"></a>

## Discussion

This controls the set of items that appear in the Presets menu of the simplified Print panel interface presented by this operation, if it presents one.

## See Also

### Deprecated

- [jobStyleHint](jobstylehint.md): Deprecated. The type of content that the print job is printing.
- [accessoryView](accessoryview.md): Deprecated. Returns the accessory view used by the print operation’s print panel.
- [setAccessoryView:](setaccessoryview_.md): Deprecated. Sets the custom accessory view to be displayed by the print operation’s print panel.
- [showPanels](showpanels.md): Deprecated. Returns a Boolean value that indicates whether the print panel is to be displayed.
- [setShowPanels:](setshowpanels_.md): Deprecated. Sets whether the print operation should display a print panel.
