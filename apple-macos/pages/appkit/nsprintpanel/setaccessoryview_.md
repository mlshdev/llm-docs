> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintpanel/setaccessoryview:](https://developer.apple.com/documentation/appkit/nsprintpanel/setaccessoryview:)

# setAccessoryView:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Sets the accessory view for the Print panel.

> Use [addAccessoryController:](addaccessorycontroller%28__%29.md) instead.

## Declaration

```objectivec
- (void) setAccessoryView:(NSView *) accessoryView;
```

## Parameters

- `accessoryView`: The view containing the controls and information you want to add to the print panel. Specify `nil` to remove the receiver’s current accessory view.

<a id="Discussion"></a>

## Discussion

You can use an accessory view to add printing controls and information to the standard print panel. You set your accessory view prior to displaying the print panel. Upon display, the print panel adds your application’s name as an item to its pane-selection pull-down menu. When the user selects this item, the print panel displays your accessory view.

## See Also

### Deprecated

- [accessoryView](accessoryview.md): Deprecated. Returns the accessory view of the Print panel.
- [updateFromPrintInfo](updatefromprintinfo.md): Deprecated. Updates the Print panel with information from the current print operation object.
- [finalWritePrintInfo](finalwriteprintinfo.md): Deprecated. Writes the Print panel’s printing attributes to the current print operation object.
