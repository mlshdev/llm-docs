> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitrackinglayoutguide/setconstraints(_:activewhenawayfrom:)](https://developer.apple.com/documentation/uikit/uitrackinglayoutguide/setconstraints(_:activewhenawayfrom:))

# setConstraints(\_:activeWhenAwayFrom:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Configures the tracking layout guide to automatically activate and deactivate constraints when the guide is away from the given edge.

## Declaration

```swift
func setConstraints(_ trackingConstraints: [NSLayoutConstraint], activeWhenAwayFrom edge: NSDirectionalRectEdge)
```

## Parameters

- `trackingConstraints`: The constraints to deactivate when the tracking layout guide is close to `edge`, and to activate when it moves away from `edge`. If you pass `nil`, the guide deactivates any currently active constraints associated with this edge and removes them from tracking.
- `edge`: The edge that the tracking layout guide uses to determine whether to activate or deactivate the constraints.

## See Also

### Configuring automatic constraint activation

- [setConstraints(\_:activeWhenNearEdge:)](setconstraints%28__activewhennearedge_%29.md): Configures the tracking layout guide to automatically activate and deactivate constraints when the guide is close to the given edge.
- [constraints(activeWhenNearEdge:)](constraints%28activewhennearedge_%29.md): Returns the constraints that the tracking layout guide activates when it’s near the given edge, and deactivates when it’s away from the given edge.
- [constraints(activeWhenAwayFrom:)](constraints%28activewhenawayfrom_%29.md): Returns the constraints that the tracking layout guide activates when it’s away from the given edge, and deactivates when it’s near the edge.

# setConstraints:activeWhenAwayFromEdge: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Configures the tracking layout guide to automatically activate and deactivate constraints when the guide is away from the given edge.

## Declaration

```objectivec
- (void) setConstraints:(NSArray<NSLayoutConstraint *> *) trackingConstraints activeWhenAwayFromEdge:(NSDirectionalRectEdge) edge;
```

## Parameters

- `trackingConstraints`: The constraints to deactivate when the tracking layout guide is close to `edge`, and to activate when it moves away from `edge`. If you pass `nil`, the guide deactivates any currently active constraints associated with this edge and removes them from tracking.
- `edge`: The edge that the tracking layout guide uses to determine whether to activate or deactivate the constraints.

## See Also

### Configuring automatic constraint activation

- [setConstraints:activeWhenNearEdge:](setconstraints%28__activewhennearedge_%29.md): Configures the tracking layout guide to automatically activate and deactivate constraints when the guide is close to the given edge.
- [constraintsActiveWhenNearEdge:](constraints%28activewhennearedge_%29.md): Returns the constraints that the tracking layout guide activates when it’s near the given edge, and deactivates when it’s away from the given edge.
- [constraintsActiveWhenAwayFromEdge:](constraints%28activewhenawayfrom_%29.md): Returns the constraints that the tracking layout guide activates when it’s away from the given edge, and deactivates when it’s near the edge.
