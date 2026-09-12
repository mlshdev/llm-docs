> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/printpanel](https://developer.apple.com/documentation/appkit/nsprintoperation/printpanel)

# printPanel (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The print panel object to use during the operation.

## Declaration

```swift
var printPanel: NSPrintPanel { get set }
```

## Parameters

- `panel`: The print panel object to use for the operation.

## See Also

### Modifying the User Interface

- [showsPrintPanel](showsprintpanel.md): A Boolean value that determines whether the print operation displays a print panel.
- [showsProgressPanel](showsprogresspanel.md): A Boolean value that determines whether the print operation displays a progress panel.
- [jobTitle](jobtitle.md): The custom title of the print job.
- [pdfPanel](pdfpanel.md): The PDF panel object to use during the operation.

# printPanel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The print panel object to use during the operation.

## Declaration

```objectivec
@property (strong) NSPrintPanel * printPanel;
```

## Parameters

- `panel`: The print panel object to use for the operation.

## See Also

### Related Documentation

- [showPanels](showpanels.md): Deprecated. Returns a Boolean value that indicates whether the print panel is to be displayed.
- [accessoryView](accessoryview.md): Deprecated. Returns the accessory view used by the print operation’s print panel.
- [setAccessoryView:](setaccessoryview_.md): Deprecated. Sets the custom accessory view to be displayed by the print operation’s print panel.
- [setShowPanels:](setshowpanels_.md): Deprecated. Sets whether the print operation should display a print panel.

### Modifying the User Interface

- [showsPrintPanel](showsprintpanel.md): A Boolean value that determines whether the print operation displays a print panel.
- [showsProgressPanel](showsprogresspanel.md): A Boolean value that determines whether the print operation displays a progress panel.
- [jobTitle](jobtitle.md): The custom title of the print job.
- [PDFPanel](pdfpanel.md): The PDF panel object to use during the operation.
