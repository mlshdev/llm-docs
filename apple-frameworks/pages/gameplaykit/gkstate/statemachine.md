> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gameplaykit/gkstate/statemachine

# stateMachine (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The state machine that owns this state object.

## Declaration

```swift
weak var stateMachine: GKStateMachine? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to refer to the state machine this state object is being used in.

## See Also

### Working with State Machines

- [isValidNextState(\_:)](isvalidnextstate%28__%29.md): Returns a Boolean value indicating whether a state machine currently in this state is allowed to transition into the specified state.

# stateMachine (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The state machine that owns this state object.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) GKStateMachine * stateMachine;
```

<a id="Discussion"></a>

## Discussion

Use this property to refer to the state machine this state object is being used in.

## See Also

### Working with State Machines

- [isValidNextState:](isvalidnextstate%28__%29.md): Returns a Boolean value indicating whether a state machine currently in this state is allowed to transition into the specified state.
