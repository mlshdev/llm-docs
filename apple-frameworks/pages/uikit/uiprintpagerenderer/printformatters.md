> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintpagerenderer/printformatters](https://developer.apple.com/documentation/uikit/uiprintpagerenderer/printformatters)

# printFormatters (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The print formatters for the page renderer.

## Declaration

```swift
var printFormatters: [UIPrintFormatter]? { get set }
```

<a id="Discussion"></a>

## Discussion

The elements of the array are [UIPrintFormatter](../uiprintformatter.md) objects. A print formatter can be an instance of [UISimpleTextPrintFormatter](../uisimpletextprintformatter.md), [UIMarkupTextPrintFormatter](../uimarkuptextprintformatter.md), or [UIViewPrintFormatter](../uiviewprintformatter.md). Print formatters added this way to a page renderer are associated with page ranges through each print formatter’s [startPage](../uiprintformatter/startpage.md) and [pageCount](../uiprintformatter/pagecount.md) properties.

## See Also

### Managing print formatters

- [addPrintFormatter(\_:startingAtPageAt:)](addprintformatter%28__startingatpageat_%29.md): Adds a print formatter to the page renderer starting at the specified page.
- [printFormattersForPage(at:)](printformattersforpage%28at_%29.md): Returns the print formatters for a specified page.

# printFormatters (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The print formatters for the page renderer.

## Declaration

```objectivec
@property (atomic, copy, nullable) NSArray<UIPrintFormatter *> * printFormatters;
```

<a id="Discussion"></a>

## Discussion

The elements of the array are [UIPrintFormatter](../uiprintformatter.md) objects. A print formatter can be an instance of [UISimpleTextPrintFormatter](../uisimpletextprintformatter.md), [UIMarkupTextPrintFormatter](../uimarkuptextprintformatter.md), or [UIViewPrintFormatter](../uiviewprintformatter.md). Print formatters added this way to a page renderer are associated with page ranges through each print formatter’s [startPage](../uiprintformatter/startpage.md) and [pageCount](../uiprintformatter/pagecount.md) properties.

## See Also

### Managing print formatters

- [addPrintFormatter:startingAtPageAtIndex:](addprintformatter%28__startingatpageat_%29.md): Adds a print formatter to the page renderer starting at the specified page.
- [printFormattersForPageAtIndex:](printformattersforpage%28at_%29.md): Returns the print formatters for a specified page.
