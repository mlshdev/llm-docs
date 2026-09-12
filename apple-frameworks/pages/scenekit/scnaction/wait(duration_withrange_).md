> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction/wait(duration:withrange:)](https://developer.apple.com/documentation/scenekit/scnaction/wait(duration:withrange:))

# wait(duration:withRange:) (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates an action that idles for a randomized period of time.

## Declaration

```swift
class func wait(duration sec: TimeInterval, withRange durationRange: TimeInterval) -> SCNAction
```

## Parameters

- `sec`: The average amount of time to wait.
- `durationRange`: The range of possible values for the duration.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the action waits for the specified amount of time and then ends. This is typically used as part of a sequence of actions to insert a delay between two other actions. However, you might also use it in conjunction with the [runAction(\_:completionHandler:)](../scnactionable/runaction%28__completionhandler_%29.md) method to trigger code that needs to run at a later time.

Each time the action is executed, the action computes a new random value for the duration. The duration may vary in either direction by up to half of the value of the `durationRange` parameter.

This action is not reversible; the reverse of this action is the same action.

## See Also

### Creating Actions That Add Delays to Action Sequences

- [wait(duration:)](wait%28duration_%29.md): Creates an action that idles for a specified period of time.

# waitForDuration:withRange: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates an action that idles for a randomized period of time.

## Declaration

```objectivec
+ (SCNAction *) waitForDuration:(NSTimeInterval) sec withRange:(NSTimeInterval) durationRange;
```

## Parameters

- `sec`: The average amount of time to wait.
- `durationRange`: The range of possible values for the duration.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the action waits for the specified amount of time and then ends. This is typically used as part of a sequence of actions to insert a delay between two other actions. However, you might also use it in conjunction with the [runAction:completionHandler:](../scnactionable/runaction%28__completionhandler_%29.md) method to trigger code that needs to run at a later time.

Each time the action is executed, the action computes a new random value for the duration. The duration may vary in either direction by up to half of the value of the `durationRange` parameter.

This action is not reversible; the reverse of this action is the same action.

## See Also

### Creating Actions That Add Delays to Action Sequences

- [waitForDuration:](wait%28duration_%29.md): Creates an action that idles for a specified period of time.
