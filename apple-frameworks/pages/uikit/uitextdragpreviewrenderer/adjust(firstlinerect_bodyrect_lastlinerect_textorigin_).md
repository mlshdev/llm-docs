> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdragpreviewrenderer/adjust(firstlinerect:bodyrect:lastlinerect:textorigin:)](https://developer.apple.com/documentation/uikit/uitextdragpreviewrenderer/adjust(firstlinerect:bodyrect:lastlinerect:textorigin:))

# adjust(firstLineRect:bodyRect:lastLineRect:textOrigin:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Adjusts the size and origin of the bounding rectangles during a text drag operation.

## Declaration

```swift
func adjust(firstLineRect: UnsafeMutablePointer<CGRect>, bodyRect: UnsafeMutablePointer<CGRect>, lastLineRect: UnsafeMutablePointer<CGRect>, textOrigin origin: CGPoint)
```

## Parameters

- `firstLineRect`: The bounding rectangle for the first line of text in the drag preview.
- `bodyRect`: The bounding rectangle for the text in the middle of the drag preview that doesn’t include the first and last line.
- `lastLineRect`: The bounding rectangle for the last line of text in the drag preview.
- `origin`: The origin of the text preview.

<a id="Discussion"></a>

## Discussion

This method does nothing by default. Subclasses may override this method to change the rectangle calculations; for example, in order to enlarge the rectangles by a few points. If you adjust the rectangles, the drag preview changes accordingly.

## See Also

### Getting and setting bounding rectangles

- [bodyRect](bodyrect.md): The bounding rectangle of the text in the middle of the drag preview.
- [firstLineRect](firstlinerect.md): The bounding rectangle of the first line of text in the drag preview.
- [lastLineRect](lastlinerect.md): The bounding rectangle of the last line of text in the drag preview.

# adjustFirstLineRect:bodyRect:lastLineRect:textOrigin: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Adjusts the size and origin of the bounding rectangles during a text drag operation.

## Declaration

```objectivec
- (void) adjustFirstLineRect:(CGRect *) firstLineRect bodyRect:(CGRect *) bodyRect lastLineRect:(CGRect *) lastLineRect textOrigin:(CGPoint) origin;
```

## Parameters

- `firstLineRect`: The bounding rectangle for the first line of text in the drag preview.
- `bodyRect`: The bounding rectangle for the text in the middle of the drag preview that doesn’t include the first and last line.
- `lastLineRect`: The bounding rectangle for the last line of text in the drag preview.
- `origin`: The origin of the text preview.

<a id="Discussion"></a>

## Discussion

This method does nothing by default. Subclasses may override this method to change the rectangle calculations; for example, in order to enlarge the rectangles by a few points. If you adjust the rectangles, the drag preview changes accordingly.

## See Also

### Getting and setting bounding rectangles

- [bodyRect](bodyrect.md): The bounding rectangle of the text in the middle of the drag preview.
- [firstLineRect](firstlinerect.md): The bounding rectangle of the first line of text in the drag preview.
- [lastLineRect](lastlinerect.md): The bounding rectangle of the last line of text in the drag preview.
