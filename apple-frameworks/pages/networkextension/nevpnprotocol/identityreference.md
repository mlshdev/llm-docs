> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnprotocol/identityreference](https://developer.apple.com/documentation/networkextension/nevpnprotocol/identityreference)

# identityReference (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A persistent keychain reference to a keychain item containing the certificate and private key components of the tunneling protocol authentication credential.

## Declaration

```swift
var identityReference: Data? { get set }
```

<a id="Discussion"></a>

## Discussion

The keychain item must have the [kSecClassIdentity](../../security/ksecclassidentity.md) class. In macOS, the system ignores this property for [NEVPNProtocolIPSec](../nevpnprotocolipsec.md) objects. On iOS, the system ignores this property for [NEVPNProtocolIPSec](../nevpnprotocolipsec.md) and [NEVPNProtocolIKEv2](../nevpnprotocolikev2.md) objects. In these cases where the system ingores this property, set the identity using the [identityData](identitydata.md) property.

## See Also

### Authenticating the user

- [username](username.md): The user name component of the tunneling protocol authentication credential.
- [passwordReference](passwordreference.md): A persistent keychain reference to a keychain item containing the password component of the tunneling protocol authentication credential.
- [identityData](identitydata.md): The certificate and private key components of the tunneling protocol authentication credential, in PKCS12 format.
- [identityDataPassword](identitydatapassword.md): The password for the PKCS12 tunneling protocol authentication credentials.

# identityReference (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A persistent keychain reference to a keychain item containing the certificate and private key components of the tunneling protocol authentication credential.

## Declaration

```objectivec
@property (copy, nullable) NSData * identityReference;
```

<a id="Discussion"></a>

## Discussion

The keychain item must have the [kSecClassIdentity](../../security/ksecclassidentity.md) class. In macOS, the system ignores this property for [NEVPNProtocolIPSec](../nevpnprotocolipsec.md) objects. On iOS, the system ignores this property for [NEVPNProtocolIPSec](../nevpnprotocolipsec.md) and [NEVPNProtocolIKEv2](../nevpnprotocolikev2.md) objects. In these cases where the system ingores this property, set the identity using the [identityData](identitydata.md) property.

## See Also

### Authenticating the user

- [username](username.md): The user name component of the tunneling protocol authentication credential.
- [passwordReference](passwordreference.md): A persistent keychain reference to a keychain item containing the password component of the tunneling protocol authentication credential.
- [identityData](identitydata.md): The certificate and private key components of the tunneling protocol authentication credential, in PKCS12 format.
- [identityDataPassword](identitydatapassword.md): The password for the PKCS12 tunneling protocol authentication credentials.
