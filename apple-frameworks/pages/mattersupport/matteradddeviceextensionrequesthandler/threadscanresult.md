> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport/matteradddeviceextensionrequesthandler/threadscanresult](https://developer.apple.com/documentation/mattersupport/matteradddeviceextensionrequesthandler/threadscanresult)

# MatterAddDeviceExtensionRequestHandler.ThreadScanResult

**Framework:** MatterSupport  
**Kind:** Structure  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 14.0+ · visionOS

A result of a Thread-scan operation performed on the device

## Declaration

```swift
struct ThreadScanResult
```

<a id="overview"></a>

## Overview

Use one of these instances to create a [MatterAddDeviceExtensionRequestHandler.ThreadNetworkAssociation](threadnetworkassociation.md) as a possible Thread network for the device to join.

## Topics

### Creating the result

- [init(networkName:panID:extendedPANID:channel:extendedAddress:rssi:version:linkQualityIndicator:)](threadscanresult/init%28networkname_panid_extendedpanid_channel_extendedaddress_rssi_version_linkqualityindicator_%29.md): Create the extension request handler.

### Getting result information

- [channel](threadscanresult/channel.md): The Thread network radio channel.
- [extendedAddress](threadscanresult/extendedaddress.md): The identifier of an active Thread network Border Agent.
- [extendedPANID](threadscanresult/extendedpanid.md): The Thread network extended PAN identifier.
- [linkQualityIndicator](threadscanresult/linkqualityindicator.md): A receive quality indicator, as specified by Matter specification.
- [networkName](threadscanresult/networkname.md): The Thread network name.
- [panID](threadscanresult/panid.md): The Thread network PAN identifier.
- [rssi](threadscanresult/rssi.md): The observed RSSI of the network by the device.
- [version](threadscanresult/version.md): The version field, as specified by the Matter specification.

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
- [MatterAddDeviceExtensionRequestHandler.ThreadNetworkAssociation](threadnetworkassociation.md): The description of an association to a Thread network.
