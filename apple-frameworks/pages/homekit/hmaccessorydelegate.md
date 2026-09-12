> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessorydelegate](https://developer.apple.com/documentation/homekit/hmaccessorydelegate)

# HMAccessoryDelegate (Swift)

**Framework:** HomeKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A set of methods that defines the communication method for state updates from accessories to their delegates.

## Declaration

```swift
protocol HMAccessoryDelegate : NSObjectProtocol, Sendable
```

<a id="overview"></a>

## Overview

Adopt this protocol to find out about changes made outside your app to a specific accessory, like when the accessory’s name changes, or when a characteristic value changes.

> **Note**

>  To receive [accessory(\_:service:didUpdateValueFor:)](hmaccessorydelegate/accessory%28__service_didupdatevaluefor_%29.md) method calls for a particular characteristic, indicating when the characteristic value changes, you must first call the characteristic’s [enableNotification(\_:completionHandler:)](hmcharacteristic/enablenotification%28__completionhandler_%29.md) method.

Changes that your app initiates—even those made asynchronously followed by a call to a completion handler—generate delegate callbacks in other apps, but not in your own. As a result, your app must update its internal data store or user interface from both the completion handler of an asynchronous call, and the delegate callback that corresponds to the same kind of change made by another app.

To find out about changes made to the accessory’s home, adopt the [HMHomeDelegate](hmhomedelegate.md) protocol. To be alerted about changes made to the overall list of homes, adopt the [HMHomeManagerDelegate](hmhomemanagerdelegate.md) protocol.

## Topics

### Observing accessories

- [accessoryDidUpdateName(\_:)](hmaccessorydelegate/accessorydidupdatename%28__%29.md): Informs the delegate when the name of the accessory is updated.
- [accessoryDidUpdateReachability(\_:)](hmaccessorydelegate/accessorydidupdatereachability%28__%29.md): Informs the delegate when the reachability of the accessory changes.
- [accessoryDidUpdateServices(\_:)](hmaccessorydelegate/accessorydidupdateservices%28__%29.md): Informs the delegate when the services on the accessory have been updated.
- [accessory(\_:didUpdateNameFor:)](hmaccessorydelegate/accessory%28__didupdatenamefor_%29.md): Informs the delegate when the name of a service is updated.
- [accessory(\_:service:didUpdateValueFor:)](hmaccessorydelegate/accessory%28__service_didupdatevaluefor_%29.md): Informs the delegate of a change in value of a characteristic.
- [accessory(\_:didUpdateAssociatedServiceTypeFor:)](hmaccessorydelegate/accessory%28__didupdateassociatedservicetypefor_%29.md): Informs the delegate when the associated service type of a service is modified.
- [accessory(\_:didAdd:)](hmaccessorydelegate/accessory%28__didadd_%29.md): Informs the delegate when a profile is added to an accessory.
- [accessory(\_:didRemove:)](hmaccessorydelegate/accessory%28__didremove_%29.md): Informs the delegate when a profile is removed from an accessory.
- [accessory(\_:didUpdateFirmwareVersion:)](hmaccessorydelegate/accessory%28__didupdatefirmwareversion_%29.md): Informs the delegate when firmwareVersion has been changed for an accessory.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Tracking changes to an accessory

- [delegate](hmaccessory/delegate.md): A delegate that receives updates on the state of the accessory.

# HMAccessoryDelegate (Objective-C)

**Framework:** HomeKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A set of methods that defines the communication method for state updates from accessories to their delegates.

## Declaration

```objectivec
@protocol HMAccessoryDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Adopt this protocol to find out about changes made outside your app to a specific accessory, like when the accessory’s name changes, or when a characteristic value changes.

> **Note**

>  To receive [accessory:service:didUpdateValueForCharacteristic:](hmaccessorydelegate/accessory%28__service_didupdatevaluefor_%29.md) method calls for a particular characteristic, indicating when the characteristic value changes, you must first call the characteristic’s [enableNotification:completionHandler:](hmcharacteristic/enablenotification%28__completionhandler_%29.md) method.

Changes that your app initiates—even those made asynchronously followed by a call to a completion handler—generate delegate callbacks in other apps, but not in your own. As a result, your app must update its internal data store or user interface from both the completion handler of an asynchronous call, and the delegate callback that corresponds to the same kind of change made by another app.

To find out about changes made to the accessory’s home, adopt the [HMHomeDelegate](hmhomedelegate.md) protocol. To be alerted about changes made to the overall list of homes, adopt the [HMHomeManagerDelegate](hmhomemanagerdelegate.md) protocol.

## Topics

### Observing accessories

- [accessoryDidUpdateName:](hmaccessorydelegate/accessorydidupdatename%28__%29.md): Informs the delegate when the name of the accessory is updated.
- [accessoryDidUpdateReachability:](hmaccessorydelegate/accessorydidupdatereachability%28__%29.md): Informs the delegate when the reachability of the accessory changes.
- [accessoryDidUpdateServices:](hmaccessorydelegate/accessorydidupdateservices%28__%29.md): Informs the delegate when the services on the accessory have been updated.
- [accessory:didUpdateNameForService:](hmaccessorydelegate/accessory%28__didupdatenamefor_%29.md): Informs the delegate when the name of a service is updated.
- [accessory:service:didUpdateValueForCharacteristic:](hmaccessorydelegate/accessory%28__service_didupdatevaluefor_%29.md): Informs the delegate of a change in value of a characteristic.
- [accessory:didUpdateAssociatedServiceTypeForService:](hmaccessorydelegate/accessory%28__didupdateassociatedservicetypefor_%29.md): Informs the delegate when the associated service type of a service is modified.
- [accessory:didAddProfile:](hmaccessorydelegate/accessory%28__didadd_%29.md): Informs the delegate when a profile is added to an accessory.
- [accessory:didRemoveProfile:](hmaccessorydelegate/accessory%28__didremove_%29.md): Informs the delegate when a profile is removed from an accessory.
- [accessory:didUpdateFirmwareVersion:](hmaccessorydelegate/accessory%28__didupdatefirmwareversion_%29.md): Informs the delegate when firmwareVersion has been changed for an accessory.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Tracking changes to an accessory

- [delegate](hmaccessory/delegate.md): A delegate that receives updates on the state of the accessory.
