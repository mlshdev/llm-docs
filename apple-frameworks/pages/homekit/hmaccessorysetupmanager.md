> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessorysetupmanager](https://developer.apple.com/documentation/homekit/hmaccessorysetupmanager)

# HMAccessorySetupManager (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 27.0+

An object that setups up new accessories.

## Declaration

```swift
class HMAccessorySetupManager
```

<a id="overview"></a>

## Overview

Use this class to provides steps for the user to add one or more accessories to a particular home, and follow up with additional setup. These APIs don’t require that the current app has home data authorization.

## Topics

### Adding accessories

- [performAccessorySetup(using:completionHandler:)](hmaccessorysetupmanager/performaccessorysetup%28using_completionhandler_%29.md): Performs the process of setting up accessories with Apple Home.

### Initializers

- [init()](hmaccessorysetupmanager/init%28%29.md)

### Type Properties

- [isSupported](hmaccessorysetupmanager/issupported.md)

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

- [HMAccessorySetupResult](hmaccessorysetupresult.md): A result object describing information about a successful accessory setup request.
- [HMAccessorySetupRequest](hmaccessorysetuprequest.md): An object that describes how to add and setup up new accessories.
- [Interacting with a home automation network](interacting-with-a-home-automation-network.md): Find all the automation accessories in the primary home and control their state.
- [HMAccessory](hmaccessory.md): A home automation accessory, like a garage door opener or a thermostat.
- [HMService](hmservice.md): A controllable feature of an accessory, like a light attached to a garage door opener.
- [HMCharacteristic](hmcharacteristic.md): A specific characteristic of a service, like the brightness of a dimmable light or its color temperature.
- [HMMediaSourceDisplayOrderProfile](hmmediasourcedisplayorderprofile.md): An interface from which to read and, if allowed by the accessory, update the ordering of input sources.

# HMAccessorySetupManager (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 27.0+

An object that setups up new accessories.

## Declaration

```objectivec
@interface HMAccessorySetupManager : NSObject
```

<a id="overview"></a>

## Overview

Use this class to provides steps for the user to add one or more accessories to a particular home, and follow up with additional setup. These APIs don’t require that the current app has home data authorization.

## Topics

### Adding accessories

- [performAccessorySetupUsingRequest:completionHandler:](hmaccessorysetupmanager/performaccessorysetup%28using_completionhandler_%29.md): Performs the process of setting up accessories with Apple Home.

### Instance Methods

- [init](hmaccessorysetupmanager/init%28%29.md)

### Type Properties

- [supported](hmaccessorysetupmanager/issupported.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Accessories

- [HMAccessorySetupResult](hmaccessorysetupresult.md): A result object describing information about a successful accessory setup request.
- [HMAccessorySetupRequest](hmaccessorysetuprequest.md): An object that describes how to add and setup up new accessories.
- [Interacting with a home automation network](interacting-with-a-home-automation-network.md): Find all the automation accessories in the primary home and control their state.
- [HMAccessory](hmaccessory.md): A home automation accessory, like a garage door opener or a thermostat.
- [HMService](hmservice.md): A controllable feature of an accessory, like a light attached to a garage door opener.
- [HMCharacteristic](hmcharacteristic.md): A specific characteristic of a service, like the brightness of a dimmable light or its color temperature.
