> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipreviewinteraction/view](https://developer.apple.com/documentation/uikit/uipreviewinteraction/view)

# view (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The view from which the preview interaction receives touch events.

## Declaration

```swift
weak var view: UIView? { get }
```

<a id="Discussion"></a>

## Discussion

A preview interaction operates on the view that’s provided at initialization time. Use this property to obtain a reference to that same view. Note that this is a weak property — the preview interaction doesn’t retain a reference to the view it’s provided.

## See Also

### Handling preview interactions

- [cancel()](cancel%28%29.md): Cancels the current preview interaction.
- [location(in:)](location%28in_%29.md): Returns the location of the touch that started the interaction.

# view (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The view from which the preview interaction receives touch events.

## Declaration

```objectivec
@property (nonatomic, weak, readonly) UIView * view;
```

<a id="Discussion"></a>

## Discussion

A preview interaction operates on the view that’s provided at initialization time. Use this property to obtain a reference to that same view. Note that this is a weak property — the preview interaction doesn’t retain a reference to the view it’s provided.

## See Also

### Handling preview interactions

- [cancelInteraction](cancel%28%29.md): Cancels the current preview interaction.
- [locationInCoordinateSpace:](location%28in_%29.md): Returns the location of the touch that started the interaction.
