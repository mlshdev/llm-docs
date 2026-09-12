> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/exchangesubview(at:withsubviewat:)](https://developer.apple.com/documentation/uikit/uiview/exchangesubview(at:withsubviewat:))

# exchangeSubview(at:withSubviewAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Exchanges the subviews at the specified indices.

## Declaration

```swift
func exchangeSubview(at index1: Int, withSubviewAt index2: Int)
```

## Parameters

- `index1`: The index of the first subview in the receiver.
- `index2`: The index of the second subview in the receiver.

<a id="Discussion"></a>

## Discussion

Each index represents the position of the corresponding view in the array in the [subviews](subviews.md) property. Subview indices start at `0` and cannot be greater than the number of subviews. This method does not change the superview of either view but simply swaps their positions in the [subviews](subviews.md) array.

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
- [isDescendant(of:)](isdescendant%28of_%29.md): Returns a Boolean value indicating whether the receiver is a subview of a given view or identical to that view.

# exchangeSubviewAtIndex:withSubviewAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Exchanges the subviews at the specified indices.

## Declaration

```objectivec
- (void) exchangeSubviewAtIndex:(NSInteger) index1 withSubviewAtIndex:(NSInteger) index2;
```

## Parameters

- `index1`: The index of the first subview in the receiver.
- `index2`: The index of the second subview in the receiver.

<a id="Discussion"></a>

## Discussion

Each index represents the position of the corresponding view in the array in the [subviews](subviews.md) property. Subview indices start at `0` and cannot be greater than the number of subviews. This method does not change the superview of either view but simply swaps their positions in the [subviews](subviews.md) array.

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
- [isDescendantOfView:](isdescendant%28of_%29.md): Returns a Boolean value indicating whether the receiver is a subview of a given view or identical to that view.
