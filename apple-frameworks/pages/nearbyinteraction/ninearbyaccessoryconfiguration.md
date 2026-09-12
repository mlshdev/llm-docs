> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/ninearbyaccessoryconfiguration](https://developer.apple.com/documentation/nearbyinteraction/ninearbyaccessoryconfiguration)

# NINearbyAccessoryConfiguration (Swift)

**Framework:** Nearby Interaction  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · watchOS 8.0+

A configuration that enables interaction between iPhone and third-party accessories.

## Declaration

```swift
class NINearbyAccessoryConfiguration
```

## Mentioned In

- [Initiating and maintaining a session](initiating-and-maintaining-a-session.md)

<a id="overview"></a>

## Overview

Use this class to interact with a third-party accessory that you partner with or develop. The framework supports ranging with accessories using either Ultra Wideband (UWB) or Bluetooth Channel Sounding technology.

For an example app that demonstrates this configuration with UWB accessories, see [Implementing spatial interactions with third-party accessories](implementing-spatial-interactions-with-third-party-accessories.md).

<a id="Discover-the-accessory-and-create-a-configuration"></a>

### Discover the accessory and create a configuration

To begin the interaction, your app discovers the nearby accessory using a technology you choose — like [Core Bluetooth](../corebluetooth.md), the local network, or a secure internet connection — and establishes a two-way data link.

For UWB accessories, over the data link, the accessory sends your app configuration data for the [init(data:)](ninearbyaccessoryconfiguration/init%28data_%29.md) initializer. The accessory formats the data according to the [Ultra Wideband (UWB) third-party device specification](https://developer.apple.com/nearby-interaction/specification).

For Bluetooth Channel Sounding accessories in iOS 27 and later, create a configuration using the [init(bluetoothChannelSoundingIdentifier:previousBluetoothIdentifier:)](ninearbyaccessoryconfiguration/init%28bluetoothchannelsoundingidentifier_previousbluetoothidentifier_%29.md) initializer with the Bluetooth pairing identifier.

<a id="Enable-background-interaction-for-Bluetooth-accessories"></a>

### Enable background interaction for Bluetooth accessories

In iOS 16, third-party UWB accessories paired to the device through Bluetooth can interact with your app while it’s in the background. This enables a new class of hands-free experiences. For example, the person’s phone can be in their pocket and prompt an eBike to power on when mounted, or prompt lights to turn on and music to play as the person enters a room.

To enable background interaction:

- The accessory implements the Bluetooth requirements described in the [Ultra Wideband (UWB) third-party device specification](https://developer.apple.com/nearby-interaction/specification).
- The app connects and pairs to the accessory using [Core Bluetooth](../corebluetooth.md).
- The app calls the [init(accessoryData:bluetoothPeerIdentifier:)](ninearbyaccessoryconfiguration/init%28accessorydata_bluetoothpeeridentifier_%29.md) initializer and passes in the accessory’s Bluetooth identifier.

<a id="Start-a-session-and-share-configuration-data"></a>

### Start a session and share configuration data

To start a session, the app creates an [NISession](nisession.md) instance and passes an instance of this class into the session’s [run(\_:)](nisession/run%28__%29.md) function. For UWB accessories, after your app sets the session [delegate](nisession/delegate.md), the system invokes the delegate’s [session(\_:didGenerateShareableConfigurationData:for:)](nisessiondelegate/session%28__didgenerateshareableconfigurationdata_for_%29.md) callback and provides your device’s configuration data.

Over the data link, your app sends your device’s configuration data to the UWB accessory, which enables the two devices to start receiving location updates. For Bluetooth Channel Sounding accessories, no configuration data exchange is necessary.

When the system gathers location updates for the accessory, Nearby Interaction calls your delegate’s [session(\_:didUpdate:)](nisessiondelegate/session%28__didupdate_%29.md) implementation. To match [distance](ninearbyobject/distance-676dm.md) updates that your app receives through [session(\_:didUpdate:)](nisessiondelegate/session%28__didupdate_%29.md) with the accessory, compare the argument object’s discovery token with the value of this property’s [accessoryDiscoveryToken](ninearbyaccessoryconfiguration/accessorydiscoverytoken.md).

<a id="Turn-on-Precision-Finding-for-stationary-objects"></a>

### Turn on Precision Finding for stationary objects

In iOS 16, you can combine the visual-spatial power of ARKit with the radio sensitivity of the Ultra Wideband (UWB) chips to locate stationary nearby objects with considerable precision. To do that, set [isCameraAssistanceEnabled](ninearbyaccessoryconfiguration/iscameraassistanceenabled.md) to `true` and optionally provide the interaction session with an [ARSession](../arkit/arsession.md) instance through [setARSession(\_:)](nisession/setarsession%28__%29.md) before running the session. Together, the UWB chip and ARKit’s assistance enable Nearby Interaction to provide the same Precision Finding capabilities present in AirTag.

## Topics

### Creating a configuration for UWB accessories

- [init(data:)](ninearbyaccessoryconfiguration/init%28data_%29.md): Creates a configuration for interaction between iPhone and third-party accessories.
- [init(accessoryData:bluetoothPeerIdentifier:)](ninearbyaccessoryconfiguration/init%28accessorydata_bluetoothpeeridentifier_%29.md): Creates a configuration for an accessory with the given Bluetooth peer identifier.

### Creating a configuration for Bluetooth Channel Sounding accessories

- [init(bluetoothChannelSoundingIdentifier:previousBluetoothIdentifier:)](ninearbyaccessoryconfiguration/init%28bluetoothchannelsoundingidentifier_previousbluetoothidentifier_%29.md): Initializes a configuration for Bluetooth Channel Sounding ranging with an accessory.

### Identifying a peer

- [accessoryDiscoveryToken](ninearbyaccessoryconfiguration/accessorydiscoverytoken.md): An identifier for the accessory in a session.

### Turning on Camera Assistance

- [isCameraAssistanceEnabled](ninearbyaccessoryconfiguration/iscameraassistanceenabled.md): A Boolean value that combines the spatial awareness of ARKit with Nearby Interaction to improve the accuracy of a nearby object’s position.

## Relationships

### Inherits From

- [NIConfiguration](niconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Third-party accessories

- [Implementing spatial interactions with third-party accessories](implementing-spatial-interactions-with-third-party-accessories.md): Establish a connection with a nearby accessory to receive periodic measurements of its distance from the user.
- [NIMotionActivityState](nimotionactivitystate.md): Motion states for a nearby accessory.

# NINearbyAccessoryConfiguration (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · watchOS 8.0+

A configuration that enables interaction between iPhone and third-party accessories.

## Declaration

```objectivec
@interface NINearbyAccessoryConfiguration : NIConfiguration
```

## Mentioned In

- [Initiating and maintaining a session](initiating-and-maintaining-a-session.md)

<a id="overview"></a>

## Overview

Use this class to interact with a third-party accessory that you partner with or develop. The framework supports ranging with accessories using either Ultra Wideband (UWB) or Bluetooth Channel Sounding technology.

For an example app that demonstrates this configuration with UWB accessories, see [Implementing spatial interactions with third-party accessories](implementing-spatial-interactions-with-third-party-accessories.md).

<a id="Discover-the-accessory-and-create-a-configuration"></a>

### Discover the accessory and create a configuration

To begin the interaction, your app discovers the nearby accessory using a technology you choose — like [Core Bluetooth](../corebluetooth.md), the local network, or a secure internet connection — and establishes a two-way data link.

For UWB accessories, over the data link, the accessory sends your app configuration data for the [initWithData:error:](ninearbyaccessoryconfiguration/init%28data_%29.md) initializer. The accessory formats the data according to the [Ultra Wideband (UWB) third-party device specification](https://developer.apple.com/nearby-interaction/specification).

For Bluetooth Channel Sounding accessories in iOS 27 and later, create a configuration using the [initWithBluetoothChannelSoundingIdentifier:previousBluetoothIdentifier:](ninearbyaccessoryconfiguration/init%28bluetoothchannelsoundingidentifier_previousbluetoothidentifier_%29.md) initializer with the Bluetooth pairing identifier.

<a id="Enable-background-interaction-for-Bluetooth-accessories"></a>

### Enable background interaction for Bluetooth accessories

In iOS 16, third-party UWB accessories paired to the device through Bluetooth can interact with your app while it’s in the background. This enables a new class of hands-free experiences. For example, the person’s phone can be in their pocket and prompt an eBike to power on when mounted, or prompt lights to turn on and music to play as the person enters a room.

To enable background interaction:

- The accessory implements the Bluetooth requirements described in the [Ultra Wideband (UWB) third-party device specification](https://developer.apple.com/nearby-interaction/specification).
- The app connects and pairs to the accessory using [Core Bluetooth](../corebluetooth.md).
- The app calls the [initWithAccessoryData:bluetoothPeerIdentifier:error:](ninearbyaccessoryconfiguration/init%28accessorydata_bluetoothpeeridentifier_%29.md) initializer and passes in the accessory’s Bluetooth identifier.

<a id="Start-a-session-and-share-configuration-data"></a>

### Start a session and share configuration data

To start a session, the app creates an [NISession](nisession.md) instance and passes an instance of this class into the session’s [runWithConfiguration:](nisession/run%28__%29.md) function. For UWB accessories, after your app sets the session [delegate](nisession/delegate.md), the system invokes the delegate’s [session:didGenerateShareableConfigurationData:forObject:](nisessiondelegate/session%28__didgenerateshareableconfigurationdata_for_%29.md) callback and provides your device’s configuration data.

Over the data link, your app sends your device’s configuration data to the UWB accessory, which enables the two devices to start receiving location updates. For Bluetooth Channel Sounding accessories, no configuration data exchange is necessary.

When the system gathers location updates for the accessory, Nearby Interaction calls your delegate’s [session:didUpdateNearbyObjects:](nisessiondelegate/session%28__didupdate_%29.md) implementation. To match [distance](ninearbyobject/distance-676dm.md) updates that your app receives through [session:didUpdateNearbyObjects:](nisessiondelegate/session%28__didupdate_%29.md) with the accessory, compare the argument object’s discovery token with the value of this property’s [accessoryDiscoveryToken](ninearbyaccessoryconfiguration/accessorydiscoverytoken.md).

<a id="Turn-on-Precision-Finding-for-stationary-objects"></a>

### Turn on Precision Finding for stationary objects

In iOS 16, you can combine the visual-spatial power of ARKit with the radio sensitivity of the Ultra Wideband (UWB) chips to locate stationary nearby objects with considerable precision. To do that, set [cameraAssistanceEnabled](ninearbyaccessoryconfiguration/iscameraassistanceenabled.md) to `true` and optionally provide the interaction session with an [ARSession](../arkit/arsession.md) instance through [setARSession:](nisession/setarsession%28__%29.md) before running the session. Together, the UWB chip and ARKit’s assistance enable Nearby Interaction to provide the same Precision Finding capabilities present in AirTag.

## Topics

### Creating a configuration for UWB accessories

- [initWithData:error:](ninearbyaccessoryconfiguration/init%28data_%29.md): Creates a configuration for interaction between iPhone and third-party accessories.
- [initWithAccessoryData:bluetoothPeerIdentifier:error:](ninearbyaccessoryconfiguration/init%28accessorydata_bluetoothpeeridentifier_%29.md): Creates a configuration for an accessory with the given Bluetooth peer identifier.

### Creating a configuration for Bluetooth Channel Sounding accessories

- [initWithBluetoothChannelSoundingIdentifier:previousBluetoothIdentifier:](ninearbyaccessoryconfiguration/init%28bluetoothchannelsoundingidentifier_previousbluetoothidentifier_%29.md): Initializes a configuration for Bluetooth Channel Sounding ranging with an accessory.

### Identifying a peer

- [accessoryDiscoveryToken](ninearbyaccessoryconfiguration/accessorydiscoverytoken.md): An identifier for the accessory in a session.

### Turning on Camera Assistance

- [cameraAssistanceEnabled](ninearbyaccessoryconfiguration/iscameraassistanceenabled.md): A Boolean value that combines the spatial awareness of ARKit with Nearby Interaction to improve the accuracy of a nearby object’s position.

## Relationships

### Inherits From

- [NIConfiguration](niconfiguration.md)

## See Also

### Third-party accessories

- [Implementing spatial interactions with third-party accessories](implementing-spatial-interactions-with-third-party-accessories.md): Establish a connection with a nearby accessory to receive periodic measurements of its distance from the user.
- [NIMotionActivityState](nimotionactivitystate.md): Motion states for a nearby accessory.
