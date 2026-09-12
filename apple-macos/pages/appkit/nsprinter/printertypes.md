> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprinter/printertypes](https://developer.apple.com/documentation/appkit/nsprinter/printertypes)

# printerTypes (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns descriptions of the makes and models of all available printers.

## Declaration

```swift
class var printerTypes: [NSPrinter.TypeName] { get }
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which contains the make and model information for a supported printer.

## See Also

### Related Documentation

- [type](type.md): A description of the printer’s make and model.

### Getting General Printer Information

- [printerNames](printernames.md): Returns the names of all available printers.
- [NSPrinter.TypeName](typename.md): The type you use to describe a printer’s make and model.

# printerTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns descriptions of the makes and models of all available printers.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSString *> * printerTypes;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which contains the make and model information for a supported printer.

## See Also

### Related Documentation

- [type](type.md): A description of the printer’s make and model.

### Getting General Printer Information

- [printerNames](printernames.md): Returns the names of all available printers.
- [NSPrinterTypeName](typename.md): The type you use to describe a printer’s make and model.
