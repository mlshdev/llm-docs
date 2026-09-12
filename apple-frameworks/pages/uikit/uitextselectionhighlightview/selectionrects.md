> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextselectionhighlightview/selectionrects](https://developer.apple.com/documentation/uikit/uitextselectionhighlightview/selectionrects)

# selectionRects (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The rectangles to draw with the selection highlight.

## Declaration

```swift
var selectionRects: [UITextSelectionRect] { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to get the rectangles to draw in a custom highlight view. The rectangles are in the coordinate space of the view that adopts this protocol.

# selectionRects (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The rectangles to draw with the selection highlight.

## Declaration

```objectivec
@property (nonatomic, strong) NSArray<UITextSelectionRect *> * selectionRects;
```

<a id="Discussion"></a>

## Discussion

Use this property to get the rectangles to draw in a custom highlight view. The rectangles are in the coordinate space of the view that adopts this protocol.
