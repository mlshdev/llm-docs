> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopoverpresentationcontroller/passthroughviews](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontroller/passthroughviews)

# passthroughViews (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of views that the user can interact with while the popover is visible.

## Declaration

```swift
var passthroughViews: [UIView]? { get set }
```

<a id="Discussion"></a>

## Discussion

When a popover is active, interactions with other views are normally disabled until the popover is dismissed. Assigning an array of [UIView](../uiview.md) objects to this property causes UIKit to continue dispatching touch event to the views you specified.

## See Also

### Configuring the popover appearance

- [popoverLayoutMargins](popoverlayoutmargins.md): The margins that define the portion of the screen in which it is permissible to display the popover.
- [backgroundColor](backgroundcolor.md): The color of the popover’s backdrop view.
- [popoverBackgroundViewClass](popoverbackgroundviewclass.md): The class to use for displaying the popover background content.
- [canOverlapSourceViewRect](canoverlapsourceviewrect.md): A Boolean value indicating whether the popover can overlap its view rectangle.

# passthroughViews (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of views that the user can interact with while the popover is visible.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<UIView *> * passthroughViews;
```

<a id="Discussion"></a>

## Discussion

When a popover is active, interactions with other views are normally disabled until the popover is dismissed. Assigning an array of [UIView](../uiview.md) objects to this property causes UIKit to continue dispatching touch event to the views you specified.

## See Also

### Configuring the popover appearance

- [popoverLayoutMargins](popoverlayoutmargins.md): The margins that define the portion of the screen in which it is permissible to display the popover.
- [backgroundColor](backgroundcolor.md): The color of the popover’s backdrop view.
- [popoverBackgroundViewClass](popoverbackgroundviewclass.md): The class to use for displaying the popover background content.
- [canOverlapSourceViewRect](canoverlapsourceviewrect.md): A Boolean value indicating whether the popover can overlap its view rectangle.
