> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotectionspace/host](https://developer.apple.com/documentation/foundation/urlprotectionspace/host)

# host (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The receiver’s host.

## Declaration

```swift
var host: String { get }
```

## Mentioned In

- [Performing manual server trust authentication](../performing-manual-server-trust-authentication.md)

## See Also

### Getting protection space properties

- [authenticationMethod](authenticationmethod.md): The authentication method used by the receiver.
- [distinguishedNames](distinguishednames.md): The acceptable certificate-issuing authorities for client certificate authentication.
- [port](port.md): The receiver’s port.
- [protocol](protocol.md): The receiver’s protocol.
- [proxyType](proxytype.md): The receiver’s proxy type.
- [realm](realm.md): The receiver’s authentication realm
- [receivesCredentialSecurely](receivescredentialsecurely.md): A Boolean value that indicates whether the credentials for the protection space can be sent securely.
- [serverTrust](servertrust.md): A representation of the server’s SSL transaction state.

# host (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The receiver’s host.

## Declaration

```objectivec
@property (copy, readonly) NSString * host;
```

## Mentioned In

- [Performing manual server trust authentication](../performing-manual-server-trust-authentication.md)

## See Also

### Getting protection space properties

- [authenticationMethod](authenticationmethod.md): The authentication method used by the receiver.
- [distinguishedNames](distinguishednames.md): The acceptable certificate-issuing authorities for client certificate authentication.
- [isProxy](../nsurlprotectionspace/isproxy.md): A Boolean value that indicates whether the receiver represents a proxy server.
- [port](port.md): The receiver’s port.
- [protocol](protocol.md): The receiver’s protocol.
- [proxyType](proxytype.md): The receiver’s proxy type.
- [realm](realm.md): The receiver’s authentication realm
- [receivesCredentialSecurely](receivescredentialsecurely.md): A Boolean value that indicates whether the credentials for the protection space can be sent securely.
- [serverTrust](servertrust.md): A representation of the server’s SSL transaction state.
