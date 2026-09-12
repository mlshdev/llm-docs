> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/init(clientid:issuer:tokenendpointurl:jwksendpointurl:audience:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/init(clientid:issuer:tokenendpointurl:jwksendpointurl:audience:))

# init(clientID:issuer:tokenEndpointURL:jwksEndpointURL:audience:) (Swift)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a configuration with the required values.

## Declaration

```swift
init(clientID: String, issuer: String, tokenEndpointURL: URL, jwksEndpointURL: URL, audience: String?)
```

## Parameters

- `clientID`: The OAuth `client_id` for the login.
- `issuer`: The OAuth `issuer` for validating the token.
- `tokenEndpointURL`: The token endpoint for login.
- `jwksEndpointURL`: The URL that retrieves the JSON Web Key Set (JWKS).
- `audience`: The OAuth `audence` for embedded assertions.

## See Also

### Creating the configuration

- [configuration(openIDConfigurationURL:clientID:issuer:completion:)](configuration%28openidconfigurationurl_clientid_issuer_completion_%29.md): Creates a login configuration using the OpenID configuration.

# initWithClientID:issuer:tokenEndpointURL:jwksEndpointURL:audience: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Creates a configuration with the required values.

## Declaration

```objectivec
- (instancetype) initWithClientID:(NSString *) clientID issuer:(NSString *) issuer tokenEndpointURL:(NSURL *) tokenEndpointURL jwksEndpointURL:(NSURL *) jwksEndpointURL audience:(NSString *) audience;
```

## Parameters

- `clientID`: The OAuth `client_id` for the login.
- `issuer`: The OAuth `issuer` for validating the token.
- `tokenEndpointURL`: The token endpoint for login.
- `jwksEndpointURL`: The URL that retrieves the JSON Web Key Set (JWKS).
- `audience`: The OAuth `audence` for embedded assertions.

## See Also

### Creating the configuration

- [configurationWithOpenIDConfigurationURL:clientID:issuer:completion:](configuration%28openidconfigurationurl_clientid_issuer_completion_%29.md): Creates a login configuration using the OpenID configuration.
