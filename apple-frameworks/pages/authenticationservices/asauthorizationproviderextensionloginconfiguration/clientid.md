> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/clientid](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/clientid)

# clientID (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The identifier for the client at the identity provider.

## Declaration

```swift
var clientID: String { get }
```

## Mentioned In

- [Processing the JSON Web Encryption (JWE) login response](../processing-the-json-web-encryption-jwe-login-response.md)
- [Creating a refresh request](../creating-a-refresh-request.md)
- [Creating and validating a login request](../creating-and-validating-a-login-request.md)
- [Supporting key requests and key exchange requests](../supporting-key-requests-and-key-exchange-requests.md)

## See Also

### Obtaining the required configuration

- [audience](audience.md): The audience for validation and requests.
- [jwksEndpointURL](jwksendpointurl.md): The JSON Web Key Set endpoint URL for keys.
- [tokenEndpointURL](tokenendpointurl.md): The token endpoint URL for login requests.
- [issuer](issuer.md): The issuer of the identity token that the identity provider returns.

# clientID (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The identifier for the client at the identity provider.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * clientID;
```

## Mentioned In

- [Processing the JSON Web Encryption (JWE) login response](../processing-the-json-web-encryption-jwe-login-response.md)
- [Creating a refresh request](../creating-a-refresh-request.md)
- [Creating and validating a login request](../creating-and-validating-a-login-request.md)
- [Supporting key requests and key exchange requests](../supporting-key-requests-and-key-exchange-requests.md)

## See Also

### Obtaining the required configuration

- [audience](audience.md): The audience for validation and requests.
- [jwksEndpointURL](jwksendpointurl.md): The JSON Web Key Set endpoint URL for keys.
- [tokenEndpointURL](tokenendpointurl.md): The token endpoint URL for login requests.
- [issuer](issuer.md): The issuer of the identity token that the identity provider returns.
