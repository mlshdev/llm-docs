> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprinter](https://developer.apple.com/documentation/appkit/nsprinter)

# NSPrinter (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that describes a printer’s capabilities.

## Declaration

```swift
class NSPrinter
```

<a id="overview"></a>

## Overview

[NSPrinter](nsprinter.md) provides information about a printer; it does not modify printer attributes or control a printing job. A printer object can be constructed by specifying either the printer name or the make and model of an available printer. Typically, Cocoa apps don’t create [NSPrinter](nsprinter.md) objects; instead, the printing system uses these objects to support the printing jobs and when it shows users a list of printers.

## Topics

### Creating the Printer Object

- [init(name:)](nsprinter/init%28name_%29.md): Creates and returns a printer object initialized with the specified printer name.
- [init(type:)](nsprinter/init%28type_%29.md): Creates and returns a printer object initialized to the first available printer with the specified make and model information.

### Getting General Printer Information

- [printerNames](nsprinter/printernames.md): Returns the names of all available printers.
- [printerTypes](nsprinter/printertypes.md): Returns descriptions of the makes and models of all available printers.
- [NSPrinter.TypeName](nsprinter/typename.md): The type you use to describe a printer’s make and model.

### Getting Attributes

- [name](nsprinter/name.md): The printer’s name.
- [type](nsprinter/type.md): A description of the printer’s make and model.

### Getting Page and Printer Information

- [pageSize(forPaper:)](nsprinter/pagesize%28forpaper_%29.md): Returns the size of the page for the specified paper type.
- [NSPrinter.PaperName](nsprinter/papername.md): The type you use to specify the name of a type of paper.
- [languageLevel](nsprinter/languagelevel.md): The PostScript language level recognized by the printer.

### Querying Tables

- [deviceDescription](nsprinter/devicedescription.md): A dictionary of keys and values that describe the device.

### Deprecated

- [NSPrinter.TableStatus](nsprinter/tablestatus.md): Constants that describe the state of a printer information table stored by a printer object.

### Initializers

- [init(coder:)](nsprinter/init%28coder_%29.md)

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

- [NSPrintInfo](nsprintinfo.md): An object that stores information that’s used to generate printed output.
- [NSPrintOperation](nsprintoperation.md): An object that controls operations that generate Encapsulated PostScript (EPS) code, Portable Document Format (PDF) code, or print jobs.

# NSPrinter (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that describes a printer’s capabilities.

## Declaration

```objectivec
@interface NSPrinter : NSObject
```

<a id="overview"></a>

## Overview

[NSPrinter](nsprinter.md) provides information about a printer; it does not modify printer attributes or control a printing job. A printer object can be constructed by specifying either the printer name or the make and model of an available printer. Typically, Cocoa apps don’t create [NSPrinter](nsprinter.md) objects; instead, the printing system uses these objects to support the printing jobs and when it shows users a list of printers.

## Topics

### Creating the Printer Object

- [printerWithName:](nsprinter/init%28name_%29.md): Creates and returns a printer object initialized with the specified printer name.
- [printerWithType:](nsprinter/init%28type_%29.md): Creates and returns a printer object initialized to the first available printer with the specified make and model information.

### Getting General Printer Information

- [printerNames](nsprinter/printernames.md): Returns the names of all available printers.
- [printerTypes](nsprinter/printertypes.md): Returns descriptions of the makes and models of all available printers.
- [NSPrinterTypeName](nsprinter/typename.md): The type you use to describe a printer’s make and model.

### Getting Attributes

- [name](nsprinter/name.md): The printer’s name.
- [type](nsprinter/type.md): A description of the printer’s make and model.

### Getting Page and Printer Information

- [pageSizeForPaper:](nsprinter/pagesize%28forpaper_%29.md): Returns the size of the page for the specified paper type.
- [NSPrinterPaperName](nsprinter/papername.md): The type you use to specify the name of a type of paper.
- [languageLevel](nsprinter/languagelevel.md): The PostScript language level recognized by the printer.

### Querying Tables

- [deviceDescription](nsprinter/devicedescription.md): A dictionary of keys and values that describe the device.

### Deprecated

- [isKey:inTable:](nsprinter/iskey_intable_.md): Deprecated. Returns a Boolean value that indicates whether the specified key is in the specified table.
- [stringForKey:inTable:](nsprinter/stringforkey_intable_.md): Deprecated. Returns the first occurrence of a value associated with specified key.
- [stringListForKey:inTable:](nsprinter/stringlistforkey_intable_.md): Deprecated. Returns an array of strings, one for each occurrence, associated with specified key.
- [booleanForKey:inTable:](nsprinter/booleanforkey_intable_.md): Deprecated. Returns the Boolean value associated with the specified key.
- [floatForKey:inTable:](nsprinter/floatforkey_intable_.md): Deprecated. Returns the floating-point value associated with the specified key.
- [intForKey:inTable:](nsprinter/intforkey_intable_.md): Deprecated. Returns the integer value associated with the specified key.
- [rectForKey:inTable:](nsprinter/rectforkey_intable_.md): Deprecated. Returns the rectangle associated with the specified key.
- [sizeForKey:inTable:](nsprinter/sizeforkey_intable_.md): Deprecated. Returns the size data type associated with the specified key.
- [statusForTable:](nsprinter/statusfortable_.md): Deprecated. Returns the status of the specified table.
- [NSPrinterTableStatus](nsprinter/tablestatus.md): Constants that describe the state of a printer information table stored by a printer object.
- [printerWithName:domain:includeUnavailable:](nsprinter/printerwithname_domain_includeunavailable_.md): Deprecated. Deprecated.
- [acceptsBinary](nsprinter/acceptsbinary.md): Deprecated. Deprecated.
- [domain](nsprinter/domain.md): Deprecated. Deprecated.
- [host](nsprinter/host.md): Deprecated. Deprecated.
- [imageRectForPaper:](nsprinter/imagerectforpaper_.md): Deprecated. Deprecated.
- [isColor](nsprinter/iscolor.md): Deprecated. Deprecated.
- [isFontAvailable:](nsprinter/isfontavailable_.md): Deprecated. Deprecated.
- [isOutputStackInReverseOrder](nsprinter/isoutputstackinreverseorder.md): Deprecated. Deprecated.
- [note](nsprinter/note.md): Deprecated. Deprecated.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Print Information

- [NSPrintInfo](nsprintinfo.md): An object that stores information that’s used to generate printed output.
- [NSPrintOperation](nsprintoperation.md): An object that controls operations that generate Encapsulated PostScript (EPS) code, Portable Document Format (PDF) code, or print jobs.
