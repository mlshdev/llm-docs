> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintpanel/accessoryview](https://developer.apple.com/documentation/appkit/nsprintpanel/accessoryview)

# accessoryView

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Returns the accessory view of the Print panel.

> Use [accessoryControllers](accessorycontrollers.md) instead.

## Declaration

```objectivec
- (NSView *) accessoryView;
```

<a id="return-value"></a>

## Return Value

The accessory view of the receiver, if any.

## See Also

### Deprecated

- [setAccessoryView:](setaccessoryview_.md): Deprecated. Sets the accessory view for the Print panel.
- [updateFromPrintInfo](updatefromprintinfo.md): Deprecated. Updates the Print panel with information from the current print operation object.
- [finalWritePrintInfo](finalwriteprintinfo.md): Deprecated. Writes the Print panel’s printing attributes to the current print operation object.
