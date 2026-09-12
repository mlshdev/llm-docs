> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport/matteradddeviceextensionrequesthandler/threadnetworkassociation](https://developer.apple.com/documentation/mattersupport/matteradddeviceextensionrequesthandler/threadnetworkassociation)

# MatterAddDeviceExtensionRequestHandler.ThreadNetworkAssociation

**Framework:** MatterSupport  
**Kind:** Structure  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 14.0+ · visionOS

The description of an association to a Thread network.

## Declaration

```swift
struct ThreadNetworkAssociation
```

## Topics

### Getting network information

- [defaultSystemNetwork](threadnetworkassociation/defaultsystemnetwork.md): A sentinel value to represent the system’s default Thread network.
- [network(extendedPANID:)](threadnetworkassociation/network%28extendedpanid_%29.md): Obtains the Thread network extended PAN identifier.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Selecting the Thread network

- [selectThreadNetwork(from:)](selectthreadnetwork%28from_%29.md): Provides the visible Thread networks to the device.
- [MatterAddDeviceExtensionRequestHandler.ThreadScanResult](threadscanresult.md): A result of a Thread-scan operation performed on the device
