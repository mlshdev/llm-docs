> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhomemanagerdelegate](https://developer.apple.com/documentation/homekit/hmhomemanagerdelegate)

# HMHomeManagerDelegate (Swift)

**Framework:** HomeKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An interface the home manager uses to communicate changes to the state of the home network.

## Declaration

```swift
protocol HMHomeManagerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Adopt this protocol to find out about changes made outside your app to the set of homes in the HomeKit database, like when homes are added or removed by another app. You also rely on this protocol when you first create an [HMHomeManager](hmhomemanager.md) instance. The home manager calls the [homeManagerDidUpdateHomes(\_:)](hmhomemanagerdelegate/homemanagerdidupdatehomes%28__%29.md) method to indicate that it has finished its initial load of data from the HomeKit database.

Changes that your app initiates—even those made asynchronously followed by a call to a completion handler—generate delegate callbacks in other apps, but not in your own. As a result, your app must update its internal data store or user interface from both the completion handler of an asynchronous call, and the delegate callback that corresponds to the same kind of change made by another app.

To be alerted about changes made within a particular home, adopt the [HMHomeDelegate](hmhomedelegate.md) protocol. To find out about changes made to specific accessories, adopt the [HMAccessoryDelegate](hmaccessorydelegate.md) protocol.

## Topics

### Adding and removing homes

- [homeManagerDidUpdateHomes(\_:)](hmhomemanagerdelegate/homemanagerdidupdatehomes%28__%29.md): Tells the delegate that the home manager updated its collection of homes.
- [homeManager(\_:didAdd:)](hmhomemanagerdelegate/homemanager%28__didadd_%29.md): Tells the delegate that the home manager added a home.
- [homeManager(\_:didRemove:)](hmhomemanagerdelegate/homemanager%28__didremove_%29.md): Tells the delegate that the home manager removed a home.
- [homeManagerDidUpdatePrimaryHome(\_:)](hmhomemanagerdelegate/homemanagerdidupdateprimaryhome%28__%29.md): Tells the delegate that the home manager updated its primary home.

### Adding accessories

- [homeManager(\_:didReceiveAddAccessoryRequest:)](hmhomemanagerdelegate/homemanager%28__didreceiveaddaccessoryrequest_%29.md): Tells the delegate to add an accessory to a home by using a setup payload.
- [HMAddAccessoryRequest](hmaddaccessoryrequest.md): A request to add an accessory to a particular home.

### Monitoring authorization status

- [homeManager(\_:didUpdate:)](hmhomemanagerdelegate/homemanager%28__didupdate_%29.md): Tells the delegate when the authorization status changes.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Keeping track of connected homes

- [delegate](hmhomemanager/delegate.md): A delegate that receives updates on the collection of homes.

# HMHomeManagerDelegate (Objective-C)

**Framework:** HomeKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An interface the home manager uses to communicate changes to the state of the home network.

## Declaration

```objectivec
@protocol HMHomeManagerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Adopt this protocol to find out about changes made outside your app to the set of homes in the HomeKit database, like when homes are added or removed by another app. You also rely on this protocol when you first create an [HMHomeManager](hmhomemanager.md) instance. The home manager calls the [homeManagerDidUpdateHomes:](hmhomemanagerdelegate/homemanagerdidupdatehomes%28__%29.md) method to indicate that it has finished its initial load of data from the HomeKit database.

Changes that your app initiates—even those made asynchronously followed by a call to a completion handler—generate delegate callbacks in other apps, but not in your own. As a result, your app must update its internal data store or user interface from both the completion handler of an asynchronous call, and the delegate callback that corresponds to the same kind of change made by another app.

To be alerted about changes made within a particular home, adopt the [HMHomeDelegate](hmhomedelegate.md) protocol. To find out about changes made to specific accessories, adopt the [HMAccessoryDelegate](hmaccessorydelegate.md) protocol.

## Topics

### Adding and removing homes

- [homeManagerDidUpdateHomes:](hmhomemanagerdelegate/homemanagerdidupdatehomes%28__%29.md): Tells the delegate that the home manager updated its collection of homes.
- [homeManager:didAddHome:](hmhomemanagerdelegate/homemanager%28__didadd_%29.md): Tells the delegate that the home manager added a home.
- [homeManager:didRemoveHome:](hmhomemanagerdelegate/homemanager%28__didremove_%29.md): Tells the delegate that the home manager removed a home.
- [homeManagerDidUpdatePrimaryHome:](hmhomemanagerdelegate/homemanagerdidupdateprimaryhome%28__%29.md): Tells the delegate that the home manager updated its primary home.

### Adding accessories

- [homeManager:didReceiveAddAccessoryRequest:](hmhomemanagerdelegate/homemanager%28__didreceiveaddaccessoryrequest_%29.md): Tells the delegate to add an accessory to a home by using a setup payload.
- [HMAddAccessoryRequest](hmaddaccessoryrequest.md): A request to add an accessory to a particular home.

### Monitoring authorization status

- [homeManager:didUpdateAuthorizationStatus:](hmhomemanagerdelegate/homemanager%28__didupdate_%29.md): Tells the delegate when the authorization status changes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Keeping track of connected homes

- [delegate](hmhomemanager/delegate.md): A delegate that receives updates on the collection of homes.
