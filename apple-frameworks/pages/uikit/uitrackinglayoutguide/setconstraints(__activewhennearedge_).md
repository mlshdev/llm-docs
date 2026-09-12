> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitrackinglayoutguide/setconstraints(_:activewhennearedge:)](https://developer.apple.com/documentation/uikit/uitrackinglayoutguide/setconstraints(_:activewhennearedge:))

# setConstraints(\_:activeWhenNearEdge:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Configures the tracking layout guide to automatically activate and deactivate constraints when the guide is close to the given edge.

## Declaration

```swift
func setConstraints(_ trackingConstraints: [NSLayoutConstraint], activeWhenNearEdge edge: NSDirectionalRectEdge)
```

## Parameters

- `trackingConstraints`: The constraints to activate when the tracking layout guide is close to `edge`, and to deactivate when it moves away from `edge`. If you pass `nil`, the guide stops tracking the constraints associated with `edge`.
- `edge`: The edge that the tracking layout guide uses to determine whether to activate or deactivate the constraints.

## See Also

### Configuring automatic constraint activation

- [setConstraints(\_:activeWhenAwayFrom:)](setconstraints%28__activewhenawayfrom_%29.md): Configures the tracking layout guide to automatically activate and deactivate constraints when the guide is away from the given edge.
- [constraints(activeWhenNearEdge:)](constraints%28activewhennearedge_%29.md): Returns the constraints that the tracking layout guide activates when it’s near the given edge, and deactivates when it’s away from the given edge.
- [constraints(activeWhenAwayFrom:)](constraints%28activewhenawayfrom_%29.md): Returns the constraints that the tracking layout guide activates when it’s away from the given edge, and deactivates when it’s near the edge.

# setConstraints:activeWhenNearEdge: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Configures the tracking layout guide to automatically activate and deactivate constraints when the guide is close to the given edge.

## Declaration

```objectivec
- (void) setConstraints:(NSArray<NSLayoutConstraint *> *) trackingConstraints activeWhenNearEdge:(NSDirectionalRectEdge) edge;
```

## Parameters

- `trackingConstraints`: The constraints to activate when the tracking layout guide is close to `edge`, and to deactivate when it moves away from `edge`. If you pass `nil`, the guide stops tracking the constraints associated with `edge`.
- `edge`: The edge that the tracking layout guide uses to determine whether to activate or deactivate the constraints.

## See Also

### Configuring automatic constraint activation

- [setConstraints:activeWhenAwayFromEdge:](setconstraints%28__activewhenawayfrom_%29.md): Configures the tracking layout guide to automatically activate and deactivate constraints when the guide is away from the given edge.
- [constraintsActiveWhenNearEdge:](constraints%28activewhennearedge_%29.md): Returns the constraints that the tracking layout guide activates when it’s near the given edge, and deactivates when it’s away from the given edge.
- [constraintsActiveWhenAwayFromEdge:](constraints%28activewhenawayfrom_%29.md): Returns the constraints that the tracking layout guide activates when it’s away from the given edge, and deactivates when it’s near the edge.
