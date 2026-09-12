> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprinter/init(name:)](https://developer.apple.com/documentation/appkit/nsprinter/init(name:))

# init(name:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Creates and returns a printer object initialized with the specified printer name.

## Declaration

```swift
init?(name: String)
```

## Parameters

- `name`: The name of the printer.

<a id="return-value"></a>

## Return Value

An initialized `NSPrinter` object, or `nil` if the specified printer was not available.

## See Also

### Related Documentation

- [name](name.md): The printer’s name.
- [NSPrinter](../nsprinter.md): An object that describes a printer’s capabilities.
- [printerNames](printernames.md): Returns the names of all available printers.

### Creating the Printer Object

- [init(type:)](init%28type_%29.md): Creates and returns a printer object initialized to the first available printer with the specified make and model information.

# printerWithName: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and returns a printer object initialized with the specified printer name.

## Declaration

```objectivec
+ (NSPrinter *) printerWithName:(NSString *) name;
```

## Parameters

- `name`: The name of the printer.

<a id="return-value"></a>

## Return Value

An initialized `NSPrinter` object, or `nil` if the specified printer was not available.

## See Also

### Related Documentation

- [name](name.md): The printer’s name.
- [NSPrinter](../nsprinter.md): An object that describes a printer’s capabilities.
- [printerNames](printernames.md): Returns the names of all available printers.

### Creating the Printer Object

- [printerWithType:](init%28type_%29.md): Creates and returns a printer object initialized to the first available printer with the specified make and model information.
