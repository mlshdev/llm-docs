> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontrollerdelegate](https://developer.apple.com/documentation/matter/mtrdevicecontrollerdelegate)

# MTRDeviceControllerDelegate (Swift)

**Framework:** Matter  
**Kind:** Protocol  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
protocol MTRDeviceControllerDelegate : NSObjectProtocol
```

## Topics

### Instance Methods

- [controller(\_:commissioningComplete:)](mtrdevicecontrollerdelegate/controller%28__commissioningcomplete_%29.md): Deprecated.
- [controller(\_:commissioningComplete:nodeID:)](mtrdevicecontrollerdelegate/controller%28__commissioningcomplete_nodeid_%29.md)
- [controller(\_:commissioningComplete:nodeID:metrics:)](mtrdevicecontrollerdelegate/controller%28__commissioningcomplete_nodeid_metrics_%29.md): Deprecated.
- [controller(\_:commissioningSessionEstablishmentDone:)](mtrdevicecontrollerdelegate/controller%28__commissioningsessionestablishmentdone_%29.md)
- [controller(\_:readCommissioningInfo:)](mtrdevicecontrollerdelegate/controller%28__readcommissioninginfo_%29.md): Deprecated.
- [controller(\_:statusUpdate:)](mtrdevicecontrollerdelegate/controller%28__statusupdate_%29.md)
- [controller(\_:commissioneeHasReceivedNetworkCredentials:)](mtrdevicecontrollerdelegate/controller%28__commissioneehasreceivednetworkcredentials_%29.md): Notify the delegate that we have successfully communicated the network credentials to the device being commissioned and are about to tell it to join that network. Note that for devices that are already on-network this notification will not happen.
- [controller(\_:commissioningComplete:nodeID:metrics:context:)](mtrdevicecontrollerdelegate/controller%28__commissioningcomplete_nodeid_metrics_context_%29.md): Notify the delegate when commissioning is completed.
- [controller(\_:read:)](mtrdevicecontrollerdelegate/controller%28__read_%29.md): Notify the delegate when commissioning infomation has been read from the commissionee.
- [controller(\_:suspendedChangedTo:)](mtrdevicecontrollerdelegate/controller%28__suspendedchangedto_%29.md): Notify the delegate when the suspended state changed of the controller, after this happens the controller will be in the specified state.
- [devicesChanged(for:)](mtrdevicecontrollerdelegate/deviceschanged%28for_%29.md): Notify the delegate when the list of MTRDevice objects in memory has changed.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTRDeviceControllerDelegate (Objective-C)

**Framework:** Matter  
**Kind:** Protocol  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
@protocol MTRDeviceControllerDelegate <NSObject>
```

## Topics

### Instance Methods

- [controller:commissioningComplete:](mtrdevicecontrollerdelegate/controller%28__commissioningcomplete_%29.md): Deprecated.
- [controller:commissioningComplete:nodeID:](mtrdevicecontrollerdelegate/controller%28__commissioningcomplete_nodeid_%29.md)
- [controller:commissioningComplete:nodeID:metrics:](mtrdevicecontrollerdelegate/controller%28__commissioningcomplete_nodeid_metrics_%29.md): Deprecated.
- [controller:commissioningSessionEstablishmentDone:](mtrdevicecontrollerdelegate/controller%28__commissioningsessionestablishmentdone_%29.md)
- [controller:readCommissioningInfo:](mtrdevicecontrollerdelegate/controller%28__readcommissioninginfo_%29.md): Deprecated.
- [controller:statusUpdate:](mtrdevicecontrollerdelegate/controller%28__statusupdate_%29.md)
- [controller:commissioneeHasReceivedNetworkCredentials:](mtrdevicecontrollerdelegate/controller%28__commissioneehasreceivednetworkcredentials_%29.md): Notify the delegate that we have successfully communicated the network credentials to the device being commissioned and are about to tell it to join that network. Note that for devices that are already on-network this notification will not happen.
- [controller:commissioningComplete:nodeID:metrics:context:](mtrdevicecontrollerdelegate/controller%28__commissioningcomplete_nodeid_metrics_context_%29.md): Notify the delegate when commissioning is completed.
- [controller:readCommissioneeInfo:](mtrdevicecontrollerdelegate/controller%28__read_%29.md): Notify the delegate when commissioning infomation has been read from the commissionee.
- [controller:suspendedChangedTo:](mtrdevicecontrollerdelegate/controller%28__suspendedchangedto_%29.md): Notify the delegate when the suspended state changed of the controller, after this happens the controller will be in the specified state.
- [devicesChangedForController:](mtrdevicecontrollerdelegate/deviceschanged%28for_%29.md): Notify the delegate when the list of MTRDevice objects in memory has changed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)
