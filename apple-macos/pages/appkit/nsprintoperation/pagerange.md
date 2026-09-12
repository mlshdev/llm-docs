> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/pagerange](https://developer.apple.com/documentation/appkit/nsprintoperation/pagerange)

# pageRange (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The range of pages associated with the print operation.

## Declaration

```swift
var pageRange: NSRange { get }
```

<a id="return-value"></a>

## Return Value

The range of page numbers. Page numbers are one-based values where the index of page one is 1, the index of page two is 2, and so on. Depending on the information returned by the printing view, the starting page number may not be 1.  Also, if the number of pages being printed is not known, the page count may be set to `NSIntegerMax`.

## See Also

### Related Documentation

- [knowsPageRange(\_:)](../nsview/knowspagerange%28__%29.md): Returns a Boolean value that indicates whether the view handles page boundaries.

### Managing Page Information

- [currentPage](currentpage.md): The current page number being printed.
- [pageOrder](pageorder-swift.property.md): The print order for the pages of the operation.
- [NSPrintOperation.PageOrder](pageorder-swift.enum.md): Constants that specify the page order.

# pageRange (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The range of pages associated with the print operation.

## Declaration

```objectivec
@property (readonly) NSRange pageRange;
```

<a id="return-value"></a>

## Return Value

The range of page numbers. Page numbers are one-based values where the index of page one is 1, the index of page two is 2, and so on. Depending on the information returned by the printing view, the starting page number may not be 1.  Also, if the number of pages being printed is not known, the page count may be set to `NSIntegerMax`.

## See Also

### Related Documentation

- [knowsPageRange:](../nsview/knowspagerange%28__%29.md): Returns a Boolean value that indicates whether the view handles page boundaries.

### Managing Page Information

- [currentPage](currentpage.md): The current page number being printed.
- [pageOrder](pageorder-swift.property.md): The print order for the pages of the operation.
- [NSPrintingPageOrder](pageorder-swift.enum.md): Constants that specify the page order.
