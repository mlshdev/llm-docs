> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotectionspace/distinguishednames](https://developer.apple.com/documentation/foundation/urlprotectionspace/distinguishednames)

# distinguishedNames (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The acceptable certificate-issuing authorities for client certificate authentication.

## Declaration

```swift
var distinguishedNames: [Data]? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the authentication method of the protection space is not client certificate. The returned issuing authorities are encoded with Distinguished Encoding Rules (DER).

## See Also

### Getting protection space properties

- [authenticationMethod](authenticationmethod.md): The authentication method used by the receiver.
- [host](host.md): The receiver’s host.
- [port](port.md): The receiver’s port.
- [protocol](protocol.md): The receiver’s protocol.
- [proxyType](proxytype.md): The receiver’s proxy type.
- [realm](realm.md): The receiver’s authentication realm
- [receivesCredentialSecurely](receivescredentialsecurely.md): A Boolean value that indicates whether the credentials for the protection space can be sent securely.
- [serverTrust](servertrust.md): A representation of the server’s SSL transaction state.

# distinguishedNames (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The acceptable certificate-issuing authorities for client certificate authentication.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<NSData *> * distinguishedNames;
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the authentication method of the protection space is not client certificate. The returned issuing authorities are encoded with Distinguished Encoding Rules (DER).

## See Also

### Getting protection space properties

- [authenticationMethod](authenticationmethod.md): The authentication method used by the receiver.
- [host](host.md): The receiver’s host.
- [isProxy](../nsurlprotectionspace/isproxy.md): A Boolean value that indicates whether the receiver represents a proxy server.
- [port](port.md): The receiver’s port.
- [protocol](protocol.md): The receiver’s protocol.
- [proxyType](proxytype.md): The receiver’s proxy type.
- [realm](realm.md): The receiver’s authentication realm
- [receivesCredentialSecurely](receivescredentialsecurely.md): A Boolean value that indicates whether the credentials for the protection space can be sent securely.
- [serverTrust](servertrust.md): A representation of the server’s SSL transaction state.
