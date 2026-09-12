> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintformatter/draw(in:forpageat:)](https://developer.apple.com/documentation/uikit/uiprintformatter/draw(in:forpageat:))

# draw(in:forPageAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Draws the portion of a print formatter’s content for the specified area of the specified page.

## Declaration

```swift
func draw(in rect: CGRect, forPageAt pageIndex: Int)
```

## Parameters

- `rect`: The area in which to draw the content.
- `pageIndex`: The number of the page of content to draw.

<a id="Discussion"></a>

## Discussion

This method is called by the default implementation of `drawPrintFormatter:forPageAtIndex:` of the [UIPrintPageRenderer](../uiprintpagerenderer.md) class for each print formatter associated with a page.

## See Also

### Drawing the content

- [rectForPage(at:)](rectforpage%28at_%29.md): Returns the area that encloses a specified page of content.

# drawInRect:forPageAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Draws the portion of a print formatter’s content for the specified area of the specified page.

## Declaration

```objectivec
- (void) drawInRect:(CGRect) rect forPageAtIndex:(NSInteger) pageIndex;
```

## Parameters

- `rect`: The area in which to draw the content.
- `pageIndex`: The number of the page of content to draw.

<a id="Discussion"></a>

## Discussion

This method is called by the default implementation of `drawPrintFormatter:forPageAtIndex:` of the [UIPrintPageRenderer](../uiprintpagerenderer.md) class for each print formatter associated with a page.

## See Also

### Drawing the content

- [rectForPageAtIndex:](rectforpage%28at_%29.md): Returns the area that encloses a specified page of content.
