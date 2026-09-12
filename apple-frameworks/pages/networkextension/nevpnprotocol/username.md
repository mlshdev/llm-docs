> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnprotocol/username](https://developer.apple.com/documentation/networkextension/nevpnprotocol/username)

# username (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The user name component of the tunneling protocol authentication credential.

## Declaration

```swift
var username: String? { get set }
```

## See Also

### Authenticating the user

- [passwordReference](passwordreference.md): A persistent keychain reference to a keychain item containing the password component of the tunneling protocol authentication credential.
- [identityReference](identityreference.md): A persistent keychain reference to a keychain item containing the certificate and private key components of the tunneling protocol authentication credential.
- [identityData](identitydata.md): The certificate and private key components of the tunneling protocol authentication credential, in PKCS12 format.
- [identityDataPassword](identitydatapassword.md): The password for the PKCS12 tunneling protocol authentication credentials.

# username (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The user name component of the tunneling protocol authentication credential.

## Declaration

```objectivec
@property (copy, nullable) NSString * username;
```

## See Also

### Authenticating the user

- [passwordReference](passwordreference.md): A persistent keychain reference to a keychain item containing the password component of the tunneling protocol authentication credential.
- [identityReference](identityreference.md): A persistent keychain reference to a keychain item containing the certificate and private key components of the tunneling protocol authentication credential.
- [identityData](identitydata.md): The certificate and private key components of the tunneling protocol authentication credential, in PKCS12 format.
- [identityDataPassword](identitydatapassword.md): The password for the PKCS12 tunneling protocol authentication credentials.
