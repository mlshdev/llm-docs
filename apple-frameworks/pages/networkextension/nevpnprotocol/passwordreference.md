> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnprotocol/passwordreference](https://developer.apple.com/documentation/networkextension/nevpnprotocol/passwordreference)

# passwordReference (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A persistent keychain reference to a keychain item containing the password component of the tunneling protocol authentication credential.

## Declaration

```swift
var passwordReference: Data? { get set }
```

<a id="Discussion"></a>

## Discussion

The keychain item must have the kSecClassGenericPassword class.

## See Also

### Authenticating the user

- [username](username.md): The user name component of the tunneling protocol authentication credential.
- [identityReference](identityreference.md): A persistent keychain reference to a keychain item containing the certificate and private key components of the tunneling protocol authentication credential.
- [identityData](identitydata.md): The certificate and private key components of the tunneling protocol authentication credential, in PKCS12 format.
- [identityDataPassword](identitydatapassword.md): The password for the PKCS12 tunneling protocol authentication credentials.

# passwordReference (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A persistent keychain reference to a keychain item containing the password component of the tunneling protocol authentication credential.

## Declaration

```objectivec
@property (copy, nullable) NSData * passwordReference;
```

<a id="Discussion"></a>

## Discussion

The keychain item must have the kSecClassGenericPassword class.

## See Also

### Authenticating the user

- [username](username.md): The user name component of the tunneling protocol authentication credential.
- [identityReference](identityreference.md): A persistent keychain reference to a keychain item containing the certificate and private key components of the tunneling protocol authentication credential.
- [identityData](identitydata.md): The certificate and private key components of the tunneling protocol authentication credential, in PKCS12 format.
- [identityDataPassword](identitydatapassword.md): The password for the PKCS12 tunneling protocol authentication credentials.
