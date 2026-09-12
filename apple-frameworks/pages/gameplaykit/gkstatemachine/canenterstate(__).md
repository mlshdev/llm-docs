> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkstatemachine/canenterstate(_:)](https://developer.apple.com/documentation/gameplaykit/gkstatemachine/canenterstate(_:))

# canEnterState(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value indicating whether it is valid for the state machine to transition from its current state to a state of the specified class.

## Declaration

```swift
func canEnterState(_ stateClass: AnyClass) -> Bool
```

## Parameters

- `stateClass`: The class of state for which to determine whether a transition is allowed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a transition is allowed from the current state to a state of the specified class; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You build a state machine by creating a unique [GKState](../gkstate.md) subclass for each distinct state possible for the machine. The [isValidNextState(\_:)](../gkstate/isvalidnextstate%28__%29.md) method of each state object determines which other states a state machine is allowed to transition into from that state.

A newly created state machine’s [currentState](currentstate.md) property is `nil`. In this case, the [canEnterState(\_:)](canenterstate%28__%29.md) method always returns [true](https://developer.apple.com/documentation/swift/true). To choose and enter an initial state, use the [enter(\_:)](enter%28__%29.md) method.

## See Also

### Working with States

- [currentState](currentstate.md): The state machine’s current state.
- [enter(\_:)](enter%28__%29.md): Attempts to transition the state machine from its current state to a state of the specified class.
- [update(deltaTime:)](update%28deltatime_%29.md): Tells the current state object to perform per-frame updates.

# canEnterState: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value indicating whether it is valid for the state machine to transition from its current state to a state of the specified class.

## Declaration

```objectivec
- (BOOL) canEnterState:(Class) stateClass;
```

## Parameters

- `stateClass`: The class of state for which to determine whether a transition is allowed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a transition is allowed from the current state to a state of the specified class; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You build a state machine by creating a unique [GKState](../gkstate.md) subclass for each distinct state possible for the machine. The [isValidNextState:](../gkstate/isvalidnextstate%28__%29.md) method of each state object determines which other states a state machine is allowed to transition into from that state.

A newly created state machine’s [currentState](currentstate.md) property is `nil`. In this case, the [canEnterState:](canenterstate%28__%29.md) method always returns [true](https://developer.apple.com/documentation/swift/true). To choose and enter an initial state, use the [enterState:](enter%28__%29.md) method.

## See Also

### Working with States

- [currentState](currentstate.md): The state machine’s current state.
- [enterState:](enter%28__%29.md): Attempts to transition the state machine from its current state to a state of the specified class.
- [stateForClass:](stateforclass_.md): Returns the state object in the state machine corresponding to the specified class.
- [updateWithDeltaTime:](update%28deltatime_%29.md): Tells the current state object to perform per-frame updates.
