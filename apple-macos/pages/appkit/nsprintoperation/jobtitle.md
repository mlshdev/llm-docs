> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/jobtitle](https://developer.apple.com/documentation/appkit/nsprintoperation/jobtitle)

# jobTitle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The custom title of the print job.

## Declaration

```swift
var jobTitle: String? { get set }
```

## Parameters

- `jobTitle`: The print job title. The receiver makes its own copy of the specified string.

<a id="Discussion"></a>

## Discussion

Assigning a title with this method overrides the job title provided by the printing view’s [printJobTitle](../nsview/printjobtitle.md) method. Specifying `nil` for the `jobTitle` parameter causes the receiver to once again take its title from the printing view.

## See Also

### Related Documentation

- [printJobTitle](../nsview/printjobtitle.md): The view’s print job title.

### Modifying the User Interface

- [showsPrintPanel](showsprintpanel.md): A Boolean value that determines whether the print operation displays a print panel.
- [showsProgressPanel](showsprogresspanel.md): A Boolean value that determines whether the print operation displays a progress panel.
- [printPanel](printpanel.md): The print panel object to use during the operation.
- [pdfPanel](pdfpanel.md): The PDF panel object to use during the operation.

# jobTitle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The custom title of the print job.

## Declaration

```objectivec
@property (copy, nullable) NSString * jobTitle;
```

## Parameters

- `jobTitle`: The print job title. The receiver makes its own copy of the specified string.

<a id="Discussion"></a>

## Discussion

Assigning a title with this method overrides the job title provided by the printing view’s [printJobTitle](../nsview/printjobtitle.md) method. Specifying `nil` for the `jobTitle` parameter causes the receiver to once again take its title from the printing view.

## See Also

### Related Documentation

- [printJobTitle](../nsview/printjobtitle.md): The view’s print job title.

### Modifying the User Interface

- [showsPrintPanel](showsprintpanel.md): A Boolean value that determines whether the print operation displays a print panel.
- [showsProgressPanel](showsprogresspanel.md): A Boolean value that determines whether the print operation displays a progress panel.
- [printPanel](printpanel.md): The print panel object to use during the operation.
- [PDFPanel](pdfpanel.md): The PDF panel object to use during the operation.
