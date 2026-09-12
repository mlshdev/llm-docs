> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation](https://developer.apple.com/documentation/appkit/nsprintoperation)

# NSPrintOperation (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that controls operations that generate Encapsulated PostScript (EPS) code, Portable Document Format (PDF) code, or print jobs.

## Declaration

```swift
@MainActor class NSPrintOperation
```

<a id="overview"></a>

## Overview

An [NSPrintOperation](nsprintoperation.md) object works in conjunction with two other objects: an [NSPrintInfo](nsprintinfo.md) object, which specifies how the code should be generated, and an [NSView](nsview.md) object, which generates the actual code.

It is important to note that the majority of methods in [NSPrintOperation](nsprintoperation.md) copy the instance of [NSPrintInfo](nsprintinfo.md) passed into them. Future changes to that print info are not reflected in the print info retained by the current [NSPrintOperation](nsprintoperation.md) object. All changes should be made to the print info before passing to the methods of this class. The only method in [NSPrintOperation](nsprintoperation.md) which does not copy the [NSPrintInfo](nsprintinfo.md) instance is [printInfo](nsprintoperation/printinfo.md).

> **Note**

>  You should not subclass [NSPrintOperation](nsprintoperation.md). Methods that return a print operation object return an instance of a concrete subclass whose implementation is private.

## Topics

### Creating the Printing Operation Object

- [epsOperation(with:inside:to:)](nsprintoperation/epsoperation%28with_inside_to_%29.md): Creates and returns a new print operation object ready to control the copying of EPS graphics from the specified view.
- [epsOperation(with:inside:to:printInfo:)](nsprintoperation/epsoperation%28with_inside_to_printinfo_%29.md): Creates and returns a new print operation object ready to control the copying of EPS graphics from the specified view using the specified print settings.
- [epsOperation(with:inside:toPath:printInfo:)](nsprintoperation/epsoperation%28with_inside_topath_printinfo_%29.md): Creates and returns a new print operation object ready to control the copying of EPS graphics from the specified view and write the resulting data to the specified file.
- [pdfOperation(with:inside:to:)](nsprintoperation/pdfoperation%28with_inside_to_%29.md): Creates and returns a new print operation object ready to control the copying of PDF graphics from the specified view.
- [pdfOperation(with:inside:to:printInfo:)](nsprintoperation/pdfoperation%28with_inside_to_printinfo_%29.md): Creates and returns a new print operation object ready to control the copying of PDF graphics from the specified view using the specified print settings.
- [pdfOperation(with:inside:toPath:printInfo:)](nsprintoperation/pdfoperation%28with_inside_topath_printinfo_%29.md): Creates and returns a new print operation object ready to control the copying of PDF graphics from the specified view and write the resulting data to the specified file.
- [init(view:)](nsprintoperation/init%28view_%29.md): Creates and returns an print operation object ready to control the printing of the specified view.
- [init(view:printInfo:)](nsprintoperation/init%28view_printinfo_%29.md): Creates and returns an print operation object ready to control the printing of the specified view using custom print settings.

### Setting the Current Print Operation for This Thread

- [current](nsprintoperation/current.md): The current print operation for this thread.

### Determining the Type of Operation

- [isCopyingOperation](nsprintoperation/iscopyingoperation.md): A Boolean value that indicates whether the print operation is an EPS or PDF copy operation.

### Modifying the Printing Information

- [printInfo](nsprintoperation/printinfo.md): The printing information associated with the print operation.
- [NSPrintInfo](nsprintinfo.md): An object that stores information that’s used to generate printed output.

### Getting the View

- [view](nsprintoperation/view.md): The view object that generates the actual data for the print operation.

### Getting the Printing Quality

- [preferredRenderingQuality](nsprintoperation/preferredrenderingquality.md): The printing quality.
- [NSPrintOperation.RenderingQuality](nsprintoperation/renderingquality.md): Constants that specify the print quality in use.

### Running the Print Operation

- [run()](nsprintoperation/run%28%29.md): Runs the print operation on the current thread.
- [runModal(for:delegate:didRun:contextInfo:)](nsprintoperation/runmodal%28for_delegate_didrun_contextinfo_%29.md): Runs the print operation, calling your custom delegate method upon completion.
- [cleanUp()](nsprintoperation/cleanup%28%29.md): Called at the end of a print operation to remove the print operation as the current operation.
- [deliverResult()](nsprintoperation/deliverresult%28%29.md): Delivers the results of the print operation to the intended destination.

### Modifying the User Interface

- [showsPrintPanel](nsprintoperation/showsprintpanel.md): A Boolean value that determines whether the print operation displays a print panel.
- [showsProgressPanel](nsprintoperation/showsprogresspanel.md): A Boolean value that determines whether the print operation displays a progress panel.
- [jobTitle](nsprintoperation/jobtitle.md): The custom title of the print job.
- [printPanel](nsprintoperation/printpanel.md): The print panel object to use during the operation.
- [pdfPanel](nsprintoperation/pdfpanel.md): The PDF panel object to use during the operation.

### Managing the Drawing Context

- [context](nsprintoperation/context.md): The graphics context object used for generating output.
- [createContext()](nsprintoperation/createcontext%28%29.md): Creates the graphics context object used for drawing during the operation.
- [destroyContext()](nsprintoperation/destroycontext%28%29.md): Destroys the print operation’s graphics context.

### Managing Page Information

- [currentPage](nsprintoperation/currentpage.md): The current page number being printed.
- [pageRange](nsprintoperation/pagerange.md): The range of pages associated with the print operation.
- [pageOrder](nsprintoperation/pageorder-swift.property.md): The print order for the pages of the operation.
- [NSPrintOperation.PageOrder](nsprintoperation/pageorder-swift.enum.md): Constants that specify the page order.

### Managing Printing Threads

- [canSpawnSeparateThread](nsprintoperation/canspawnseparatethread.md): A Boolean value that determines whether the print operation is allowed to spawn a separate printing thread.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Print Information

- [NSPrinter](nsprinter.md): An object that describes a printer’s capabilities.
- [NSPrintInfo](nsprintinfo.md): An object that stores information that’s used to generate printed output.

# NSPrintOperation (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that controls operations that generate Encapsulated PostScript (EPS) code, Portable Document Format (PDF) code, or print jobs.

## Declaration

```objectivec
@interface NSPrintOperation : NSObject
```

<a id="overview"></a>

## Overview

An [NSPrintOperation](nsprintoperation.md) object works in conjunction with two other objects: an [NSPrintInfo](nsprintinfo.md) object, which specifies how the code should be generated, and an [NSView](nsview.md) object, which generates the actual code.

It is important to note that the majority of methods in [NSPrintOperation](nsprintoperation.md) copy the instance of [NSPrintInfo](nsprintinfo.md) passed into them. Future changes to that print info are not reflected in the print info retained by the current [NSPrintOperation](nsprintoperation.md) object. All changes should be made to the print info before passing to the methods of this class. The only method in [NSPrintOperation](nsprintoperation.md) which does not copy the [NSPrintInfo](nsprintinfo.md) instance is [printInfo](nsprintoperation/printinfo.md).

> **Note**

>  You should not subclass [NSPrintOperation](nsprintoperation.md). Methods that return a print operation object return an instance of a concrete subclass whose implementation is private.

## Topics

### Creating the Printing Operation Object

- [EPSOperationWithView:insideRect:toData:](nsprintoperation/epsoperation%28with_inside_to_%29.md): Creates and returns a new print operation object ready to control the copying of EPS graphics from the specified view.
- [EPSOperationWithView:insideRect:toData:printInfo:](nsprintoperation/epsoperation%28with_inside_to_printinfo_%29.md): Creates and returns a new print operation object ready to control the copying of EPS graphics from the specified view using the specified print settings.
- [EPSOperationWithView:insideRect:toPath:printInfo:](nsprintoperation/epsoperation%28with_inside_topath_printinfo_%29.md): Creates and returns a new print operation object ready to control the copying of EPS graphics from the specified view and write the resulting data to the specified file.
- [PDFOperationWithView:insideRect:toData:](nsprintoperation/pdfoperation%28with_inside_to_%29.md): Creates and returns a new print operation object ready to control the copying of PDF graphics from the specified view.
- [PDFOperationWithView:insideRect:toData:printInfo:](nsprintoperation/pdfoperation%28with_inside_to_printinfo_%29.md): Creates and returns a new print operation object ready to control the copying of PDF graphics from the specified view using the specified print settings.
- [PDFOperationWithView:insideRect:toPath:printInfo:](nsprintoperation/pdfoperation%28with_inside_topath_printinfo_%29.md): Creates and returns a new print operation object ready to control the copying of PDF graphics from the specified view and write the resulting data to the specified file.
- [printOperationWithView:](nsprintoperation/init%28view_%29.md): Creates and returns an print operation object ready to control the printing of the specified view.
- [printOperationWithView:printInfo:](nsprintoperation/init%28view_printinfo_%29.md): Creates and returns an print operation object ready to control the printing of the specified view using custom print settings.

### Setting the Current Print Operation for This Thread

- [currentOperation](nsprintoperation/current.md): The current print operation for this thread.

### Determining the Type of Operation

- [copyingOperation](nsprintoperation/iscopyingoperation.md): A Boolean value that indicates whether the print operation is an EPS or PDF copy operation.

### Modifying the Printing Information

- [printInfo](nsprintoperation/printinfo.md): The printing information associated with the print operation.
- [NSPrintInfo](nsprintinfo.md): An object that stores information that’s used to generate printed output.

### Getting the View

- [view](nsprintoperation/view.md): The view object that generates the actual data for the print operation.

### Getting the Printing Quality

- [preferredRenderingQuality](nsprintoperation/preferredrenderingquality.md): The printing quality.
- [NSPrintRenderingQuality](nsprintoperation/renderingquality.md): Constants that specify the print quality in use.

### Running the Print Operation

- [runOperation](nsprintoperation/run%28%29.md): Runs the print operation on the current thread.
- [runOperationModalForWindow:delegate:didRunSelector:contextInfo:](nsprintoperation/runmodal%28for_delegate_didrun_contextinfo_%29.md): Runs the print operation, calling your custom delegate method upon completion.
- [cleanUpOperation](nsprintoperation/cleanup%28%29.md): Called at the end of a print operation to remove the print operation as the current operation.
- [deliverResult](nsprintoperation/deliverresult%28%29.md): Delivers the results of the print operation to the intended destination.

### Modifying the User Interface

- [showsPrintPanel](nsprintoperation/showsprintpanel.md): A Boolean value that determines whether the print operation displays a print panel.
- [showsProgressPanel](nsprintoperation/showsprogresspanel.md): A Boolean value that determines whether the print operation displays a progress panel.
- [jobTitle](nsprintoperation/jobtitle.md): The custom title of the print job.
- [printPanel](nsprintoperation/printpanel.md): The print panel object to use during the operation.
- [PDFPanel](nsprintoperation/pdfpanel.md): The PDF panel object to use during the operation.

### Managing the Drawing Context

- [context](nsprintoperation/context.md): The graphics context object used for generating output.
- [createContext](nsprintoperation/createcontext%28%29.md): Creates the graphics context object used for drawing during the operation.
- [destroyContext](nsprintoperation/destroycontext%28%29.md): Destroys the print operation’s graphics context.

### Managing Page Information

- [currentPage](nsprintoperation/currentpage.md): The current page number being printed.
- [pageRange](nsprintoperation/pagerange.md): The range of pages associated with the print operation.
- [pageOrder](nsprintoperation/pageorder-swift.property.md): The print order for the pages of the operation.
- [NSPrintingPageOrder](nsprintoperation/pageorder-swift.enum.md): Constants that specify the page order.

### Managing Printing Threads

- [canSpawnSeparateThread](nsprintoperation/canspawnseparatethread.md): A Boolean value that determines whether the print operation is allowed to spawn a separate printing thread.

### Deprecated

- [jobStyleHint](nsprintoperation/jobstylehint.md): Deprecated. The type of content that the print job is printing.
- [setJobStyleHint:](nsprintoperation/setjobstylehint_.md): Deprecated. Sets the type of content that the print job is printing.
- [accessoryView](nsprintoperation/accessoryview.md): Deprecated. Returns the accessory view used by the print operation’s print panel.
- [setAccessoryView:](nsprintoperation/setaccessoryview_.md): Deprecated. Sets the custom accessory view to be displayed by the print operation’s print panel.
- [showPanels](nsprintoperation/showpanels.md): Deprecated. Returns a Boolean value that indicates whether the print panel is to be displayed.
- [setShowPanels:](nsprintoperation/setshowpanels_.md): Deprecated. Sets whether the print operation should display a print panel.

### Constants

- [NSPrintOperationExistsException](nsprintoperationexistsexception.md): The name of an exception raised when there is already a print operation in process.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Print Information

- [NSPrinter](nsprinter.md): An object that describes a printer’s capabilities.
- [NSPrintInfo](nsprintinfo.md): An object that stores information that’s used to generate printed output.
