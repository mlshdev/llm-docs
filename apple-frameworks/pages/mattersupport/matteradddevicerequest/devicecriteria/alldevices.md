> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport/matteradddevicerequest/devicecriteria/alldevices](https://developer.apple.com/documentation/mattersupport/matteradddevicerequest/devicecriteria/alldevices)

# MatterAddDeviceRequest.DeviceCriteria.allDevices

**Framework:** MatterSupport  
**Kind:** Case  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 14.0+ · visionOS

All device match without any filtering.

## Declaration

```swift
case allDevices
```

## See Also

### Defining the criteria

- [MatterAddDeviceRequest.DeviceCriteria.all(\_:)](all%28__%29.md): A device matches the given criteria if it matches all of the individual ones
- [MatterAddDeviceRequest.DeviceCriteria.any(\_:)](any%28__%29.md): A device matches the given criteria if it matches any one of the individual ones .
- [MatterAddDeviceRequest.DeviceCriteria.commissioningID(\_:)](commissioningid%28__%29.md): A device matches if it has the given commissioning identifier.
- [MatterAddDeviceRequest.DeviceCriteria.fabricNode(rootPublicKey:nodeID:)](fabricnode%28rootpublickey_nodeid_%29.md): A device matches if it’s paired to a fabric using the provided fabric and node identifiers.
- [MatterAddDeviceRequest.DeviceCriteria.not(\_:)](not%28__%29.md): A device matches the given criteria if it does not match the provided criteria.
- [MatterAddDeviceRequest.DeviceCriteria.productID(\_:)](productid%28__%29.md): A device matches if it has the given product identifier.
- [MatterAddDeviceRequest.DeviceCriteria.serialNumber(\_:)](serialnumber%28__%29.md): A device matches if it has the given product identifier.
- [MatterAddDeviceRequest.DeviceCriteria.vendorID(\_:)](vendorid%28__%29.md): A device matches if it has the given vendor.
