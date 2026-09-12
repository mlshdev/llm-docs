> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmservicegroup](https://developer.apple.com/documentation/homekit/hmservicegroup)

# HMServiceGroup (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A collection of accessory services.

## Declaration

```swift
class HMServiceGroup
```

<a id="overview"></a>

## Overview

A service group makes it easier to address the services as a single entity. For example, a user might choose to group a set of lights together as “Desk Lamps,” and have another set of lights grouped as “Ceiling Lights”. You create service groups using the [addServiceGroup(withName:completionHandler:)](hmhome/addservicegroup%28withname_completionhandler_%29.md) method of [HMHome](hmhome.md). Service groups are visible to Siri and allow users to control a group of services through Siri.

## Topics

### Managing Service Groups

- [name](hmservicegroup/name.md): The name of the service group.
- [uniqueIdentifier](hmservicegroup/uniqueidentifier.md): The unique identifier for the service group.
- [updateName(\_:completionHandler:)](hmservicegroup/updatename%28__completionhandler_%29.md): Updates the name of the service group.
- [services](hmservicegroup/services.md): Array of the services in the service group.
- [addService(\_:completionHandler:)](hmservicegroup/addservice%28__completionhandler_%29.md): Adds a new service to the service group.
- [removeService(\_:completionHandler:)](hmservicegroup/removeservice%28__completionhandler_%29.md): Removes a service from the service group.

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

### Grouping services

- [servicesWithTypes(\_:)](hmhome/serviceswithtypes%28__%29.md): Returns an array of all services provided by accessories in the home that match the specified types.
- [serviceGroups](hmhome/servicegroups.md): An array of all service groups in the home.
- [addServiceGroup(withName:completionHandler:)](hmhome/addservicegroup%28withname_completionhandler_%29.md): Adds a service group to the home.
- [removeServiceGroup(\_:completionHandler:)](hmhome/removeservicegroup%28__completionhandler_%29.md): Removes a service group from the home.

# HMServiceGroup (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A collection of accessory services.

## Declaration

```objectivec
@interface HMServiceGroup : NSObject
```

<a id="overview"></a>

## Overview

A service group makes it easier to address the services as a single entity. For example, a user might choose to group a set of lights together as “Desk Lamps,” and have another set of lights grouped as “Ceiling Lights”. You create service groups using the [addServiceGroupWithName:completionHandler:](hmhome/addservicegroup%28withname_completionhandler_%29.md) method of [HMHome](hmhome.md). Service groups are visible to Siri and allow users to control a group of services through Siri.

## Topics

### Managing Service Groups

- [name](hmservicegroup/name.md): The name of the service group.
- [uniqueIdentifier](hmservicegroup/uniqueidentifier.md): The unique identifier for the service group.
- [updateName:completionHandler:](hmservicegroup/updatename%28__completionhandler_%29.md): Updates the name of the service group.
- [services](hmservicegroup/services.md): Array of the services in the service group.
- [addService:completionHandler:](hmservicegroup/addservice%28__completionhandler_%29.md): Adds a new service to the service group.
- [removeService:completionHandler:](hmservicegroup/removeservice%28__completionhandler_%29.md): Removes a service from the service group.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Grouping services

- [servicesWithTypes:](hmhome/serviceswithtypes%28__%29.md): Returns an array of all services provided by accessories in the home that match the specified types.
- [serviceGroups](hmhome/servicegroups.md): An array of all service groups in the home.
- [addServiceGroupWithName:completionHandler:](hmhome/addservicegroup%28withname_completionhandler_%29.md): Adds a service group to the home.
- [removeServiceGroup:completionHandler:](hmhome/removeservicegroup%28__completionhandler_%29.md): Removes a service group from the home.
