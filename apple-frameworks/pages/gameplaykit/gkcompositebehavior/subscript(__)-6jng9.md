> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcompositebehavior/subscript(_:)-6jng9](https://developer.apple.com/documentation/gameplaykit/gkcompositebehavior/subscript(_:)-6jng9)

# subscript(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Subscript  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the weight associated with the behavior specified by subscript syntax.

## Declaration

```swift
subscript(behavior: GKBehavior) -> NSNumber { get set }
```

## Parameters

- `behavior`: An individual behavior already included in the composite behavior’s set of behaviors.

<a id="return-value"></a>

## Return Value

The weight applied to that behavior’s influence on an agent’s speed and direction, or `0.0` if that behavior is not in the composite behavior.

<a id="Discussion"></a>

## Discussion

This method is equivalent to the [weight(for:)](weight%28for_%29.md) method, but allows access using subscript syntax.

## See Also

### Working with Behaviors Using Subscript Syntax

- [subscript(\_:)](subscript%28__%29-6krdg.md): Returns the individual behavior at the specified index in the composite behavior’s list of behaviors.

# objectForKeyedSubscript: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the weight associated with the behavior specified by subscript syntax.

## Declaration

```objectivec
- (NSNumber *) objectForKeyedSubscript:(GKBehavior *) behavior;
```

## Parameters

- `behavior`: An individual behavior already included in the composite behavior’s set of behaviors.

<a id="return-value"></a>

## Return Value

The weight applied to that behavior’s influence on an agent’s speed and direction, or `0.0` if that behavior is not in the composite behavior.

<a id="Discussion"></a>

## Discussion

This method is equivalent to the [weightForBehavior:](weight%28for_%29.md) method, but allows access using subscript syntax.

## See Also

### Working with Behaviors Using Subscript Syntax

- [setObject:forKeyedSubscript:](setobject_forkeyedsubscript_.md): Sets the weight for the behavior specified by subscript syntax.
- [objectAtIndexedSubscript:](subscript%28__%29-6krdg.md): Returns the individual behavior at the specified index in the composite behavior’s list of behaviors.
