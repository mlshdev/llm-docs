> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessory](https://developer.apple.com/documentation/homekit/hmaccessory)

# HMAccessory (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A home automation accessory, like a garage door opener or a thermostat.

## Declaration

```swift
class HMAccessory
```

<a id="overview"></a>

## Overview

An [HMAccessory](hmaccessory.md) instance represents a physical device, like a garage door opener, installed in a home and assigned to a room.

You don’t create accessories directly. Instead you get them from the [accessories](hmhome/accessories.md) array of an [HMHome](hmhome.md) instance when you want all the accessories in a home, or the [accessories](hmroom/accessories.md) array of an [HMRoom](hmroom.md) instance when you want all the accessories in a particular room. Each physical accessory in the home is represented by exactly one accessory instance, so that one instance appears in both a home and a room collection. This is because it’s simultaneously part of the home and in one of the home’s rooms.

When you want to add new accessories, you call the home’s [addAndSetupAccessories(completionHandler:)](hmhome/addandsetupaccessories%28completionhandler_%29.md) method. In response, HomeKit presents the user with an interface that steps through the process of searching for new accessories in the physical environment, naming them, and assigning them to a room.

Accessories provide one or more services, represented by instances of [HMService](hmservice.md), that are the features that the user can control, like the light attached to a garage door opener, or the door opener mechanism itself.

## Topics

### Tracking changes to an accessory

- [delegate](hmaccessory/delegate.md): A delegate that receives updates on the state of the accessory.
- [HMAccessoryDelegate](hmaccessorydelegate.md): A set of methods that defines the communication method for state updates from accessories to their delegates.

### Identifying an Accessory

- [name](hmaccessory/name.md): The name of the accessory.
- [updateName(\_:completionHandler:)](hmaccessory/updatename%28__completionhandler_%29.md): Changes the name of the accessory.
- [uniqueIdentifier](hmaccessory/uniqueidentifier.md): A unique identifier for the accessory.
- [identifier](hmaccessory/identifier.md): Deprecated. A unique identifier for the accessory.

### Categorizing an accessory

- [category](hmaccessory/category.md): The category to which the accessory belongs.
- [HMAccessoryCategory](hmaccessorycategory.md): A category for a HomeKit accessory.

### Locating an accessory

- [room](hmaccessory/room.md): The room containing the accessory.
- [HMRoom](hmroom.md): The smallest subdivision of a home’s space.

### Managing accessory profiles

- [profiles](hmaccessory/profiles.md): An array of profiles implemented by the accessory.
- [HMAccessoryProfile](hmaccessoryprofile.md): A profile that certain accessories implement.
- [HMNetworkConfigurationProfile](hmnetworkconfigurationprofile.md): A profile that provides information about network protection for an accessory.
- [HMCameraProfile](hmcameraprofile.md): A camera profile that interacts with an accessory’s camera.

### Managing camera profiles

- [CameraView](cameraview.md): A SwiftUI view into which a video stream or an image snapshot is rendered.
- [cameraProfiles](hmaccessory/cameraprofiles.md): An array of camera profiles implemented by the accessory.
- [HMCameraProfile](hmcameraprofile.md): A camera profile that interacts with an accessory’s camera.
- [HMCameraView](hmcameraview.md): The view into which a video stream or an image snapshot is rendered.

### Getting accessory state

- [isReachable](hmaccessory/isreachable.md): A Boolean value indicating whether the accessory can be communicated with in the current network environment.
- [isBlocked](hmaccessory/isblocked.md): A Boolean value indicating whether the accessory is blocked.

### Asking an accessory to identify itself

- [supportsIdentify](hmaccessory/supportsidentify.md): A Boolean value that indicates whether the accessory supports the identify action.
- [identify(completionHandler:)](hmaccessory/identify%28completionhandler_%29.md): Asks an accessory to identify itself.

### Controlling accessory features

- [services](hmaccessory/services.md): An array of services provided by the accessory.
- [HMService](hmservice.md): A controllable feature of an accessory, like a light attached to a garage door opener.

### Managing bridged accessories

- [isBridged](hmaccessory/isbridged.md): A Boolean that indicates whether the accessory is accessed through a bridge.
- [uniqueIdentifiersForBridgedAccessories](hmaccessory/uniqueidentifiersforbridgedaccessories.md): An array of unique identifiers, each of which represents an accessory vended by the bridge.
- [identifiersForBridgedAccessories](hmaccessory/identifiersforbridgedaccessories.md): Deprecated. An array of identifiers for accessories available through a bridge.

### Getting manufacturer information

- [firmwareVersion](hmaccessory/firmwareversion.md): The firmware version of the accessory.
- [manufacturer](hmaccessory/manufacturer.md): The manufacturer of the accessory.
- [model](hmaccessory/model.md): The model name of the accessory.

### Browsing for accessories

- [HMAccessoryBrowser](hmaccessorybrowser.md): A network browser you can use to discover new accessories in a home.

### Instance Properties

- [matterNodeID](hmaccessory/matternodeid-67v1j.md)
- [bridgedAccessories](hmaccessory/bridgedaccessories.md)
- [hapInstanceID](hmaccessory/hapinstanceid-3cusx.md)
- [home](hmaccessory/home.md)
- [isVendorAccessory](hmaccessory/isvendoraccessory.md)

### Initializers

- [init()](hmaccessory/init%28%29.md): Deprecated.

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
- [HMService](hmservice.md): A controllable feature of an accessory, like a light attached to a garage door opener.
- [HMCharacteristic](hmcharacteristic.md): A specific characteristic of a service, like the brightness of a dimmable light or its color temperature.
- [HMMediaSourceDisplayOrderProfile](hmmediasourcedisplayorderprofile.md): An interface from which to read and, if allowed by the accessory, update the ordering of input sources.

# HMAccessory (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A home automation accessory, like a garage door opener or a thermostat.

## Declaration

```objectivec
@interface HMAccessory : NSObject
```

<a id="overview"></a>

## Overview

An [HMAccessory](hmaccessory.md) instance represents a physical device, like a garage door opener, installed in a home and assigned to a room.

You don’t create accessories directly. Instead you get them from the [accessories](hmhome/accessories.md) array of an [HMHome](hmhome.md) instance when you want all the accessories in a home, or the [accessories](hmroom/accessories.md) array of an [HMRoom](hmroom.md) instance when you want all the accessories in a particular room. Each physical accessory in the home is represented by exactly one accessory instance, so that one instance appears in both a home and a room collection. This is because it’s simultaneously part of the home and in one of the home’s rooms.

When you want to add new accessories, you call the home’s [addAndSetupAccessoriesWithCompletionHandler:](hmhome/addandsetupaccessories%28completionhandler_%29.md) method. In response, HomeKit presents the user with an interface that steps through the process of searching for new accessories in the physical environment, naming them, and assigning them to a room.

Accessories provide one or more services, represented by instances of [HMService](hmservice.md), that are the features that the user can control, like the light attached to a garage door opener, or the door opener mechanism itself.

## Topics

### Tracking changes to an accessory

- [delegate](hmaccessory/delegate.md): A delegate that receives updates on the state of the accessory.
- [HMAccessoryDelegate](hmaccessorydelegate.md): A set of methods that defines the communication method for state updates from accessories to their delegates.

### Identifying an Accessory

- [name](hmaccessory/name.md): The name of the accessory.
- [updateName:completionHandler:](hmaccessory/updatename%28__completionhandler_%29.md): Changes the name of the accessory.
- [uniqueIdentifier](hmaccessory/uniqueidentifier.md): A unique identifier for the accessory.
- [identifier](hmaccessory/identifier.md): Deprecated. A unique identifier for the accessory.

### Categorizing an accessory

- [category](hmaccessory/category.md): The category to which the accessory belongs.
- [HMAccessoryCategory](hmaccessorycategory.md): A category for a HomeKit accessory.

### Locating an accessory

- [room](hmaccessory/room.md): The room containing the accessory.
- [HMRoom](hmroom.md): The smallest subdivision of a home’s space.

### Managing accessory profiles

- [profiles](hmaccessory/profiles.md): An array of profiles implemented by the accessory.
- [HMAccessoryProfile](hmaccessoryprofile.md): A profile that certain accessories implement.
- [HMNetworkConfigurationProfile](hmnetworkconfigurationprofile.md): A profile that provides information about network protection for an accessory.
- [HMCameraProfile](hmcameraprofile.md): A camera profile that interacts with an accessory’s camera.

### Managing camera profiles

- [cameraProfiles](hmaccessory/cameraprofiles.md): An array of camera profiles implemented by the accessory.
- [HMCameraProfile](hmcameraprofile.md): A camera profile that interacts with an accessory’s camera.
- [HMCameraView](hmcameraview.md): The view into which a video stream or an image snapshot is rendered.

### Getting accessory state

- [reachable](hmaccessory/isreachable.md): A Boolean value indicating whether the accessory can be communicated with in the current network environment.
- [blocked](hmaccessory/isblocked.md): A Boolean value indicating whether the accessory is blocked.

### Asking an accessory to identify itself

- [supportsIdentify](hmaccessory/supportsidentify.md): A Boolean value that indicates whether the accessory supports the identify action.
- [identifyWithCompletionHandler:](hmaccessory/identify%28completionhandler_%29.md): Asks an accessory to identify itself.

### Controlling accessory features

- [services](hmaccessory/services.md): An array of services provided by the accessory.
- [HMService](hmservice.md): A controllable feature of an accessory, like a light attached to a garage door opener.

### Managing bridged accessories

- [bridged](hmaccessory/isbridged.md): A Boolean that indicates whether the accessory is accessed through a bridge.
- [uniqueIdentifiersForBridgedAccessories](hmaccessory/uniqueidentifiersforbridgedaccessories.md): An array of unique identifiers, each of which represents an accessory vended by the bridge.
- [identifiersForBridgedAccessories](hmaccessory/identifiersforbridgedaccessories.md): Deprecated. An array of identifiers for accessories available through a bridge.

### Getting manufacturer information

- [firmwareVersion](hmaccessory/firmwareversion.md): The firmware version of the accessory.
- [manufacturer](hmaccessory/manufacturer.md): The manufacturer of the accessory.
- [model](hmaccessory/model.md): The model name of the accessory.

### Browsing for accessories

- [HMAccessoryBrowser](hmaccessorybrowser.md): A network browser you can use to discover new accessories in a home.

### Instance Properties

- [matterNodeID](hmaccessory/matternodeid-5zfqo.md)
- [HAPInstanceID](hmaccessory/hapinstanceid-667fy.md)
- [bridgedAccessories](hmaccessory/bridgedaccessories.md)
- [home](hmaccessory/home.md)
- [vendorAccessory](hmaccessory/isvendoraccessory.md)

### Instance Methods

- [init](hmaccessory/init%28%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Accessories

- [HMAccessorySetupManager](hmaccessorysetupmanager.md): An object that setups up new accessories.
- [HMAccessorySetupResult](hmaccessorysetupresult.md): A result object describing information about a successful accessory setup request.
- [HMAccessorySetupRequest](hmaccessorysetuprequest.md): An object that describes how to add and setup up new accessories.
- [Interacting with a home automation network](interacting-with-a-home-automation-network.md): Find all the automation accessories in the primary home and control their state.
- [HMService](hmservice.md): A controllable feature of an accessory, like a light attached to a garage door opener.
- [HMCharacteristic](hmcharacteristic.md): A specific characteristic of a service, like the brightness of a dimmable light or its color temperature.
