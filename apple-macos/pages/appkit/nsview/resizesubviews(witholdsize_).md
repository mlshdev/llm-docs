> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/resizesubviews(witholdsize:)](https://developer.apple.com/documentation/appkit/nsview/resizesubviews(witholdsize:))

# resizeSubviews(withOldSize:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the view’s subviews that the view’s bounds rectangle size has changed.

## Declaration

```swift
func resizeSubviews(withOldSize oldSize: NSSize)
```

## Parameters

- `oldSize`: The previous size of the view’s bounds rectangle.

<a id="Discussion"></a>

## Discussion

If the view is configured to autoresize its subviews, this method is automatically invoked by any method that changes the view’s frame size.

The default implementation sends [resize(withOldSuperviewSize:)](resize%28witholdsuperviewsize_%29.md) to the view’s subviews with `oldBoundsSize` as the argument. You shouldn’t invoke this method directly, but you can override it to define a specific resizing behavior.

## See Also

### Resizing Subviews

- [autoresizesSubviews](autoresizessubviews.md): A Boolean value indicating whether the view applies the autoresizing behavior to its subviews when its frame size changes.
- [autoresizingMask](autoresizingmask-swift.property.md): The options that determine how the view is resized relative to its superview.
- [NSView.AutoresizingMask](autoresizingmask-swift.struct.md): Constants that specify the autoresizing behaviors for views.
- [resize(withOldSuperviewSize:)](resize%28witholdsuperviewsize_%29.md): Informs the view that the bounds size of its superview has changed.

# resizeSubviewsWithOldSize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the view’s subviews that the view’s bounds rectangle size has changed.

## Declaration

```objectivec
- (void) resizeSubviewsWithOldSize:(NSSize) oldSize;
```

## Parameters

- `oldSize`: The previous size of the view’s bounds rectangle.

<a id="Discussion"></a>

## Discussion

If the view is configured to autoresize its subviews, this method is automatically invoked by any method that changes the view’s frame size.

The default implementation sends [resizeWithOldSuperviewSize:](resize%28witholdsuperviewsize_%29.md) to the view’s subviews with `oldBoundsSize` as the argument. You shouldn’t invoke this method directly, but you can override it to define a specific resizing behavior.

## See Also

### Resizing Subviews

- [autoresizesSubviews](autoresizessubviews.md): A Boolean value indicating whether the view applies the autoresizing behavior to its subviews when its frame size changes.
- [autoresizingMask](autoresizingmask-swift.property.md): The options that determine how the view is resized relative to its superview.
- [NSAutoresizingMaskOptions](autoresizingmask-swift.struct.md): Constants that specify the autoresizing behaviors for views.
- [resizeWithOldSuperviewSize:](resize%28witholdsuperviewsize_%29.md): Informs the view that the bounds size of its superview has changed.
