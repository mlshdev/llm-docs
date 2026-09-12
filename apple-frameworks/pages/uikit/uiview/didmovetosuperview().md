> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/didmovetosuperview()](https://developer.apple.com/documentation/uikit/uiview/didmovetosuperview())

# didMoveToSuperview() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the view that its superview changed.

## Declaration

```swift
func didMoveToSuperview()
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override it to perform additional actions whenever the superview changes.

## See Also

### Observing view-related changes

- [didAddSubview(\_:)](didaddsubview%28__%29.md): Tells the view that a subview was added.
- [willRemoveSubview(\_:)](willremovesubview%28__%29.md): Tells the view that a subview is about to be removed.
- [willMove(toSuperview:)](willmove%28tosuperview_%29.md): Tells the view that its superview is about to change to the specified superview.
- [willMove(toWindow:)](willmove%28towindow_%29.md): Tells the view that its window object is about to change.
- [didMoveToWindow()](didmovetowindow%28%29.md): Tells the view that its window object changed.

# didMoveToSuperview (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Tells the view that its superview changed.

## Declaration

```objectivec
- (void) didMoveToSuperview;
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override it to perform additional actions whenever the superview changes.

## See Also

### Observing view-related changes

- [didAddSubview:](didaddsubview%28__%29.md): Tells the view that a subview was added.
- [willRemoveSubview:](willremovesubview%28__%29.md): Tells the view that a subview is about to be removed.
- [willMoveToSuperview:](willmove%28tosuperview_%29.md): Tells the view that its superview is about to change to the specified superview.
- [willMoveToWindow:](willmove%28towindow_%29.md): Tells the view that its window object is about to change.
- [didMoveToWindow](didmovetowindow%28%29.md): Tells the view that its window object changed.
