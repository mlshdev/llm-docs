> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/network/captiveportallogin-swift.struct](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network/captiveportallogin-swift.struct)

# WINetworkSharingProvider.Network.CaptivePortalLogin

**Framework:** Wi-Fi Infrastructure  
**Kind:** Structure  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

Captive portal login information for a Wi-Fi network.

## Declaration

```swift
struct CaptivePortalLogin
```

<a id="overview"></a>

## Overview

Contains form data that people previously entered to complete captive portal authentication.

## Topics

### Instance Properties

- [description](captiveportallogin-swift.struct/description.md): A string description of the captive portal login information, for debugging purposes.
- [userEnteredFormValues](captiveportallogin-swift.struct/userenteredformvalues.md): The user-entered form values to complete captive portal login.

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

### Getting the network credentials

- [securityPolicy](securitypolicy-swift.property.md): The set of security types allowed for connecting to this network.
- [WINetworkSharingProvider.Network.SecurityPolicy](securitypolicy-swift.enum.md): The security policies allowed for connecting to a Wi-Fi network.
- [credentials](credentials-swift.property.md): The credentials the accessory needs to connect to this network.
- [WINetworkSharingProvider.Network.Credentials](credentials-swift.enum.md): Credentials for authenticating to a Wi-Fi network.
- [captivePortalLogin](captiveportallogin-swift.property.md): The captive portal login information for the network.
