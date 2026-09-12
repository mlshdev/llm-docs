> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcompositebehavior/init(behaviors:)](https://developer.apple.com/documentation/gameplaykit/gkcompositebehavior/init(behaviors:))

# init(behaviors:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a composite behavior from the specified individual behaviors.

## Declaration

```swift
convenience init(behaviors: [GKBehavior])
```

## Parameters

- `behaviors`: An array of behavior objects.

<a id="return-value"></a>

## Return Value

A new behavior object. To assign a behavior to an agent, use the agent’s [behavior](../gkagent/behavior.md) property.

<a id="Discussion"></a>

## Discussion

The new behavior contains the specified behaviors, each with a weight of `1.0`. To change an individual behavior’s weight after creating the composite behavior, keep a reference to that behavior and use the [setWeight(\_:for:)](setweight%28__for_%29.md) method.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Creating a Composite Behavior

- [init(behaviors:andWeights:)](init%28behaviors_andweights_%29.md): Creates a behavior with the specified behaviors and weights.

# behaviorWithBehaviors: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a composite behavior from the specified individual behaviors.

## Declaration

```objectivec
+ (instancetype) behaviorWithBehaviors:(NSArray<GKBehavior *> *) behaviors;
```

## Parameters

- `behaviors`: An array of behavior objects.

<a id="return-value"></a>

## Return Value

A new behavior object. To assign a behavior to an agent, use the agent’s [behavior](../gkagent/behavior.md) property.

<a id="Discussion"></a>

## Discussion

The new behavior contains the specified behaviors, each with a weight of `1.0`. To change an individual behavior’s weight after creating the composite behavior, keep a reference to that behavior and use the [setWeight:forBehavior:](setweight%28__for_%29.md) method.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Creating a Composite Behavior

- [behaviorWithBehaviors:andWeights:](init%28behaviors_andweights_%29.md): Creates a behavior with the specified behaviors and weights.
