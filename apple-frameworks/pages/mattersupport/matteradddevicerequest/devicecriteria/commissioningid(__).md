> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport/matteradddevicerequest/devicecriteria/commissioningid(_:)](https://developer.apple.com/documentation/mattersupport/matteradddevicerequest/devicecriteria/commissioningid(_:))

# MatterAddDeviceRequest.DeviceCriteria.commissioningID(\_:)

**Framework:** MatterSupport  
**Kind:** Case  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 14.0+ · visionOS

A device matches if it has the given commissioning identifier.

## Declaration

```swift
case commissioningID(UUID)
```

<a id="discussion"></a>

## Discussion

The match occurs if the identifier is as provided by [commissionDevice(in:onboardingPayload:commissioningID:)](../../matteradddeviceextensionrequesthandler/commissiondevice%28in_onboardingpayload_commissioningid_%29.md)

## See Also

### Defining the criteria

- [MatterAddDeviceRequest.DeviceCriteria.allDevices](alldevices.md): All device match without any filtering.
- [MatterAddDeviceRequest.DeviceCriteria.all(\_:)](all%28__%29.md): A device matches the given criteria if it matches all of the individual ones
- [MatterAddDeviceRequest.DeviceCriteria.any(\_:)](any%28__%29.md): A device matches the given criteria if it matches any one of the individual ones .
- [MatterAddDeviceRequest.DeviceCriteria.fabricNode(rootPublicKey:nodeID:)](fabricnode%28rootpublickey_nodeid_%29.md): A device matches if it’s paired to a fabric using the provided fabric and node identifiers.
- [MatterAddDeviceRequest.DeviceCriteria.not(\_:)](not%28__%29.md): A device matches the given criteria if it does not match the provided criteria.
- [MatterAddDeviceRequest.DeviceCriteria.productID(\_:)](productid%28__%29.md): A device matches if it has the given product identifier.
- [MatterAddDeviceRequest.DeviceCriteria.serialNumber(\_:)](serialnumber%28__%29.md): A device matches if it has the given product identifier.
- [MatterAddDeviceRequest.DeviceCriteria.vendorID(\_:)](vendorid%28__%29.md): A device matches if it has the given vendor.
