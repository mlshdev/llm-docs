> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/contentalignmentpoint](https://developer.apple.com/documentation/uikit/uiscrollview/contentalignmentpoint)

# contentAlignmentPoint (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · tvOS 17.4+ · visionOS 1.1+

A point where the scroll view anchors content that’s smaller than the scroll view’s frame.

## Declaration

```swift
var contentAlignmentPoint: CGPoint { get set }
```

<a id="Discussion"></a>

## Discussion

The value for this point is in the unit square, with `(0,0)` representing the top-left corner of the scroll view’s frame, and `(1,1)` representing the bottom-right corner. The default value is `(0,0)`.

If the scroll view’s content is smaller than the scroll view’s frame, the scroll view anchors the content to the specified point relative to its frame. For example, to center smaller content in the scroll view, set its [contentAlignmentPoint](contentalignmentpoint.md) to `(0.5,0.5)`.

# contentAlignmentPoint (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · tvOS 17.4+ · visionOS 1.1+

A point where the scroll view anchors content that’s smaller than the scroll view’s frame.

## Declaration

```objectivec
@property (nonatomic) CGPoint contentAlignmentPoint;
```

<a id="Discussion"></a>

## Discussion

The value for this point is in the unit square, with `(0,0)` representing the top-left corner of the scroll view’s frame, and `(1,1)` representing the bottom-right corner. The default value is `(0,0)`.

If the scroll view’s content is smaller than the scroll view’s frame, the scroll view anchors the content to the specified point relative to its frame. For example, to center smaller content in the scroll view, set its [contentAlignmentPoint](contentalignmentpoint.md) to `(0.5,0.5)`.
