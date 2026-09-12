> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction/wait(duration:)](https://developer.apple.com/documentation/scenekit/scnaction/wait(duration:))

# wait(duration:) (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates an action that idles for a specified period of time.

## Declaration

```swift
class func wait(duration sec: TimeInterval) -> SCNAction
```

## Parameters

- `sec`: The amount of time to wait.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the action waits for the specified amount of time and then ends. This is typically used as part of a sequence of actions to insert a delay between two other actions. You might also use it in conjunction with the [runAction(\_:completionHandler:)](../scnactionable/runaction%28__completionhandler_%29.md) method to trigger code that needs to run at a later time.

This action is not reversible; the reverse of this action is the same action.

## See Also

### Creating Actions That Add Delays to Action Sequences

- [wait(duration:withRange:)](wait%28duration_withrange_%29.md): Creates an action that idles for a randomized period of time.

# waitForDuration: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates an action that idles for a specified period of time.

## Declaration

```objectivec
+ (SCNAction *) waitForDuration:(NSTimeInterval) sec;
```

## Parameters

- `sec`: The amount of time to wait.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the action waits for the specified amount of time and then ends. This is typically used as part of a sequence of actions to insert a delay between two other actions. You might also use it in conjunction with the [runAction:completionHandler:](../scnactionable/runaction%28__completionhandler_%29.md) method to trigger code that needs to run at a later time.

This action is not reversible; the reverse of this action is the same action.

## See Also

### Creating Actions That Add Delays to Action Sequences

- [waitForDuration:withRange:](wait%28duration_withrange_%29.md): Creates an action that idles for a randomized period of time.
