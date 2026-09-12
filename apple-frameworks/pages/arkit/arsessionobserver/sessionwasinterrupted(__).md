> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsessionobserver/sessionwasinterrupted(_:)](https://developer.apple.com/documentation/arkit/arsessionobserver/sessionwasinterrupted(_:))

# sessionWasInterrupted(\_:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Tells the delegate that the session has temporarily stopped processing frames and tracking device position.

## Declaration

```swift
optional func sessionWasInterrupted(_ session: ARSession)
```

## Parameters

- `session`: The session providing information.

<a id="Discussion"></a>

## Discussion

A session is interrupted when it fails to receive camera or motion sensing data. Session interruptions occur whenever camera capture is not available—for example, when your app is in the background or there are multiple foreground apps—or when the device is too busy to process motion sensor data.

> **Important**

>  An interruption is equivalent to manually pausing the session. Do not call [pause()](../arsession/pause%28%29.md) in response to this callback, as that prevents your app from being notified when the interruption ends.

## See Also

### Handling Interruptions

- [sessionInterruptionEnded(\_:)](sessioninterruptionended%28__%29.md): Tells the delegate that the session has resumed processing frames and tracking device position.
- [sessionShouldAttemptRelocalization(\_:)](sessionshouldattemptrelocalization%28__%29.md): Asks the delegate whether to attempt recovery of world-tracking state after an interruption.

# sessionWasInterrupted: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Tells the delegate that the session has temporarily stopped processing frames and tracking device position.

## Declaration

```objectivec
- (void) sessionWasInterrupted:(ARSession *) session;
```

## Parameters

- `session`: The session providing information.

<a id="Discussion"></a>

## Discussion

A session is interrupted when it fails to receive camera or motion sensing data. Session interruptions occur whenever camera capture is not available—for example, when your app is in the background or there are multiple foreground apps—or when the device is too busy to process motion sensor data.

> **Important**

>  An interruption is equivalent to manually pausing the session. Do not call [pause](../arsession/pause%28%29.md) in response to this callback, as that prevents your app from being notified when the interruption ends.

## See Also

### Handling Interruptions

- [sessionInterruptionEnded:](sessioninterruptionended%28__%29.md): Tells the delegate that the session has resumed processing frames and tracking device position.
- [sessionShouldAttemptRelocalization:](sessionshouldattemptrelocalization%28__%29.md): Asks the delegate whether to attempt recovery of world-tracking state after an interruption.
