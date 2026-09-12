> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/pageorder-swift.property](https://developer.apple.com/documentation/appkit/nsprintoperation/pageorder-swift.property)

# pageOrder (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The print order for the pages of the operation.

## Declaration

```swift
var pageOrder: NSPrintOperation.PageOrder { get set }
```

## Parameters

- `order`: The print order. For a list of possible values, see [NSPrintOperation.PageOrder](pageorder-swift.enum.md).

## See Also

### Managing Page Information

- [currentPage](currentpage.md): The current page number being printed.
- [pageRange](pagerange.md): The range of pages associated with the print operation.
- [NSPrintOperation.PageOrder](pageorder-swift.enum.md): Constants that specify the page order.

# pageOrder (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The print order for the pages of the operation.

## Declaration

```objectivec
@property NSPrintingPageOrder pageOrder;
```

## Parameters

- `order`: The print order. For a list of possible values, see [NSPrintingPageOrder](pageorder-swift.enum.md).

## See Also

### Managing Page Information

- [currentPage](currentpage.md): The current page number being printed.
- [pageRange](pagerange.md): The range of pages associated with the print operation.
- [NSPrintingPageOrder](pageorder-swift.enum.md): Constants that specify the page order.
