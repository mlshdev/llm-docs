> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/pageorder-swift.enum](https://developer.apple.com/documentation/appkit/nsprintoperation/pageorder-swift.enum)

# NSPrintOperation.PageOrder (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that specify the page order.

## Declaration

```swift
enum PageOrder
```

<a id="overview"></a>

## Overview

These constants are used by [pageOrder](pageorder-swift.property.md) and [pageOrder](pageorder-swift.property.md).

## Topics

### Constants

- [NSPrintOperation.PageOrder.ascendingPageOrder](pageorder-swift.enum/ascendingpageorder.md): Ascending (back to front) page order.
- [NSPrintOperation.PageOrder.descendingPageOrder](pageorder-swift.enum/descendingpageorder.md): Descending (front to back) page order.
- [NSPrintOperation.PageOrder.specialPageOrder](pageorder-swift.enum/specialpageorder.md): The spooler does not rearrange pages—they are printed in the order received by the spooler.
- [NSPrintOperation.PageOrder.unknownPageOrder](pageorder-swift.enum/unknownpageorder.md): No page order specified.

### Initializers

- [init(rawValue:)](pageorder-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Page Information

- [currentPage](currentpage.md): The current page number being printed.
- [pageRange](pagerange.md): The range of pages associated with the print operation.
- [pageOrder](pageorder-swift.property.md): The print order for the pages of the operation.

# NSPrintingPageOrder (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that specify the page order.

## Declaration

```objectivec
enum NSPrintingPageOrder : NSInteger;
```

<a id="overview"></a>

## Overview

These constants are used by [pageOrder](pageorder-swift.property.md) and [pageOrder](pageorder-swift.property.md).

## Topics

### Constants

- [NSAscendingPageOrder](pageorder-swift.enum/ascendingpageorder.md): Ascending (back to front) page order.
- [NSDescendingPageOrder](pageorder-swift.enum/descendingpageorder.md): Descending (front to back) page order.
- [NSSpecialPageOrder](pageorder-swift.enum/specialpageorder.md): The spooler does not rearrange pages—they are printed in the order received by the spooler.
- [NSUnknownPageOrder](pageorder-swift.enum/unknownpageorder.md): No page order specified.

## See Also

### Managing Page Information

- [currentPage](currentpage.md): The current page number being printed.
- [pageRange](pagerange.md): The range of pages associated with the print operation.
- [pageOrder](pageorder-swift.property.md): The print order for the pages of the operation.
