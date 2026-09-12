> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcompositebehavior/init(behaviors:andweights:)](https://developer.apple.com/documentation/gameplaykit/gkcompositebehavior/init(behaviors:andweights:))

# init(behaviors:andWeights:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a behavior with the specified behaviors and weights.

## Declaration

```swift
convenience init(behaviors: [GKBehavior], andWeights weights: [NSNumber])
```

## Parameters

- `behaviors`: An array of behavior objects.
- `weights`: An array of numbers, each of which is the weight to be applied to the behavior at the corresponding index in the `behaviors` array.

<a id="return-value"></a>

## Return Value

A new behavior object. To assign a behavior to an agent, use the agent’s [behavior](../gkagent/behavior.md) property.

## See Also

### Creating a Composite Behavior

- [init(behaviors:)](init%28behaviors_%29.md): Creates a composite behavior from the specified individual behaviors.

# behaviorWithBehaviors:andWeights: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a behavior with the specified behaviors and weights.

## Declaration

```objectivec
+ (instancetype) behaviorWithBehaviors:(NSArray<GKBehavior *> *) behaviors andWeights:(NSArray<NSNumber *> *) weights;
```

## Parameters

- `behaviors`: An array of behavior objects.
- `weights`: An array of numbers, each of which is the weight to be applied to the behavior at the corresponding index in the `behaviors` array.

<a id="return-value"></a>

## Return Value

A new behavior object. To assign a behavior to an agent, use the agent’s [behavior](../gkagent/behavior.md) property.

## See Also

### Creating a Composite Behavior

- [behaviorWithBehaviors:](init%28behaviors_%29.md): Creates a composite behavior from the specified individual behaviors.
