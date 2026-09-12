> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontrollerdelegate/controller(_:commissioneehasreceivednetworkcredentials:)](https://developer.apple.com/documentation/matter/mtrdevicecontrollerdelegate/controller(_:commissioneehasreceivednetworkcredentials:))

# controller(\_:commissioneeHasReceivedNetworkCredentials:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Notify the delegate that we have successfully communicated the network credentials to the device being commissioned and are about to tell it to join that network.  Note that for devices that are already on-network this notification will not happen.

## Declaration

```swift
optional func controller(_ controller: MTRDeviceController, commissioneeHasReceivedNetworkCredentials nodeID: NSNumber)
```

# controller:commissioneeHasReceivedNetworkCredentials: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Notify the delegate that we have successfully communicated the network credentials to the device being commissioned and are about to tell it to join that network.  Note that for devices that are already on-network this notification will not happen.

## Declaration

```objectivec
- (void) controller:(MTRDeviceController *) controller commissioneeHasReceivedNetworkCredentials:(NSNumber *) nodeID;
```
