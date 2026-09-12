> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsessionobserver](https://developer.apple.com/documentation/arkit/arsessionobserver)

# ARSessionObserver (Swift)

**Framework:** ARKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+ (deprecated in 1.0)

Methods you can implement to respond to changes in the state of an AR session.

## Declaration

```swift
protocol ARSessionObserver : NSObjectProtocol
```

## Mentioned In

- [Managing Session Life Cycle and Tracking Quality](managing-session-life-cycle-and-tracking-quality.md)

<a id="overview"></a>

## Overview

This protocol defines optional methods common to the [ARSessionDelegate](arsessiondelegate.md), [ARSCNViewDelegate](arscnviewdelegate.md), and [ARSKViewDelegate](arskviewdelegate.md) protocols. You can implement this protocol’s methods when adopting one of those protocols.

## Topics

### Responding to Tracking Quality Changes

- [session(\_:cameraDidChangeTrackingState:)](arsessionobserver/session%28__cameradidchangetrackingstate_%29.md): Informs the delegate of changes to the quality of ARKit’s device position tracking.
- [session(\_:didChange:)](arsessionobserver/session%28__didchange_%29.md): Listen and react to geo-tracking state changes.

### Handling Interruptions

- [sessionWasInterrupted(\_:)](arsessionobserver/sessionwasinterrupted%28__%29.md): Tells the delegate that the session has temporarily stopped processing frames and tracking device position.
- [sessionInterruptionEnded(\_:)](arsessionobserver/sessioninterruptionended%28__%29.md): Tells the delegate that the session has resumed processing frames and tracking device position.
- [sessionShouldAttemptRelocalization(\_:)](arsessionobserver/sessionshouldattemptrelocalization%28__%29.md): Asks the delegate whether to attempt recovery of world-tracking state after an interruption.

### Receiving Audio Data

- [session(\_:didOutputAudioSampleBuffer:)](arsessionobserver/session%28__didoutputaudiosamplebuffer_%29.md): Tells the delegate that a new sample buffer of recorded audio is available.

### Handling Errors

- [session(\_:didFailWithError:)](arsessionobserver/session%28__didfailwitherror_%29.md): Tells the delegate that the session has stopped running due to an error.
- [ARErrorDomain](arerrordomain.md): The domain for error objects produced by an AR session.

### Managing Collaboration

- [session(\_:didOutputCollaborationData:)](arsessionobserver/session%28__didoutputcollaborationdata_%29.md): Provides information for nearby users about your perspective in the environment.

### Instance Methods

- [session(\_:didChangeViewRotationAngle:)](arsessionobserver/session%28__didchangeviewrotationangle_%29.md): This is called when the view rotation angle changes.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [ARSCNViewDelegate](arscnviewdelegate.md)
- [ARSKViewDelegate](arskviewdelegate.md)
- [ARSessionDelegate](arsessiondelegate.md)

## See Also

### Responding to events

- [delegate](arsession/delegate.md): An object you provide to receive captured video images and tracking information, or to respond to changes in session status.
- [delegateQueue](arsession/delegatequeue.md): The dispatch queue through which the session calls your delegate methods.
- [ARSessionDelegate](arsessiondelegate.md): Deprecated. Methods you can implement to receive captured video frame images and tracking state from an AR session.

# ARSessionObserver (Objective-C)

**Framework:** ARKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+ (deprecated in 1.0)

Methods you can implement to respond to changes in the state of an AR session.

## Declaration

```objectivec
@protocol ARSessionObserver <NSObject>
```

## Mentioned In

- [Managing Session Life Cycle and Tracking Quality](managing-session-life-cycle-and-tracking-quality.md)

<a id="overview"></a>

## Overview

This protocol defines optional methods common to the [ARSessionDelegate](arsessiondelegate.md), [ARSCNViewDelegate](arscnviewdelegate.md), and [ARSKViewDelegate](arskviewdelegate.md) protocols. You can implement this protocol’s methods when adopting one of those protocols.

## Topics

### Responding to Tracking Quality Changes

- [session:cameraDidChangeTrackingState:](arsessionobserver/session%28__cameradidchangetrackingstate_%29.md): Informs the delegate of changes to the quality of ARKit’s device position tracking.
- [session:didChangeGeoTrackingStatus:](arsessionobserver/session%28__didchange_%29.md): Listen and react to geo-tracking state changes.

### Handling Interruptions

- [sessionWasInterrupted:](arsessionobserver/sessionwasinterrupted%28__%29.md): Tells the delegate that the session has temporarily stopped processing frames and tracking device position.
- [sessionInterruptionEnded:](arsessionobserver/sessioninterruptionended%28__%29.md): Tells the delegate that the session has resumed processing frames and tracking device position.
- [sessionShouldAttemptRelocalization:](arsessionobserver/sessionshouldattemptrelocalization%28__%29.md): Asks the delegate whether to attempt recovery of world-tracking state after an interruption.

### Receiving Audio Data

- [session:didOutputAudioSampleBuffer:](arsessionobserver/session%28__didoutputaudiosamplebuffer_%29.md): Tells the delegate that a new sample buffer of recorded audio is available.

### Handling Errors

- [session:didFailWithError:](arsessionobserver/session%28__didfailwitherror_%29.md): Tells the delegate that the session has stopped running due to an error.
- [ARErrorDomain](arerrordomain.md): The domain for error objects produced by an AR session.

### Managing Collaboration

- [session:didOutputCollaborationData:](arsessionobserver/session%28__didoutputcollaborationdata_%29.md): Provides information for nearby users about your perspective in the environment.

### Instance Methods

- [session:didChangeViewRotationAngle:](arsessionobserver/session%28__didchangeviewrotationangle_%29.md): This is called when the view rotation angle changes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [ARSCNViewDelegate](arscnviewdelegate.md)
- [ARSKViewDelegate](arskviewdelegate.md)
- [ARSessionDelegate](arsessiondelegate.md)

## See Also

### Responding to events

- [delegate](arsession/delegate.md): An object you provide to receive captured video images and tracking information, or to respond to changes in session status.
- [delegateQueue](arsession/delegatequeue.md): The dispatch queue through which the session calls your delegate methods.
- [ARSessionDelegate](arsessiondelegate.md): Deprecated. Methods you can implement to receive captured video frame images and tracking state from an AR session.
