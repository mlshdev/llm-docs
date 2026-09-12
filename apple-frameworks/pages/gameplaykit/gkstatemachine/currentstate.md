> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkstatemachine/currentstate](https://developer.apple.com/documentation/gameplaykit/gkstatemachine/currentstate)

# currentState (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The state machine’s current state.

## Declaration

```swift
var currentState: GKState? { get }
```

<a id="Discussion"></a>

## Discussion

A state machine can be in only one of its states at a time. To transition to another state, call the [enter(\_:)](enter%28__%29.md) method.

When you call the [update(deltaTime:)](update%28deltatime_%29.md) method, the state machine calls the [update(deltaTime:)](../gkstate/update%28deltatime_%29.md) method on its current state object.

## See Also

### Working with States

- [canEnterState(\_:)](canenterstate%28__%29.md): Returns a Boolean value indicating whether it is valid for the state machine to transition from its current state to a state of the specified class.
- [enter(\_:)](enter%28__%29.md): Attempts to transition the state machine from its current state to a state of the specified class.
- [update(deltaTime:)](update%28deltatime_%29.md): Tells the current state object to perform per-frame updates.

# currentState (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The state machine’s current state.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) GKState * currentState;
```

<a id="Discussion"></a>

## Discussion

A state machine can be in only one of its states at a time. To transition to another state, call the [enterState:](enter%28__%29.md) method.

When you call the [updateWithDeltaTime:](update%28deltatime_%29.md) method, the state machine calls the [updateWithDeltaTime:](../gkstate/update%28deltatime_%29.md) method on its current state object.

## See Also

### Working with States

- [canEnterState:](canenterstate%28__%29.md): Returns a Boolean value indicating whether it is valid for the state machine to transition from its current state to a state of the specified class.
- [enterState:](enter%28__%29.md): Attempts to transition the state machine from its current state to a state of the specified class.
- [stateForClass:](stateforclass_.md): Returns the state object in the state machine corresponding to the specified class.
- [updateWithDeltaTime:](update%28deltatime_%29.md): Tells the current state object to perform per-frame updates.
