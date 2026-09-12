> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nisessiondelegate](https://developer.apple.com/documentation/nearbyinteraction/nisessiondelegate)

# NISessionDelegate (Swift)

**Framework:** Nearby Interaction  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

An object that monitors and reacts to session updates.

## Declaration

```swift
protocol NISessionDelegate : NSObjectProtocol
```

## Mentioned In

- [Initiating and maintaining a session](initiating-and-maintaining-a-session.md)

<a id="overview"></a>

## Overview

Assign a delegate that Nearby Interaction can use to notify your app of important events that occur during the session life cycle.

## Topics

### Reacting to session start

- [sessionDidStartRunning(\_:)](nisessiondelegate/sessiondidstartrunning%28__%29.md): Notifies the app when a session starts or resumes running.

### Monitoring peers

- [session(\_:didUpdate:)](nisessiondelegate/session%28__didupdate_%29.md): Notifies you when the session updates nearby objects.
- [session(\_:didGenerateShareableConfigurationData:for:)](nisessiondelegate/session%28__didgenerateshareableconfigurationdata_for_%29.md): Provides configuration data to share with a third-party accessory.
- [session(\_:didRemove:reason:)](nisessiondelegate/session%28__didremove_reason_%29.md): Notifies you when the session removes one or more nearby objects.
- [NINearbyObject.RemovalReason](ninearbyobject/removalreason.md): The reason a session removed a nearby object.

### Managing interruption

- [sessionWasSuspended(\_:)](nisessiondelegate/sessionwassuspended%28__%29.md): Notifies you of a suspended session.
- [sessionSuspensionEnded(\_:)](nisessiondelegate/sessionsuspensionended%28__%29.md): Notifies you of the end of a session’s suspension.

### Handling errors

- [session(\_:didInvalidateWith:)](nisessiondelegate/session%28__didinvalidatewith_%29.md): Notifies you of an invalidated session.

### Coaching the user

- [session(\_:didUpdateAlgorithmConvergence:for:)](nisessiondelegate/session%28__didupdatealgorithmconvergence_for_%29.md): Provides recommended actions the user can take to facilitate the framework’s Camera Assistance.
- [NIAlgorithmConvergenceStatus](nialgorithmconvergencestatus-2fnve.md): The possible states of Camera Assistance.
- [NIAlgorithmConvergenceStatus.Reason](nialgorithmconvergencestatus-2fnve/reason.md): The possible reasons for the Camera Assistance status.

### Monitoring DL-TDOA measurements

- [session(\_:didUpdateDLTDOA:)](nisessiondelegate/session%28__didupdatedltdoa_%29.md): Provides device ranging estimates for a Downlink Time-Difference-of-Arrival session.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Periodic updates

- [NINearbyObject](ninearbyobject.md): Location information for a peer device in an interaction session.

# NISessionDelegate (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

An object that monitors and reacts to session updates.

## Declaration

```objectivec
@protocol NISessionDelegate <NSObject>
```

## Mentioned In

- [Initiating and maintaining a session](initiating-and-maintaining-a-session.md)

<a id="overview"></a>

## Overview

Assign a delegate that Nearby Interaction can use to notify your app of important events that occur during the session life cycle.

## Topics

### Reacting to session start

- [sessionDidStartRunning:](nisessiondelegate/sessiondidstartrunning%28__%29.md): Notifies the app when a session starts or resumes running.

### Monitoring peers

- [session:didUpdateNearbyObjects:](nisessiondelegate/session%28__didupdate_%29.md): Notifies you when the session updates nearby objects.
- [session:didGenerateShareableConfigurationData:forObject:](nisessiondelegate/session%28__didgenerateshareableconfigurationdata_for_%29.md): Provides configuration data to share with a third-party accessory.
- [session:didRemoveNearbyObjects:withReason:](nisessiondelegate/session%28__didremove_reason_%29.md): Notifies you when the session removes one or more nearby objects.
- [NINearbyObjectRemovalReason](ninearbyobject/removalreason.md): The reason a session removed a nearby object.

### Managing interruption

- [sessionWasSuspended:](nisessiondelegate/sessionwassuspended%28__%29.md): Notifies you of a suspended session.
- [sessionSuspensionEnded:](nisessiondelegate/sessionsuspensionended%28__%29.md): Notifies you of the end of a session’s suspension.

### Handling errors

- [session:didInvalidateWithError:](nisessiondelegate/session%28__didinvalidatewith_%29.md): Notifies you of an invalidated session.

### Coaching the user

- [session:didUpdateAlgorithmConvergence:forObject:](nisessiondelegate/session%28__didupdatealgorithmconvergence_for_%29.md): Provides recommended actions the user can take to facilitate the framework’s Camera Assistance.

### Monitoring DL-TDOA measurements

- [session:didUpdateDLTDOAMeasurements:](nisessiondelegate/session%28__didupdatedltdoa_%29.md): Provides device ranging estimates for a Downlink Time-Difference-of-Arrival session.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Periodic updates

- [NINearbyObject](ninearbyobject.md): Location information for a peer device in an interaction session.
