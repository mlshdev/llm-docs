> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintformatter/rectforpage(at:)](https://developer.apple.com/documentation/uikit/uiprintformatter/rectforpage(at:))

# rectForPage(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the area that encloses a specified page of content.

## Declaration

```swift
func rectForPage(at pageIndex: Int) -> CGRect
```

## Parameters

- `pageIndex`: The index number of a page.

<a id="return-value"></a>

## Return Value

A rectangle enclosing the content area for page `pageIndex`.

<a id="Discussion"></a>

## Discussion

Returns [CGRectZero](../../coregraphics/cgrectzero.md) if the print formatter draws no content on the specified page.

## See Also

### Drawing the content

- [draw(in:forPageAt:)](draw%28in_forpageat_%29.md): Draws the portion of a print formatter’s content for the specified area of the specified page.

# rectForPageAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the area that encloses a specified page of content.

## Declaration

```objectivec
- (CGRect) rectForPageAtIndex:(NSInteger) pageIndex;
```

## Parameters

- `pageIndex`: The index number of a page.

<a id="return-value"></a>

## Return Value

A rectangle enclosing the content area for page `pageIndex`.

<a id="Discussion"></a>

## Discussion

Returns [CGRectZero](../../coregraphics/cgrectzero.md) if the print formatter draws no content on the specified page.

## See Also

### Drawing the content

- [drawInRect:forPageAtIndex:](draw%28in_forpageat_%29.md): Draws the portion of a print formatter’s content for the specified area of the specified page.
