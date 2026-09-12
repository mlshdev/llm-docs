> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport/matteradddevicerequest/devicecriteria](https://developer.apple.com/documentation/mattersupport/matteradddevicerequest/devicecriteria)

# MatterAddDeviceRequest.DeviceCriteria

**Framework:** MatterSupport  
**Kind:** Enumeration  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 14.0+ · visionOS

A predicate to match against possible devices that may appear in the picker.

## Declaration

```swift
enum DeviceCriteria
```

## Topics

### Creating criteria

- [init(from:)](init%28from_%29.md): Create the request from a decoder.

### Defining the criteria

- [MatterAddDeviceRequest.DeviceCriteria.allDevices](devicecriteria/alldevices.md): All device match without any filtering.
- [MatterAddDeviceRequest.DeviceCriteria.all(\_:)](devicecriteria/all%28__%29.md): A device matches the given criteria if it matches all of the individual ones
- [MatterAddDeviceRequest.DeviceCriteria.any(\_:)](devicecriteria/any%28__%29.md): A device matches the given criteria if it matches any one of the individual ones .
- [MatterAddDeviceRequest.DeviceCriteria.commissioningID(\_:)](devicecriteria/commissioningid%28__%29.md): A device matches if it has the given commissioning identifier.
- [MatterAddDeviceRequest.DeviceCriteria.fabricNode(rootPublicKey:nodeID:)](devicecriteria/fabricnode%28rootpublickey_nodeid_%29.md): A device matches if it’s paired to a fabric using the provided fabric and node identifiers.
- [MatterAddDeviceRequest.DeviceCriteria.not(\_:)](devicecriteria/not%28__%29.md): A device matches the given criteria if it does not match the provided criteria.
- [MatterAddDeviceRequest.DeviceCriteria.productID(\_:)](devicecriteria/productid%28__%29.md): A device matches if it has the given product identifier.
- [MatterAddDeviceRequest.DeviceCriteria.serialNumber(\_:)](devicecriteria/serialnumber%28__%29.md): A device matches if it has the given product identifier.
- [MatterAddDeviceRequest.DeviceCriteria.vendorID(\_:)](devicecriteria/vendorid%28__%29.md): A device matches if it has the given vendor.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining the device criteria

- [showDeviceCriteria](showdevicecriteria.md): A predicate that filters what devices appear in the picker.
