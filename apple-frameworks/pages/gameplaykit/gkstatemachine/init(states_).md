> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gameplaykit/gkstatemachine/init(states:)

# init(states:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a state machine with the specified states.

## Declaration

```swift
init(states: [GKState])
```

## Parameters

- `states`: An array of state objects. Each object in the array must be of a unique subclass of [GKState](../gkstate.md).

<a id="return-value"></a>

## Return Value

A new state machine.

<a id="Discussion"></a>

## Discussion

The newly created state machine’s [currentState](currentstate.md) property is `nil`. To choose and enter an initial state, use the [enter(\_:)](enter%28__%29.md) method.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

# initWithStates: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a state machine with the specified states.

## Declaration

```objectivec
- (instancetype) initWithStates:(NSArray<GKState *> *) states;
```

## Parameters

- `states`: An array of state objects. Each object in the array must be of a unique subclass of [GKState](../gkstate.md).

<a id="return-value"></a>

## Return Value

A new state machine.

<a id="Discussion"></a>

## Discussion

The newly created state machine’s [currentState](currentstate.md) property is `nil`. To choose and enter an initial state, use the [enterState:](enter%28__%29.md) method.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Creating a State Machine

- [stateMachineWithStates:](statemachinewithstates_.md): Creates a state machine with the specified states.
