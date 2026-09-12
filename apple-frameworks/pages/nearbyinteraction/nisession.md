> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nisession](https://developer.apple.com/documentation/nearbyinteraction/nisession)

# NISession (Swift)

**Framework:** Nearby Interaction  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

An object that identifies a unique connection between two peer devices.

## Declaration

```swift
class NISession
```

## Mentioned In

- [Discovering peers with Multipeer Connectivity](discovering-peers-with-multipeer-connectivity.md)
- [Extending advanced direction finding and ranging](extending-advanced-direction-finding-and-ranging.md)
- [Initiating and maintaining a session](initiating-and-maintaining-a-session.md)

<a id="overview"></a>

## Overview

This class represents the central mechanism to interact with nearby objects, for example, a peer Apple device or third-party accessory. After creating an [NISession](nisession.md) for a nearby object, the app interacts with the object by receiving [NISessionDelegate](nisessiondelegate.md) callbacks.

One session represents an interaction between the user and a single nearby object. To interact with multiple nearby objects, create a separate session for each.

For more information, see [Initiating and maintaining a session](initiating-and-maintaining-a-session.md).

## Topics

### Ensuring feature support

- [deviceCapabilities](nisession/devicecapabilities.md): An object that communicates the device’s supported framework features.
- [NIDeviceCapability](nidevicecapability.md): An interface that adds Boolean values that indicate an interaction session feature support.

### Connecting to a peer device

- [discoveryToken](nisession/discoverytoken.md): A temporary, random identifier for a device.
- [NIDiscoveryToken](nidiscoverytoken.md): An object that uniquely identifies a peer that participates in an interaction session.
- [run(\_:)](nisession/run%28__%29.md): Starts a session with a nearby peer.
- [configuration](nisession/configuration.md): The configuration run by the session.
- [delegateQueue](nisession/delegatequeue.md): The dispatch queue on which the session invokes delegate callbacks.

### Managing life cycle

- [delegate](nisession/delegate.md): An object that the framework notifies of session events.
- [pause()](nisession/pause%28%29.md): Stops sending distance and direction updates to the peer.
- [invalidate()](nisession/invalidate%28%29.md): Stops a running session.

### Utilizing Camera Assistance

- [setARSession(\_:)](nisession/setarsession%28__%29.md): Provides the framework with an existing AR session to use for Camera Assistance.
- [worldTransform(for:)](nisession/worldtransform%28for_%29.md): Returns a world transform to integrate a nearby object in an AR experience.

### Providing accessory state information

- [updateMotionState(\_:forObjectWithToken:)](nisession/updatemotionstate%28__forobjectwithtoken_%29.md): Notifies the session of an accessory’s motion state change.
- [NIMotionActivityState](nimotionactivitystate.md): Motion states for a nearby accessory.

### Deprecated

- [isSupported](nisession/issupported.md): Deprecated. A Boolean value that indicates whether the device supports basic interaction-session functionality.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Setup

- [Initiating and maintaining a session](initiating-and-maintaining-a-session.md): Measure the relative position of a nearby device and coach the user to sustain interaction.

# NISession (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

An object that identifies a unique connection between two peer devices.

## Declaration

```objectivec
@interface NISession : NSObject
```

## Mentioned In

- [Discovering peers with Multipeer Connectivity](discovering-peers-with-multipeer-connectivity.md)
- [Extending advanced direction finding and ranging](extending-advanced-direction-finding-and-ranging.md)
- [Initiating and maintaining a session](initiating-and-maintaining-a-session.md)

<a id="overview"></a>

## Overview

This class represents the central mechanism to interact with nearby objects, for example, a peer Apple device or third-party accessory. After creating an [NISession](nisession.md) for a nearby object, the app interacts with the object by receiving [NISessionDelegate](nisessiondelegate.md) callbacks.

One session represents an interaction between the user and a single nearby object. To interact with multiple nearby objects, create a separate session for each.

For more information, see [Initiating and maintaining a session](initiating-and-maintaining-a-session.md).

## Topics

### Ensuring feature support

- [deviceCapabilities](nisession/devicecapabilities.md): An object that communicates the device’s supported framework features.
- [NIDeviceCapability](nidevicecapability.md): An interface that adds Boolean values that indicate an interaction session feature support.

### Connecting to a peer device

- [discoveryToken](nisession/discoverytoken.md): A temporary, random identifier for a device.
- [NIDiscoveryToken](nidiscoverytoken.md): An object that uniquely identifies a peer that participates in an interaction session.
- [runWithConfiguration:](nisession/run%28__%29.md): Starts a session with a nearby peer.
- [configuration](nisession/configuration.md): The configuration run by the session.
- [delegateQueue](nisession/delegatequeue.md): The dispatch queue on which the session invokes delegate callbacks.

### Managing life cycle

- [delegate](nisession/delegate.md): An object that the framework notifies of session events.
- [pause](nisession/pause%28%29.md): Stops sending distance and direction updates to the peer.
- [invalidate](nisession/invalidate%28%29.md): Stops a running session.

### Utilizing Camera Assistance

- [setARSession:](nisession/setarsession%28__%29.md): Provides the framework with an existing AR session to use for Camera Assistance.
- [worldTransformForObject:](nisession/worldtransformforobject_.md): Returns a world transform to integrate a nearby object in an AR experience.
- [NINearbyObjectWorldTransformNotAvailable](ninearbyobjectworldtransformnotavailable.md): A constant that indicates that the framework is unable to provide a world transform for a nearby object.

### Providing accessory state information

- [updateMotionState:forObjectWithToken:](nisession/updatemotionstate%28__forobjectwithtoken_%29.md): Notifies the session of an accessory’s motion state change.
- [NIMotionActivityState](nimotionactivitystate.md): Motion states for a nearby accessory.

### Deprecated

- [supported](nisession/issupported.md): Deprecated. A Boolean value that indicates whether the device supports basic interaction-session functionality.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Setup

- [Initiating and maintaining a session](initiating-and-maintaining-a-session.md): Measure the relative position of a nearby device and coach the user to sustain interaction.
