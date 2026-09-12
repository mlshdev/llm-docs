> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipreviewinteraction/location(in:)](https://developer.apple.com/documentation/uikit/uipreviewinteraction/location(in:))

# location(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the location of the touch that started the interaction.

## Declaration

```swift
func location(in coordinateSpace: (any UICoordinateSpace)?) -> CGPoint
```

## Parameters

- `coordinateSpace`: The coordinate space in which the touch location should be returned.

<a id="return-value"></a>

## Return Value

The [CGPoint](../../corefoundation/cgpoint.md) that represents the current location of the touch, translated into the requested coordinate space.

<a id="Discussion"></a>

## Discussion

Use this method to establish the current location of the touch that triggered the preview interaction.

> **Note**

>  [UIView](../uiview.md) adopts the [UICoordinateSpace](../uicoordinatespace.md) protocol, so you can find the touch location within a view in the view hierarchy.

When the preview interaction isn’t running, calling this method returns an invalid point. You must therefore only call this method in response to one of the delegate callbacks specified in [UIPreviewInteractionDelegate](../uipreviewinteractiondelegate.md).

## See Also

### Handling preview interactions

- [view](view.md): The view from which the preview interaction receives touch events.
- [cancel()](cancel%28%29.md): Cancels the current preview interaction.

# locationInCoordinateSpace: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the location of the touch that started the interaction.

## Declaration

```objectivec
- (CGPoint) locationInCoordinateSpace:(id<UICoordinateSpace>) coordinateSpace;
```

## Parameters

- `coordinateSpace`: The coordinate space in which the touch location should be returned.

<a id="return-value"></a>

## Return Value

The [CGPoint](../../corefoundation/cgpoint.md) that represents the current location of the touch, translated into the requested coordinate space.

<a id="Discussion"></a>

## Discussion

Use this method to establish the current location of the touch that triggered the preview interaction.

> **Note**

>  [UIView](../uiview.md) adopts the [UICoordinateSpace](../uicoordinatespace.md) protocol, so you can find the touch location within a view in the view hierarchy.

When the preview interaction isn’t running, calling this method returns an invalid point. You must therefore only call this method in response to one of the delegate callbacks specified in [UIPreviewInteractionDelegate](../uipreviewinteractiondelegate.md).

## See Also

### Handling preview interactions

- [view](view.md): The view from which the preview interaction receives touch events.
- [cancelInteraction](cancel%28%29.md): Cancels the current preview interaction.
