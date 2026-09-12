> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhomedelegate](https://developer.apple.com/documentation/homekit/hmhomedelegate)

# HMHomeDelegate (Swift)

**Framework:** HomeKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An interface that communicates changes to a home’s configuration.

## Declaration

```swift
protocol HMHomeDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Adopt this protocol to find out about changes made outside your app to a particular home, like when the home’s name changes, or when a room is added.

Changes that your app initiates—even those made asynchronously followed by a call to a completion handler—generate delegate callbacks in other apps, but not in your own. As a result, your app must update its internal data store or user interface from both the completion handler of an asynchronous call, and the delegate callback that corresponds to the same kind of change made by another app.

To be alerted about changes made to the overall list of homes, adopt the [HMHomeManagerDelegate](hmhomemanagerdelegate.md) protocol. To find out about changes made to specific accessories, adopt the [HMAccessoryDelegate](hmaccessorydelegate.md) protocol.

## Topics

### Observing Home Configuration

- [homeDidUpdateName(\_:)](hmhomedelegate/homedidupdatename%28__%29.md): Tells the delegate that a home’s name changed.
- [home(\_:didAdd:)](hmhomedelegate/home%28__didadd_%29-6jcl7.md): Tells the delegate that a home added a new accessory.
- [home(\_:didUpdate:for:)](hmhomedelegate/home%28__didupdate_for_%29.md): Tells the delegate that a home assigned an accessory to a different room.
- [home(\_:didRemove:)](hmhomedelegate/home%28__didremove_%29-6plye.md): Tells the delegate that a home removed an accessory.
- [home(\_:didAdd:)](hmhomedelegate/home%28__didadd_%29-42aqd.md): Tells the delegate that a home added a new room.
- [home(\_:didUpdateNameFor:)](hmhomedelegate/home%28__didupdatenamefor_%29-1a110.md): Tells the delegate that a home updated the name of one of its rooms.
- [home(\_:didAdd:to:)](hmhomedelegate/home%28__didadd_to_%29-4hiew.md): Tells the delegate that a home added a room to a zone.
- [home(\_:didRemove:from:)](hmhomedelegate/home%28__didremove_from_%29-8oz67.md): Tells the delegate that a home removed a room from a zone.
- [home(\_:didRemove:)](hmhomedelegate/home%28__didremove_%29-3if6s.md): Tells the delegate that a home removed a room.
- [home(\_:didAdd:)](hmhomedelegate/home%28__didadd_%29-7vyoe.md): Tells the delegate that a home added a new zone.
- [home(\_:didUpdateNameFor:)](hmhomedelegate/home%28__didupdatenamefor_%29-1k32g.md): Tells the delegate that a home changed the name of a zone.
- [home(\_:didRemove:)](hmhomedelegate/home%28__didremove_%29-3o8ta.md): Tells the delegate that a home removed a zone.
- [home(\_:didAdd:)](hmhomedelegate/home%28__didadd_%29-8q7jm.md): Tells the delegate that a home added a user.
- [home(\_:didRemove:)](hmhomedelegate/home%28__didremove_%29-3fm38.md): Tells the delegate that a home removed a user.
- [homeDidUpdateAccessControl(forCurrentUser:)](hmhomedelegate/homedidupdateaccesscontrol%28forcurrentuser_%29.md): Tells the delegate that the access control for the current user has changed.
- [home(\_:didUpdate:)](hmhomedelegate/home%28__didupdate_%29-5fntk.md): Tells the delegate that the state of the home hub has changed.
- [homeDidUpdateSupportedFeatures(\_:)](hmhomedelegate/homedidupdatesupportedfeatures%28__%29.md): Tells the delegate that the home’s supported features changed.
- [HMHomeHubState](hmhomehubstate.md): The possible states of the home hub.

### Observing Service Configuration

- [home(\_:didAdd:)](hmhomedelegate/home%28__didadd_%29-3dymz.md): Tells the delegate that a home added a service group.
- [home(\_:didUpdateNameFor:)](hmhomedelegate/home%28__didupdatenamefor_%29-4tam1.md): Tells the delegate that a home updated the name of a service group.
- [home(\_:didAdd:to:)](hmhomedelegate/home%28__didadd_to_%29-6xdgy.md): Tells the delegate that a home added a service to a service group.
- [home(\_:didRemove:from:)](hmhomedelegate/home%28__didremove_from_%29-9yzp0.md): Tells the delegate that a home removed a service from a service group.
- [home(\_:didRemove:)](hmhomedelegate/home%28__didremove_%29-6kqxo.md): Tells the delegate that a home removed a service group.

### Observing Action and Trigger Configuration

- [home(\_:didAdd:)](hmhomedelegate/home%28__didadd_%29-9dcki.md): Tells the delegate that a home added an action set.
- [home(\_:didUpdateNameFor:)](hmhomedelegate/home%28__didupdatenamefor_%29-7fxvl.md): Tells the delegate that a home updated the name of an action set.
- [home(\_:didUpdateActionsFor:)](hmhomedelegate/home%28__didupdateactionsfor_%29.md): Tells the delegate that a home updated the actions for an action set.
- [home(\_:didRemove:)](hmhomedelegate/home%28__didremove_%29-80ewx.md): Tells the delegate that a home removed an action set.
- [home(\_:didAdd:)](hmhomedelegate/home%28__didadd_%29-64yxx.md): Tells the delegate that a home added a trigger.
- [home(\_:didUpdateNameFor:)](hmhomedelegate/home%28__didupdatenamefor_%29-8vn79.md): Tells the delegate that a home updated the name of a trigger.
- [home(\_:didUpdate:)](hmhomedelegate/home%28__didupdate_%29-3l4r1.md): Tells the delegate that a home updated a trigger.
- [home(\_:didRemove:)](hmhomedelegate/home%28__didremove_%29-4ujfa.md): Tells the delegate that a home removed a trigger.

### Observing Accessories

- [home(\_:didEncounterError:for:)](hmhomedelegate/home%28__didencountererror_for_%29.md): Tells the delegate that a configured accessory encountered an error.
- [home(\_:didUnblockAccessory:)](hmhomedelegate/home%28__didunblockaccessory_%29.md): Tells the delegate that an accessory has been unblocked.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Keeping track of home configuration changes

- [delegate](hmhome/delegate.md): A delegate that receives updates on the state of the home.

# HMHomeDelegate (Objective-C)

**Framework:** HomeKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An interface that communicates changes to a home’s configuration.

## Declaration

```objectivec
@protocol HMHomeDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Adopt this protocol to find out about changes made outside your app to a particular home, like when the home’s name changes, or when a room is added.

Changes that your app initiates—even those made asynchronously followed by a call to a completion handler—generate delegate callbacks in other apps, but not in your own. As a result, your app must update its internal data store or user interface from both the completion handler of an asynchronous call, and the delegate callback that corresponds to the same kind of change made by another app.

To be alerted about changes made to the overall list of homes, adopt the [HMHomeManagerDelegate](hmhomemanagerdelegate.md) protocol. To find out about changes made to specific accessories, adopt the [HMAccessoryDelegate](hmaccessorydelegate.md) protocol.

## Topics

### Observing Home Configuration

- [homeDidUpdateName:](hmhomedelegate/homedidupdatename%28__%29.md): Tells the delegate that a home’s name changed.
- [home:didAddAccessory:](hmhomedelegate/home%28__didadd_%29-6jcl7.md): Tells the delegate that a home added a new accessory.
- [home:didUpdateRoom:forAccessory:](hmhomedelegate/home%28__didupdate_for_%29.md): Tells the delegate that a home assigned an accessory to a different room.
- [home:didRemoveAccessory:](hmhomedelegate/home%28__didremove_%29-6plye.md): Tells the delegate that a home removed an accessory.
- [home:didAddRoom:](hmhomedelegate/home%28__didadd_%29-42aqd.md): Tells the delegate that a home added a new room.
- [home:didUpdateNameForRoom:](hmhomedelegate/home%28__didupdatenamefor_%29-1a110.md): Tells the delegate that a home updated the name of one of its rooms.
- [home:didAddRoom:toZone:](hmhomedelegate/home%28__didadd_to_%29-4hiew.md): Tells the delegate that a home added a room to a zone.
- [home:didRemoveRoom:fromZone:](hmhomedelegate/home%28__didremove_from_%29-8oz67.md): Tells the delegate that a home removed a room from a zone.
- [home:didRemoveRoom:](hmhomedelegate/home%28__didremove_%29-3if6s.md): Tells the delegate that a home removed a room.
- [home:didAddZone:](hmhomedelegate/home%28__didadd_%29-7vyoe.md): Tells the delegate that a home added a new zone.
- [home:didUpdateNameForZone:](hmhomedelegate/home%28__didupdatenamefor_%29-1k32g.md): Tells the delegate that a home changed the name of a zone.
- [home:didRemoveZone:](hmhomedelegate/home%28__didremove_%29-3o8ta.md): Tells the delegate that a home removed a zone.
- [home:didAddUser:](hmhomedelegate/home%28__didadd_%29-8q7jm.md): Tells the delegate that a home added a user.
- [home:didRemoveUser:](hmhomedelegate/home%28__didremove_%29-3fm38.md): Tells the delegate that a home removed a user.
- [homeDidUpdateAccessControlForCurrentUser:](hmhomedelegate/homedidupdateaccesscontrol%28forcurrentuser_%29.md): Tells the delegate that the access control for the current user has changed.
- [home:didUpdateHomeHubState:](hmhomedelegate/home%28__didupdate_%29-5fntk.md): Tells the delegate that the state of the home hub has changed.
- [homeDidUpdateSupportedFeatures:](hmhomedelegate/homedidupdatesupportedfeatures%28__%29.md): Tells the delegate that the home’s supported features changed.
- [HMHomeHubState](hmhomehubstate.md): The possible states of the home hub.

### Observing Service Configuration

- [home:didAddServiceGroup:](hmhomedelegate/home%28__didadd_%29-3dymz.md): Tells the delegate that a home added a service group.
- [home:didUpdateNameForServiceGroup:](hmhomedelegate/home%28__didupdatenamefor_%29-4tam1.md): Tells the delegate that a home updated the name of a service group.
- [home:didAddService:toServiceGroup:](hmhomedelegate/home%28__didadd_to_%29-6xdgy.md): Tells the delegate that a home added a service to a service group.
- [home:didRemoveService:fromServiceGroup:](hmhomedelegate/home%28__didremove_from_%29-9yzp0.md): Tells the delegate that a home removed a service from a service group.
- [home:didRemoveServiceGroup:](hmhomedelegate/home%28__didremove_%29-6kqxo.md): Tells the delegate that a home removed a service group.

### Observing Action and Trigger Configuration

- [home:didAddActionSet:](hmhomedelegate/home%28__didadd_%29-9dcki.md): Tells the delegate that a home added an action set.
- [home:didUpdateNameForActionSet:](hmhomedelegate/home%28__didupdatenamefor_%29-7fxvl.md): Tells the delegate that a home updated the name of an action set.
- [home:didUpdateActionsForActionSet:](hmhomedelegate/home%28__didupdateactionsfor_%29.md): Tells the delegate that a home updated the actions for an action set.
- [home:didRemoveActionSet:](hmhomedelegate/home%28__didremove_%29-80ewx.md): Tells the delegate that a home removed an action set.
- [home:didAddTrigger:](hmhomedelegate/home%28__didadd_%29-64yxx.md): Tells the delegate that a home added a trigger.
- [home:didUpdateNameForTrigger:](hmhomedelegate/home%28__didupdatenamefor_%29-8vn79.md): Tells the delegate that a home updated the name of a trigger.
- [home:didUpdateTrigger:](hmhomedelegate/home%28__didupdate_%29-3l4r1.md): Tells the delegate that a home updated a trigger.
- [home:didRemoveTrigger:](hmhomedelegate/home%28__didremove_%29-4ujfa.md): Tells the delegate that a home removed a trigger.

### Observing Accessories

- [home:didEncounterError:forAccessory:](hmhomedelegate/home%28__didencountererror_for_%29.md): Tells the delegate that a configured accessory encountered an error.
- [home:didUnblockAccessory:](hmhomedelegate/home%28__didunblockaccessory_%29.md): Tells the delegate that an accessory has been unblocked.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Keeping track of home configuration changes

- [delegate](hmhome/delegate.md): A delegate that receives updates on the state of the home.
