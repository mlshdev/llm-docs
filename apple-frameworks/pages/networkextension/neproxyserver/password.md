> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neproxyserver/password](https://developer.apple.com/documentation/networkextension/neproxyserver/password)

# password (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The password portion of the authentication credential to be used to authenticate with the proxy server.

## Declaration

```swift
var password: String? { get set }
```

## See Also

### Accessing Proxy Server Properties

- [address](address.md): The address of the proxy server.
- [port](port.md): The TCP port on which the proxy server is listening for connections.
- [authenticationRequired](authenticationrequired.md): A Boolean indicating if the server requires authentication credentials.
- [username](username.md): The username portion of the authentication credential to be used to authenticate with the proxy server.

# password (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The password portion of the authentication credential to be used to authenticate with the proxy server.

## Declaration

```objectivec
@property (copy, nullable) NSString * password;
```

## See Also

### Accessing Proxy Server Properties

- [address](address.md): The address of the proxy server.
- [port](port.md): The TCP port on which the proxy server is listening for connections.
- [authenticationRequired](authenticationrequired.md): A Boolean indicating if the server requires authentication credentials.
- [username](username.md): The username portion of the authentication credential to be used to authenticate with the proxy server.
