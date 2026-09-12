> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/contentmode-swift.enum](https://developer.apple.com/documentation/uikit/uiview/contentmode-swift.enum)

# UIView.ContentMode (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Options to specify how a view adjusts its content when its size changes.

## Declaration

```swift
enum ContentMode
```

## Topics

### Constants

- [UIView.ContentMode.scaleToFill](contentmode-swift.enum/scaletofill.md): The option to scale the content to fit the size of itself by changing the aspect ratio of the content if necessary.
- [UIView.ContentMode.scaleAspectFit](contentmode-swift.enum/scaleaspectfit.md): The option to scale the content to fit the size of the view by maintaining the aspect ratio. Any remaining area of the view’s bounds is transparent.
- [UIView.ContentMode.scaleAspectFill](contentmode-swift.enum/scaleaspectfill.md): The option to scale the content to fill the size of the view. Some portion of the content may be clipped to fill the view’s bounds.
- [UIView.ContentMode.redraw](contentmode-swift.enum/redraw.md): The option to redisplay the view when the bounds change by invoking the [setNeedsDisplay()](setneedsdisplay%28%29.md) method.
- [UIView.ContentMode.center](contentmode-swift.enum/center.md): The option to center the content in the view’s bounds, keeping the proportions the same.
- [UIView.ContentMode.top](contentmode-swift.enum/top.md): The option to center the content aligned at the top in the view’s bounds.
- [UIView.ContentMode.bottom](contentmode-swift.enum/bottom.md): The option to center the content aligned at the bottom in the view’s bounds.
- [UIView.ContentMode.left](contentmode-swift.enum/left.md): The option to align the content on the left of the view.
- [UIView.ContentMode.right](contentmode-swift.enum/right.md): The option to align the content on the right of the view.
- [UIView.ContentMode.topLeft](contentmode-swift.enum/topleft.md): The option to align the content in the top-left corner of the view.
- [UIView.ContentMode.topRight](contentmode-swift.enum/topright.md): The option to align the content in the top-right corner of the view.
- [UIView.ContentMode.bottomLeft](contentmode-swift.enum/bottomleft.md): The option to align the content in the bottom-left corner of the view.
- [UIView.ContentMode.bottomRight](contentmode-swift.enum/bottomright.md): The option to align the content in the bottom-right corner of the view.

### Initializers

- [init(rawValue:)](contentmode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the resizing behavior

- [contentMode](contentmode-swift.property.md): A flag used to determine how a view lays out its content when its bounds change.
- [sizeThatFits(\_:)](sizethatfits%28__%29.md): Asks the view to calculate and return the size that best fits the specified size.
- [sizeToFit()](sizetofit%28%29.md): Resizes and moves the receiver view so it just encloses its subviews.
- [autoresizesSubviews](autoresizessubviews.md): A Boolean value that determines whether the receiver automatically resizes its subviews when its bounds change.
- [autoresizingMask](autoresizingmask-swift.property.md): An integer bit mask that determines how the receiver resizes itself when its superview’s bounds change.

# UIViewContentMode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Options to specify how a view adjusts its content when its size changes.

## Declaration

```objectivec
enum UIViewContentMode : NSInteger;
```

## Topics

### Constants

- [UIViewContentModeScaleToFill](contentmode-swift.enum/scaletofill.md): The option to scale the content to fit the size of itself by changing the aspect ratio of the content if necessary.
- [UIViewContentModeScaleAspectFit](contentmode-swift.enum/scaleaspectfit.md): The option to scale the content to fit the size of the view by maintaining the aspect ratio. Any remaining area of the view’s bounds is transparent.
- [UIViewContentModeScaleAspectFill](contentmode-swift.enum/scaleaspectfill.md): The option to scale the content to fill the size of the view. Some portion of the content may be clipped to fill the view’s bounds.
- [UIViewContentModeRedraw](contentmode-swift.enum/redraw.md): The option to redisplay the view when the bounds change by invoking the [setNeedsDisplay](setneedsdisplay%28%29.md) method.
- [UIViewContentModeCenter](contentmode-swift.enum/center.md): The option to center the content in the view’s bounds, keeping the proportions the same.
- [UIViewContentModeTop](contentmode-swift.enum/top.md): The option to center the content aligned at the top in the view’s bounds.
- [UIViewContentModeBottom](contentmode-swift.enum/bottom.md): The option to center the content aligned at the bottom in the view’s bounds.
- [UIViewContentModeLeft](contentmode-swift.enum/left.md): The option to align the content on the left of the view.
- [UIViewContentModeRight](contentmode-swift.enum/right.md): The option to align the content on the right of the view.
- [UIViewContentModeTopLeft](contentmode-swift.enum/topleft.md): The option to align the content in the top-left corner of the view.
- [UIViewContentModeTopRight](contentmode-swift.enum/topright.md): The option to align the content in the top-right corner of the view.
- [UIViewContentModeBottomLeft](contentmode-swift.enum/bottomleft.md): The option to align the content in the bottom-left corner of the view.
- [UIViewContentModeBottomRight](contentmode-swift.enum/bottomright.md): The option to align the content in the bottom-right corner of the view.

## See Also

### Configuring the resizing behavior

- [contentMode](contentmode-swift.property.md): A flag used to determine how a view lays out its content when its bounds change.
- [sizeThatFits:](sizethatfits%28__%29.md): Asks the view to calculate and return the size that best fits the specified size.
- [sizeToFit](sizetofit%28%29.md): Resizes and moves the receiver view so it just encloses its subviews.
- [autoresizesSubviews](autoresizessubviews.md): A Boolean value that determines whether the receiver automatically resizes its subviews when its bounds change.
- [autoresizingMask](autoresizingmask-swift.property.md): An integer bit mask that determines how the receiver resizes itself when its superview’s bounds change.
