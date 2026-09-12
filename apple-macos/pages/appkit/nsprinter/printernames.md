> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprinter/printernames](https://developer.apple.com/documentation/appkit/nsprinter/printernames)

# printerNames (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the names of all available printers.

## Declaration

```swift
class var printerNames: [String] { get }
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which contains the name of an available printer.

<a id="Discussion"></a>

## Discussion

The user constructs the list of available printers when adding a printer in the Print panel or setting up printers in the Print & Scan preferences pane.

## See Also

### Related Documentation

- [name](name.md): The printer’s name.

### Getting General Printer Information

- [printerTypes](printertypes.md): Returns descriptions of the makes and models of all available printers.
- [NSPrinter.TypeName](typename.md): The type you use to describe a printer’s make and model.

# printerNames (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the names of all available printers.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSString *> * printerNames;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which contains the name of an available printer.

<a id="Discussion"></a>

## Discussion

The user constructs the list of available printers when adding a printer in the Print panel or setting up printers in the Print & Scan preferences pane.

## See Also

### Related Documentation

- [name](name.md): The printer’s name.

### Getting General Printer Information

- [printerTypes](printertypes.md): Returns descriptions of the makes and models of all available printers.
- [NSPrinterTypeName](typename.md): The type you use to describe a printer’s make and model.
