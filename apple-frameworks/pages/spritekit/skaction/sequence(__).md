> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/sequence(_:)](https://developer.apple.com/documentation/spritekit/skaction/sequence(_:))

# sequence(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that runs a collection of actions sequentially.

## Declaration

```swift
class func sequence(_ actions: [SKAction]) -> SKAction
```

## Parameters

- `actions`: An array of [SKAction](../skaction.md) objects.

<a id="return-value"></a>

## Return Value

A sequence action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the first action in the sequence starts and runs to completion. Subsequent actions in the sequence run in a similar fashion until all of the actions in the sequence have executed. The duration of the sequence action is the sum of the durations of the actions in the sequence.

This action is reversible; it creates a new sequence action that reverses the order of the actions. Each action in the reversed sequence is itself reversed. For example, if an action sequence is `{1,2,3}`, the reversed sequence would be `{3R,2R,1R}`.

## See Also

### Chaining Actions

- [group(\_:)](group%28__%29.md): Creates an action that runs a collection of actions in parallel.
- [repeat(\_:count:)](repeat%28__count_%29.md): Creates an action that repeats another action a specified number of times.
- [repeatForever(\_:)](repeatforever%28__%29.md): Creates an action that repeats another action forever.

# sequence: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that runs a collection of actions sequentially.

## Declaration

```objectivec
+ (SKAction *) sequence:(NSArray<SKAction *> *) actions;
```

## Parameters

- `actions`: An array of [SKAction](../skaction.md) objects.

<a id="return-value"></a>

## Return Value

A sequence action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the first action in the sequence starts and runs to completion. Subsequent actions in the sequence run in a similar fashion until all of the actions in the sequence have executed. The duration of the sequence action is the sum of the durations of the actions in the sequence.

This action is reversible; it creates a new sequence action that reverses the order of the actions. Each action in the reversed sequence is itself reversed. For example, if an action sequence is `{1,2,3}`, the reversed sequence would be `{3R,2R,1R}`.

## See Also

### Chaining Actions

- [group:](group%28__%29.md): Creates an action that runs a collection of actions in parallel.
- [repeatAction:count:](repeat%28__count_%29.md): Creates an action that repeats another action a specified number of times.
- [repeatActionForever:](repeatforever%28__%29.md): Creates an action that repeats another action forever.
