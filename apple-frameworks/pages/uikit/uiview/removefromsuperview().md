> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/removefromsuperview()](https://developer.apple.com/documentation/uikit/uiview/removefromsuperview())

# removeFromSuperview() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Unlinks the view from its superview and its window, and removes it from the responder chain.

## Declaration

```swift
func removeFromSuperview()
```

## Mentioned In

- [Creating a custom container view controller](../creating-a-custom-container-view-controller.md)

<a id="Discussion"></a>

## Discussion

If the view’s superview is not `nil`, the superview releases the view.

Calling this method removes any constraints that refer to the view you are removing, or that refer to any view in the subtree of the view you are removing.

> **Important**

>  Never call this method from inside your view’s [draw(\_:)](draw%28__%29.md) method.

## See Also

### Managing the view hierarchy

- [superview](superview.md): The receiver’s superview, or `nil` if it has none.
- [subviews](subviews.md): The receiver’s immediate subviews.
- [window](window.md): The receiver’s window object, or `nil` if it has none.
- [addSubview(\_:)](addsubview%28__%29.md): Adds a view to the end of the receiver’s list of subviews.
- [bringSubviewToFront(\_:)](bringsubviewtofront%28__%29.md): Moves the specified subview so that it appears on top of its siblings.
- [sendSubviewToBack(\_:)](sendsubviewtoback%28__%29.md): Moves the specified subview so that it appears behind its siblings.
- [insertSubview(\_:at:)](insertsubview%28__at_%29.md): Inserts a subview at the specified index.
- [insertSubview(\_:aboveSubview:)](insertsubview%28__abovesubview_%29.md): Inserts a view above another view in the view hierarchy.
- [insertSubview(\_:belowSubview:)](insertsubview%28__belowsubview_%29.md): Inserts a view below another view in the view hierarchy.
- [exchangeSubview(at:withSubviewAt:)](exchangesubview%28at_withsubviewat_%29.md): Exchanges the subviews at the specified indices.
- [isDescendant(of:)](isdescendant%28of_%29.md): Returns a Boolean value indicating whether the receiver is a subview of a given view or identical to that view.

# removeFromSuperview (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Unlinks the view from its superview and its window, and removes it from the responder chain.

## Declaration

```objectivec
- (void) removeFromSuperview;
```

## Mentioned In

- [Creating a custom container view controller](../creating-a-custom-container-view-controller.md)

<a id="Discussion"></a>

## Discussion

If the view’s superview is not `nil`, the superview releases the view.

Calling this method removes any constraints that refer to the view you are removing, or that refer to any view in the subtree of the view you are removing.

> **Important**

>  Never call this method from inside your view’s [drawRect:](draw%28__%29.md) method.

## See Also

### Managing the view hierarchy

- [superview](superview.md): The receiver’s superview, or `nil` if it has none.
- [subviews](subviews.md): The receiver’s immediate subviews.
- [window](window.md): The receiver’s window object, or `nil` if it has none.
- [addSubview:](addsubview%28__%29.md): Adds a view to the end of the receiver’s list of subviews.
- [bringSubviewToFront:](bringsubviewtofront%28__%29.md): Moves the specified subview so that it appears on top of its siblings.
- [sendSubviewToBack:](sendsubviewtoback%28__%29.md): Moves the specified subview so that it appears behind its siblings.
- [insertSubview:atIndex:](insertsubview%28__at_%29.md): Inserts a subview at the specified index.
- [insertSubview:aboveSubview:](insertsubview%28__abovesubview_%29.md): Inserts a view above another view in the view hierarchy.
- [insertSubview:belowSubview:](insertsubview%28__belowsubview_%29.md): Inserts a view below another view in the view hierarchy.
- [exchangeSubviewAtIndex:withSubviewAtIndex:](exchangesubview%28at_withsubviewat_%29.md): Exchanges the subviews at the specified indices.
- [isDescendantOfView:](isdescendant%28of_%29.md): Returns a Boolean value indicating whether the receiver is a subview of a given view or identical to that view.
