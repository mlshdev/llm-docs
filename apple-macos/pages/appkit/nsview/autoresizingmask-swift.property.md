> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/autoresizingmask-swift.property](https://developer.apple.com/documentation/appkit/nsview/autoresizingmask-swift.property)

# autoresizingMask (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The options that determine how the view is resized relative to its superview.

## Declaration

```swift
var autoresizingMask: NSView.AutoresizingMask { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an integer bit mask specified by combining the options described in [NSView.AutoresizingMask](autoresizingmask-swift.struct.md). This mask is used by the [resize(withOldSuperviewSize:)](resize%28witholdsuperviewsize_%29.md) method when the view needs to be resized.

If the autoresizing mask is set to `NSViewNotSizable` (that is, if none of the options are set), the view does not resize at all. When more than one option along an axis is set, the [resize(withOldSuperviewSize:)](resize%28witholdsuperviewsize_%29.md) method distributes the size difference as evenly as possible among the flexible portions. For example, if `NSViewWidthSizable` and `NSViewMaxXMargin` are set and the superview’s width has increased by `10.0` points, the view’s frame and right margin are each widened by `5.0` points.

## See Also

### Resizing Subviews

- [autoresizesSubviews](autoresizessubviews.md): A Boolean value indicating whether the view applies the autoresizing behavior to its subviews when its frame size changes.
- [NSView.AutoresizingMask](autoresizingmask-swift.struct.md): Constants that specify the autoresizing behaviors for views.
- [resizeSubviews(withOldSize:)](resizesubviews%28witholdsize_%29.md): Informs the view’s subviews that the view’s bounds rectangle size has changed.
- [resize(withOldSuperviewSize:)](resize%28witholdsuperviewsize_%29.md): Informs the view that the bounds size of its superview has changed.

# autoresizingMask (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The options that determine how the view is resized relative to its superview.

## Declaration

```objectivec
@property NSAutoresizingMaskOptions autoresizingMask;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an integer bit mask specified by combining the options described in [NSAutoresizingMaskOptions](autoresizingmask-swift.struct.md). This mask is used by the [resizeWithOldSuperviewSize:](resize%28witholdsuperviewsize_%29.md) method when the view needs to be resized.

If the autoresizing mask is set to `NSViewNotSizable` (that is, if none of the options are set), the view does not resize at all. When more than one option along an axis is set, the [resizeWithOldSuperviewSize:](resize%28witholdsuperviewsize_%29.md) method distributes the size difference as evenly as possible among the flexible portions. For example, if `NSViewWidthSizable` and `NSViewMaxXMargin` are set and the superview’s width has increased by `10.0` points, the view’s frame and right margin are each widened by `5.0` points.

## See Also

### Resizing Subviews

- [autoresizesSubviews](autoresizessubviews.md): A Boolean value indicating whether the view applies the autoresizing behavior to its subviews when its frame size changes.
- [NSAutoresizingMaskOptions](autoresizingmask-swift.struct.md): Constants that specify the autoresizing behaviors for views.
- [resizeSubviewsWithOldSize:](resizesubviews%28witholdsize_%29.md): Informs the view’s subviews that the view’s bounds rectangle size has changed.
- [resizeWithOldSuperviewSize:](resize%28witholdsuperviewsize_%29.md): Informs the view that the bounds size of its superview has changed.
