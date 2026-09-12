> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmservice](https://developer.apple.com/documentation/homekit/hmservice)

# HMService (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A controllable feature of an accessory, like a light attached to a garage door opener.

## Declaration

```swift
class HMService
```

<a id="overview"></a>

## Overview

An [HMService](hmservice.md) instance represents a service provided by an accessory. Accessories have both user-controllable services, like a light, and services that are for the use of the accessory itself, like a firmware update service.

You don’t create services directly. Instead you find them in the [services](hmaccessory/services.md) array of an [HMAccessory](hmaccessory.md) instance.

A single accessory may have more than one user-controllable service. For example, most garage door openers have a service for opening and closing the door, and another service for the light on the garage door opener. These services are what Apple’s Home app labels as “accessories”.

You inspect or change a service’s [HMCharacteristic](hmcharacteristic.md) instances to discover state, or modify behavior.

## Topics

### Getting service characteristics

- [characteristics](hmservice/characteristics.md): An array of characteristics for the service.
- [HMCharacteristic](hmcharacteristic.md): A specific characteristic of a service, like the brightness of a dimmable light or its color temperature.

### Identifying the service

- [name](hmservice/name.md): The user specified name of the service.
- [updateName(\_:completionHandler:)](hmservice/updatename%28__completionhandler_%29.md): Updates the name of the service to the specified string.
- [uniqueIdentifier](hmservice/uniqueidentifier.md): A unique identifier for the service.

### Getting the service type

- [serviceType](hmservice/servicetype.md): The type of the service.
- [Accessory Service Types](accessory-service-types.md): The service types supported by HomeKit.
- [localizedDescription](hmservice/localizeddescription.md): The localized description of the service.

### Reading service properties

- [isPrimaryService](hmservice/isprimaryservice.md): A Boolean value that indicates whether this service is the primary service on the accessory.
- [isUserInteractive](hmservice/isuserinteractive.md): A Boolean value that indicates whether this service supports user interaction.

### Associating a secondary service

- [associatedServiceType](hmservice/associatedservicetype.md): The type of the service associated with an outlet or a switch.
- [updateAssociatedServiceType(\_:completionHandler:)](hmservice/updateassociatedservicetype%28__completionhandler_%29.md): Associates the service type of the plugged-in device with a switch or an outlet service.

### Finding the linked services

- [linkedServices](hmservice/linkedservices.md): An array of service objects that represents all the services to which the service links.

### Getting the service’s provider

- [accessory](hmservice/accessory.md): The accessory that provides this service.

### Initializers

- [init()](hmservice/init%28%29.md): Deprecated.

### Instance Properties

- [matterEndpointID](hmservice/matterendpointid-62vu6.md)

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessories

- [HMAccessorySetupManager](hmaccessorysetupmanager.md): An object that setups up new accessories.
- [HMAccessorySetupResult](hmaccessorysetupresult.md): A result object describing information about a successful accessory setup request.
- [HMAccessorySetupRequest](hmaccessorysetuprequest.md): An object that describes how to add and setup up new accessories.
- [Interacting with a home automation network](interacting-with-a-home-automation-network.md): Find all the automation accessories in the primary home and control their state.
- [HMAccessory](hmaccessory.md): A home automation accessory, like a garage door opener or a thermostat.
- [HMCharacteristic](hmcharacteristic.md): A specific characteristic of a service, like the brightness of a dimmable light or its color temperature.
- [HMMediaSourceDisplayOrderProfile](hmmediasourcedisplayorderprofile.md): An interface from which to read and, if allowed by the accessory, update the ordering of input sources.

# HMService (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A controllable feature of an accessory, like a light attached to a garage door opener.

## Declaration

```objectivec
@interface HMService : NSObject
```

<a id="overview"></a>

## Overview

An [HMService](hmservice.md) instance represents a service provided by an accessory. Accessories have both user-controllable services, like a light, and services that are for the use of the accessory itself, like a firmware update service.

You don’t create services directly. Instead you find them in the [services](hmaccessory/services.md) array of an [HMAccessory](hmaccessory.md) instance.

A single accessory may have more than one user-controllable service. For example, most garage door openers have a service for opening and closing the door, and another service for the light on the garage door opener. These services are what Apple’s Home app labels as “accessories”.

You inspect or change a service’s [HMCharacteristic](hmcharacteristic.md) instances to discover state, or modify behavior.

## Topics

### Getting service characteristics

- [characteristics](hmservice/characteristics.md): An array of characteristics for the service.
- [HMCharacteristic](hmcharacteristic.md): A specific characteristic of a service, like the brightness of a dimmable light or its color temperature.

### Identifying the service

- [name](hmservice/name.md): The user specified name of the service.
- [updateName:completionHandler:](hmservice/updatename%28__completionhandler_%29.md): Updates the name of the service to the specified string.
- [uniqueIdentifier](hmservice/uniqueidentifier.md): A unique identifier for the service.

### Getting the service type

- [serviceType](hmservice/servicetype.md): The type of the service.
- [Accessory Service Types](accessory-service-types.md): The service types supported by HomeKit.
- [localizedDescription](hmservice/localizeddescription.md): The localized description of the service.

### Reading service properties

- [primaryService](hmservice/isprimaryservice.md): A Boolean value that indicates whether this service is the primary service on the accessory.
- [userInteractive](hmservice/isuserinteractive.md): A Boolean value that indicates whether this service supports user interaction.

### Associating a secondary service

- [associatedServiceType](hmservice/associatedservicetype.md): The type of the service associated with an outlet or a switch.
- [updateAssociatedServiceType:completionHandler:](hmservice/updateassociatedservicetype%28__completionhandler_%29.md): Associates the service type of the plugged-in device with a switch or an outlet service.

### Finding the linked services

- [linkedServices](hmservice/linkedservices.md): An array of service objects that represents all the services to which the service links.

### Getting the service’s provider

- [accessory](hmservice/accessory.md): The accessory that provides this service.

### Instance Properties

- [matterEndpointID](hmservice/matterendpointid-4egvi.md)

### Instance Methods

- [init](hmservice/init%28%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Accessories

- [HMAccessorySetupManager](hmaccessorysetupmanager.md): An object that setups up new accessories.
- [HMAccessorySetupResult](hmaccessorysetupresult.md): A result object describing information about a successful accessory setup request.
- [HMAccessorySetupRequest](hmaccessorysetuprequest.md): An object that describes how to add and setup up new accessories.
- [Interacting with a home automation network](interacting-with-a-home-automation-network.md): Find all the automation accessories in the primary home and control their state.
- [HMAccessory](hmaccessory.md): A home automation accessory, like a garage door opener or a thermostat.
- [HMCharacteristic](hmcharacteristic.md): A specific characteristic of a service, like the brightness of a dimmable light or its color temperature.
