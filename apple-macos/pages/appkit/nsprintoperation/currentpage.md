> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/currentpage](https://developer.apple.com/documentation/appkit/nsprintoperation/currentpage)

# currentPage (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The current page number being printed.

## Declaration

```swift
var currentPage: Int { get }
```

<a id="return-value"></a>

## Return Value

The current page being printed.

## See Also

### Managing Page Information

- [pageRange](pagerange.md): The range of pages associated with the print operation.
- [pageOrder](pageorder-swift.property.md): The print order for the pages of the operation.
- [NSPrintOperation.PageOrder](pageorder-swift.enum.md): Constants that specify the page order.

# currentPage (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The current page number being printed.

## Declaration

```objectivec
@property (readonly) NSInteger currentPage;
```

<a id="return-value"></a>

## Return Value

The current page being printed.

## See Also

### Managing Page Information

- [pageRange](pagerange.md): The range of pages associated with the print operation.
- [pageOrder](pageorder-swift.property.md): The print order for the pages of the operation.
- [NSPrintingPageOrder](pageorder-swift.enum.md): Constants that specify the page order.
