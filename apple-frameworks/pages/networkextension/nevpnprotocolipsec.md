> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnprotocolipsec](https://developer.apple.com/documentation/networkextension/nevpnprotocolipsec)

# NEVPNProtocolIPSec (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Settings for an IPsec VPN configuration.

## Declaration

```swift
class NEVPNProtocolIPSec
```

<a id="overview"></a>

## Overview

To configure IKE version 2 (IKEv2), use the [NEVPNProtocolIKEv2](nevpnprotocolikev2.md) subclass. Instantiating [NEVPNProtocolIPSec](nevpnprotocolipsec.md) directly implies IKE version 1.

## Topics

### Accessing IPSec properties

- [authenticationMethod](nevpnprotocolipsec/authenticationmethod.md): The method used to authenticate the device with the IPSec server. For IKE version 2, when using extended authentication, this authentication method only affects how the client validates the authentication payload presented by the server.
- [NEVPNIKEAuthenticationMethod](nevpnikeauthenticationmethod.md): Internet Key Exchange (IKE) authentication methods used to authenticate with the IPSec server.
- [useExtendedAuthentication](nevpnprotocolipsec/useextendedauthentication.md): A flag indicating if extended authentication will be negotiated.
- [sharedSecretReference](nevpnprotocolipsec/sharedsecretreference.md): A persistent keychain reference to a keychain item containing the IKE shared secret.
- [localIdentifier](nevpnprotocolipsec/localidentifier.md): A string identifying the iOS or macOS device for authentication purposes
- [remoteIdentifier](nevpnprotocolipsec/remoteidentifier.md): A string identifying the IPSec server for authentication purposes

## Relationships

### Inherits From

- [NEVPNProtocol](nevpnprotocol.md)

### Inherited By

- [NEVPNProtocolIKEv2](nevpnprotocolikev2.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### VPN configuration

- [NEVPNManager](nevpnmanager.md): An object to create and manage a Personal VPN configuration.
- [NEVPNProtocolIKEv2](nevpnprotocolikev2.md): Settings for an IKEv2 VPN configuration.
- [NEVPNProtocol](nevpnprotocol.md): Settings common to both IKEv2 and IPsec VPN configurations.
- [VPN On Demand Rules](vpn-on-demand-rules.md): Set up VPN On Demand.

# NEVPNProtocolIPSec (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Settings for an IPsec VPN configuration.

## Declaration

```objectivec
@interface NEVPNProtocolIPSec : NEVPNProtocol
```

<a id="overview"></a>

## Overview

To configure IKE version 2 (IKEv2), use the [NEVPNProtocolIKEv2](nevpnprotocolikev2.md) subclass. Instantiating [NEVPNProtocolIPSec](nevpnprotocolipsec.md) directly implies IKE version 1.

## Topics

### Accessing IPSec properties

- [authenticationMethod](nevpnprotocolipsec/authenticationmethod.md): The method used to authenticate the device with the IPSec server. For IKE version 2, when using extended authentication, this authentication method only affects how the client validates the authentication payload presented by the server.
- [NEVPNIKEAuthenticationMethod](nevpnikeauthenticationmethod.md): Internet Key Exchange (IKE) authentication methods used to authenticate with the IPSec server.
- [useExtendedAuthentication](nevpnprotocolipsec/useextendedauthentication.md): A flag indicating if extended authentication will be negotiated.
- [sharedSecretReference](nevpnprotocolipsec/sharedsecretreference.md): A persistent keychain reference to a keychain item containing the IKE shared secret.
- [localIdentifier](nevpnprotocolipsec/localidentifier.md): A string identifying the iOS or macOS device for authentication purposes
- [remoteIdentifier](nevpnprotocolipsec/remoteidentifier.md): A string identifying the IPSec server for authentication purposes

## Relationships

### Inherits From

- [NEVPNProtocol](nevpnprotocol.md)

### Inherited By

- [NEVPNProtocolIKEv2](nevpnprotocolikev2.md)

## See Also

### VPN configuration

- [NEVPNManager](nevpnmanager.md): An object to create and manage a Personal VPN configuration.
- [NEVPNProtocolIKEv2](nevpnprotocolikev2.md): Settings for an IKEv2 VPN configuration.
- [NEVPNProtocol](nevpnprotocol.md): Settings common to both IKEv2 and IPsec VPN configurations.
- [VPN On Demand Rules](vpn-on-demand-rules.md): Set up VPN On Demand.
