> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlprotectionspace/isproxy](https://developer.apple.com/documentation/foundation/nsurlprotectionspace/isproxy)

# isProxy

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver represents a proxy server.

## Declaration

```objectivec
@property (readonly) BOOL isProxy;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver represents a proxy server, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Getting protection space properties

- [authenticationMethod](../urlprotectionspace/authenticationmethod.md): The authentication method used by the receiver.
- [distinguishedNames](../urlprotectionspace/distinguishednames.md): The acceptable certificate-issuing authorities for client certificate authentication.
- [host](../urlprotectionspace/host.md): The receiver’s host.
- [port](../urlprotectionspace/port.md): The receiver’s port.
- [protocol](../urlprotectionspace/protocol.md): The receiver’s protocol.
- [proxyType](../urlprotectionspace/proxytype.md): The receiver’s proxy type.
- [realm](../urlprotectionspace/realm.md): The receiver’s authentication realm
- [receivesCredentialSecurely](../urlprotectionspace/receivescredentialsecurely.md): A Boolean value that indicates whether the credentials for the protection space can be sent securely.
- [serverTrust](../urlprotectionspace/servertrust.md): A representation of the server’s SSL transaction state.
