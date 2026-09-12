> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprinter/languagelevel](https://developer.apple.com/documentation/appkit/nsprinter/languagelevel)

# languageLevel (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The PostScript language level recognized by the printer.

## Declaration

```swift
var languageLevel: Int { get }
```

<a id="return-value"></a>

## Return Value

The PostScript language level. The value is 0 if the receiver is not a PostScript printer.

## See Also

### Getting Page and Printer Information

- [pageSize(forPaper:)](pagesize%28forpaper_%29.md): Returns the size of the page for the specified paper type.
- [NSPrinter.PaperName](papername.md): The type you use to specify the name of a type of paper.

# languageLevel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The PostScript language level recognized by the printer.

## Declaration

```objectivec
@property (readonly) NSInteger languageLevel;
```

<a id="return-value"></a>

## Return Value

The PostScript language level. The value is 0 if the receiver is not a PostScript printer.

## See Also

### Getting Page and Printer Information

- [pageSizeForPaper:](pagesize%28forpaper_%29.md): Returns the size of the page for the specified paper type.
- [NSPrinterPaperName](papername.md): The type you use to specify the name of a type of paper.
