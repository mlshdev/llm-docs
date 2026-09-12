> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintinfo](https://developer.apple.com/documentation/appkit/nsprintinfo)

# NSPrintInfo (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that stores information that’s used to generate printed output.

## Declaration

```swift
class NSPrintInfo
```

<a id="overview"></a>

## Overview

A shared [NSPrintInfo](nsprintinfo.md) object is automatically created for an app and is used by default for all printing jobs for that app. The printing information in an [NSPrintInfo](nsprintinfo.md) object is stored in a dictionary. To access the standard attributes in the dictionary directly, this class defines a set of keys and provides the [dictionary()](nsprintinfo/dictionary%28%29.md) method. You can also initialize an instance of this class using the [init(dictionary:)](nsprintinfo/init%28dictionary_%29.md) method.

You can use this dictionary to store custom information associated with a print job. Any non-object values should be stored as [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) or [NSValue](https://developer.apple.com/documentation/foundation/nsvalue) objects in the dictionary. See [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) for a list of types which should be stored as numbers. For other non-object values, use the [NSValue](https://developer.apple.com/documentation/foundation/nsvalue) class.

To store custom information that belongs in printing presets you should use the dictionary returned by the [printSettings](nsprintinfo/printsettings.md) method.

## Topics

### Creating the Printing Information Object

- [shared](nsprintinfo/shared.md): The shared printing information object.
- [init(dictionary:)](nsprintinfo/init%28dictionary_%29.md): Returns a printing information object initialized with the parameters in the specified dictionary.
- [init()](nsprintinfo/init%28%29.md): Creates a printing information object.
- [init(coder:)](nsprintinfo/init%28coder_%29.md): Creates a printing information object from data in an unarchiver.

### Managing the Printing Rectangle

- [paperSize](nsprintinfo/papersize.md): The size of the paper.
- [topMargin](nsprintinfo/topmargin.md): The top margin to the specified size.
- [bottomMargin](nsprintinfo/bottommargin.md): The height of the bottom margin.
- [leftMargin](nsprintinfo/leftmargin.md): The width of the left margin.
- [rightMargin](nsprintinfo/rightmargin.md): The width of the right margin.
- [imageablePageBounds](nsprintinfo/imageablepagebounds.md): The imageable area of a sheet of paper specified by the print info.
- [orientation](nsprintinfo/orientation-swift.property.md): The orientation attribute.
- [NSPrintInfo.PaperOrientation](nsprintinfo/paperorientation.md): Constants that describe the orientation of printing on a page.
- [paperName](nsprintinfo/papername.md): The name of the currently selected paper size.
- [NSPrinter.PaperName](nsprinter/papername.md): The type you use to specify the name of a type of paper.
- [localizedPaperName](nsprintinfo/localizedpapername.md): The human-readable name of the currently selected paper size, suitable for presentation in user interfaces.

### Pagination

- [horizontalPagination](nsprintinfo/horizontalpagination.md): The horizontal pagination mode.
- [verticalPagination](nsprintinfo/verticalpagination.md): The vertical pagination to the specified mode.
- [NSPrintInfo.PaginationMode](nsprintinfo/paginationmode.md): Constants that specify the different ways in which an image is divided into pages.

### Positioning the Image on the Page

- [isHorizontallyCentered](nsprintinfo/ishorizontallycentered.md): A Boolean value that indicates whether the image is centered horizontally.
- [isVerticallyCentered](nsprintinfo/isverticallycentered.md): A Boolean value that indicates whether the image is centered vertically.

### Specifying the Printer

- [printer](nsprintinfo/printer.md): The printer object to be used for printing.
- [NSPrinter](nsprinter.md): An object that describes a printer’s capabilities.

### Controlling Printing

- [jobDisposition](nsprintinfo/jobdisposition-swift.property.md): The action specified for the job.
- [NSPrintInfo.JobDisposition](nsprintinfo/jobdisposition-swift.struct.md): Constants that specify values for the print job disposition.
- [setUpPrintOperationDefaultValues()](nsprintinfo/setupprintoperationdefaultvalues%28%29.md): Validates the attributes encapsulated by the print info.

### Accessing the Print Info Dictionary

- [dictionary()](nsprintinfo/dictionary%28%29.md): Returns the print info’s dictionary that contains the printing attributes.

### Print Settings Convenience Methods

- [isSelectionOnly](nsprintinfo/isselectiononly.md): A Boolean value that indicates whether only the currently selected contents should be printed.
- [scalingFactor](nsprintinfo/scalingfactor.md): The current scaling factor.

### Accessing Core Printing Information

- [printSettings](nsprintinfo/printsettings.md): A mutable dictionary containing the print settings from Core Printing.
- [NSPrintInfo.SettingKey](nsprintinfo/settingkey.md): The type you use to specify a print info setting key.
- [pmPrintSession()](nsprintinfo/pmprintsession%28%29.md): Returns a Core Printing object configured with the print info’s session information.
- [pmPageFormat()](nsprintinfo/pmpageformat%28%29.md): Returns a Core Printing object configured with the print info’s page format information.
- [pmPrintSettings()](nsprintinfo/pmprintsettings%28%29.md): Returns a Core Printing object configured with the print info’s print settings information
- [updateFromPMPageFormat()](nsprintinfo/updatefrompmpageformat%28%29.md): Synchronizes the print info’s page format information with information from its associated page format object.
- [updateFromPMPrintSettings()](nsprintinfo/updatefrompmprintsettings%28%29.md): Synchronizes the print info’s print settings information with information from its associated print settings object.
- [takeSettings(from:)](nsprintinfo/takesettings%28from_%29.md): Updates the print info with all the settings and attributes in the specified PDF info object.

### Constants

- [NSPrintInfo.AttributeKey](nsprintinfo/attributekey.md): Constants that specify print job attributes.

### Deprecated

- [defaultPrinter](nsprintinfo/defaultprinter.md): Deprecated.
- [NSPrintInfo.Orientation](nsprintinfo/orientation-swift.enum.md): Deprecated. Constants that specify page orientations.
- [Deprecated Printing Keys](deprecated-printing-keys.md): These keys refer to older printing properties that are no longer used.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Print Information

- [NSPrinter](nsprinter.md): An object that describes a printer’s capabilities.
- [NSPrintOperation](nsprintoperation.md): An object that controls operations that generate Encapsulated PostScript (EPS) code, Portable Document Format (PDF) code, or print jobs.

# NSPrintInfo (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that stores information that’s used to generate printed output.

## Declaration

```objectivec
@interface NSPrintInfo : NSObject
```

<a id="overview"></a>

## Overview

A shared [NSPrintInfo](nsprintinfo.md) object is automatically created for an app and is used by default for all printing jobs for that app. The printing information in an [NSPrintInfo](nsprintinfo.md) object is stored in a dictionary. To access the standard attributes in the dictionary directly, this class defines a set of keys and provides the [dictionary](nsprintinfo/dictionary%28%29.md) method. You can also initialize an instance of this class using the [initWithDictionary:](nsprintinfo/init%28dictionary_%29.md) method.

You can use this dictionary to store custom information associated with a print job. Any non-object values should be stored as [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) or [NSValue](https://developer.apple.com/documentation/foundation/nsvalue) objects in the dictionary. See [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) for a list of types which should be stored as numbers. For other non-object values, use the [NSValue](https://developer.apple.com/documentation/foundation/nsvalue) class.

To store custom information that belongs in printing presets you should use the dictionary returned by the [printSettings](nsprintinfo/printsettings.md) method.

## Topics

### Creating the Printing Information Object

- [sharedPrintInfo](nsprintinfo/shared.md): The shared printing information object.
- [initWithDictionary:](nsprintinfo/init%28dictionary_%29.md): Returns a printing information object initialized with the parameters in the specified dictionary.
- [init](nsprintinfo/init%28%29.md): Creates a printing information object.
- [initWithCoder:](nsprintinfo/init%28coder_%29.md): Creates a printing information object from data in an unarchiver.

### Managing the Printing Rectangle

- [paperSize](nsprintinfo/papersize.md): The size of the paper.
- [topMargin](nsprintinfo/topmargin.md): The top margin to the specified size.
- [bottomMargin](nsprintinfo/bottommargin.md): The height of the bottom margin.
- [leftMargin](nsprintinfo/leftmargin.md): The width of the left margin.
- [rightMargin](nsprintinfo/rightmargin.md): The width of the right margin.
- [imageablePageBounds](nsprintinfo/imageablepagebounds.md): The imageable area of a sheet of paper specified by the print info.
- [orientation](nsprintinfo/orientation-swift.property.md): The orientation attribute.
- [NSPaperOrientation](nsprintinfo/paperorientation.md): Constants that describe the orientation of printing on a page.
- [paperName](nsprintinfo/papername.md): The name of the currently selected paper size.
- [NSPrinterPaperName](nsprinter/papername.md): The type you use to specify the name of a type of paper.
- [localizedPaperName](nsprintinfo/localizedpapername.md): The human-readable name of the currently selected paper size, suitable for presentation in user interfaces.

### Pagination

- [horizontalPagination](nsprintinfo/horizontalpagination.md): The horizontal pagination mode.
- [verticalPagination](nsprintinfo/verticalpagination.md): The vertical pagination to the specified mode.
- [NSPrintingPaginationMode](nsprintinfo/paginationmode.md): Constants that specify the different ways in which an image is divided into pages.

### Positioning the Image on the Page

- [horizontallyCentered](nsprintinfo/ishorizontallycentered.md): A Boolean value that indicates whether the image is centered horizontally.
- [verticallyCentered](nsprintinfo/isverticallycentered.md): A Boolean value that indicates whether the image is centered vertically.

### Specifying the Printer

- [printer](nsprintinfo/printer.md): The printer object to be used for printing.
- [NSPrinter](nsprinter.md): An object that describes a printer’s capabilities.

### Controlling Printing

- [jobDisposition](nsprintinfo/jobdisposition-swift.property.md): The action specified for the job.
- [NSPrintJobDispositionValue](nsprintinfo/jobdisposition-swift.struct.md): Constants that specify values for the print job disposition.
- [setUpPrintOperationDefaultValues](nsprintinfo/setupprintoperationdefaultvalues%28%29.md): Validates the attributes encapsulated by the print info.

### Accessing the Print Info Dictionary

- [dictionary](nsprintinfo/dictionary%28%29.md): Returns the print info’s dictionary that contains the printing attributes.

### Print Settings Convenience Methods

- [selectionOnly](nsprintinfo/isselectiononly.md): A Boolean value that indicates whether only the currently selected contents should be printed.
- [scalingFactor](nsprintinfo/scalingfactor.md): The current scaling factor.

### Accessing Core Printing Information

- [printSettings](nsprintinfo/printsettings.md): A mutable dictionary containing the print settings from Core Printing.
- [NSPrintInfoSettingKey](nsprintinfo/settingkey.md): The type you use to specify a print info setting key.
- [PMPrintSession](nsprintinfo/pmprintsession%28%29.md): Returns a Core Printing object configured with the print info’s session information.
- [PMPageFormat](nsprintinfo/pmpageformat%28%29.md): Returns a Core Printing object configured with the print info’s page format information.
- [PMPrintSettings](nsprintinfo/pmprintsettings%28%29.md): Returns a Core Printing object configured with the print info’s print settings information
- [updateFromPMPageFormat](nsprintinfo/updatefrompmpageformat%28%29.md): Synchronizes the print info’s page format information with information from its associated page format object.
- [updateFromPMPrintSettings](nsprintinfo/updatefrompmprintsettings%28%29.md): Synchronizes the print info’s print settings information with information from its associated print settings object.
- [takeSettingsFromPDFInfo:](nsprintinfo/takesettings%28from_%29.md): Updates the print info with all the settings and attributes in the specified PDF info object.

### Constants

- [NSPrintInfoAttributeKey](nsprintinfo/attributekey.md): Constants that specify print job attributes.

### Deprecated

- [defaultPrinter](nsprintinfo/defaultprinter.md): Deprecated.
- [setDefaultPrinter:](nsprintinfo/setdefaultprinter_.md): Deprecated. Deprecated.
- [sizeForPaperName:](nsprintinfo/sizeforpapername_.md): Deprecated. Deprecated.
- [NSPrintingOrientation](nsprintinfo/orientation-swift.enum.md): Deprecated. Constants that specify page orientations.
- [Deprecated Printing Keys](deprecated-printing-keys.md): These keys refer to older printing properties that are no longer used.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Print Information

- [NSPrinter](nsprinter.md): An object that describes a printer’s capabilities.
- [NSPrintOperation](nsprintoperation.md): An object that controls operations that generate Encapsulated PostScript (EPS) code, Portable Document Format (PDF) code, or print jobs.
