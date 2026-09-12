> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnprotocol](https://developer.apple.com/documentation/networkextension/nevpnprotocol)

# NEVPNProtocol (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Settings common to both IKEv2 and IPsec VPN configurations.

## Declaration

```swift
class NEVPNProtocol
```

## Mentioned In

- [Routing your VPN network traffic](routing-your-vpn-network-traffic.md)

<a id="overview"></a>

## Overview

The [NEVPNProtocol](nevpnprotocol.md) class is an abstract base class with one subclass for each type of supported VPN configuration. This class provides properties for configuring the VPN, authenticating network connections, and routing network traffic. You can include all network traffic, with some exceptions, and selectively exclude types of network traffic.

Instances of this class are thread-safe.

## Topics

### Configuring the VPN

- [serverAddress](nevpnprotocol/serveraddress.md): The address of the VPN server.
- [disconnectOnSleep](nevpnprotocol/disconnectonsleep.md): A Boolean value that indicates whether the VPN disconnects when the device sleeps.
- [proxySettings](nevpnprotocol/proxysettings.md): The proxy settings to use for HTTP and HTTPS connections that route through the VPN.

### Authenticating the user

- [username](nevpnprotocol/username.md): The user name component of the tunneling protocol authentication credential.
- [passwordReference](nevpnprotocol/passwordreference.md): A persistent keychain reference to a keychain item containing the password component of the tunneling protocol authentication credential.
- [identityReference](nevpnprotocol/identityreference.md): A persistent keychain reference to a keychain item containing the certificate and private key components of the tunneling protocol authentication credential.
- [identityData](nevpnprotocol/identitydata.md): The certificate and private key components of the tunneling protocol authentication credential, in PKCS12 format.
- [identityDataPassword](nevpnprotocol/identitydatapassword.md): The password for the PKCS12 tunneling protocol authentication credentials.

### Routing network traffic

- [includeAllNetworks](nevpnprotocol/includeallnetworks.md): A Boolean value that indicates whether the system sends most network traffic over the tunnel.
- [excludeAPNs](nevpnprotocol/excludeapns.md): A Boolean value that indicates whether the system excludes all APNs network traffic from the tunnel.
- [excludeCellularServices](nevpnprotocol/excludecellularservices.md): A Boolean value that indicates whether the system excludes all cellular services network traffic from the tunnel.
- [excludeLocalNetworks](nevpnprotocol/excludelocalnetworks.md): A Boolean value that indicates whether the system excludes all traffic destined for local networks from the tunnel.
- [enforceRoutes](nevpnprotocol/enforceroutes.md): A Boolean value that indicates whether route rules for the tunnel take precedence over any locally defined routes.

### Instance Properties

- [excludeDeviceCommunication](nevpnprotocol/excludedevicecommunication.md)
- [sliceUUID](nevpnprotocol/sliceuuid.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NEDNSProxyProviderProtocol](nednsproxyproviderprotocol.md)
- [NETunnelProviderProtocol](netunnelproviderprotocol.md)
- [NEVPNProtocolIPSec](nevpnprotocolipsec.md)

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
- [NEVPNProtocolIPSec](nevpnprotocolipsec.md): Settings for an IPsec VPN configuration.
- [VPN On Demand Rules](vpn-on-demand-rules.md): Set up VPN On Demand.

# NEVPNProtocol (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Settings common to both IKEv2 and IPsec VPN configurations.

## Declaration

```objectivec
@interface NEVPNProtocol : NSObject
```

## Mentioned In

- [Routing your VPN network traffic](routing-your-vpn-network-traffic.md)

<a id="overview"></a>

## Overview

The [NEVPNProtocol](nevpnprotocol.md) class is an abstract base class with one subclass for each type of supported VPN configuration. This class provides properties for configuring the VPN, authenticating network connections, and routing network traffic. You can include all network traffic, with some exceptions, and selectively exclude types of network traffic.

Instances of this class are thread-safe.

## Topics

### Configuring the VPN

- [serverAddress](nevpnprotocol/serveraddress.md): The address of the VPN server.
- [disconnectOnSleep](nevpnprotocol/disconnectonsleep.md): A Boolean value that indicates whether the VPN disconnects when the device sleeps.
- [proxySettings](nevpnprotocol/proxysettings.md): The proxy settings to use for HTTP and HTTPS connections that route through the VPN.

### Authenticating the user

- [username](nevpnprotocol/username.md): The user name component of the tunneling protocol authentication credential.
- [passwordReference](nevpnprotocol/passwordreference.md): A persistent keychain reference to a keychain item containing the password component of the tunneling protocol authentication credential.
- [identityReference](nevpnprotocol/identityreference.md): A persistent keychain reference to a keychain item containing the certificate and private key components of the tunneling protocol authentication credential.
- [identityData](nevpnprotocol/identitydata.md): The certificate and private key components of the tunneling protocol authentication credential, in PKCS12 format.
- [identityDataPassword](nevpnprotocol/identitydatapassword.md): The password for the PKCS12 tunneling protocol authentication credentials.

### Routing network traffic

- [includeAllNetworks](nevpnprotocol/includeallnetworks.md): A Boolean value that indicates whether the system sends most network traffic over the tunnel.
- [excludeAPNs](nevpnprotocol/excludeapns.md): A Boolean value that indicates whether the system excludes all APNs network traffic from the tunnel.
- [excludeCellularServices](nevpnprotocol/excludecellularservices.md): A Boolean value that indicates whether the system excludes all cellular services network traffic from the tunnel.
- [excludeLocalNetworks](nevpnprotocol/excludelocalnetworks.md): A Boolean value that indicates whether the system excludes all traffic destined for local networks from the tunnel.
- [enforceRoutes](nevpnprotocol/enforceroutes.md): A Boolean value that indicates whether route rules for the tunnel take precedence over any locally defined routes.

### Instance Properties

- [excludeDeviceCommunication](nevpnprotocol/excludedevicecommunication.md)
- [sliceUUID](nevpnprotocol/sliceuuid.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NEDNSProxyProviderProtocol](nednsproxyproviderprotocol.md)
- [NETunnelProviderProtocol](netunnelproviderprotocol.md)
- [NEVPNProtocolIPSec](nevpnprotocolipsec.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### VPN configuration

- [NEVPNManager](nevpnmanager.md): An object to create and manage a Personal VPN configuration.
- [NEVPNProtocolIKEv2](nevpnprotocolikev2.md): Settings for an IKEv2 VPN configuration.
- [NEVPNProtocolIPSec](nevpnprotocolipsec.md): Settings for an IPsec VPN configuration.
- [VPN On Demand Rules](vpn-on-demand-rules.md): Set up VPN On Demand.
