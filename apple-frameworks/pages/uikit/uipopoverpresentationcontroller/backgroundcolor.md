> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopoverpresentationcontroller/backgroundcolor](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontroller/backgroundcolor)

# backgroundColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+

The color of the popover’s backdrop view.

## Declaration

```swift
@NSCopying var backgroundColor: UIColor? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to customize the background color of your popover. Changing the value of this property while the popover is visible triggers an animated change to the new color. The default value of this property is `nil`, which corresponds to the default background color.

## See Also

### Configuring the popover appearance

- [popoverLayoutMargins](popoverlayoutmargins.md): The margins that define the portion of the screen in which it is permissible to display the popover.
- [passthroughViews](passthroughviews.md): An array of views that the user can interact with while the popover is visible.
- [popoverBackgroundViewClass](popoverbackgroundviewclass.md): The class to use for displaying the popover background content.
- [canOverlapSourceViewRect](canoverlapsourceviewrect.md): A Boolean value indicating whether the popover can overlap its view rectangle.

# backgroundColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+

The color of the popover’s backdrop view.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIColor * backgroundColor;
```

<a id="Discussion"></a>

## Discussion

Use this property to customize the background color of your popover. Changing the value of this property while the popover is visible triggers an animated change to the new color. The default value of this property is `nil`, which corresponds to the default background color.

## See Also

### Configuring the popover appearance

- [popoverLayoutMargins](popoverlayoutmargins.md): The margins that define the portion of the screen in which it is permissible to display the popover.
- [passthroughViews](passthroughviews.md): An array of views that the user can interact with while the popover is visible.
- [popoverBackgroundViewClass](popoverbackgroundviewclass.md): The class to use for displaying the popover background content.
- [canOverlapSourceViewRect](canoverlapsourceviewrect.md): A Boolean value indicating whether the popover can overlap its view rectangle.
