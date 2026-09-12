> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopoverpresentationcontroller/canoverlapsourceviewrect](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontroller/canoverlapsourceviewrect)

# canOverlapSourceViewRect (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether the popover can overlap its view rectangle.

## Declaration

```swift
var canOverlapSourceViewRect: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property to [true](https://developer.apple.com/documentation/swift/true) allows the popover to overlap the rectangle in the [sourceRect](sourcerect.md) property when space is constrained. The default value of this property is false, which prevents the popover from overlapping the source rectangle.

## See Also

### Configuring the popover appearance

- [popoverLayoutMargins](popoverlayoutmargins.md): The margins that define the portion of the screen in which it is permissible to display the popover.
- [backgroundColor](backgroundcolor.md): The color of the popover’s backdrop view.
- [passthroughViews](passthroughviews.md): An array of views that the user can interact with while the popover is visible.
- [popoverBackgroundViewClass](popoverbackgroundviewclass.md): The class to use for displaying the popover background content.

# canOverlapSourceViewRect (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether the popover can overlap its view rectangle.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL canOverlapSourceViewRect;
```

<a id="Discussion"></a>

## Discussion

Setting this property to [true](https://developer.apple.com/documentation/swift/true) allows the popover to overlap the rectangle in the [sourceRect](sourcerect.md) property when space is constrained. The default value of this property is false, which prevents the popover from overlapping the source rectangle.

## See Also

### Configuring the popover appearance

- [popoverLayoutMargins](popoverlayoutmargins.md): The margins that define the portion of the screen in which it is permissible to display the popover.
- [backgroundColor](backgroundcolor.md): The color of the popover’s backdrop view.
- [passthroughViews](passthroughviews.md): An array of views that the user can interact with while the popover is visible.
- [popoverBackgroundViewClass](popoverbackgroundviewclass.md): The class to use for displaying the popover background content.
