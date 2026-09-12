> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/isdescendant(of:)](https://developer.apple.com/documentation/uikit/uiview/isdescendant(of:))

# isDescendant(of:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns a Boolean value indicating whether the receiver is a subview of a given view or identical to that view.

## Declaration

```swift
func isDescendant(of view: UIView) -> Bool
```

## Parameters

- `view`: The view to test against the receiver’s view hierarchy.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver is an immediate or distant subview of `view` or if `view` is the receiver itself; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the view hierarchy

- [superview](superview.md): The receiver’s superview, or `nil` if it has none.
- [subviews](subviews.md): The receiver’s immediate subviews.
- [window](window.md): The receiver’s window object, or `nil` if it has none.
- [addSubview(\_:)](addsubview%28__%29.md): Adds a view to the end of the receiver’s list of subviews.
- [bringSubviewToFront(\_:)](bringsubviewtofront%28__%29.md): Moves the specified subview so that it appears on top of its siblings.
- [sendSubviewToBack(\_:)](sendsubviewtoback%28__%29.md): Moves the specified subview so that it appears behind its siblings.
- [removeFromSuperview()](removefromsuperview%28%29.md): Unlinks the view from its superview and its window, and removes it from the responder chain.
- [insertSubview(\_:at:)](insertsubview%28__at_%29.md): Inserts a subview at the specified index.
- [insertSubview(\_:aboveSubview:)](insertsubview%28__abovesubview_%29.md): Inserts a view above another view in the view hierarchy.
- [insertSubview(\_:belowSubview:)](insertsubview%28__belowsubview_%29.md): Inserts a view below another view in the view hierarchy.
- [exchangeSubview(at:withSubviewAt:)](exchangesubview%28at_withsubviewat_%29.md): Exchanges the subviews at the specified indices.

# isDescendantOfView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Returns a Boolean value indicating whether the receiver is a subview of a given view or identical to that view.

## Declaration

```objectivec
- (BOOL) isDescendantOfView:(UIView *) view;
```

## Parameters

- `view`: The view to test against the receiver’s view hierarchy.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver is an immediate or distant subview of `view` or if `view` is the receiver itself; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the view hierarchy

- [superview](superview.md): The receiver’s superview, or `nil` if it has none.
- [subviews](subviews.md): The receiver’s immediate subviews.
- [window](window.md): The receiver’s window object, or `nil` if it has none.
- [addSubview:](addsubview%28__%29.md): Adds a view to the end of the receiver’s list of subviews.
- [bringSubviewToFront:](bringsubviewtofront%28__%29.md): Moves the specified subview so that it appears on top of its siblings.
- [sendSubviewToBack:](sendsubviewtoback%28__%29.md): Moves the specified subview so that it appears behind its siblings.
- [removeFromSuperview](removefromsuperview%28%29.md): Unlinks the view from its superview and its window, and removes it from the responder chain.
- [insertSubview:atIndex:](insertsubview%28__at_%29.md): Inserts a subview at the specified index.
- [insertSubview:aboveSubview:](insertsubview%28__abovesubview_%29.md): Inserts a view above another view in the view hierarchy.
- [insertSubview:belowSubview:](insertsubview%28__belowsubview_%29.md): Inserts a view below another view in the view hierarchy.
- [exchangeSubviewAtIndex:withSubviewAtIndex:](exchangesubview%28at_withsubviewat_%29.md): Exchanges the subviews at the specified indices.
