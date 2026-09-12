> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkstatemachine/statemachinewithstates:](https://developer.apple.com/documentation/gameplaykit/gkstatemachine/statemachinewithstates:)

# stateMachineWithStates:

**Interface language:** Objective-C

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a state machine with the specified states.

## Declaration

```objectivec
+ (instancetype) stateMachineWithStates:(NSArray<GKState *> *) states;
```

## Parameters

- `states`: An array of state objects. Each object in the array must be of a unique subclass of [GKState](../gkstate.md).

<a id="return-value"></a>

## Return Value

A new state machine.

<a id="Discussion"></a>

## Discussion

The newly created state machine’s [currentState](currentstate.md) property is `nil`. To choose and enter an initial state, use the [enterState:](enter%28__%29.md) method.

## See Also

### Creating a State Machine

- [initWithStates:](init%28states_%29.md): Initializes a state machine with the specified states.
