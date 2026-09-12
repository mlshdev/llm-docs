> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdragpreviewrenderer/bodyrect](https://developer.apple.com/documentation/uikit/uitextdragpreviewrenderer/bodyrect)

# bodyRect (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The bounding rectangle of the text in the middle of the drag preview.

## Declaration

```swift
var bodyRect: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

The body rectangle contains the full lines of text in the middle of the drag preview that doesn’t include the first line and last line. This property can be a zero rectangle. The initial value is also not calculated until the first time it’s used.

## See Also

### Getting and setting bounding rectangles

- [firstLineRect](firstlinerect.md): The bounding rectangle of the first line of text in the drag preview.
- [lastLineRect](lastlinerect.md): The bounding rectangle of the last line of text in the drag preview.
- [adjust(firstLineRect:bodyRect:lastLineRect:textOrigin:)](adjust%28firstlinerect_bodyrect_lastlinerect_textorigin_%29.md): Adjusts the size and origin of the bounding rectangles during a text drag operation.

# bodyRect (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The bounding rectangle of the text in the middle of the drag preview.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect bodyRect;
```

<a id="Discussion"></a>

## Discussion

The body rectangle contains the full lines of text in the middle of the drag preview that doesn’t include the first line and last line. This property can be a zero rectangle. The initial value is also not calculated until the first time it’s used.

## See Also

### Getting and setting bounding rectangles

- [firstLineRect](firstlinerect.md): The bounding rectangle of the first line of text in the drag preview.
- [lastLineRect](lastlinerect.md): The bounding rectangle of the last line of text in the drag preview.
- [adjustFirstLineRect:bodyRect:lastLineRect:textOrigin:](adjust%28firstlinerect_bodyrect_lastlinerect_textorigin_%29.md): Adjusts the size and origin of the bounding rectangles during a text drag operation.
