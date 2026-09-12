> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopoverpresentationcontroller/popoverbackgroundviewclass](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontroller/popoverbackgroundviewclass)

# popoverBackgroundViewClass (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The class to use for displaying the popover background content.

## Declaration

```swift
var popoverBackgroundViewClass: (any UIPopoverBackgroundViewMethods.Type)? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`, which causes the presentation controller to use the default popover appearance. Setting this property to a value other than `nil` causes the presentation controller to use the specified class to draw the popover’s background content. The class you specify must be a subclass of [UIPopoverBackgroundView](../uipopoverbackgroundview.md).

## See Also

### Configuring the popover appearance

- [popoverLayoutMargins](popoverlayoutmargins.md): The margins that define the portion of the screen in which it is permissible to display the popover.
- [backgroundColor](backgroundcolor.md): The color of the popover’s backdrop view.
- [passthroughViews](passthroughviews.md): An array of views that the user can interact with while the popover is visible.
- [canOverlapSourceViewRect](canoverlapsourceviewrect.md): A Boolean value indicating whether the popover can overlap its view rectangle.

# popoverBackgroundViewClass (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The class to use for displaying the popover background content.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) Class<UIPopoverBackgroundViewMethods> * popoverBackgroundViewClass;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`, which causes the presentation controller to use the default popover appearance. Setting this property to a value other than `nil` causes the presentation controller to use the specified class to draw the popover’s background content. The class you specify must be a subclass of [UIPopoverBackgroundView](../uipopoverbackgroundview.md).

## See Also

### Configuring the popover appearance

- [popoverLayoutMargins](popoverlayoutmargins.md): The margins that define the portion of the screen in which it is permissible to display the popover.
- [backgroundColor](backgroundcolor.md): The color of the popover’s backdrop view.
- [passthroughViews](passthroughviews.md): An array of views that the user can interact with while the popover is visible.
- [canOverlapSourceViewRect](canoverlapsourceviewrect.md): A Boolean value indicating whether the popover can overlap its view rectangle.
