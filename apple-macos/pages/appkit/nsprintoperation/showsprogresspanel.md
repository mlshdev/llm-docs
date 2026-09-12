> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/showsprogresspanel](https://developer.apple.com/documentation/appkit/nsprintoperation/showsprogresspanel)

# showsProgressPanel (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that determines whether the print operation displays a progress panel.

## Declaration

```swift
var showsProgressPanel: Bool { get set }
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) if you want to display a progress panel; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method does not affect the display of a print panel; that operation is controlled by the [showsPrintPanel](showsprintpanel.md) method.

Operations that generate EPS or PDF data do no display a progress panel, regardless of the value in the `flag` parameter.

## See Also

### Modifying the User Interface

- [showsPrintPanel](showsprintpanel.md): A Boolean value that determines whether the print operation displays a print panel.
- [jobTitle](jobtitle.md): The custom title of the print job.
- [printPanel](printpanel.md): The print panel object to use during the operation.
- [pdfPanel](pdfpanel.md): The PDF panel object to use during the operation.

# showsProgressPanel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that determines whether the print operation displays a progress panel.

## Declaration

```objectivec
@property BOOL showsProgressPanel;
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) if you want to display a progress panel; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method does not affect the display of a print panel; that operation is controlled by the [showsPrintPanel](showsprintpanel.md) method.

Operations that generate EPS or PDF data do no display a progress panel, regardless of the value in the `flag` parameter.

## See Also

### Modifying the User Interface

- [showsPrintPanel](showsprintpanel.md): A Boolean value that determines whether the print operation displays a print panel.
- [jobTitle](jobtitle.md): The custom title of the print job.
- [printPanel](printpanel.md): The print panel object to use during the operation.
- [PDFPanel](pdfpanel.md): The PDF panel object to use during the operation.
