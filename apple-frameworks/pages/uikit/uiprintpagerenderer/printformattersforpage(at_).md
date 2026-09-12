> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintpagerenderer/printformattersforpage(at:)](https://developer.apple.com/documentation/uikit/uiprintpagerenderer/printformattersforpage(at:))

# printFormattersForPage(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the print formatters for a specified page.

## Declaration

```swift
func printFormattersForPage(at pageIndex: Int) -> [UIPrintFormatter]?
```

## Parameters

- `pageIndex`: The index of a page of printable content.

<a id="return-value"></a>

## Return Value

An array of [UIPrintFormatter](../uiprintformatter.md) objects. A print formatter can be an instance of [UISimpleTextPrintFormatter](../uisimpletextprintformatter.md), [UIMarkupTextPrintFormatter](../uimarkuptextprintformatter.md), or [UIViewPrintFormatter](../uiviewprintformatter.md).

<a id="Discussion"></a>

## Discussion

A print formatter is associated with a starting page of printable content through the [addPrintFormatter(\_:startingAtPageAt:)](addprintformatter%28__startingatpageat_%29.md) method or the [startPage](../uiprintformatter/startpage.md) property of [UIPrintFormatter](../uiprintformatter.md). The number of pages from that page is determined by the [pageCount](../uiprintformatter/pagecount.md) property, which [UIPrintFormatter](../uiprintformatter.md) computes based on layout metrics and content.

## See Also

### Managing print formatters

- [addPrintFormatter(\_:startingAtPageAt:)](addprintformatter%28__startingatpageat_%29.md): Adds a print formatter to the page renderer starting at the specified page.
- [printFormatters](printformatters.md): The print formatters for the page renderer.

# printFormattersForPageAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the print formatters for a specified page.

## Declaration

```objectivec
- (NSArray<UIPrintFormatter *> *) printFormattersForPageAtIndex:(NSInteger) pageIndex;
```

## Parameters

- `pageIndex`: The index of a page of printable content.

<a id="return-value"></a>

## Return Value

An array of [UIPrintFormatter](../uiprintformatter.md) objects. A print formatter can be an instance of [UISimpleTextPrintFormatter](../uisimpletextprintformatter.md), [UIMarkupTextPrintFormatter](../uimarkuptextprintformatter.md), or [UIViewPrintFormatter](../uiviewprintformatter.md).

<a id="Discussion"></a>

## Discussion

A print formatter is associated with a starting page of printable content through the [addPrintFormatter:startingAtPageAtIndex:](addprintformatter%28__startingatpageat_%29.md) method or the [startPage](../uiprintformatter/startpage.md) property of [UIPrintFormatter](../uiprintformatter.md). The number of pages from that page is determined by the [pageCount](../uiprintformatter/pagecount.md) property, which [UIPrintFormatter](../uiprintformatter.md) computes based on layout metrics and content.

## See Also

### Managing print formatters

- [addPrintFormatter:startingAtPageAtIndex:](addprintformatter%28__startingatpageat_%29.md): Adds a print formatter to the page renderer starting at the specified page.
- [printFormatters](printformatters.md): The print formatters for the page renderer.
