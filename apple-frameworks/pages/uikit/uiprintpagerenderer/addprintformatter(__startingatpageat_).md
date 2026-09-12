> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintpagerenderer/addprintformatter(_:startingatpageat:)](https://developer.apple.com/documentation/uikit/uiprintpagerenderer/addprintformatter(_:startingatpageat:))

# addPrintFormatter(\_:startingAtPageAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Adds a print formatter to the page renderer starting at the specified page.

## Declaration

```swift
func addPrintFormatter(_ formatter: UIPrintFormatter, startingAtPageAt pageIndex: Int)
```

## Parameters

- `formatter`: The [UIPrintFormatter](../uiprintformatter.md) object to add to the page renderer. A print formatter can be an instance of [UISimpleTextPrintFormatter](../uisimpletextprintformatter.md), [UIMarkupTextPrintFormatter](../uimarkuptextprintformatter.md), or [UIViewPrintFormatter](../uiviewprintformatter.md).
- `pageIndex`: The index identifying the first page with which the print formatter should be associated with. This value overrides the [startPage](../uiprintformatter/startpage.md) property of the print formatter.

<a id="Discussion"></a>

## Discussion

You can dissociate a print formatter from its page renderer by calling the [removeFromPrintPageRenderer()](../uiprintformatter/removefromprintpagerenderer%28%29.md) method on the print formatter.

## See Also

### Managing print formatters

- [printFormattersForPage(at:)](printformattersforpage%28at_%29.md): Returns the print formatters for a specified page.
- [printFormatters](printformatters.md): The print formatters for the page renderer.

# addPrintFormatter:startingAtPageAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Adds a print formatter to the page renderer starting at the specified page.

## Declaration

```objectivec
- (void) addPrintFormatter:(UIPrintFormatter *) formatter startingAtPageAtIndex:(NSInteger) pageIndex;
```

## Parameters

- `formatter`: The [UIPrintFormatter](../uiprintformatter.md) object to add to the page renderer. A print formatter can be an instance of [UISimpleTextPrintFormatter](../uisimpletextprintformatter.md), [UIMarkupTextPrintFormatter](../uimarkuptextprintformatter.md), or [UIViewPrintFormatter](../uiviewprintformatter.md).
- `pageIndex`: The index identifying the first page with which the print formatter should be associated with. This value overrides the [startPage](../uiprintformatter/startpage.md) property of the print formatter.

<a id="Discussion"></a>

## Discussion

You can dissociate a print formatter from its page renderer by calling the [removeFromPrintPageRenderer](../uiprintformatter/removefromprintpagerenderer%28%29.md) method on the print formatter.

## See Also

### Managing print formatters

- [printFormattersForPageAtIndex:](printformattersforpage%28at_%29.md): Returns the print formatters for a specified page.
- [printFormatters](printformatters.md): The print formatters for the page renderer.
