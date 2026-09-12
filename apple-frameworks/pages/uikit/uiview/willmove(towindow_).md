> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/willmove(towindow:)](https://developer.apple.com/documentation/uikit/uiview/willmove(towindow:))

# willMove(toWindow:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the view that its window object is about to change.

## Declaration

```swift
func willMove(toWindow newWindow: UIWindow?)
```

## Parameters

- `newWindow`: The window object that will be at the root of the receiver’s new view hierarchy. This parameter may be `nil`.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override it to perform additional actions whenever the window changes.

## See Also

### Observing view-related changes

- [didAddSubview(\_:)](didaddsubview%28__%29.md): Tells the view that a subview was added.
- [willRemoveSubview(\_:)](willremovesubview%28__%29.md): Tells the view that a subview is about to be removed.
- [willMove(toSuperview:)](willmove%28tosuperview_%29.md): Tells the view that its superview is about to change to the specified superview.
- [didMoveToSuperview()](didmovetosuperview%28%29.md): Tells the view that its superview changed.
- [didMoveToWindow()](didmovetowindow%28%29.md): Tells the view that its window object changed.

# willMoveToWindow: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Tells the view that its window object is about to change.

## Declaration

```objectivec
- (void) willMoveToWindow:(UIWindow *) newWindow;
```

## Parameters

- `newWindow`: The window object that will be at the root of the receiver’s new view hierarchy. This parameter may be `nil`.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override it to perform additional actions whenever the window changes.

## See Also

### Observing view-related changes

- [didAddSubview:](didaddsubview%28__%29.md): Tells the view that a subview was added.
- [willRemoveSubview:](willremovesubview%28__%29.md): Tells the view that a subview is about to be removed.
- [willMoveToSuperview:](willmove%28tosuperview_%29.md): Tells the view that its superview is about to change to the specified superview.
- [didMoveToSuperview](didmovetosuperview%28%29.md): Tells the view that its superview changed.
- [didMoveToWindow](didmovetowindow%28%29.md): Tells the view that its window object changed.
