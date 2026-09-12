> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/didmovetowindow()](https://developer.apple.com/documentation/uikit/uiview/didmovetowindow())

# didMoveToWindow() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the view that its window object changed.

## Declaration

```swift
func didMoveToWindow()
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override it to perform additional actions whenever the window changes.

The [window](window.md) property may be `nil` by the time that this method is called, indicating that the receiver does not currently reside in any window. This occurs when the receiver has just been removed from its superview or when the receiver has just been added to a superview that is not attached to a window. Overrides of this method may choose to ignore such cases if they are not of interest.

## See Also

### Observing view-related changes

- [didAddSubview(\_:)](didaddsubview%28__%29.md): Tells the view that a subview was added.
- [willRemoveSubview(\_:)](willremovesubview%28__%29.md): Tells the view that a subview is about to be removed.
- [willMove(toSuperview:)](willmove%28tosuperview_%29.md): Tells the view that its superview is about to change to the specified superview.
- [didMoveToSuperview()](didmovetosuperview%28%29.md): Tells the view that its superview changed.
- [willMove(toWindow:)](willmove%28towindow_%29.md): Tells the view that its window object is about to change.

# didMoveToWindow (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Tells the view that its window object changed.

## Declaration

```objectivec
- (void) didMoveToWindow;
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override it to perform additional actions whenever the window changes.

The [window](window.md) property may be `nil` by the time that this method is called, indicating that the receiver does not currently reside in any window. This occurs when the receiver has just been removed from its superview or when the receiver has just been added to a superview that is not attached to a window. Overrides of this method may choose to ignore such cases if they are not of interest.

## See Also

### Observing view-related changes

- [didAddSubview:](didaddsubview%28__%29.md): Tells the view that a subview was added.
- [willRemoveSubview:](willremovesubview%28__%29.md): Tells the view that a subview is about to be removed.
- [willMoveToSuperview:](willmove%28tosuperview_%29.md): Tells the view that its superview is about to change to the specified superview.
- [didMoveToSuperview](didmovetosuperview%28%29.md): Tells the view that its superview changed.
- [willMoveToWindow:](willmove%28towindow_%29.md): Tells the view that its window object is about to change.
