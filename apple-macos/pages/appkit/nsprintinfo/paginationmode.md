> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintinfo/paginationmode](https://developer.apple.com/documentation/appkit/nsprintinfo/paginationmode)

# NSPrintInfo.PaginationMode (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that specify the different ways in which an image is divided into pages.

## Declaration

```swift
enum PaginationMode
```

<a id="overview"></a>

## Overview

These constants are used by [horizontalPagination](horizontalpagination.md) and [verticalPagination](verticalpagination.md).

## Topics

### Constants

- [NSPrintInfo.PaginationMode.automatic](paginationmode/automatic.md)
- [NSPrintInfo.PaginationMode.fit](paginationmode/fit.md)
- [NSPrintInfo.PaginationMode.clip](paginationmode/clip.md)

### Initializers

- [init(rawValue:)](paginationmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Pagination

- [horizontalPagination](horizontalpagination.md): The horizontal pagination mode.
- [verticalPagination](verticalpagination.md): The vertical pagination to the specified mode.

# NSPrintingPaginationMode (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that specify the different ways in which an image is divided into pages.

## Declaration

```objectivec
enum NSPrintingPaginationMode : NSUInteger;
```

<a id="overview"></a>

## Overview

These constants are used by [horizontalPagination](horizontalpagination.md) and [verticalPagination](verticalpagination.md).

## Topics

### Constants

- [NSPrintingPaginationModeAutomatic](paginationmode/automatic.md)
- [NSPrintingPaginationModeFit](paginationmode/fit.md)
- [NSPrintingPaginationModeClip](paginationmode/clip.md)

### Deprecated Constants

- [NSAutoPagination](../nsautopagination.md): Deprecated. The image is divided into equal-sized rectangles and placed in one column of pages.
- [NSFitPagination](../nsfitpagination.md): Deprecated. The image is scaled to produce one column or one row of pages.
- [NSClipPagination](../nsclippagination.md): Deprecated. The image is clipped to produce one column or row of pages.

## See Also

### Pagination

- [horizontalPagination](horizontalpagination.md): The horizontal pagination mode.
- [verticalPagination](verticalpagination.md): The vertical pagination to the specified mode.
