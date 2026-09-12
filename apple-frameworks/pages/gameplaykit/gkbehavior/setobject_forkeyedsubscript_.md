> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkbehavior/setobject:forkeyedsubscript:](https://developer.apple.com/documentation/gameplaykit/gkbehavior/setobject:forkeyedsubscript:)

# setObject:forKeyedSubscript:

**Interface language:** Objective-C

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets the weight for the goal specified by subscript syntax.

## Declaration

```objectivec
- (void) setObject:(NSNumber *) weight forKeyedSubscript:(GKGoal *) goal;
```

## Parameters

- `weight`: A weight to be applied to the goal’s influence on an agent’s speed and direction.
- `goal`: A goal object.

<a id="Discussion"></a>

## Discussion

This method is equivalent to the [setWeight:forGoal:](setweight%28__for_%29.md) method, but allows access using subscript syntax. Like that method, setting a goal weight by subscript adds the specified goal to the behavior if not already present.

## See Also

### Working with Goals Using Subscript Syntax

- [objectForKeyedSubscript:](subscript%28__%29-2yvko.md): Returns the weight associated with the goal specified by subscript syntax.
- [objectAtIndexedSubscript:](subscript%28__%29-997a9.md): Returns the goal at the specified index in the behavior’s list of goals.
