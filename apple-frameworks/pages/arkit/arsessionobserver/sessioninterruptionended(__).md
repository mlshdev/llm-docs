> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsessionobserver/sessioninterruptionended(_:)](https://developer.apple.com/documentation/arkit/arsessionobserver/sessioninterruptionended(_:))

# sessionInterruptionEnded(\_:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Tells the delegate that the session has resumed processing frames and tracking device position.

## Declaration

```swift
optional func sessionInterruptionEnded(_ session: ARSession)
```

## Parameters

- `session`: The session providing information.

<a id="Discussion"></a>

## Discussion

After a session has been interrupted (see the [sessionWasInterrupted(\_:)](sessionwasinterrupted%28__%29.md) delegate method), it automatically resumes running whenever the conditions that caused the interruption improve.

When a session resumes, it continues tracking from its last known state. However, if the device has moved since the interruption began, the ARKit world coordinate system and anchor positions no longer match their original real-world frame of reference. To attempt recovery of world tracking from before the interruption, implement the [sessionShouldAttemptRelocalization(\_:)](sessionshouldattemptrelocalization%28__%29.md) delegate method.

## See Also

### Handling Interruptions

- [sessionWasInterrupted(\_:)](sessionwasinterrupted%28__%29.md): Tells the delegate that the session has temporarily stopped processing frames and tracking device position.
- [sessionShouldAttemptRelocalization(\_:)](sessionshouldattemptrelocalization%28__%29.md): Asks the delegate whether to attempt recovery of world-tracking state after an interruption.

# sessionInterruptionEnded: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Tells the delegate that the session has resumed processing frames and tracking device position.

## Declaration

```objectivec
- (void) sessionInterruptionEnded:(ARSession *) session;
```

## Parameters

- `session`: The session providing information.

<a id="Discussion"></a>

## Discussion

After a session has been interrupted (see the [sessionWasInterrupted:](sessionwasinterrupted%28__%29.md) delegate method), it automatically resumes running whenever the conditions that caused the interruption improve.

When a session resumes, it continues tracking from its last known state. However, if the device has moved since the interruption began, the ARKit world coordinate system and anchor positions no longer match their original real-world frame of reference. To attempt recovery of world tracking from before the interruption, implement the [sessionShouldAttemptRelocalization:](sessionshouldattemptrelocalization%28__%29.md) delegate method.

## See Also

### Handling Interruptions

- [sessionWasInterrupted:](sessionwasinterrupted%28__%29.md): Tells the delegate that the session has temporarily stopped processing frames and tracking device position.
- [sessionShouldAttemptRelocalization:](sessionshouldattemptrelocalization%28__%29.md): Asks the delegate whether to attempt recovery of world-tracking state after an interruption.
