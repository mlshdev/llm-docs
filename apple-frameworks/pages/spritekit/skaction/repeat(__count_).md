> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/repeat(_:count:)](https://developer.apple.com/documentation/spritekit/skaction/repeat(_:count:))

# repeat(\_:count:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that repeats another action a specified number of times.

## Declaration

```swift
class func `repeat`(_ action: SKAction, count: Int) -> SKAction
```

## Parameters

- `action`: The action to execute.
- `count`: The number of times to execute the action.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the associated action runs to completion and then repeats, until the count is reached.

This action is reversible; it creates a new action that is the reverse of the specified action and then repeats it the same number of times.

## See Also

### Chaining Actions

- [group(\_:)](group%28__%29.md): Creates an action that runs a collection of actions in parallel.
- [sequence(\_:)](sequence%28__%29.md): Creates an action that runs a collection of actions sequentially.
- [repeatForever(\_:)](repeatforever%28__%29.md): Creates an action that repeats another action forever.

# repeatAction:count: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that repeats another action a specified number of times.

## Declaration

```objectivec
+ (SKAction *) repeatAction:(SKAction *) action count:(NSUInteger) count;
```

## Parameters

- `action`: The action to execute.
- `count`: The number of times to execute the action.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the associated action runs to completion and then repeats, until the count is reached.

This action is reversible; it creates a new action that is the reverse of the specified action and then repeats it the same number of times.

## See Also

### Chaining Actions

- [group:](group%28__%29.md): Creates an action that runs a collection of actions in parallel.
- [sequence:](sequence%28__%29.md): Creates an action that runs a collection of actions sequentially.
- [repeatActionForever:](repeatforever%28__%29.md): Creates an action that repeats another action forever.
