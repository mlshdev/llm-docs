> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitrackinglayoutguide/constraints(activewhenawayfrom:)](https://developer.apple.com/documentation/uikit/uitrackinglayoutguide/constraints(activewhenawayfrom:))

# constraints(activeWhenAwayFrom:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Returns the constraints that the tracking layout guide activates when it’s away from the given edge, and deactivates when it’s near the edge.

## Declaration

```swift
func constraints(activeWhenAwayFrom edge: NSDirectionalRectEdge) -> [NSLayoutConstraint]
```

## Parameters

- `edge`: The edge that the tracking layout guide uses to determine when to activate or deactivate the constraints.

<a id="return-value"></a>

## Return Value

An array of layout constraints that the tracking layout guide automatically activates and deactivates.

## See Also

### Configuring automatic constraint activation

- [setConstraints(\_:activeWhenNearEdge:)](setconstraints%28__activewhennearedge_%29.md): Configures the tracking layout guide to automatically activate and deactivate constraints when the guide is close to the given edge.
- [setConstraints(\_:activeWhenAwayFrom:)](setconstraints%28__activewhenawayfrom_%29.md): Configures the tracking layout guide to automatically activate and deactivate constraints when the guide is away from the given edge.
- [constraints(activeWhenNearEdge:)](constraints%28activewhennearedge_%29.md): Returns the constraints that the tracking layout guide activates when it’s near the given edge, and deactivates when it’s away from the given edge.

# constraintsActiveWhenAwayFromEdge: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Returns the constraints that the tracking layout guide activates when it’s away from the given edge, and deactivates when it’s near the edge.

## Declaration

```objectivec
- (NSArray<NSLayoutConstraint *> *) constraintsActiveWhenAwayFromEdge:(NSDirectionalRectEdge) edge;
```

## Parameters

- `edge`: The edge that the tracking layout guide uses to determine when to activate or deactivate the constraints.

<a id="return-value"></a>

## Return Value

An array of layout constraints that the tracking layout guide automatically activates and deactivates.

## See Also

### Configuring automatic constraint activation

- [setConstraints:activeWhenNearEdge:](setconstraints%28__activewhennearedge_%29.md): Configures the tracking layout guide to automatically activate and deactivate constraints when the guide is close to the given edge.
- [setConstraints:activeWhenAwayFromEdge:](setconstraints%28__activewhenawayfrom_%29.md): Configures the tracking layout guide to automatically activate and deactivate constraints when the guide is away from the given edge.
- [constraintsActiveWhenNearEdge:](constraints%28activewhennearedge_%29.md): Returns the constraints that the tracking layout guide activates when it’s near the given edge, and deactivates when it’s away from the given edge.
