> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsessiondelegate](https://developer.apple.com/documentation/healthkit/hkworkoutsessiondelegate)

# HKWorkoutSessionDelegate (Swift)

**Framework:** HealthKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 2.0+

The session delegate protocol that defines an interface for receiving notifications about errors and changes in the workout session’s state.

## Declaration

```swift
protocol HKWorkoutSessionDelegate : NSObjectProtocol
```

## Mentioned In

- [Running workout sessions](running-workout-sessions.md)

<a id="overview"></a>

## Overview

All the methods are required. HealthKit calls these methods on an anonymous serial background queue.

## Topics

### Tracking workout sessions

- [workoutSession(\_:didChangeTo:from:date:)](hkworkoutsessiondelegate/workoutsession%28__didchangeto_from_date_%29.md): Tells the delegate that the session’s state changed.
- [workoutSession(\_:didFailWithError:)](hkworkoutsessiondelegate/workoutsession%28__didfailwitherror_%29.md): Tells the delegate that the session failed with an error.
- [workoutSession(\_:didGenerate:)](hkworkoutsessiondelegate/workoutsession%28__didgenerate_%29.md): Tells the delegate that the system generated a workout event.
- [workoutSession(\_:didBeginActivityWith:date:)](hkworkoutsessiondelegate/workoutsession%28__didbeginactivitywith_date_%29.md): Tells the delegate that a new workout session began.
- [workoutSession(\_:didEndActivityWith:date:)](hkworkoutsessiondelegate/workoutsession%28__didendactivitywith_date_%29.md): Tells the session that the current workout activity ended.

### Working with mirrored sessions

- [workoutSession(\_:didDisconnectFromRemoteDeviceWithError:)](hkworkoutsessiondelegate/workoutsession%28__diddisconnectfromremotedevicewitherror_%29.md): Tells the delegate that the mirrored workout session disconnected from the primary session.
- [workoutSession(\_:didReceiveDataFromRemoteWorkoutSession:)](hkworkoutsessiondelegate/workoutsession%28__didreceivedatafromremoteworkoutsession_%29.md): Passes data from the remote workout session to the session delegate.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Monitoring the session

- [delegate](hkworkoutsession/delegate.md): The workout session’s delegate.

# HKWorkoutSessionDelegate (Objective-C)

**Framework:** HealthKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 2.0+

The session delegate protocol that defines an interface for receiving notifications about errors and changes in the workout session’s state.

## Declaration

```objectivec
@protocol HKWorkoutSessionDelegate <NSObject>
```

## Mentioned In

- [Running workout sessions](running-workout-sessions.md)

<a id="overview"></a>

## Overview

All the methods are required. HealthKit calls these methods on an anonymous serial background queue.

## Topics

### Tracking workout sessions

- [workoutSession:didChangeToState:fromState:date:](hkworkoutsessiondelegate/workoutsession%28__didchangeto_from_date_%29.md): Tells the delegate that the session’s state changed.
- [workoutSession:didFailWithError:](hkworkoutsessiondelegate/workoutsession%28__didfailwitherror_%29.md): Tells the delegate that the session failed with an error.
- [workoutSession:didGenerateEvent:](hkworkoutsessiondelegate/workoutsession%28__didgenerate_%29.md): Tells the delegate that the system generated a workout event.
- [workoutSession:didBeginActivityWithConfiguration:date:](hkworkoutsessiondelegate/workoutsession%28__didbeginactivitywith_date_%29.md): Tells the delegate that a new workout session began.
- [workoutSession:didEndActivityWithConfiguration:date:](hkworkoutsessiondelegate/workoutsession%28__didendactivitywith_date_%29.md): Tells the session that the current workout activity ended.

### Working with mirrored sessions

- [workoutSession:didDisconnectFromRemoteDeviceWithError:](hkworkoutsessiondelegate/workoutsession%28__diddisconnectfromremotedevicewitherror_%29.md): Tells the delegate that the mirrored workout session disconnected from the primary session.
- [workoutSession:didReceiveDataFromRemoteWorkoutSession:](hkworkoutsessiondelegate/workoutsession%28__didreceivedatafromremoteworkoutsession_%29.md): Passes data from the remote workout session to the session delegate.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Monitoring the session

- [delegate](hkworkoutsession/delegate.md): The workout session’s delegate.
