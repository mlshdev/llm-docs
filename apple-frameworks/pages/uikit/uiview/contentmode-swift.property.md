> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/contentmode-swift.property](https://developer.apple.com/documentation/uikit/uiview/contentmode-swift.property)

# contentMode (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A flag used to determine how a view lays out its content when its bounds change.

## Declaration

```swift
var contentMode: UIView.ContentMode { get set }
```

<a id="Discussion"></a>

## Discussion

The content mode specifies how the cached bitmap of the view’s layer is adjusted when the view’s bounds change. This property is often used to implement resizable controls. Instead of redrawing the contents of the view every time, you can use this property to specify that you want to scale the contents (either with or without distortion) or pin them to a particular spot on the view.

> **Note**

>  You can always force the contents of a view to be redrawn by calling the [setNeedsDisplay()](setneedsdisplay%28%29.md) or [setNeedsDisplay(\_:)](setneedsdisplay%28__%29.md) method.

For a list of values you can assign to this property, see [UIView.ContentMode](contentmode-swift.enum.md). The default value of this property is [UIView.ContentMode.scaleToFill](contentmode-swift.enum/scaletofill.md).

## See Also

### Configuring the resizing behavior

- [UIView.ContentMode](contentmode-swift.enum.md): Options to specify how a view adjusts its content when its size changes.
- [sizeThatFits(\_:)](sizethatfits%28__%29.md): Asks the view to calculate and return the size that best fits the specified size.
- [sizeToFit()](sizetofit%28%29.md): Resizes and moves the receiver view so it just encloses its subviews.
- [autoresizesSubviews](autoresizessubviews.md): A Boolean value that determines whether the receiver automatically resizes its subviews when its bounds change.
- [autoresizingMask](autoresizingmask-swift.property.md): An integer bit mask that determines how the receiver resizes itself when its superview’s bounds change.

# contentMode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

A flag used to determine how a view lays out its content when its bounds change.

## Declaration

```objectivec
@property (nonatomic) UIViewContentMode contentMode;
```

<a id="Discussion"></a>

## Discussion

The content mode specifies how the cached bitmap of the view’s layer is adjusted when the view’s bounds change. This property is often used to implement resizable controls. Instead of redrawing the contents of the view every time, you can use this property to specify that you want to scale the contents (either with or without distortion) or pin them to a particular spot on the view.

> **Note**

>  You can always force the contents of a view to be redrawn by calling the [setNeedsDisplay](setneedsdisplay%28%29.md) or [setNeedsDisplayInRect:](setneedsdisplay%28__%29.md) method.

For a list of values you can assign to this property, see [UIViewContentMode](contentmode-swift.enum.md). The default value of this property is [UIViewContentModeScaleToFill](contentmode-swift.enum/scaletofill.md).

## See Also

### Configuring the resizing behavior

- [UIViewContentMode](contentmode-swift.enum.md): Options to specify how a view adjusts its content when its size changes.
- [sizeThatFits:](sizethatfits%28__%29.md): Asks the view to calculate and return the size that best fits the specified size.
- [sizeToFit](sizetofit%28%29.md): Resizes and moves the receiver view so it just encloses its subviews.
- [autoresizesSubviews](autoresizessubviews.md): A Boolean value that determines whether the receiver automatically resizes its subviews when its bounds change.
- [autoresizingMask](autoresizingmask-swift.property.md): An integer bit mask that determines how the receiver resizes itself when its superview’s bounds change.
