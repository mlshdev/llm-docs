> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcompositebehavior/setobject:forkeyedsubscript:](https://developer.apple.com/documentation/gameplaykit/gkcompositebehavior/setobject:forkeyedsubscript:)

# setObject:forKeyedSubscript:

**Interface language:** Objective-C

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets the weight for the behavior specified by subscript syntax.

## Declaration

```objectivec
- (void) setObject:(NSNumber *) weight forKeyedSubscript:(GKBehavior *) behavior;
```

## Parameters

- `weight`: A weight to be applied to the individual behavior’s influence on an agent’s speed and direction.
- `behavior`: A behavior object.

<a id="Discussion"></a>

## Discussion

This method is equivalent to the [setWeight:forBehavior:](setweight%28__for_%29.md) method, but allows access using subscript syntax. Like that method, setting a weight by subscript adds the specified individual behavior to the composite behavior if the behavior is not already present.

## See Also

### Working with Behaviors Using Subscript Syntax

- [objectForKeyedSubscript:](subscript%28__%29-6jng9.md): Returns the weight associated with the behavior specified by subscript syntax.
- [objectAtIndexedSubscript:](subscript%28__%29-6krdg.md): Returns the individual behavior at the specified index in the composite behavior’s list of behaviors.
