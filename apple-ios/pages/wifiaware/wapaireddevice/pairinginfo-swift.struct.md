> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wapaireddevice/pairinginfo-swift.struct](https://developer.apple.com/documentation/wifiaware/wapaireddevice/pairinginfo-swift.struct)

# WAPairedDevice.PairingInfo

**Framework:** Wi-Fi Aware  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A collection of unauthenticated information the system receives from a device before it’s paired for the first time.

## Declaration

```swift
struct PairingInfo
```

<a id="overview"></a>

## Overview

For privacy reasons, these values are only sent during initial pairing over Wi-Fi Aware, with a:

- **`Publisher`**: Include it in publish frames when you enable Wi-Fi Aware pair setup.
- **`Subscriber`**: Include it in the pairing bootstrap request frame when you pair to a publisher.

After initial pairing completes, the system no longer sends these values in any over-the-air frames, to prevent user tracking and protect user privacy.

> **Warning**

> These values are only intended to assist a person during the initial one-time pairing process and shouldn’t be used for any other purpose. Because the system receives the values before the initial pairing, the system transmits them over an insecure, unauthenticated, and unencrypted channel. Consequently, they may be intercepted or manipulated by an attacker, making it impossible to verify their accuracy. Therefore, if your app requires reliable and detailed information about the connected device, it should obtain it through the secure Wi-Fi Aware data path after pairing is complete, rather than relying on the content in this structure.

## Topics

### Receiving device information

- [vendorName](pairinginfo-swift.struct/vendorname.md): The human-readable name of the manufacturer or vendor of the physical device as a person would understand it.
- [modelName](pairinginfo-swift.struct/modelname.md): The human-readable model name of the physical device as a person can understand it.
- [pairingName](pairinginfo-swift.struct/pairingname.md): The human-readable name of the physical device as a person sees it during initial pairing.

### Getting a string description

- [description](pairinginfo-swift.struct/description.md): A string description of the pairing information.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Paired devices

- [WAPairedDevice](../wapaireddevice.md): A known Wi-Fi Aware device that your app can connect to.
- [WAPairedDevice.Devices](devices.md): A dictionary holding a snapshot of currently paired devices accessible and known to your app.
- [WAPairedDevice.DevicesSequence](devicessequence.md): A sequence that vends updates to a paired device list, as the list changes.
