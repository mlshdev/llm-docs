> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/issuer](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/issuer)

# issuer (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The issuer of the identity token that the identity provider returns.

## Declaration

```swift
var issuer: String { get }
```

## Mentioned In

- [Processing the JSON Web Encryption (JWE) login response](../processing-the-json-web-encryption-jwe-login-response.md)

## See Also

### Obtaining the required configuration

- [audience](audience.md): The audience for validation and requests.
- [clientID](clientid.md): The identifier for the client at the identity provider.
- [jwksEndpointURL](jwksendpointurl.md): The JSON Web Key Set endpoint URL for keys.
- [tokenEndpointURL](tokenendpointurl.md): The token endpoint URL for login requests.

# issuer (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The issuer of the identity token that the identity provider returns.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * issuer;
```

## Mentioned In

- [Processing the JSON Web Encryption (JWE) login response](../processing-the-json-web-encryption-jwe-login-response.md)

## See Also

### Obtaining the required configuration

- [audience](audience.md): The audience for validation and requests.
- [clientID](clientid.md): The identifier for the client at the identity provider.
- [jwksEndpointURL](jwksendpointurl.md): The JSON Web Key Set endpoint URL for keys.
- [tokenEndpointURL](tokenendpointurl.md): The token endpoint URL for login requests.
