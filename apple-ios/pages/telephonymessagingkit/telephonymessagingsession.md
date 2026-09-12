> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/telephonymessagingsession](https://developer.apple.com/documentation/telephonymessagingkit/telephonymessagingsession)

# TelephonyMessagingSession

**Framework:** TelephonyMessagingKit  
**Kind:** Class  
**Availability:** iOS 26.0+

An object that coordinates interaction with the TelephonyMessagingKit framework.

## Declaration

```swift
final class TelephonyMessagingSession
```

## Mentioned In

- [Creating a carrier messaging app](creating-a-carrier-messaging-app.md)

<a id="overview"></a>

## Overview

Use the [shared](telephonymessagingsession/shared.md) instance provided by this class to access SMS, MMS, and RCS messaging services. You can inspect available services with the [cellularServices](telephonymessagingsession/cellularservices.md) property. As service availability changes, the framework publishes changes through the [cellularServiceStateUpdates](telephonymessagingsession/cellularservicestateupdates.md) asynchronous sequence.

## Topics

### Obtaining the shared instance

- [shared](telephonymessagingsession/shared.md): The shared session instance.

### Determining service availability

- [cellularServices](telephonymessagingsession/cellularservices.md): An array of cellular services available on the system.
- [cellularServiceStateUpdates](telephonymessagingsession/cellularservicestateupdates.md): An asynchronous sequence of cellular service state updates produced by this session.
- [CellularServiceState](cellularservicestate.md): A structure that contains information about a cellular service.

### Using Short Message Service (SMS)

- [smsService](telephonymessagingsession/smsservice.md): The Short Message Service (SMS) service associated with this session.
- [SMSService](smsservice.md): A class that provides an interface for performing SMS operations.

### Using Multimedia Messaging Service (MMS)

- [mmsService](telephonymessagingsession/mmsservice.md): MMS service associated with this session.
- [MMSService](mmsservice.md): A class that provides an interface for performing MMS operations.

### Using Rich Communication Services (RCS)

- [rcsService](telephonymessagingsession/rcsservice.md): RCS service associated with this session.
- [RCSService](rcsservice.md): A class that provides an interface for performing RCS operations.

### Accessing session properties

- [id](telephonymessagingsession/id.md): Identifier for this session.

### Handling errors

- [TelephonyMessagingSession.Error](telephonymessagingsession/error.md): An enumeration of errors that can result from operations on a messaging session.

### Instance Properties

- [isConfiguredForCarrierMessaging](telephonymessagingsession/isconfiguredforcarriermessaging.md): A Boolean value that indicates whether this app is configured to perform carrier messaging operations.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Essentials

- [Creating a carrier messaging app](creating-a-carrier-messaging-app.md): Use TelephonyMessagingKit to send and receive SMS, MMS, and RCS messages.
- [Default Carrier Messaging App](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.carrier-messaging-app): A Boolean value that indicates whether the app can use the TelephonyMessagingKit framework to serve as the default carrier messaging app.
