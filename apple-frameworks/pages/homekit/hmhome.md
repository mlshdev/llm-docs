> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome](https://developer.apple.com/documentation/homekit/hmhome)

# HMHome (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The primary unit of living space, typically composed of rooms organized into zones.

## Declaration

```swift
class HMHome
```

<a id="overview"></a>

## Overview

An [HMHome](hmhome.md) instance is a top-level container in HomeKit representing a structure that a user considers as a single home. Users might have multiple homes that are far apart, like a primary home and a vacation home. Or they might have two homes that are close together, but that they consider as distinct units—for example, a main home and a guest cottage on the same property.

An [HMHome](hmhome.md) instance:

- Is the main access point for communicating with and configuring accessories, like a garage door opener or a thermostat.
- Organizes accessories into a number of rooms, which are themselves optionally grouped into zones, such as the upstairs.
- Allows the user to define sets of actions that can be performed with a single operation, and triggers that cause an action set to be performed at a specific time.

You create a new home only in response to a specific user request, but you don’t do it directly. When the user asks your app to create a new home—for example, by tapping an Add button in your interface—your app calls the home manager’s [addHome(withName:completionHandler:)](hmhomemanager/addhome%28withname_completionhandler_%29.md) method with a name that the user supplies. To get a list of existing home instances, use the [homes](hmhomemanager/homes.md) array of the home manager (an instance of [HMHomeManager](hmhomemanager.md)).

Because HomeKit gives your app access to a shared database of home automation information, other apps can change the home’s configuration. Adopt the [HMHomeDelegate](hmhomedelegate.md) protocol in your app to stay informed of any such changes that happen outside your app.

## Topics

### Keeping track of home configuration changes

- [delegate](hmhome/delegate.md): A delegate that receives updates on the state of the home.
- [HMHomeDelegate](hmhomedelegate.md): An interface that communicates changes to a home’s configuration.

### Identifying a home

- [name](hmhome/name.md): The name the user gives to the home.
- [updateName(\_:completionHandler:)](hmhome/updatename%28__completionhandler_%29.md): Updates the name of the home.
- [uniqueIdentifier](hmhome/uniqueidentifier.md): A unique identifier for the home.
- [isPrimary](hmhome/isprimary.md): A Boolean value that indicates whether this is the primary home for its home manager.

### Dividing a house into rooms

- [rooms](hmhome/rooms.md): An array of the rooms created and managed by the user.
- [roomForEntireHome()](hmhome/roomforentirehome%28%29.md): A room that represents all parts of the home that don’t have a more specific room to represent them.
- [addRoom(withName:completionHandler:)](hmhome/addroom%28withname_completionhandler_%29.md): Creates a new room with the specified name.
- [removeRoom(\_:completionHandler:)](hmhome/removeroom%28__completionhandler_%29.md): Removes a room from the home.
- [HMRoom](hmroom.md): The smallest subdivision of a home’s space.

### Grouping rooms into zones

- [zones](hmhome/zones.md): An array of all the zones in the home.
- [addZone(withName:completionHandler:)](hmhome/addzone%28withname_completionhandler_%29.md): Adds a new zone to the home.
- [removeZone(\_:completionHandler:)](hmhome/removezone%28__completionhandler_%29.md): Removes a zone from the home.
- [HMZone](hmzone.md): A collection of rooms that users think of as a single area, like upstairs or downstairs.

### Managing accessories

- [accessories](hmhome/accessories.md): The collection of accessories that are part of the home.
- [addAndSetupAccessories(completionHandler:)](hmhome/addandsetupaccessories%28completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home.
- [addAndSetupAccessories(with:completionHandler:)](hmhome/addandsetupaccessories%28with_completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home using a HomeKit code provided by your app.
- [addAccessory(\_:completionHandler:)](hmhome/addaccessory%28__completionhandler_%29.md): Adds a new accessory to the home.
- [assignAccessory(\_:to:completionHandler:)](hmhome/assignaccessory%28__to_completionhandler_%29.md): Assigns an accessory to a different room.
- [removeAccessory(\_:completionHandler:)](hmhome/removeaccessory%28__completionhandler_%29.md): Removes an accessory from the home.
- [supportsAddingNetworkRouter](hmhome/supportsaddingnetworkrouter.md): A Boolean that indicates whether a home supports all of the requirements for adding a network router.
- [unblockAccessory(\_:completionHandler:)](hmhome/unblockaccessory%28__completionhandler_%29.md): Unblocks a blocked accessory.
- [HMAccessory](hmaccessory.md): A home automation accessory, like a garage door opener or a thermostat.

### Grouping services

- [servicesWithTypes(\_:)](hmhome/serviceswithtypes%28__%29.md): Returns an array of all services provided by accessories in the home that match the specified types.
- [serviceGroups](hmhome/servicegroups.md): An array of all service groups in the home.
- [addServiceGroup(withName:completionHandler:)](hmhome/addservicegroup%28withname_completionhandler_%29.md): Adds a service group to the home.
- [removeServiceGroup(\_:completionHandler:)](hmhome/removeservicegroup%28__completionhandler_%29.md): Removes a service group from the home.
- [HMServiceGroup](hmservicegroup.md): A collection of accessory services.

### Querying the state of a home hub

- [homeHubState](hmhome/homehubstate.md): The state of the home hub.
- [HMHomeHubState](hmhomehubstate.md): The possible states of the home hub.

### Creating action sets

- [actionSets](hmhome/actionsets.md): An array of the action sets in the home.
- [addActionSet(withName:completionHandler:)](hmhome/addactionset%28withname_completionhandler_%29.md): Adds a new action set to the home.
- [removeActionSet(\_:completionHandler:)](hmhome/removeactionset%28__completionhandler_%29.md): Removes an action set from the home.
- [executeActionSet(\_:completionHandler:)](hmhome/executeactionset%28__completionhandler_%29.md): Executes all the actions in a specified action set.
- [builtinActionSet(ofType:)](hmhome/builtinactionset%28oftype_%29.md): Retrieves the builtin action set for the specified type.
- [HMActionSet](hmactionset.md): A collection of actions that you trigger as a group.

### Triggering an action set

- [triggers](hmhome/triggers.md): An array of triggers defined in the home.
- [addTrigger(\_:completionHandler:)](hmhome/addtrigger%28__completionhandler_%29.md): Adds a trigger to the home.
- [removeTrigger(\_:completionHandler:)](hmhome/removetrigger%28__completionhandler_%29.md): Removes a trigger from the home.
- [HMTimerTrigger](hmtimertrigger.md): A trigger to activate an action set based on a periodic timer.
- [HMEventTrigger](hmeventtrigger.md): A trigger to activate an action set based on a set of events and optional conditions.
- [HMTrigger](hmtrigger.md): An abstract base class for triggering actions based on a set of conditions.

### Managing users

- [manageUsers(completionHandler:)](hmhome/manageusers%28completionhandler_%29.md): Presents a view controller to manage users of the home.
- [currentUser](hmhome/currentuser.md): The current HomeKit user.
- [HMUser](hmuser.md): A person in the home who may have access to control accessories and services in the home.

### Controlling user access

- [homeAccessControl(for:)](hmhome/homeaccesscontrol%28for_%29.md): Retrieves the access level of a user associated with the home.
- [HMHomeAccessControl](hmhomeaccesscontrol.md): The access privileges of a user associated with a home.
- [HMAccessControl](hmaccesscontrol.md): An abstract superclass for accessing user privileges.
- [HMUserFailedAccessoriesKey](hmuserfailedaccessorieskey.md): Deprecated. The key for retrieving details of what accessories failed to add or remove a user.

### Deprecated symbols

- [users](hmhome/users.md): Deprecated. All users associated with the home.
- [addUser(completionHandler:)](hmhome/adduser%28completionhandler_%29.md): Deprecated. Adds a user to the home.
- [removeUser(\_:completionHandler:)](hmhome/removeuser%28__completionhandler_%29.md): Deprecated. Removes a user from the home.

### Instance Properties

- [matterControllerID](hmhome/mattercontrollerid.md)
- [matterControllerXPCConnectBlock](hmhome/mattercontrollerxpcconnectblock.md)
- [matterStartupParametersXPCConnectBlock](hmhome/matterstartupparametersxpcconnectblock.md)

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

### Working with the home layout

- [homes](hmhomemanager/homes.md): An array of all homes managed by this home manager.

# HMHome (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The primary unit of living space, typically composed of rooms organized into zones.

## Declaration

```objectivec
@interface HMHome : NSObject
```

<a id="overview"></a>

## Overview

An [HMHome](hmhome.md) instance is a top-level container in HomeKit representing a structure that a user considers as a single home. Users might have multiple homes that are far apart, like a primary home and a vacation home. Or they might have two homes that are close together, but that they consider as distinct units—for example, a main home and a guest cottage on the same property.

An [HMHome](hmhome.md) instance:

- Is the main access point for communicating with and configuring accessories, like a garage door opener or a thermostat.
- Organizes accessories into a number of rooms, which are themselves optionally grouped into zones, such as the upstairs.
- Allows the user to define sets of actions that can be performed with a single operation, and triggers that cause an action set to be performed at a specific time.

You create a new home only in response to a specific user request, but you don’t do it directly. When the user asks your app to create a new home—for example, by tapping an Add button in your interface—your app calls the home manager’s [addHomeWithName:completionHandler:](hmhomemanager/addhome%28withname_completionhandler_%29.md) method with a name that the user supplies. To get a list of existing home instances, use the [homes](hmhomemanager/homes.md) array of the home manager (an instance of [HMHomeManager](hmhomemanager.md)).

Because HomeKit gives your app access to a shared database of home automation information, other apps can change the home’s configuration. Adopt the [HMHomeDelegate](hmhomedelegate.md) protocol in your app to stay informed of any such changes that happen outside your app.

## Topics

### Keeping track of home configuration changes

- [delegate](hmhome/delegate.md): A delegate that receives updates on the state of the home.
- [HMHomeDelegate](hmhomedelegate.md): An interface that communicates changes to a home’s configuration.

### Identifying a home

- [name](hmhome/name.md): The name the user gives to the home.
- [updateName:completionHandler:](hmhome/updatename%28__completionhandler_%29.md): Updates the name of the home.
- [uniqueIdentifier](hmhome/uniqueidentifier.md): A unique identifier for the home.
- [primary](hmhome/isprimary.md): A Boolean value that indicates whether this is the primary home for its home manager.

### Dividing a house into rooms

- [rooms](hmhome/rooms.md): An array of the rooms created and managed by the user.
- [roomForEntireHome](hmhome/roomforentirehome%28%29.md): A room that represents all parts of the home that don’t have a more specific room to represent them.
- [addRoomWithName:completionHandler:](hmhome/addroom%28withname_completionhandler_%29.md): Creates a new room with the specified name.
- [removeRoom:completionHandler:](hmhome/removeroom%28__completionhandler_%29.md): Removes a room from the home.
- [HMRoom](hmroom.md): The smallest subdivision of a home’s space.

### Grouping rooms into zones

- [zones](hmhome/zones.md): An array of all the zones in the home.
- [addZoneWithName:completionHandler:](hmhome/addzone%28withname_completionhandler_%29.md): Adds a new zone to the home.
- [removeZone:completionHandler:](hmhome/removezone%28__completionhandler_%29.md): Removes a zone from the home.
- [HMZone](hmzone.md): A collection of rooms that users think of as a single area, like upstairs or downstairs.

### Managing accessories

- [accessories](hmhome/accessories.md): The collection of accessories that are part of the home.
- [addAndSetupAccessoriesWithCompletionHandler:](hmhome/addandsetupaccessories%28completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home.
- [addAndSetupAccessoriesWithPayload:completionHandler:](hmhome/addandsetupaccessories%28with_completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home using a HomeKit code provided by your app.
- [addAccessory:completionHandler:](hmhome/addaccessory%28__completionhandler_%29.md): Adds a new accessory to the home.
- [assignAccessory:toRoom:completionHandler:](hmhome/assignaccessory%28__to_completionhandler_%29.md): Assigns an accessory to a different room.
- [removeAccessory:completionHandler:](hmhome/removeaccessory%28__completionhandler_%29.md): Removes an accessory from the home.
- [supportsAddingNetworkRouter](hmhome/supportsaddingnetworkrouter.md): A Boolean that indicates whether a home supports all of the requirements for adding a network router.
- [unblockAccessory:completionHandler:](hmhome/unblockaccessory%28__completionhandler_%29.md): Unblocks a blocked accessory.
- [HMAccessory](hmaccessory.md): A home automation accessory, like a garage door opener or a thermostat.

### Grouping services

- [servicesWithTypes:](hmhome/serviceswithtypes%28__%29.md): Returns an array of all services provided by accessories in the home that match the specified types.
- [serviceGroups](hmhome/servicegroups.md): An array of all service groups in the home.
- [addServiceGroupWithName:completionHandler:](hmhome/addservicegroup%28withname_completionhandler_%29.md): Adds a service group to the home.
- [removeServiceGroup:completionHandler:](hmhome/removeservicegroup%28__completionhandler_%29.md): Removes a service group from the home.
- [HMServiceGroup](hmservicegroup.md): A collection of accessory services.

### Querying the state of a home hub

- [homeHubState](hmhome/homehubstate.md): The state of the home hub.
- [HMHomeHubState](hmhomehubstate.md): The possible states of the home hub.

### Creating action sets

- [actionSets](hmhome/actionsets.md): An array of the action sets in the home.
- [addActionSetWithName:completionHandler:](hmhome/addactionset%28withname_completionhandler_%29.md): Adds a new action set to the home.
- [removeActionSet:completionHandler:](hmhome/removeactionset%28__completionhandler_%29.md): Removes an action set from the home.
- [executeActionSet:completionHandler:](hmhome/executeactionset%28__completionhandler_%29.md): Executes all the actions in a specified action set.
- [builtinActionSetOfType:](hmhome/builtinactionset%28oftype_%29.md): Retrieves the builtin action set for the specified type.
- [HMActionSet](hmactionset.md): A collection of actions that you trigger as a group.

### Triggering an action set

- [triggers](hmhome/triggers.md): An array of triggers defined in the home.
- [addTrigger:completionHandler:](hmhome/addtrigger%28__completionhandler_%29.md): Adds a trigger to the home.
- [removeTrigger:completionHandler:](hmhome/removetrigger%28__completionhandler_%29.md): Removes a trigger from the home.
- [HMTimerTrigger](hmtimertrigger.md): A trigger to activate an action set based on a periodic timer.
- [HMEventTrigger](hmeventtrigger.md): A trigger to activate an action set based on a set of events and optional conditions.
- [HMTrigger](hmtrigger.md): An abstract base class for triggering actions based on a set of conditions.

### Managing users

- [manageUsersWithCompletionHandler:](hmhome/manageusers%28completionhandler_%29.md): Presents a view controller to manage users of the home.
- [currentUser](hmhome/currentuser.md): The current HomeKit user.
- [HMUser](hmuser.md): A person in the home who may have access to control accessories and services in the home.

### Controlling user access

- [homeAccessControlForUser:](hmhome/homeaccesscontrol%28for_%29.md): Retrieves the access level of a user associated with the home.
- [HMHomeAccessControl](hmhomeaccesscontrol.md): The access privileges of a user associated with a home.
- [HMAccessControl](hmaccesscontrol.md): An abstract superclass for accessing user privileges.
- [HMUserFailedAccessoriesKey](hmuserfailedaccessorieskey.md): Deprecated. The key for retrieving details of what accessories failed to add or remove a user.

### Deprecated symbols

- [users](hmhome/users.md): Deprecated. All users associated with the home.
- [addUserWithCompletionHandler:](hmhome/adduser%28completionhandler_%29.md): Deprecated. Adds a user to the home.
- [removeUser:completionHandler:](hmhome/removeuser%28__completionhandler_%29.md): Deprecated. Removes a user from the home.

### Instance Properties

- [matterControllerID](hmhome/mattercontrollerid.md)
- [matterControllerXPCConnectBlock](hmhome/mattercontrollerxpcconnectblock.md)
- [matterStartupParametersXPCConnectBlock](hmhome/matterstartupparametersxpcconnectblock.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Working with the home layout

- [homes](hmhomemanager/homes.md): An array of all homes managed by this home manager.
