> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/subviews](https://developer.apple.com/documentation/uikit/uiview/subviews)

# subviews (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The receiver’s immediate subviews.

## Declaration

```swift
var subviews: [UIView] { get }
```

<a id="Discussion"></a>

## Discussion

You can use this property to retrieve the subviews associated with your custom view hierarchies. The order of the subviews in the array reflects their visible order on the screen, with the view at index 0 being the back-most view.

For complex views declared in UIKit and other system frameworks, any subviews of the view are generally considered private and subject to change at any time. Therefore, you should not attempt to retrieve or modify subviews for these types of system-supplied views. If you do, your code may break during a future system update.

## See Also

### Managing the view hierarchy

- [superview](superview.md): The receiver’s superview, or `nil` if it has none.
- [window](window.md): The receiver’s window object, or `nil` if it has none.
- [addSubview(\_:)](addsubview%28__%29.md): Adds a view to the end of the receiver’s list of subviews.
- [bringSubviewToFront(\_:)](bringsubviewtofront%28__%29.md): Moves the specified subview so that it appears on top of its siblings.
- [sendSubviewToBack(\_:)](sendsubviewtoback%28__%29.md): Moves the specified subview so that it appears behind its siblings.
- [removeFromSuperview()](removefromsuperview%28%29.md): Unlinks the view from its superview and its window, and removes it from the responder chain.
- [insertSubview(\_:at:)](insertsubview%28__at_%29.md): Inserts a subview at the specified index.
- [insertSubview(\_:aboveSubview:)](insertsubview%28__abovesubview_%29.md): Inserts a view above another view in the view hierarchy.
- [insertSubview(\_:belowSubview:)](insertsubview%28__belowsubview_%29.md): Inserts a view below another view in the view hierarchy.
- [exchangeSubview(at:withSubviewAt:)](exchangesubview%28at_withsubviewat_%29.md): Exchanges the subviews at the specified indices.
- [isDescendant(of:)](isdescendant%28of_%29.md): Returns a Boolean value indicating whether the receiver is a subview of a given view or identical to that view.

# subviews (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

The receiver’s immediate subviews.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<__kindof UIView *> * subviews;
```

<a id="Discussion"></a>

## Discussion

You can use this property to retrieve the subviews associated with your custom view hierarchies. The order of the subviews in the array reflects their visible order on the screen, with the view at index 0 being the back-most view.

For complex views declared in UIKit and other system frameworks, any subviews of the view are generally considered private and subject to change at any time. Therefore, you should not attempt to retrieve or modify subviews for these types of system-supplied views. If you do, your code may break during a future system update.

## See Also

### Managing the view hierarchy

- [superview](superview.md): The receiver’s superview, or `nil` if it has none.
- [window](window.md): The receiver’s window object, or `nil` if it has none.
- [addSubview:](addsubview%28__%29.md): Adds a view to the end of the receiver’s list of subviews.
- [bringSubviewToFront:](bringsubviewtofront%28__%29.md): Moves the specified subview so that it appears on top of its siblings.
- [sendSubviewToBack:](sendsubviewtoback%28__%29.md): Moves the specified subview so that it appears behind its siblings.
- [removeFromSuperview](removefromsuperview%28%29.md): Unlinks the view from its superview and its window, and removes it from the responder chain.
- [insertSubview:atIndex:](insertsubview%28__at_%29.md): Inserts a subview at the specified index.
- [insertSubview:aboveSubview:](insertsubview%28__abovesubview_%29.md): Inserts a view above another view in the view hierarchy.
- [insertSubview:belowSubview:](insertsubview%28__belowsubview_%29.md): Inserts a view below another view in the view hierarchy.
- [exchangeSubviewAtIndex:withSubviewAtIndex:](exchangesubview%28at_withsubviewat_%29.md): Exchanges the subviews at the specified indices.
- [isDescendantOfView:](isdescendant%28of_%29.md): Returns a Boolean value indicating whether the receiver is a subview of a given view or identical to that view.
