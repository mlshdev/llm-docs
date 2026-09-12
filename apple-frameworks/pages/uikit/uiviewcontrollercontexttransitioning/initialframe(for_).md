> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollercontexttransitioning/initialframe(for:)](https://developer.apple.com/documentation/uikit/uiviewcontrollercontexttransitioning/initialframe(for:))

# initialFrame(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the starting frame rectangle for the specified view controller’s view.

## Declaration

```swift
func initialFrame(for vc: UIViewController) -> CGRect
```

## Parameters

- `vc`: The view controller whose frame rectangle you want.

<a id="return-value"></a>

## Return Value

The frame rectangle for the view or [CGRectZero](../../coregraphics/cgrectzero.md) if the frame rectangle is not known or the view is not visible.

<a id="Discussion"></a>

## Discussion

The rectangle returned by this method represents the size of the corresponding view at the beginning of the transition. For the view controller that is already onscreen, this rectangle typically matches the frame rectangle of the container view. For the view controller being presented, the value returned by this method is typically [CGRectZero](../../coregraphics/cgrectzero.md) because the view is not yet on screen.

## See Also

### Getting the transition frame rectangles

- [finalFrame(for:)](finalframe%28for_%29.md): Returns the ending frame rectangle for the specified view controller’s view.

# initialFrameForViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the starting frame rectangle for the specified view controller’s view.

## Declaration

```objectivec
- (CGRect) initialFrameForViewController:(UIViewController *) vc;
```

## Parameters

- `vc`: The view controller whose frame rectangle you want.

<a id="return-value"></a>

## Return Value

The frame rectangle for the view or [CGRectZero](../../coregraphics/cgrectzero.md) if the frame rectangle is not known or the view is not visible.

<a id="Discussion"></a>

## Discussion

The rectangle returned by this method represents the size of the corresponding view at the beginning of the transition. For the view controller that is already onscreen, this rectangle typically matches the frame rectangle of the container view. For the view controller being presented, the value returned by this method is typically [CGRectZero](../../coregraphics/cgrectzero.md) because the view is not yet on screen.

## See Also

### Getting the transition frame rectangles

- [finalFrameForViewController:](finalframe%28for_%29.md): Returns the ending frame rectangle for the specified view controller’s view.
