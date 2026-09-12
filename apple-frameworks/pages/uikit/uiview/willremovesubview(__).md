> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/willremovesubview(_:)](https://developer.apple.com/documentation/uikit/uiview/willremovesubview(_:))

# willRemoveSubview(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the view that a subview is about to be removed.

## Declaration

```swift
func willRemoveSubview(_ subview: UIView)
```

## Parameters

- `subview`: The subview that will be removed.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override it to perform additional actions whenever subviews are removed. This method is called when the subview’s superview changes or when the subview is removed from the view hierarchy completely.

## See Also

### Related Documentation

- [removeFromSuperview()](removefromsuperview%28%29.md): Unlinks the view from its superview and its window, and removes it from the responder chain.

### Observing view-related changes

- [didAddSubview(\_:)](didaddsubview%28__%29.md): Tells the view that a subview was added.
- [willMove(toSuperview:)](willmove%28tosuperview_%29.md): Tells the view that its superview is about to change to the specified superview.
- [didMoveToSuperview()](didmovetosuperview%28%29.md): Tells the view that its superview changed.
- [willMove(toWindow:)](willmove%28towindow_%29.md): Tells the view that its window object is about to change.
- [didMoveToWindow()](didmovetowindow%28%29.md): Tells the view that its window object changed.

# willRemoveSubview: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Tells the view that a subview is about to be removed.

## Declaration

```objectivec
- (void) willRemoveSubview:(UIView *) subview;
```

## Parameters

- `subview`: The subview that will be removed.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override it to perform additional actions whenever subviews are removed. This method is called when the subview’s superview changes or when the subview is removed from the view hierarchy completely.

## See Also

### Related Documentation

- [removeFromSuperview](removefromsuperview%28%29.md): Unlinks the view from its superview and its window, and removes it from the responder chain.

### Observing view-related changes

- [didAddSubview:](didaddsubview%28__%29.md): Tells the view that a subview was added.
- [willMoveToSuperview:](willmove%28tosuperview_%29.md): Tells the view that its superview is about to change to the specified superview.
- [didMoveToSuperview](didmovetosuperview%28%29.md): Tells the view that its superview changed.
- [willMoveToWindow:](willmove%28towindow_%29.md): Tells the view that its window object is about to change.
- [didMoveToWindow](didmovetowindow%28%29.md): Tells the view that its window object changed.
