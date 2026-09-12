> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessorysetuprequest](https://developer.apple.com/documentation/homekit/hmaccessorysetuprequest)

# HMAccessorySetupRequest (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 27.0+

An object that describes how to add and setup up new accessories.

## Declaration

```swift
class HMAccessorySetupRequest
```

<a id="overview"></a>

## Overview

Use this class to provide steps for the user to add one or more accessories to a particular home, and follow up with additional setup.

## Topics

### Setting up accessorices

- [homeUniqueIdentifier](hmaccessorysetuprequest/homeuniqueidentifier.md): The identifier corresponding to the home that the accessory should be added to when being set up.
- [payload](hmaccessorysetuprequest/payload.md): The payload to use for accessory setup.
- [suggestedAccessoryName](hmaccessorysetuprequest/suggestedaccessoryname.md): The name that the framework suggests when the user names the accessory being set up.
- [suggestedRoomUniqueIdentifier](hmaccessorysetuprequest/suggestedroomuniqueidentifier.md): The identifier corresponding to the room that the framework suggests.

### Instance Properties

- [matterPayload](hmaccessorysetuprequest/matterpayload.md)

### Initializers

- [init()](hmaccessorysetuprequest/init%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessories

- [HMAccessorySetupManager](hmaccessorysetupmanager.md): An object that setups up new accessories.
- [HMAccessorySetupResult](hmaccessorysetupresult.md): A result object describing information about a successful accessory setup request.
- [Interacting with a home automation network](interacting-with-a-home-automation-network.md): Find all the automation accessories in the primary home and control their state.
- [HMAccessory](hmaccessory.md): A home automation accessory, like a garage door opener or a thermostat.
- [HMService](hmservice.md): A controllable feature of an accessory, like a light attached to a garage door opener.
- [HMCharacteristic](hmcharacteristic.md): A specific characteristic of a service, like the brightness of a dimmable light or its color temperature.
- [HMMediaSourceDisplayOrderProfile](hmmediasourcedisplayorderprofile.md): An interface from which to read and, if allowed by the accessory, update the ordering of input sources.

# HMAccessorySetupRequest (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 27.0+

An object that describes how to add and setup up new accessories.

## Declaration

```objectivec
@interface HMAccessorySetupRequest : NSObject
```

<a id="overview"></a>

## Overview

Use this class to provide steps for the user to add one or more accessories to a particular home, and follow up with additional setup.

## Topics

### Setting up accessorices

- [homeUniqueIdentifier](hmaccessorysetuprequest/homeuniqueidentifier.md): The identifier corresponding to the home that the accessory should be added to when being set up.
- [payload](hmaccessorysetuprequest/payload.md): The payload to use for accessory setup.
- [suggestedAccessoryName](hmaccessorysetuprequest/suggestedaccessoryname.md): The name that the framework suggests when the user names the accessory being set up.
- [suggestedRoomUniqueIdentifier](hmaccessorysetuprequest/suggestedroomuniqueidentifier.md): The identifier corresponding to the room that the framework suggests.

### Instance Properties

- [matterPayload](hmaccessorysetuprequest/matterpayload.md)

### Instance Methods

- [init](hmaccessorysetuprequest/init%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Accessories

- [HMAccessorySetupManager](hmaccessorysetupmanager.md): An object that setups up new accessories.
- [HMAccessorySetupResult](hmaccessorysetupresult.md): A result object describing information about a successful accessory setup request.
- [Interacting with a home automation network](interacting-with-a-home-automation-network.md): Find all the automation accessories in the primary home and control their state.
- [HMAccessory](hmaccessory.md): A home automation accessory, like a garage door opener or a thermostat.
- [HMService](hmservice.md): A controllable feature of an accessory, like a light attached to a garage door opener.
- [HMCharacteristic](hmcharacteristic.md): A specific characteristic of a service, like the brightness of a dimmable light or its color temperature.
