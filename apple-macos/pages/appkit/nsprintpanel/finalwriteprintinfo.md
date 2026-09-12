> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintpanel/finalwriteprintinfo](https://developer.apple.com/documentation/appkit/nsprintpanel/finalwriteprintinfo)

# finalWritePrintInfo

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Writes the Print panel’s printing attributes to the current print operation object.

## Declaration

```objectivec
- (void) finalWritePrintInfo;
```

<a id="Discussion"></a>

## Discussion

Do not invoke this method directly—it is invoked automatically when the Print panel is dismissed by the user clicking the OK button.

## See Also

### Related Documentation

- [currentOperation](../nsprintoperation/current.md): The current print operation for this thread.

### Deprecated

- [accessoryView](accessoryview.md): Deprecated. Returns the accessory view of the Print panel.
- [setAccessoryView:](setaccessoryview_.md): Deprecated. Sets the accessory view for the Print panel.
- [updateFromPrintInfo](updatefromprintinfo.md): Deprecated. Updates the Print panel with information from the current print operation object.
