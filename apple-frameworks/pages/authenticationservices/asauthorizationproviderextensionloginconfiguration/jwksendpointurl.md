> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/jwksendpointurl](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/jwksendpointurl)

# jwksEndpointURL (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The JSON Web Key Set endpoint URL for keys.

## Declaration

```swift
var jwksEndpointURL: URL { get set }
```

## Mentioned In

- [Processing the JSON Web Encryption (JWE) login response](../processing-the-json-web-encryption-jwe-login-response.md)

## See Also

### Obtaining the required configuration

- [audience](audience.md): The audience for validation and requests.
- [clientID](clientid.md): The identifier for the client at the identity provider.
- [tokenEndpointURL](tokenendpointurl.md): The token endpoint URL for login requests.
- [issuer](issuer.md): The issuer of the identity token that the identity provider returns.

# jwksEndpointURL (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The JSON Web Key Set endpoint URL for keys.

## Declaration

```objectivec
@property (nonatomic, copy) NSURL * jwksEndpointURL;
```

## Mentioned In

- [Processing the JSON Web Encryption (JWE) login response](../processing-the-json-web-encryption-jwe-login-response.md)

## See Also

### Obtaining the required configuration

- [audience](audience.md): The audience for validation and requests.
- [clientID](clientid.md): The identifier for the client at the identity provider.
- [tokenEndpointURL](tokenendpointurl.md): The token endpoint URL for login requests.
- [issuer](issuer.md): The issuer of the identity token that the identity provider returns.
