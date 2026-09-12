> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhomemanager](https://developer.apple.com/documentation/homekit/hmhomemanager)

# HMHomeManager (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The manager for a collection of one or more of a user’s homes.

## Declaration

```swift
class HMHomeManager
```

## Mentioned In

- [Enabling HomeKit in your app](enabling-homekit-in-your-app.md)

<a id="overview"></a>

## Overview

HomeKit stores the user’s home automation information in a database that’s shared among Apple’s built-in iOS Home app, your HomeKit-enabled app, and apps from other developers. All these apps access the database as peers using the HomeKit framework.

![Diagram showing how different apps use HomeKit to access the shared HomeKit database.](https://developer.apple.com/images/com.apple.homekit/media-3111423@2x.png)

Each app creates a single [HMHomeManager](hmhomemanager.md) instance to coordinate its HomeKit-related activities. The manager’s [homes](hmhomemanager/homes.md) array gives your app access to a collection of [HMHome](hmhome.md) instances that represent the user’s homes. These in turn contain references to the home automation accessories that your app can inspect and control.

![Diagram showing a collection of homes within the home manager, each of which has a collection of accessories.](https://developer.apple.com/images/com.apple.homekit/media-3111594@2x.png)

Adopt the [HMHomeManagerDelegate](hmhomemanagerdelegate.md) protocol in your app to stay informed of any changes to the set of homes made outside your app.

## Topics

### Inspecting authorization status

- [authorizationStatus](hmhomemanager/authorizationstatus.md): The current state of the app’s access to home data.
- [HMHomeManagerAuthorizationStatus](hmhomemanagerauthorizationstatus.md): The possible home-access states.

### Working with the home layout

- [homes](hmhomemanager/homes.md): An array of all homes managed by this home manager.
- [HMHome](hmhome.md): The primary unit of living space, typically composed of rooms organized into zones.

### Keeping track of connected homes

- [delegate](hmhomemanager/delegate.md): A delegate that receives updates on the collection of homes.
- [HMHomeManagerDelegate](hmhomemanagerdelegate.md): An interface the home manager uses to communicate changes to the state of the home network.

### Adding and removing homes

- [addHome(withName:completionHandler:)](hmhomemanager/addhome%28withname_completionhandler_%29.md): Adds a new home to this home manager.
- [removeHome(\_:completionHandler:)](hmhomemanager/removehome%28__completionhandler_%29.md): Removes a home from this home manager.

### Managing the primary home

- [primaryHome](hmhomemanager/primaryhome.md): Deprecated. The primary home managed by this home manager.
- [updatePrimaryHome(\_:completionHandler:)](hmhomemanager/updateprimaryhome%28__completionhandler_%29.md): Deprecated. Updates the primary home of this home manager.

### Initializers

- [init()](hmhomemanager/init%28%29.md)

### Instance Methods

- [findVendorAccessory(hapPublicKey:completionHandler:)](hmhomemanager/findvendoraccessory%28happublickey_completionhandler_%29.md)

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

### Home Manager

- [Configuring a home automation device](configuring-a-home-automation-device.md): Give users a familiar experience when they manage HomeKit accessories.
- [Testing your app with the HomeKit Accessory Simulator](testing-your-app-with-the-homekit-accessory-simulator.md): Install the HomeKit Accessory Simulator to help you debug your HomeKit-enabled app.

# HMHomeManager (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The manager for a collection of one or more of a user’s homes.

## Declaration

```objectivec
@interface HMHomeManager : NSObject
```

## Mentioned In

- [Enabling HomeKit in your app](enabling-homekit-in-your-app.md)

<a id="overview"></a>

## Overview

HomeKit stores the user’s home automation information in a database that’s shared among Apple’s built-in iOS Home app, your HomeKit-enabled app, and apps from other developers. All these apps access the database as peers using the HomeKit framework.

![Diagram showing how different apps use HomeKit to access the shared HomeKit database.](https://developer.apple.com/images/com.apple.homekit/media-3111423@2x.png)

Each app creates a single [HMHomeManager](hmhomemanager.md) instance to coordinate its HomeKit-related activities. The manager’s [homes](hmhomemanager/homes.md) array gives your app access to a collection of [HMHome](hmhome.md) instances that represent the user’s homes. These in turn contain references to the home automation accessories that your app can inspect and control.

![Diagram showing a collection of homes within the home manager, each of which has a collection of accessories.](https://developer.apple.com/images/com.apple.homekit/media-3111594@2x.png)

Adopt the [HMHomeManagerDelegate](hmhomemanagerdelegate.md) protocol in your app to stay informed of any changes to the set of homes made outside your app.

## Topics

### Inspecting authorization status

- [authorizationStatus](hmhomemanager/authorizationstatus.md): The current state of the app’s access to home data.
- [HMHomeManagerAuthorizationStatus](hmhomemanagerauthorizationstatus.md): The possible home-access states.

### Working with the home layout

- [homes](hmhomemanager/homes.md): An array of all homes managed by this home manager.
- [HMHome](hmhome.md): The primary unit of living space, typically composed of rooms organized into zones.

### Keeping track of connected homes

- [delegate](hmhomemanager/delegate.md): A delegate that receives updates on the collection of homes.
- [HMHomeManagerDelegate](hmhomemanagerdelegate.md): An interface the home manager uses to communicate changes to the state of the home network.

### Adding and removing homes

- [addHomeWithName:completionHandler:](hmhomemanager/addhome%28withname_completionhandler_%29.md): Adds a new home to this home manager.
- [removeHome:completionHandler:](hmhomemanager/removehome%28__completionhandler_%29.md): Removes a home from this home manager.

### Managing the primary home

- [primaryHome](hmhomemanager/primaryhome.md): Deprecated. The primary home managed by this home manager.
- [updatePrimaryHome:completionHandler:](hmhomemanager/updateprimaryhome%28__completionhandler_%29.md): Deprecated. Updates the primary home of this home manager.

### Instance Methods

- [findVendorAccessoryWithHAPPublicKey:completionHandler:](hmhomemanager/findvendoraccessory%28happublickey_completionhandler_%29.md)
- [init](hmhomemanager/init%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Home Manager

- [Configuring a home automation device](configuring-a-home-automation-device.md): Give users a familiar experience when they manage HomeKit accessories.
- [Testing your app with the HomeKit Accessory Simulator](testing-your-app-with-the-homekit-accessory-simulator.md): Install the HomeKit Accessory Simulator to help you debug your HomeKit-enabled app.
