> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/resize(witholdsuperviewsize:)](https://developer.apple.com/documentation/appkit/nsview/resize(witholdsuperviewsize:))

# resize(withOldSuperviewSize:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the view that the bounds size of its superview has changed.

## Declaration

```swift
func resize(withOldSuperviewSize oldSize: NSSize)
```

## Parameters

- `oldSize`: The previous size of the superview’s bounds rectangle.

<a id="Discussion"></a>

## Discussion

This method is normally invoked automatically from [resizeSubviews(withOldSize:)](resizesubviews%28witholdsize_%29.md).

The default implementation resizes the view according to the autoresizing options specified by the [autoresizingMask](autoresizingmask-swift.property.md) property. You shouldn’t invoke this method directly, but you can override it to define a specific resizing behavior.

If you override this method and call `super` as part of your implementation, you should be sure to call `super` before making changes to the receiving view’s frame yourself.

## See Also

### Resizing Subviews

- [autoresizesSubviews](autoresizessubviews.md): A Boolean value indicating whether the view applies the autoresizing behavior to its subviews when its frame size changes.
- [autoresizingMask](autoresizingmask-swift.property.md): The options that determine how the view is resized relative to its superview.
- [NSView.AutoresizingMask](autoresizingmask-swift.struct.md): Constants that specify the autoresizing behaviors for views.
- [resizeSubviews(withOldSize:)](resizesubviews%28witholdsize_%29.md): Informs the view’s subviews that the view’s bounds rectangle size has changed.

# resizeWithOldSuperviewSize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the view that the bounds size of its superview has changed.

## Declaration

```objectivec
- (void) resizeWithOldSuperviewSize:(NSSize) oldSize;
```

## Parameters

- `oldSize`: The previous size of the superview’s bounds rectangle.

<a id="Discussion"></a>

## Discussion

This method is normally invoked automatically from [resizeSubviewsWithOldSize:](resizesubviews%28witholdsize_%29.md).

The default implementation resizes the view according to the autoresizing options specified by the [autoresizingMask](autoresizingmask-swift.property.md) property. You shouldn’t invoke this method directly, but you can override it to define a specific resizing behavior.

If you override this method and call `super` as part of your implementation, you should be sure to call `super` before making changes to the receiving view’s frame yourself.

## See Also

### Resizing Subviews

- [autoresizesSubviews](autoresizessubviews.md): A Boolean value indicating whether the view applies the autoresizing behavior to its subviews when its frame size changes.
- [autoresizingMask](autoresizingmask-swift.property.md): The options that determine how the view is resized relative to its superview.
- [NSAutoresizingMaskOptions](autoresizingmask-swift.struct.md): Constants that specify the autoresizing behaviors for views.
- [resizeSubviewsWithOldSize:](resizesubviews%28witholdsize_%29.md): Informs the view’s subviews that the view’s bounds rectangle size has changed.
