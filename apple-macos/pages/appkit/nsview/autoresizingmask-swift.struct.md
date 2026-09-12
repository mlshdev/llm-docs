> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/autoresizingmask-swift.struct](https://developer.apple.com/documentation/appkit/nsview/autoresizingmask-swift.struct)

# NSView.AutoresizingMask (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that specify the autoresizing behaviors for views.

## Declaration

```swift
struct AutoresizingMask
```

## Topics

### Getting the Autoresizing mask

- [none](autoresizingmask-swift.struct/none.md): The view cannot be resized.
- [minXMargin](autoresizingmask-swift.struct/minxmargin.md): The left margin between the view and its superview is flexible.
- [width](autoresizingmask-swift.struct/width.md): The view’s width is flexible.
- [maxXMargin](autoresizingmask-swift.struct/maxxmargin.md): The right margin between the view and its superview is flexible.
- [minYMargin](autoresizingmask-swift.struct/minymargin.md): The bottom margin between the view and its superview is flexible.
- [height](autoresizingmask-swift.struct/height.md): The view’s height is flexible.
- [maxYMargin](autoresizingmask-swift.struct/maxymargin.md): The top margin between the view and its superview is flexible.

### Creating an Autoresizing Mask

- [init(rawValue:)](autoresizingmask-swift.struct/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Resizing Subviews

- [autoresizesSubviews](autoresizessubviews.md): A Boolean value indicating whether the view applies the autoresizing behavior to its subviews when its frame size changes.
- [autoresizingMask](autoresizingmask-swift.property.md): The options that determine how the view is resized relative to its superview.
- [resizeSubviews(withOldSize:)](resizesubviews%28witholdsize_%29.md): Informs the view’s subviews that the view’s bounds rectangle size has changed.
- [resize(withOldSuperviewSize:)](resize%28witholdsuperviewsize_%29.md): Informs the view that the bounds size of its superview has changed.

# NSAutoresizingMaskOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that specify the autoresizing behaviors for views.

## Declaration

```objectivec
enum NSAutoresizingMaskOptions : NSUInteger;
```

## Topics

### Getting the Autoresizing mask

- [NSViewNotSizable](autoresizingmask-swift.struct/none.md): The view cannot be resized.
- [NSViewMinXMargin](autoresizingmask-swift.struct/minxmargin.md): The left margin between the view and its superview is flexible.
- [NSViewWidthSizable](autoresizingmask-swift.struct/width.md): The view’s width is flexible.
- [NSViewMaxXMargin](autoresizingmask-swift.struct/maxxmargin.md): The right margin between the view and its superview is flexible.
- [NSViewMinYMargin](autoresizingmask-swift.struct/minymargin.md): The bottom margin between the view and its superview is flexible.
- [NSViewHeightSizable](autoresizingmask-swift.struct/height.md): The view’s height is flexible.
- [NSViewMaxYMargin](autoresizingmask-swift.struct/maxymargin.md): The top margin between the view and its superview is flexible.

## See Also

### Resizing Subviews

- [autoresizesSubviews](autoresizessubviews.md): A Boolean value indicating whether the view applies the autoresizing behavior to its subviews when its frame size changes.
- [autoresizingMask](autoresizingmask-swift.property.md): The options that determine how the view is resized relative to its superview.
- [resizeSubviewsWithOldSize:](resizesubviews%28witholdsize_%29.md): Informs the view’s subviews that the view’s bounds rectangle size has changed.
- [resizeWithOldSuperviewSize:](resize%28witholdsuperviewsize_%29.md): Informs the view that the bounds size of its superview has changed.
