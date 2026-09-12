> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/autoresizessubviews](https://developer.apple.com/documentation/appkit/nsview/autoresizessubviews)

# autoresizesSubviews (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the view applies the autoresizing behavior to its subviews when its frame size changes.

## Declaration

```swift
var autoresizesSubviews: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true) and the view’s frame changes, the view automatically calls the [resizeSubviews(withOldSize:)](resizesubviews%28witholdsize_%29.md) method to facilitate the resizing of its subviews. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the view does not autoresize its subviews.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Resizing Subviews

- [autoresizingMask](autoresizingmask-swift.property.md): The options that determine how the view is resized relative to its superview.
- [NSView.AutoresizingMask](autoresizingmask-swift.struct.md): Constants that specify the autoresizing behaviors for views.
- [resizeSubviews(withOldSize:)](resizesubviews%28witholdsize_%29.md): Informs the view’s subviews that the view’s bounds rectangle size has changed.
- [resize(withOldSuperviewSize:)](resize%28witholdsuperviewsize_%29.md): Informs the view that the bounds size of its superview has changed.

# autoresizesSubviews (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the view applies the autoresizing behavior to its subviews when its frame size changes.

## Declaration

```objectivec
@property BOOL autoresizesSubviews;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true) and the view’s frame changes, the view automatically calls the [resizeSubviewsWithOldSize:](resizesubviews%28witholdsize_%29.md) method to facilitate the resizing of its subviews. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the view does not autoresize its subviews.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Resizing Subviews

- [autoresizingMask](autoresizingmask-swift.property.md): The options that determine how the view is resized relative to its superview.
- [NSAutoresizingMaskOptions](autoresizingmask-swift.struct.md): Constants that specify the autoresizing behaviors for views.
- [resizeSubviewsWithOldSize:](resizesubviews%28witholdsize_%29.md): Informs the view’s subviews that the view’s bounds rectangle size has changed.
- [resizeWithOldSuperviewSize:](resize%28witholdsuperviewsize_%29.md): Informs the view that the bounds size of its superview has changed.
