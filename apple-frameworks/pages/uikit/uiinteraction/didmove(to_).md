> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiinteraction/didmove(to:)](https://developer.apple.com/documentation/uikit/uiinteraction/didmove(to:))

# didMove(to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Tells the interaction that a view added or removed it from the view’s interactions array.

## Declaration

```swift
func didMove(to view: UIView?)
```

## Parameters

- `view`: The view that owns and contains the interaction in its interaction array. If the view is `nil`, the interaction’s owner removed the interaction from its interactions array.

## See Also

### Tracking the Movements

- [willMove(to:)](willmove%28to_%29.md): Tells the interaction that a view will add or remove it from the view’s interactions array.

# didMoveToView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Tells the interaction that a view added or removed it from the view’s interactions array.

## Declaration

```objectivec
- (void) didMoveToView:(UIView *) view;
```

## Parameters

- `view`: The view that owns and contains the interaction in its interaction array. If the view is `nil`, the interaction’s owner removed the interaction from its interactions array.

## See Also

### Tracking the Movements

- [willMoveToView:](willmove%28to_%29.md): Tells the interaction that a view will add or remove it from the view’s interactions array.
