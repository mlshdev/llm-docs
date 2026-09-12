> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristic](https://developer.apple.com/documentation/homekit/hmcharacteristic)

# HMCharacteristic (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A specific characteristic of a service, like the brightness of a dimmable light or its color temperature.

## Declaration

```swift
class HMCharacteristic
```

<a id="overview"></a>

## Overview

An [HMCharacteristic](hmcharacteristic.md) instance represents an aspect of a service that provides data, or that your app can control.

You don’t create characteristic instances. Instead, an accessory manufacturer incorporates them into a device, which publishes them to you through the [characteristics](hmservice/characteristics.md) array of an [HMService](hmservice.md) instance.

Characteristics have a [properties](hmcharacteristic/properties.md) array that indicates attributes like readability, writability, and user-visibility. They also have a [characteristicType](hmcharacteristic/characteristictype.md) property that tells your app what the characteristic controls or describes. Device manufacturers can use one of the standard types, given in [Characteristic types](characteristic-types.md), or they can create custom types.

Each characteristic has a [value](hmcharacteristic/value.md) that you can read or write. Some characteristics use plain numbers, Booleans, or strings. Others have application specific meanings declared in enumerations associated with the given characteristic type. The characteristic’s [metadata](hmcharacteristic/metadata.md) can help your app interpret the value.

## Topics

### Identifying a characteristic

- [uniqueIdentifier](hmcharacteristic/uniqueidentifier.md): A unique identifier for the characteristic.
- [localizedDescription](hmcharacteristic/localizeddescription.md): The localized description of the characteristic.

### Reading characteristic properties

- [properties](hmcharacteristic/properties.md): An array of properties that describe the characteristic.
- [Characteristic Properties](characteristic-properties.md): The properties that characteristics can have.

### Determining what a characteristic controls

- [characteristicType](hmcharacteristic/characteristictype.md): The type of the characteristic.
- [Characteristic types](characteristic-types.md): The characteristic types supported by HomeKit-based accessories.

### Controlling a characteristic

- [value](hmcharacteristic/value.md): The current value of the characteristic.
- [readValue(completionHandler:)](hmcharacteristic/readvalue%28completionhandler_%29.md): Reads the value for the characteristic.
- [writeValue(\_:completionHandler:)](hmcharacteristic/writevalue%28__completionhandler_%29.md): Modifies the value of the characteristic.
- [updateAuthorizationData(\_:completionHandler:)](hmcharacteristic/updateauthorizationdata%28__completionhandler_%29.md): Sets or clears authorization data used when writing to the characteristic.

### Managing characteristic presentation

- [metadata](hmcharacteristic/metadata.md): Metadata about the units and other properties of the characteristic.
- [HMCharacteristicMetadata](hmcharacteristicmetadata.md): Metadata that describes a characteristic’s value and that may be useful for presentation purposes.

### Receiving change notifications

- [enableNotification(\_:completionHandler:)](hmcharacteristic/enablenotification%28__completionhandler_%29.md): Enables or disables notifications for changes in the value of the characteristic.
- [isNotificationEnabled](hmcharacteristic/isnotificationenabled.md): A Boolean indicating whether the characteristic has been set to send notifications.

### Getting the characterized service

- [service](hmcharacteristic/service.md): The service that contains this characteristic.

### Initializers

- [init()](hmcharacteristic/init%28%29.md): Deprecated.

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
- [HMService](hmservice.md): A controllable feature of an accessory, like a light attached to a garage door opener.
- [HMMediaSourceDisplayOrderProfile](hmmediasourcedisplayorderprofile.md): An interface from which to read and, if allowed by the accessory, update the ordering of input sources.

# HMCharacteristic (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A specific characteristic of a service, like the brightness of a dimmable light or its color temperature.

## Declaration

```objectivec
@interface HMCharacteristic : NSObject
```

<a id="overview"></a>

## Overview

An [HMCharacteristic](hmcharacteristic.md) instance represents an aspect of a service that provides data, or that your app can control.

You don’t create characteristic instances. Instead, an accessory manufacturer incorporates them into a device, which publishes them to you through the [characteristics](hmservice/characteristics.md) array of an [HMService](hmservice.md) instance.

Characteristics have a [properties](hmcharacteristic/properties.md) array that indicates attributes like readability, writability, and user-visibility. They also have a [characteristicType](hmcharacteristic/characteristictype.md) property that tells your app what the characteristic controls or describes. Device manufacturers can use one of the standard types, given in [Characteristic types](characteristic-types.md), or they can create custom types.

Each characteristic has a [value](hmcharacteristic/value.md) that you can read or write. Some characteristics use plain numbers, Booleans, or strings. Others have application specific meanings declared in enumerations associated with the given characteristic type. The characteristic’s [metadata](hmcharacteristic/metadata.md) can help your app interpret the value.

## Topics

### Identifying a characteristic

- [uniqueIdentifier](hmcharacteristic/uniqueidentifier.md): A unique identifier for the characteristic.
- [localizedDescription](hmcharacteristic/localizeddescription.md): The localized description of the characteristic.

### Reading characteristic properties

- [properties](hmcharacteristic/properties.md): An array of properties that describe the characteristic.
- [Characteristic Properties](characteristic-properties.md): The properties that characteristics can have.

### Determining what a characteristic controls

- [characteristicType](hmcharacteristic/characteristictype.md): The type of the characteristic.
- [Characteristic types](characteristic-types.md): The characteristic types supported by HomeKit-based accessories.

### Controlling a characteristic

- [value](hmcharacteristic/value.md): The current value of the characteristic.
- [readValueWithCompletionHandler:](hmcharacteristic/readvalue%28completionhandler_%29.md): Reads the value for the characteristic.
- [writeValue:completionHandler:](hmcharacteristic/writevalue%28__completionhandler_%29.md): Modifies the value of the characteristic.
- [updateAuthorizationData:completionHandler:](hmcharacteristic/updateauthorizationdata%28__completionhandler_%29.md): Sets or clears authorization data used when writing to the characteristic.

### Managing characteristic presentation

- [metadata](hmcharacteristic/metadata.md): Metadata about the units and other properties of the characteristic.
- [HMCharacteristicMetadata](hmcharacteristicmetadata.md): Metadata that describes a characteristic’s value and that may be useful for presentation purposes.

### Receiving change notifications

- [enableNotification:completionHandler:](hmcharacteristic/enablenotification%28__completionhandler_%29.md): Enables or disables notifications for changes in the value of the characteristic.
- [notificationEnabled](hmcharacteristic/isnotificationenabled.md): A Boolean indicating whether the characteristic has been set to send notifications.

### Getting the characterized service

- [service](hmcharacteristic/service.md): The service that contains this characteristic.

### Instance Methods

- [init](hmcharacteristic/init%28%29.md): Deprecated.

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
- [HMService](hmservice.md): A controllable feature of an accessory, like a light attached to a garage door opener.
