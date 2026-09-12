> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintformatter/startpage](https://developer.apple.com/documentation/uikit/uiprintformatter/startpage)

# startPage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The index of the first page that the print formatter lays out.

## Declaration

```swift
var startPage: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The value is a zero-based index. You can set the starting page of a print formatter by assigning an index to this property or by passing one as the second argument of the [addPrintFormatter(\_:startingAtPageAt:)](../uiprintpagerenderer/addprintformatter%28__startingatpageat_%29.md) method of [UIPrintPageRenderer](../uiprintpagerenderer.md).

## See Also

### Managing pagination

- [pageCount](pagecount.md): The number of pages to print.

# startPage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The index of the first page that the print formatter lays out.

## Declaration

```objectivec
@property (nonatomic) NSInteger startPage;
```

<a id="Discussion"></a>

## Discussion

The value is a zero-based index. You can set the starting page of a print formatter by assigning an index to this property or by passing one as the second argument of the [addPrintFormatter:startingAtPageAtIndex:](../uiprintpagerenderer/addprintformatter%28__startingatpageat_%29.md) method of [UIPrintPageRenderer](../uiprintpagerenderer.md).

## See Also

### Managing pagination

- [pageCount](pagecount.md): The number of pages to print.
