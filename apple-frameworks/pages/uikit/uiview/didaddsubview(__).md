> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/didaddsubview(_:)](https://developer.apple.com/documentation/uikit/uiview/didaddsubview(_:))

# didAddSubview(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the view that a subview was added.

## Declaration

```swift
func didAddSubview(_ subview: UIView)
```

## Parameters

- `subview`: The view that was added as a subview.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override it to perform additional actions when subviews are added. This method is called in response to adding a subview using any of the relevant view methods.

## See Also

### Related Documentation

- [insertSubview(\_:belowSubview:)](insertsubview%28__belowsubview_%29.md): Inserts a view below another view in the view hierarchy.
- [insertSubview(\_:aboveSubview:)](insertsubview%28__abovesubview_%29.md): Inserts a view above another view in the view hierarchy.
- [addSubview(\_:)](addsubview%28__%29.md): Adds a view to the end of the receiver’s list of subviews.
- [insertSubview(\_:at:)](insertsubview%28__at_%29.md): Inserts a subview at the specified index.

### Observing view-related changes

- [willRemoveSubview(\_:)](willremovesubview%28__%29.md): Tells the view that a subview is about to be removed.
- [willMove(toSuperview:)](willmove%28tosuperview_%29.md): Tells the view that its superview is about to change to the specified superview.
- [didMoveToSuperview()](didmovetosuperview%28%29.md): Tells the view that its superview changed.
- [willMove(toWindow:)](willmove%28towindow_%29.md): Tells the view that its window object is about to change.
- [didMoveToWindow()](didmovetowindow%28%29.md): Tells the view that its window object changed.

# didAddSubview: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Tells the view that a subview was added.

## Declaration

```objectivec
- (void) didAddSubview:(UIView *) subview;
```

## Parameters

- `subview`: The view that was added as a subview.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override it to perform additional actions when subviews are added. This method is called in response to adding a subview using any of the relevant view methods.

## See Also

### Related Documentation

- [insertSubview:belowSubview:](insertsubview%28__belowsubview_%29.md): Inserts a view below another view in the view hierarchy.
- [insertSubview:aboveSubview:](insertsubview%28__abovesubview_%29.md): Inserts a view above another view in the view hierarchy.
- [addSubview:](addsubview%28__%29.md): Adds a view to the end of the receiver’s list of subviews.
- [insertSubview:atIndex:](insertsubview%28__at_%29.md): Inserts a subview at the specified index.

### Observing view-related changes

- [willRemoveSubview:](willremovesubview%28__%29.md): Tells the view that a subview is about to be removed.
- [willMoveToSuperview:](willmove%28tosuperview_%29.md): Tells the view that its superview is about to change to the specified superview.
- [didMoveToSuperview](didmovetosuperview%28%29.md): Tells the view that its superview changed.
- [willMoveToWindow:](willmove%28towindow_%29.md): Tells the view that its window object is about to change.
- [didMoveToWindow](didmovetowindow%28%29.md): Tells the view that its window object changed.
