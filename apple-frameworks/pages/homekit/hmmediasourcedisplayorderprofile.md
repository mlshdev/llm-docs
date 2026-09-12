> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmmediasourcedisplayorderprofile](https://developer.apple.com/documentation/homekit/hmmediasourcedisplayorderprofile)

# HMMediaSourceDisplayOrderProfile

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An interface from which to read and, if allowed by the accessory, update the ordering of input sources.

## Declaration

```swift
@objc class HMMediaSourceDisplayOrderProfile
```

<a id="Overview"></a>

## Overview

This class represents a media source display that orders functionality for the [HMServiceTypeTelevision](hmservicetypetelevision.md) service contained in the services array of the profile.

## Topics

### Managing input source order

- [writeOrder(\_:)](hmmediasourcedisplayorderprofile/writeorder%28__%29.md): Writes the display order of the media sources to the accessory.
- [delegate](hmmediasourcedisplayorderprofile/delegate-swift.property.md): The property that handles updates to the display order.
- [order](hmmediasourcedisplayorderprofile/order.md): The display order of input media sources.
- [canModifyOrder](hmmediasourcedisplayorderprofile/canmodifyorder.md): A Boolean that indicates if the display order of the input media sources can be modified.
- [HMMediaSourceDisplayOrderProfile.Delegate](hmmediasourcedisplayorderprofile/delegate-swift.protocol.md): The protocol through which a delegate receives updates on the order of input media sources.

## Relationships

### Inherits From

- [HMAccessoryProfile](hmaccessoryprofile.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessories

- [HMAccessorySetupManager](hmaccessorysetupmanager.md): An object that setups up new accessories.
- [HMAccessorySetupResult](hmaccessorysetupresult.md): A result object describing information about a successful accessory setup request.
- [HMAccessorySetupRequest](hmaccessorysetuprequest.md): An object that describes how to add and setup up new accessories.
- [Interacting with a home automation network](interacting-with-a-home-automation-network.md): Find all the automation accessories in the primary home and control their state.
- [HMAccessory](hmaccessory.md): A home automation accessory, like a garage door opener or a thermostat.
- [HMService](hmservice.md): A controllable feature of an accessory, like a light attached to a garage door opener.
- [HMCharacteristic](hmcharacteristic.md): A specific characteristic of a service, like the brightness of a dimmable light or its color temperature.
