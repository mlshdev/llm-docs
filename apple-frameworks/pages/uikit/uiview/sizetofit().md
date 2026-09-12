> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/sizetofit()](https://developer.apple.com/documentation/uikit/uiview/sizetofit())

# sizeToFit() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Resizes and moves the receiver view so it just encloses its subviews.

## Declaration

```swift
func sizeToFit()
```

## Mentioned In

- [Displaying a checkbox in your Mac app built with Mac Catalyst](../displaying-a-checkbox-in-your-mac-app-built-with-mac-catalyst.md)

<a id="Discussion"></a>

## Discussion

Call this method when you want to resize the current view so that it uses the most appropriate amount of space. Specific UIKit views resize themselves according to their own internal needs. In some cases, if a view does not have a superview, it may size itself to the screen bounds. Thus, if you want a given view to size itself to its parent view, you should add it to the parent view before calling this method.

You should not override this method. If you want to change the default sizing information for your view, override the [sizeThatFits(\_:)](sizethatfits%28__%29.md) instead. That method performs any needed calculations and returns them to this method, which then makes the change.

## See Also

### Configuring the resizing behavior

- [contentMode](contentmode-swift.property.md): A flag used to determine how a view lays out its content when its bounds change.
- [UIView.ContentMode](contentmode-swift.enum.md): Options to specify how a view adjusts its content when its size changes.
- [sizeThatFits(\_:)](sizethatfits%28__%29.md): Asks the view to calculate and return the size that best fits the specified size.
- [autoresizesSubviews](autoresizessubviews.md): A Boolean value that determines whether the receiver automatically resizes its subviews when its bounds change.
- [autoresizingMask](autoresizingmask-swift.property.md): An integer bit mask that determines how the receiver resizes itself when its superview’s bounds change.

# sizeToFit (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Resizes and moves the receiver view so it just encloses its subviews.

## Declaration

```objectivec
- (void) sizeToFit;
```

## Mentioned In

- [Displaying a checkbox in your Mac app built with Mac Catalyst](../displaying-a-checkbox-in-your-mac-app-built-with-mac-catalyst.md)

<a id="Discussion"></a>

## Discussion

Call this method when you want to resize the current view so that it uses the most appropriate amount of space. Specific UIKit views resize themselves according to their own internal needs. In some cases, if a view does not have a superview, it may size itself to the screen bounds. Thus, if you want a given view to size itself to its parent view, you should add it to the parent view before calling this method.

You should not override this method. If you want to change the default sizing information for your view, override the [sizeThatFits:](sizethatfits%28__%29.md) instead. That method performs any needed calculations and returns them to this method, which then makes the change.

## See Also

### Configuring the resizing behavior

- [contentMode](contentmode-swift.property.md): A flag used to determine how a view lays out its content when its bounds change.
- [UIViewContentMode](contentmode-swift.enum.md): Options to specify how a view adjusts its content when its size changes.
- [sizeThatFits:](sizethatfits%28__%29.md): Asks the view to calculate and return the size that best fits the specified size.
- [autoresizesSubviews](autoresizessubviews.md): A Boolean value that determines whether the receiver automatically resizes its subviews when its bounds change.
- [autoresizingMask](autoresizingmask-swift.property.md): An integer bit mask that determines how the receiver resizes itself when its superview’s bounds change.
