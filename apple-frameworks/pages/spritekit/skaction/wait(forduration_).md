> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/wait(forduration:)](https://developer.apple.com/documentation/spritekit/skaction/wait(forduration:))

# wait(forDuration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that idles for a specified period of time.

## Declaration

```swift
class func wait(forDuration duration: TimeInterval) -> SKAction
```

## Parameters

- `duration`: The amount of time to wait.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the action waits for the specified amount of time, then ends. This is typically used as part of a sequence of actions to insert a delay between two other actions. You might also use it in conjunction with the [run(\_:completion:)](../sknode/run%28__completion_%29.md) method to trigger code that needs to run at a later time.

This action is not reversible; the reverse of this action is the same action.

## See Also

### Delaying Actions

- [wait(forDuration:withRange:)](wait%28forduration_withrange_%29.md): Creates an action that idles for a randomized period of time.

# waitForDuration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that idles for a specified period of time.

## Declaration

```objectivec
+ (SKAction *) waitForDuration:(NSTimeInterval) duration;
```

## Parameters

- `duration`: The amount of time to wait.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the action waits for the specified amount of time, then ends. This is typically used as part of a sequence of actions to insert a delay between two other actions. You might also use it in conjunction with the [runAction:completion:](../sknode/run%28__completion_%29.md) method to trigger code that needs to run at a later time.

This action is not reversible; the reverse of this action is the same action.

## See Also

### Delaying Actions

- [waitForDuration:withRange:](wait%28forduration_withrange_%29.md): Creates an action that idles for a randomized period of time.
