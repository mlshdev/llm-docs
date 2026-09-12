> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprinter/init(type:)](https://developer.apple.com/documentation/appkit/nsprinter/init(type:))

# init(type:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Creates and returns a printer object initialized to the first available printer with the specified make and model information.

## Declaration

```swift
init?(type: NSPrinter.TypeName)
```

## Parameters

- `type`: A string describing the make and model information. You can get this string using the [printerTypes](printertypes.md) method.

<a id="return-value"></a>

## Return Value

An initialized `NSPrinter` object, or `nil` if the specified printer was not available.

## See Also

### Related Documentation

- [type](type.md): A description of the printer’s make and model.

### Creating the Printer Object

- [init(name:)](init%28name_%29.md): Creates and returns a printer object initialized with the specified printer name.

# printerWithType: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and returns a printer object initialized to the first available printer with the specified make and model information.

## Declaration

```objectivec
+ (NSPrinter *) printerWithType:(NSPrinterTypeName) type;
```

## Parameters

- `type`: A string describing the make and model information. You can get this string using the [printerTypes](printertypes.md) method.

<a id="return-value"></a>

## Return Value

An initialized `NSPrinter` object, or `nil` if the specified printer was not available.

## See Also

### Related Documentation

- [type](type.md): A description of the printer’s make and model.

### Creating the Printer Object

- [printerWithName:](init%28name_%29.md): Creates and returns a printer object initialized with the specified printer name.
