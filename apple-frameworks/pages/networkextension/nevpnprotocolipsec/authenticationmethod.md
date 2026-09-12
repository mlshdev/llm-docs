> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnprotocolipsec/authenticationmethod](https://developer.apple.com/documentation/networkextension/nevpnprotocolipsec/authenticationmethod)

# authenticationMethod (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The method used to authenticate the device with the IPSec server. For IKE version 2, when using extended authentication, this authentication method only affects how the client validates the authentication payload presented by the server.

## Declaration

```swift
var authenticationMethod: NEVPNIKEAuthenticationMethod { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is set to `NEVPNIKEAuthenticationMethodNone`, extended authentication will still be negotiated if [useExtendedAuthentication](useextendedauthentication.md) is set to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing IPSec properties

- [NEVPNIKEAuthenticationMethod](../nevpnikeauthenticationmethod.md): Internet Key Exchange (IKE) authentication methods used to authenticate with the IPSec server.
- [useExtendedAuthentication](useextendedauthentication.md): A flag indicating if extended authentication will be negotiated.
- [sharedSecretReference](sharedsecretreference.md): A persistent keychain reference to a keychain item containing the IKE shared secret.
- [localIdentifier](localidentifier.md): A string identifying the iOS or macOS device for authentication purposes
- [remoteIdentifier](remoteidentifier.md): A string identifying the IPSec server for authentication purposes

# authenticationMethod (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The method used to authenticate the device with the IPSec server. For IKE version 2, when using extended authentication, this authentication method only affects how the client validates the authentication payload presented by the server.

## Declaration

```objectivec
@property NEVPNIKEAuthenticationMethod authenticationMethod;
```

<a id="Discussion"></a>

## Discussion

If this property is set to `NEVPNIKEAuthenticationMethodNone`, extended authentication will still be negotiated if [useExtendedAuthentication](useextendedauthentication.md) is set to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing IPSec properties

- [NEVPNIKEAuthenticationMethod](../nevpnikeauthenticationmethod.md): Internet Key Exchange (IKE) authentication methods used to authenticate with the IPSec server.
- [useExtendedAuthentication](useextendedauthentication.md): A flag indicating if extended authentication will be negotiated.
- [sharedSecretReference](sharedsecretreference.md): A persistent keychain reference to a keychain item containing the IKE shared secret.
- [localIdentifier](localidentifier.md): A string identifying the iOS or macOS device for authentication purposes
- [remoteIdentifier](remoteidentifier.md): A string identifying the IPSec server for authentication purposes
