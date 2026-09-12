> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnprotocol/identitydatapassword](https://developer.apple.com/documentation/networkextension/nevpnprotocol/identitydatapassword)

# identityDataPassword (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The password for the PKCS12 tunneling protocol authentication credentials.

## Declaration

```swift
var identityDataPassword: String? { get set }
```

<a id="Discussion"></a>

## Discussion

If the PKCS12 data set in the [identityData](identitydata.md) property uses a password for encryption, you must specify the password here.

## See Also

### Authenticating the user

- [username](username.md): The user name component of the tunneling protocol authentication credential.
- [passwordReference](passwordreference.md): A persistent keychain reference to a keychain item containing the password component of the tunneling protocol authentication credential.
- [identityReference](identityreference.md): A persistent keychain reference to a keychain item containing the certificate and private key components of the tunneling protocol authentication credential.
- [identityData](identitydata.md): The certificate and private key components of the tunneling protocol authentication credential, in PKCS12 format.

# identityDataPassword (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The password for the PKCS12 tunneling protocol authentication credentials.

## Declaration

```objectivec
@property (copy, nullable) NSString * identityDataPassword;
```

<a id="Discussion"></a>

## Discussion

If the PKCS12 data set in the [identityData](identitydata.md) property uses a password for encryption, you must specify the password here.

## See Also

### Authenticating the user

- [username](username.md): The user name component of the tunneling protocol authentication credential.
- [passwordReference](passwordreference.md): A persistent keychain reference to a keychain item containing the password component of the tunneling protocol authentication credential.
- [identityReference](identityreference.md): A persistent keychain reference to a keychain item containing the certificate and private key components of the tunneling protocol authentication credential.
- [identityData](identitydata.md): The certificate and private key components of the tunneling protocol authentication credential, in PKCS12 format.
