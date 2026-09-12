> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/wait(forduration:withrange:)](https://developer.apple.com/documentation/spritekit/skaction/wait(forduration:withrange:))

# wait(forDuration:withRange:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that idles for a randomized period of time.

## Declaration

```swift
class func wait(forDuration duration: TimeInterval, withRange durationRange: TimeInterval) -> SKAction
```

## Parameters

- `duration`: The average amount of time to wait.
- `durationRange`: The range of possible values for the duration.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the action waits for the specified amount of time, then ends. This is typically used as part of a sequence of actions to insert a delay between two other actions. However, you might also use it in conjunction with the [run(\_:completion:)](../sknode/run%28__completion_%29.md) method to trigger code that needs to run at a later time.

Each time the action is executed, the action computes a new random value for the duration. The duration may vary in either direction by up to half of the value of the `durationRange` parameter.

This action is not reversible; the reverse of this action is the same action.

## See Also

### Delaying Actions

- [wait(forDuration:)](wait%28forduration_%29.md): Creates an action that idles for a specified period of time.

# waitForDuration:withRange: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that idles for a randomized period of time.

## Declaration

```objectivec
+ (SKAction *) waitForDuration:(NSTimeInterval) duration withRange:(NSTimeInterval) durationRange;
```

## Parameters

- `duration`: The average amount of time to wait.
- `durationRange`: The range of possible values for the duration.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the action waits for the specified amount of time, then ends. This is typically used as part of a sequence of actions to insert a delay between two other actions. However, you might also use it in conjunction with the [runAction:completion:](../sknode/run%28__completion_%29.md) method to trigger code that needs to run at a later time.

Each time the action is executed, the action computes a new random value for the duration. The duration may vary in either direction by up to half of the value of the `durationRange` parameter.

This action is not reversible; the reverse of this action is the same action.

## See Also

### Delaying Actions

- [waitForDuration:](wait%28forduration_%29.md): Creates an action that idles for a specified period of time.
