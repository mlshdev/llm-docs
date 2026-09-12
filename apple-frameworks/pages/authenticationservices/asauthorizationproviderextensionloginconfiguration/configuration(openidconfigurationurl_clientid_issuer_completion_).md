> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/configuration(openidconfigurationurl:clientid:issuer:completion:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/configuration(openidconfigurationurl:clientid:issuer:completion:))

# configuration(openIDConfigurationURL:clientID:issuer:completion:) (Swift)

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** macOS 13.0+

Creates a login configuration using the OpenID configuration.

## Declaration

```swift
class func configuration(openIDConfigurationURL: URL, clientID: String, issuer: String?, completion: @escaping @Sendable (ASAuthorizationProviderExtensionLoginConfiguration?, (any Error)?) -> Void)
```

```swift
class func configuration(openIDConfigurationURL: URL, clientID: String, issuer: String?) async throws -> ASAuthorizationProviderExtensionLoginConfiguration
```

## Parameters

- `openIDConfigurationURL`: The base URL to retrieve the `/.well-known/openid-configuration` file.
- `clientID`: The `client_id` for the Apple platform SSO login at the identity provider.
- `issuer`: The `issuer` for the requests that validate responses.
- `completion`: The completion block the system calls upon completion or error.

## See Also

### Creating the configuration

- [init(clientID:issuer:tokenEndpointURL:jwksEndpointURL:audience:)](init%28clientid_issuer_tokenendpointurl_jwksendpointurl_audience_%29.md): Creates a configuration with the required values.

# configurationWithOpenIDConfigurationURL:clientID:issuer:completion: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** macOS 13.0+

Creates a login configuration using the OpenID configuration.

## Declaration

```objectivec
+ (void) configurationWithOpenIDConfigurationURL:(NSURL *) openIDConfigurationURL clientID:(NSString *) clientID issuer:(NSString *) issuer completion:(void (^)(ASAuthorizationProviderExtensionLoginConfiguration *loginConfiguration, NSError *error)) completion;
```

## Parameters

- `openIDConfigurationURL`: The base URL to retrieve the `/.well-known/openid-configuration` file.
- `clientID`: The `client_id` for the Apple platform SSO login at the identity provider.
- `issuer`: The `issuer` for the requests that validate responses.
- `completion`: The completion block the system calls upon completion or error.

## See Also

### Creating the configuration

- [initWithClientID:issuer:tokenEndpointURL:jwksEndpointURL:audience:](init%28clientid_issuer_tokenendpointurl_jwksendpointurl_audience_%29.md): Creates a configuration with the required values.
