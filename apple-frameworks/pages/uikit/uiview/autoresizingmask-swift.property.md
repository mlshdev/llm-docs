> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/autoresizingmask-swift.property](https://developer.apple.com/documentation/uikit/uiview/autoresizingmask-swift.property)

# autoresizingMask (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

An integer bit mask that determines how the receiver resizes itself when its superview’s bounds change.

## Declaration

```swift
var autoresizingMask: UIView.AutoresizingMask { get set }
```

<a id="Discussion"></a>

## Discussion

When a view’s bounds change, that view automatically resizes its subviews according to each subview’s autoresizing mask. You specify the value of this mask by combining the constants described in [UIView.AutoresizingMask](autoresizingmask-swift.struct.md) using the C bitwise OR operator. Combining these constants lets you specify which dimensions of the view should grow or shrink relative to the superview. The default value of this property is [UIViewAutoresizingNone](../uiviewautoresizing/uiviewautoresizingnone.md), which indicates that the view should not be resized at all.

When more than one option along the same axis is set, the default behavior is to distribute the size difference proportionally among the flexible portions. The larger the flexible portion, relative to the other flexible portions, the more it is likely to grow. For example, suppose this property includes the [flexibleWidth](autoresizingmask-swift.struct/flexiblewidth.md) and [flexibleRightMargin](autoresizingmask-swift.struct/flexiblerightmargin.md) constants but does not include the [flexibleLeftMargin](autoresizingmask-swift.struct/flexibleleftmargin.md) constant, thus indicating that the width of the view’s left margin is fixed but that the view’s width and right margin may change. Thus, the view appears anchored to the left side of its superview while both the view width and the gap to the right of the view increase.

If the autoresizing behaviors do not offer the precise layout that you need for your views, you can use a custom container view and override its [layoutSubviews()](layoutsubviews%28%29.md) method to position your subviews more precisely.

## See Also

### Configuring the resizing behavior

- [contentMode](contentmode-swift.property.md): A flag used to determine how a view lays out its content when its bounds change.
- [UIView.ContentMode](contentmode-swift.enum.md): Options to specify how a view adjusts its content when its size changes.
- [sizeThatFits(\_:)](sizethatfits%28__%29.md): Asks the view to calculate and return the size that best fits the specified size.
- [sizeToFit()](sizetofit%28%29.md): Resizes and moves the receiver view so it just encloses its subviews.
- [autoresizesSubviews](autoresizessubviews.md): A Boolean value that determines whether the receiver automatically resizes its subviews when its bounds change.

# autoresizingMask (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

An integer bit mask that determines how the receiver resizes itself when its superview’s bounds change.

## Declaration

```objectivec
@property (nonatomic) UIViewAutoresizing autoresizingMask;
```

<a id="Discussion"></a>

## Discussion

When a view’s bounds change, that view automatically resizes its subviews according to each subview’s autoresizing mask. You specify the value of this mask by combining the constants described in [UIViewAutoresizing](autoresizingmask-swift.struct.md) using the C bitwise OR operator. Combining these constants lets you specify which dimensions of the view should grow or shrink relative to the superview. The default value of this property is [UIViewAutoresizingNone](../uiviewautoresizing/uiviewautoresizingnone.md), which indicates that the view should not be resized at all.

When more than one option along the same axis is set, the default behavior is to distribute the size difference proportionally among the flexible portions. The larger the flexible portion, relative to the other flexible portions, the more it is likely to grow. For example, suppose this property includes the [UIViewAutoresizingFlexibleWidth](autoresizingmask-swift.struct/flexiblewidth.md) and [UIViewAutoresizingFlexibleRightMargin](autoresizingmask-swift.struct/flexiblerightmargin.md) constants but does not include the [UIViewAutoresizingFlexibleLeftMargin](autoresizingmask-swift.struct/flexibleleftmargin.md) constant, thus indicating that the width of the view’s left margin is fixed but that the view’s width and right margin may change. Thus, the view appears anchored to the left side of its superview while both the view width and the gap to the right of the view increase.

If the autoresizing behaviors do not offer the precise layout that you need for your views, you can use a custom container view and override its [layoutSubviews](layoutsubviews%28%29.md) method to position your subviews more precisely.

## See Also

### Configuring the resizing behavior

- [contentMode](contentmode-swift.property.md): A flag used to determine how a view lays out its content when its bounds change.
- [UIViewContentMode](contentmode-swift.enum.md): Options to specify how a view adjusts its content when its size changes.
- [sizeThatFits:](sizethatfits%28__%29.md): Asks the view to calculate and return the size that best fits the specified size.
- [sizeToFit](sizetofit%28%29.md): Resizes and moves the receiver view so it just encloses its subviews.
- [autoresizesSubviews](autoresizessubviews.md): A Boolean value that determines whether the receiver automatically resizes its subviews when its bounds change.
