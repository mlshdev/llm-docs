> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/repeatforever(_:)](https://developer.apple.com/documentation/spritekit/skaction/repeatforever(_:))

# repeatForever(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that repeats another action forever.

## Declaration

```swift
class func repeatForever(_ action: SKAction) -> SKAction
```

## Parameters

- `action`: The action to execute.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the associated action runs to completion and then repeats.

This action is reversible; it creates a new action that is the reverse of the specified action and then repeats it forever.

> **Note**

>  The action to be repeated must have a non-instantaneous duration.

## See Also

### Chaining Actions

- [group(\_:)](group%28__%29.md): Creates an action that runs a collection of actions in parallel.
- [sequence(\_:)](sequence%28__%29.md): Creates an action that runs a collection of actions sequentially.
- [repeat(\_:count:)](repeat%28__count_%29.md): Creates an action that repeats another action a specified number of times.

# repeatActionForever: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that repeats another action forever.

## Declaration

```objectivec
+ (SKAction *) repeatActionForever:(SKAction *) action;
```

## Parameters

- `action`: The action to execute.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the associated action runs to completion and then repeats.

This action is reversible; it creates a new action that is the reverse of the specified action and then repeats it forever.

> **Note**

>  The action to be repeated must have a non-instantaneous duration.

## See Also

### Chaining Actions

- [group:](group%28__%29.md): Creates an action that runs a collection of actions in parallel.
- [sequence:](sequence%28__%29.md): Creates an action that runs a collection of actions sequentially.
- [repeatAction:count:](repeat%28__count_%29.md): Creates an action that repeats another action a specified number of times.
