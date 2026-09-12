> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/showpanels](https://developer.apple.com/documentation/appkit/nsprintoperation/showpanels)

# showPanels

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Returns a Boolean value that indicates whether the print panel is to be displayed.

> Use [showsPrintPanel](showsprintpanel.md) and [showsProgressPanel](showsprogresspanel.md) instead.

## Declaration

```objectivec
- (BOOL) showPanels;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the print panel is to be displayed; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [printPanel](printpanel.md): The print panel object to use during the operation.

### Deprecated

- [jobStyleHint](jobstylehint.md): Deprecated. The type of content that the print job is printing.
- [setJobStyleHint:](setjobstylehint_.md): Deprecated. Sets the type of content that the print job is printing.
- [accessoryView](accessoryview.md): Deprecated. Returns the accessory view used by the print operation’s print panel.
- [setAccessoryView:](setaccessoryview_.md): Deprecated. Sets the custom accessory view to be displayed by the print operation’s print panel.
- [setShowPanels:](setshowpanels_.md): Deprecated. Sets whether the print operation should display a print panel.
