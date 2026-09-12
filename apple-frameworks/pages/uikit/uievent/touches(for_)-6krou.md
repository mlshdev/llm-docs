> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uievent/touches(for:)-6krou](https://developer.apple.com/documentation/uikit/uievent/touches(for:)-6krou)

# touches(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the touch objects that are being delivered to the specified gesture recognizer.

## Declaration

```swift
func touches(for gesture: UIGestureRecognizer) -> Set<UITouch>?
```

## Parameters

- `gesture`: An instance of a subclass of the abstract base class UIGestureRecognizer. This gesture-recognizer object must be attached to a view to receive the touches hit-tested to that view and its subviews.

<a id="return-value"></a>

## Return Value

A set of [UITouch](../uitouch.md) objects representing the touches being delivered to the specified gesture recognizer for the event represented by the receiver.

# touchesForGestureRecognizer: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the touch objects that are being delivered to the specified gesture recognizer.

## Declaration

```objectivec
- (NSSet<UITouch *> *) touchesForGestureRecognizer:(UIGestureRecognizer *) gesture;
```

## Parameters

- `gesture`: An instance of a subclass of the abstract base class UIGestureRecognizer. This gesture-recognizer object must be attached to a view to receive the touches hit-tested to that view and its subviews.

<a id="return-value"></a>

## Return Value

A set of [UITouch](../uitouch.md) objects representing the touches being delivered to the specified gesture recognizer for the event represented by the receiver.
