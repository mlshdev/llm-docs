> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/point(inside:with:)](https://developer.apple.com/documentation/uikit/uiview/point(inside:with:))

# point(inside:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns a Boolean value indicating whether the receiver contains the specified point.

## Declaration

```swift
func point(inside point: CGPoint, with event: UIEvent?) -> Bool
```

## Parameters

- `point`: A point that is in the receiver’s local coordinate system (bounds).
- `event`: The event that warranted a call to this method. If you are calling this method from outside your event-handling code, you may specify `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `point` is inside the receiver’s bounds; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Hit-testing in a view

- [hitTest(\_:with:)](hittest%28__with_%29.md): Returns the farthest descendant in the view hierarchy of the current view, including itself, that contains the specified point.

# pointInside:withEvent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Returns a Boolean value indicating whether the receiver contains the specified point.

## Declaration

```objectivec
- (BOOL) pointInside:(CGPoint) point withEvent:(UIEvent *) event;
```

## Parameters

- `point`: A point that is in the receiver’s local coordinate system (bounds).
- `event`: The event that warranted a call to this method. If you are calling this method from outside your event-handling code, you may specify `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `point` is inside the receiver’s bounds; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Hit-testing in a view

- [hitTest:withEvent:](hittest%28__with_%29.md): Returns the farthest descendant in the view hierarchy of the current view, including itself, that contains the specified point.
