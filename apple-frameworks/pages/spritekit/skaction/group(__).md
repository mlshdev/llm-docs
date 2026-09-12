> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/group(_:)](https://developer.apple.com/documentation/spritekit/skaction/group(_:))

# group(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that runs a collection of actions in parallel.

## Declaration

```swift
class func group(_ actions: [SKAction]) -> SKAction
```

## Parameters

- `actions`: An array of [SKAction](../skaction.md) objects.

<a id="return-value"></a>

## Return Value

A group action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the actions that comprise the group all start immediately and run in parallel. The duration of the group action is the longest duration among the collection of actions. If an action in the group has a duration less than the group’s duration, the action completes, then idles until the group completes the remaining actions. This matters most when creating a repeating action that repeats a group.

This action is reversible; it creates a new group action that contains the reverse of each action specified in the group.

## See Also

### Chaining Actions

- [sequence(\_:)](sequence%28__%29.md): Creates an action that runs a collection of actions sequentially.
- [repeat(\_:count:)](repeat%28__count_%29.md): Creates an action that repeats another action a specified number of times.
- [repeatForever(\_:)](repeatforever%28__%29.md): Creates an action that repeats another action forever.

# group: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that runs a collection of actions in parallel.

## Declaration

```objectivec
+ (SKAction *) group:(NSArray<SKAction *> *) actions;
```

## Parameters

- `actions`: An array of [SKAction](../skaction.md) objects.

<a id="return-value"></a>

## Return Value

A group action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the actions that comprise the group all start immediately and run in parallel. The duration of the group action is the longest duration among the collection of actions. If an action in the group has a duration less than the group’s duration, the action completes, then idles until the group completes the remaining actions. This matters most when creating a repeating action that repeats a group.

This action is reversible; it creates a new group action that contains the reverse of each action specified in the group.

## See Also

### Chaining Actions

- [sequence:](sequence%28__%29.md): Creates an action that runs a collection of actions sequentially.
- [repeatAction:count:](repeat%28__count_%29.md): Creates an action that repeats another action a specified number of times.
- [repeatActionForever:](repeatforever%28__%29.md): Creates an action that repeats another action forever.
