> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprinter/pagesize(forpaper:)](https://developer.apple.com/documentation/appkit/nsprinter/pagesize(forpaper:))

# pageSize(forPaper:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the size of the page for the specified paper type.

## Declaration

```swift
func pageSize(forPaper paperName: NSPrinter.PaperName) -> NSSize
```

## Parameters

- `paperName`: Possible values are printer-dependent and are contained in the printer’s PPD file. Typical values are “Letter” and “Legal”.

<a id="return-value"></a>

## Return Value

The size of the page, measured in points in the user coordinate space. The returned size is zero if the specified paper name is not recognized or its entry in the PPD file cannot be parsed.

## See Also

### Getting Page and Printer Information

- [NSPrinter.PaperName](papername.md): The type you use to specify the name of a type of paper.
- [languageLevel](languagelevel.md): The PostScript language level recognized by the printer.

# pageSizeForPaper: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the size of the page for the specified paper type.

## Declaration

```objectivec
- (NSSize) pageSizeForPaper:(NSPrinterPaperName) paperName;
```

## Parameters

- `paperName`: Possible values are printer-dependent and are contained in the printer’s PPD file. Typical values are “Letter” and “Legal”.

<a id="return-value"></a>

## Return Value

The size of the page, measured in points in the user coordinate space. The returned size is zero if the specified paper name is not recognized or its entry in the PPD file cannot be parsed.

## See Also

### Related Documentation

- [imageRectForPaper:](imagerectforpaper_.md): Deprecated. Deprecated.

### Getting Page and Printer Information

- [NSPrinterPaperName](papername.md): The type you use to specify the name of a type of paper.
- [languageLevel](languagelevel.md): The PostScript language level recognized by the printer.
