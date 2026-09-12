> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/showsprintpanel](https://developer.apple.com/documentation/appkit/nsprintoperation/showsprintpanel)

# showsPrintPanel (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that determines whether the print operation displays a print panel.

## Declaration

```swift
var showsPrintPanel: Bool { get set }
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) if you want to display a print panel; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method does not affect the display of a progress panel; that operation is controlled by the [showsProgressPanel](showsprogresspanel.md) method.

Operations that generate EPS or PDF data do no display a progress panel, regardless of the value in the `flag` parameter.

## See Also

### Modifying the User Interface

- [showsProgressPanel](showsprogresspanel.md): A Boolean value that determines whether the print operation displays a progress panel.
- [jobTitle](jobtitle.md): The custom title of the print job.
- [printPanel](printpanel.md): The print panel object to use during the operation.
- [pdfPanel](pdfpanel.md): The PDF panel object to use during the operation.

# showsPrintPanel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that determines whether the print operation displays a print panel.

## Declaration

```objectivec
@property BOOL showsPrintPanel;
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) if you want to display a print panel; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method does not affect the display of a progress panel; that operation is controlled by the [showsProgressPanel](showsprogresspanel.md) method.

Operations that generate EPS or PDF data do no display a progress panel, regardless of the value in the `flag` parameter.

## See Also

### Modifying the User Interface

- [showsProgressPanel](showsprogresspanel.md): A Boolean value that determines whether the print operation displays a progress panel.
- [jobTitle](jobtitle.md): The custom title of the print job.
- [printPanel](printpanel.md): The print panel object to use during the operation.
- [PDFPanel](pdfpanel.md): The PDF panel object to use during the operation.
