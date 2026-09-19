> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neproxyserver/username

# username (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The username portion of the authentication credential to be used to authenticate with the proxy server.

## Declaration

```swift
var username: String? { get set }
```

## See Also

### Accessing Proxy Server Properties

- [address](address.md): The address of the proxy server.
- [port](port.md): The TCP port on which the proxy server is listening for connections.
- [authenticationRequired](authenticationrequired.md): A Boolean indicating if the server requires authentication credentials.
- [password](password.md): The password portion of the authentication credential to be used to authenticate with the proxy server.

# username (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The username portion of the authentication credential to be used to authenticate with the proxy server.

## Declaration

```objectivec
@property (copy, nullable) NSString * username;
```

## See Also

### Accessing Proxy Server Properties

- [address](address.md): The address of the proxy server.
- [port](port.md): The TCP port on which the proxy server is listening for connections.
- [authenticationRequired](authenticationrequired.md): A Boolean indicating if the server requires authentication credentials.
- [password](password.md): The password portion of the authentication credential to be used to authenticate with the proxy server.
