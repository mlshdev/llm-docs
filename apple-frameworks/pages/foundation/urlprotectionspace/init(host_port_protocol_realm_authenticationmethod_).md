> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotectionspace/init(host:port:protocol:realm:authenticationmethod:)](https://developer.apple.com/documentation/foundation/urlprotectionspace/init(host:port:protocol:realm:authenticationmethod:))

# init(host:port:protocol:realm:authenticationMethod:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a protection space object from the given host, port, protocol, realm, and authentication method.

## Declaration

```swift
init(host: String, port: Int, protocol: String?, realm: String?, authenticationMethod: String?)
```

## Parameters

- `host`: The host name for the [URLProtectionSpace](../urlprotectionspace.md) object.
- `port`: The port for the protection space object. If `port` is 0, the default port for the specified protocol is used, for example, port 80 for HTTP. Note that servers can, and do, treat these values differently.
- `protocol`: The protocol for the protection space object. The value of `protocol` is equivalent to the scheme for a URL in the protection space, for example, “http”, “https”,  “ftp”, etc.
- `realm`: A string indicating a protocol-specific subdivision of the host. `realm` may be `nil` if there is no specified realm or if the protocol doesn’t support realms.
- `authenticationMethod`: The type of authentication to use. `authenticationMethod` should be set to one of the values in [NSURLProtectionSpace authentication method constants](../nsurlprotectionspace-authentication-method-constants.md) or `nil` to use the default, [NSURLAuthenticationMethodDefault](../nsurlauthenticationmethoddefault.md).

<a id="return-value"></a>

## Return Value

A new protection space object, initialized with the given host, port, protocol, realm, and authentication method.

## See Also

### Creating a protection space

- [init(proxyHost:port:type:realm:authenticationMethod:)](init%28proxyhost_port_type_realm_authenticationmethod_%29.md): Creates a protection space object representing a proxy server.

# initWithHost:port:protocol:realm:authenticationMethod: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a protection space object from the given host, port, protocol, realm, and authentication method.

## Declaration

```objectivec
- (instancetype) initWithHost:(NSString *) host port:(NSInteger) port protocol:(NSString *) protocol realm:(NSString *) realm authenticationMethod:(NSString *) authenticationMethod;
```

## Parameters

- `host`: The host name for the [NSURLProtectionSpace](../urlprotectionspace.md) object.
- `port`: The port for the protection space object. If `port` is 0, the default port for the specified protocol is used, for example, port 80 for HTTP. Note that servers can, and do, treat these values differently.
- `protocol`: The protocol for the protection space object. The value of `protocol` is equivalent to the scheme for a URL in the protection space, for example, “http”, “https”,  “ftp”, etc.
- `realm`: A string indicating a protocol-specific subdivision of the host. `realm` may be `nil` if there is no specified realm or if the protocol doesn’t support realms.
- `authenticationMethod`: The type of authentication to use. `authenticationMethod` should be set to one of the values in [NSURLProtectionSpace authentication method constants](../nsurlprotectionspace-authentication-method-constants.md) or `nil` to use the default, [NSURLAuthenticationMethodDefault](../nsurlauthenticationmethoddefault.md).

<a id="return-value"></a>

## Return Value

A new protection space object, initialized with the given host, port, protocol, realm, and authentication method.

## See Also

### Creating a protection space

- [initWithProxyHost:port:type:realm:authenticationMethod:](init%28proxyhost_port_type_realm_authenticationmethod_%29.md): Creates a protection space object representing a proxy server.
