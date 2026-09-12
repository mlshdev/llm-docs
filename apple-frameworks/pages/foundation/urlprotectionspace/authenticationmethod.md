> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotectionspace/authenticationmethod](https://developer.apple.com/documentation/foundation/urlprotectionspace/authenticationmethod)

# authenticationMethod (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The authentication method used by the receiver.

## Declaration

```swift
var authenticationMethod: String { get }
```

## Mentioned In

- [Performing manual server trust authentication](../performing-manual-server-trust-authentication.md)

<a id="Discussion"></a>

## Discussion

The supported authentication methods are listed in [NSURLProtectionSpace authentication method constants](../nsurlprotectionspace-authentication-method-constants.md).

## See Also

### Getting protection space properties

- [distinguishedNames](distinguishednames.md): The acceptable certificate-issuing authorities for client certificate authentication.
- [host](host.md): The receiver’s host.
- [port](port.md): The receiver’s port.
- [protocol](protocol.md): The receiver’s protocol.
- [proxyType](proxytype.md): The receiver’s proxy type.
- [realm](realm.md): The receiver’s authentication realm
- [receivesCredentialSecurely](receivescredentialsecurely.md): A Boolean value that indicates whether the credentials for the protection space can be sent securely.
- [serverTrust](servertrust.md): A representation of the server’s SSL transaction state.

# authenticationMethod (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The authentication method used by the receiver.

## Declaration

```objectivec
@property (copy, readonly) NSString * authenticationMethod;
```

## Mentioned In

- [Performing manual server trust authentication](../performing-manual-server-trust-authentication.md)

<a id="Discussion"></a>

## Discussion

The supported authentication methods are listed in [NSURLProtectionSpace authentication method constants](../nsurlprotectionspace-authentication-method-constants.md).

## See Also

### Getting protection space properties

- [distinguishedNames](distinguishednames.md): The acceptable certificate-issuing authorities for client certificate authentication.
- [host](host.md): The receiver’s host.
- [isProxy](../nsurlprotectionspace/isproxy.md): A Boolean value that indicates whether the receiver represents a proxy server.
- [port](port.md): The receiver’s port.
- [protocol](protocol.md): The receiver’s protocol.
- [proxyType](proxytype.md): The receiver’s proxy type.
- [realm](realm.md): The receiver’s authentication realm
- [receivesCredentialSecurely](receivescredentialsecurely.md): A Boolean value that indicates whether the credentials for the protection space can be sent securely.
- [serverTrust](servertrust.md): A representation of the server’s SSL transaction state.
