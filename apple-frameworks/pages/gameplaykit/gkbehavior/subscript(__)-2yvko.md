> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkbehavior/subscript(_:)-2yvko](https://developer.apple.com/documentation/gameplaykit/gkbehavior/subscript(_:)-2yvko)

# subscript(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Subscript  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the weight associated with the goal specified by subscript syntax.

## Declaration

```swift
subscript(goal: GKGoal) -> NSNumber! { get set }
```

## Parameters

- `goal`: A goal already included in the behavior’s set of goals.

<a id="return-value"></a>

## Return Value

The weight to be applied to the goal’s influence on an agent’s speed and direction, or `0.0` if the goal is not in the behavior.

<a id="Discussion"></a>

## Discussion

This method is equivalent to the [weight(for:)](weight%28for_%29.md) method, but allows access using subscript syntax.

## See Also

### Working with Goals Using Subscript Syntax

- [subscript(\_:)](subscript%28__%29-997a9.md): Returns the goal at the specified index in the behavior’s list of goals.

# objectForKeyedSubscript: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the weight associated with the goal specified by subscript syntax.

## Declaration

```objectivec
- (NSNumber *) objectForKeyedSubscript:(GKGoal *) goal;
```

## Parameters

- `goal`: A goal already included in the behavior’s set of goals.

<a id="return-value"></a>

## Return Value

The weight to be applied to the goal’s influence on an agent’s speed and direction, or `0.0` if the goal is not in the behavior.

<a id="Discussion"></a>

## Discussion

This method is equivalent to the [weightForGoal:](weight%28for_%29.md) method, but allows access using subscript syntax.

## See Also

### Working with Goals Using Subscript Syntax

- [setObject:forKeyedSubscript:](setobject_forkeyedsubscript_.md): Sets the weight for the goal specified by subscript syntax.
- [objectAtIndexedSubscript:](subscript%28__%29-997a9.md): Returns the goal at the specified index in the behavior’s list of goals.
