> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcompositebehavior/behaviorcount](https://developer.apple.com/documentation/gameplaykit/gkcompositebehavior/behaviorcount)

# behaviorCount (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of individual behaviors in the composite behavior.

## Declaration

```swift
var behaviorCount: Int { get }
```

## See Also

### Managing the Individual Behaviors in a Composite Behavior

- [setWeight(\_:for:)](setweight%28__for_%29.md): Sets the weight for the specified individual behavior’s influence on agents, adding that behavior to the composite behavior if it is not already present.
- [weight(for:)](weight%28for_%29.md): Returns the weight for the specified individual behavior’s influence on agents.
- [remove(\_:)](remove%28__%29.md): Removes the specified individual behavior from the composite behavior.
- [removeAllBehaviors()](removeallbehaviors%28%29.md): Removes all individual behaviors from the composite behavior.

# behaviorCount (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of individual behaviors in the composite behavior.

## Declaration

```objectivec
@property (readonly) NSInteger behaviorCount;
```

## See Also

### Managing the Individual Behaviors in a Composite Behavior

- [setWeight:forBehavior:](setweight%28__for_%29.md): Sets the weight for the specified individual behavior’s influence on agents, adding that behavior to the composite behavior if it is not already present.
- [weightForBehavior:](weight%28for_%29.md): Returns the weight for the specified individual behavior’s influence on agents.
- [removeBehavior:](remove%28__%29.md): Removes the specified individual behavior from the composite behavior.
- [removeAllBehaviors](removeallbehaviors%28%29.md): Removes all individual behaviors from the composite behavior.
