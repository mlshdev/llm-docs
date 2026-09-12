> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollercontexttransitioning/finalframe(for:)](https://developer.apple.com/documentation/uikit/uiviewcontrollercontexttransitioning/finalframe(for:))

# finalFrame(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the ending frame rectangle for the specified view controller’s view.

## Declaration

```swift
func finalFrame(for vc: UIViewController) -> CGRect
```

## Parameters

- `vc`: The view controller whose frame rectangle you want.

<a id="return-value"></a>

## Return Value

The frame rectangle for the view or [CGRectZero](../../coregraphics/cgrectzero.md) if the frame rectangle is not known or the view is not visible.

<a id="Discussion"></a>

## Discussion

The rectangle returned by this method represents the size of the corresponding view at the end of the transition. For the view being covered during the presentation, the value returned by this method might be [CGRectZero](../../coregraphics/cgrectzero.md) but it might also be a valid frame rectangle.

## See Also

### Getting the transition frame rectangles

- [initialFrame(for:)](initialframe%28for_%29.md): Returns the starting frame rectangle for the specified view controller’s view.

# finalFrameForViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the ending frame rectangle for the specified view controller’s view.

## Declaration

```objectivec
- (CGRect) finalFrameForViewController:(UIViewController *) vc;
```

## Parameters

- `vc`: The view controller whose frame rectangle you want.

<a id="return-value"></a>

## Return Value

The frame rectangle for the view or [CGRectZero](../../coregraphics/cgrectzero.md) if the frame rectangle is not known or the view is not visible.

<a id="Discussion"></a>

## Discussion

The rectangle returned by this method represents the size of the corresponding view at the end of the transition. For the view being covered during the presentation, the value returned by this method might be [CGRectZero](../../coregraphics/cgrectzero.md) but it might also be a valid frame rectangle.

## See Also

### Getting the transition frame rectangles

- [initialFrameForViewController:](initialframe%28for_%29.md): Returns the starting frame rectangle for the specified view controller’s view.
