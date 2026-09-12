> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration)

# ASAuthorizationProviderExtensionLoginConfiguration (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** macOS 13.0+

An interface for configuring platform single sign-on.

## Declaration

```swift
class ASAuthorizationProviderExtensionLoginConfiguration
```

## Mentioned In

- [Creating extensions that support Platform SSO](creating-extensions-that-support-platform-sso.md)

<a id="overview"></a>

## Overview

This class provides login configuration information for platform single sign-on.

## Topics

### Creating the configuration

- [init(clientID:issuer:tokenEndpointURL:jwksEndpointURL:audience:)](asauthorizationproviderextensionloginconfiguration/init%28clientid_issuer_tokenendpointurl_jwksendpointurl_audience_%29.md): Creates a configuration with the required values.
- [configuration(openIDConfigurationURL:clientID:issuer:completion:)](asauthorizationproviderextensionloginconfiguration/configuration%28openidconfigurationurl_clientid_issuer_completion_%29.md): Creates a login configuration using the OpenID configuration.

### Obtaining the required configuration

- [audience](asauthorizationproviderextensionloginconfiguration/audience.md): The audience for validation and requests.
- [clientID](asauthorizationproviderextensionloginconfiguration/clientid.md): The identifier for the client at the identity provider.
- [jwksEndpointURL](asauthorizationproviderextensionloginconfiguration/jwksendpointurl.md): The JSON Web Key Set endpoint URL for keys.
- [tokenEndpointURL](asauthorizationproviderextensionloginconfiguration/tokenendpointurl.md): The token endpoint URL for login requests.
- [issuer](asauthorizationproviderextensionloginconfiguration/issuer.md): The issuer of the identity token that the identity provider returns.

### Obtaining the recommended configuration

- [accountDisplayName](asauthorizationproviderextensionloginconfiguration/accountdisplayname.md): The display name for the account.
- [invalidCredentialPredicate](asauthorizationproviderextensionloginconfiguration/invalidcredentialpredicate.md): The predicate string that identifies invalid credential errors.

### Configuring the server nonce

- [customNonceRequestValues](asauthorizationproviderextensionloginconfiguration/customnoncerequestvalues.md): Custom values to add to the server nonce POST request body.
- [nonceEndpointURL](asauthorizationproviderextensionloginconfiguration/nonceendpointurl.md): The URL to retrieve a one-time use value from the server.
- [nonceResponseKeypath](asauthorizationproviderextensionloginconfiguration/nonceresponsekeypath.md): The keypath in the response that contains the one-time use value.
- [serverNonceClaimName](asauthorizationproviderextensionloginconfiguration/servernonceclaimname.md): The name of the claim to include in authentication requests.

### Configuring the previous refresh token

- [includePreviousRefreshTokenInLoginRequest](asauthorizationproviderextensionloginconfiguration/includepreviousrefreshtokeninloginrequest.md): A Boolean value that indicates whether to include the previous refresh token in the authentation request.
- [previousRefreshTokenClaimName](asauthorizationproviderextensionloginconfiguration/previousrefreshtokenclaimname.md): The claim name for the previous single sign-on token value in the authentication request.

### Customizing the authentication request

- [setCustomAssertionRequestBodyClaims(\_:)](asauthorizationproviderextensionloginconfiguration/setcustomassertionrequestbodyclaims%28__%29.md): Adds the custom claims to the embedded assertion request body.
- [setCustomAssertionRequestHeaderClaims(\_:)](asauthorizationproviderextensionloginconfiguration/setcustomassertionrequestheaderclaims%28__%29.md): Adds the custom claims to the embedded assertion request header.
- [setCustomLoginRequestBodyClaims(\_:)](asauthorizationproviderextensionloginconfiguration/setcustomloginrequestbodyclaims%28__%29.md): Adds the custom claims to the login request body.
- [setCustomLoginRequestHeaderClaims(\_:)](asauthorizationproviderextensionloginconfiguration/setcustomloginrequestheaderclaims%28__%29.md): Adds the custom claims to the login request header.
- [additionalScopes](asauthorizationproviderextensionloginconfiguration/additionalscopes.md): A set of extra scopes to add to the base for the authentication request.
- [customLoginRequestValues](asauthorizationproviderextensionloginconfiguration/customloginrequestvalues.md): Provider-supplied values to add to the login POST request body.
- [kerberosTicketMappings](asauthorizationproviderextensionloginconfiguration/kerberosticketmappings.md): The set of ticket mappings the system uses to import Kerberos tickets from the single sign-on token.

### Instance Properties

- [additionalAuthorizationScopes](asauthorizationproviderextensionloginconfiguration/additionalauthorizationscopes.md)
- [customFederationUserPreauthenticationRequestValues](asauthorizationproviderextensionloginconfiguration/customfederationuserpreauthenticationrequestvalues.md)
- [customKeyExchangeRequestValues](asauthorizationproviderextensionloginconfiguration/customkeyexchangerequestvalues.md)
- [customKeyRequestValues](asauthorizationproviderextensionloginconfiguration/customkeyrequestvalues.md)
- [customRefreshRequestValues](asauthorizationproviderextensionloginconfiguration/customrefreshrequestvalues.md)
- [customRequestJWTParameterName](asauthorizationproviderextensionloginconfiguration/customrequestjwtparametername.md)
- [deviceContext](asauthorizationproviderextensionloginconfiguration/devicecontext.md)
- [federationMEXURL](asauthorizationproviderextensionloginconfiguration/federationmexurl.md)
- [federationMEXURLKeypath](asauthorizationproviderextensionloginconfiguration/federationmexurlkeypath.md)
- [federationPredicate](asauthorizationproviderextensionloginconfiguration/federationpredicate.md)
- [federationRequestURN](asauthorizationproviderextensionloginconfiguration/federationrequesturn.md)
- [federationType](asauthorizationproviderextensionloginconfiguration/federationtype-swift.property.md)
- [federationUserPreauthenticationURL](asauthorizationproviderextensionloginconfiguration/federationuserpreauthenticationurl.md)
- [groupRequestClaimName](asauthorizationproviderextensionloginconfiguration/grouprequestclaimname.md)
- [groupResponseClaimName](asauthorizationproviderextensionloginconfiguration/groupresponseclaimname.md)
- [jwksTrustedRootCertificates](asauthorizationproviderextensionloginconfiguration/jwkstrustedrootcertificates-5y2pc.md)
- [keyEndpointURL](asauthorizationproviderextensionloginconfiguration/keyendpointurl.md)
- [loginRequestEncryptionAPVPrefix](asauthorizationproviderextensionloginconfiguration/loginrequestencryptionapvprefix.md)
- [loginRequestEncryptionPublicKey](asauthorizationproviderextensionloginconfiguration/loginrequestencryptionpublickey.md)
- [refreshEndpointURL](asauthorizationproviderextensionloginconfiguration/refreshendpointurl.md)
- [uniqueIdentifierClaimName](asauthorizationproviderextensionloginconfiguration/uniqueidentifierclaimname.md)
- [userSecureEnclaveKeyBiometricPolicy](asauthorizationproviderextensionloginconfiguration/usersecureenclavekeybiometricpolicy-swift.property.md)
- [authorizationURL](asauthorizationproviderextensionloginconfiguration/authorizationurl.md)
- [authorizationURLKeypath](asauthorizationproviderextensionloginconfiguration/authorizationurlkeypath.md)
- [fallbackFederationType](asauthorizationproviderextensionloginconfiguration/fallbackfederationtype.md)
- [hpkeAuthPublicKey](asauthorizationproviderextensionloginconfiguration/hpkeauthpublickey.md)
- [hpkePreSharedKey](asauthorizationproviderextensionloginconfiguration/hpkepresharedkey.md)
- [hpkePreSharedKeyID](asauthorizationproviderextensionloginconfiguration/hpkepresharedkeyid.md)
- [includePlatformSSOAuthorizationScopes](asauthorizationproviderextensionloginconfiguration/includeplatformssoauthorizationscopes.md)
- [loginRequestEncryptionAlgorithm](asauthorizationproviderextensionloginconfiguration/loginrequestencryptionalgorithm.md)
- [loginRequestHPKEPreSharedKey](asauthorizationproviderextensionloginconfiguration/loginrequesthpkepresharedkey.md)
- [loginRequestHPKEPreSharedKeyID](asauthorizationproviderextensionloginconfiguration/loginrequesthpkepresharedkeyid.md)

### Instance Methods

- [setCustomKeyExchangeRequestBodyClaims(\_:)](asauthorizationproviderextensionloginconfiguration/setcustomkeyexchangerequestbodyclaims%28__%29.md)
- [setCustomKeyExchangeRequestHeaderClaims(\_:)](asauthorizationproviderextensionloginconfiguration/setcustomkeyexchangerequestheaderclaims%28__%29.md)
- [setCustomKeyRequestBodyClaims(\_:)](asauthorizationproviderextensionloginconfiguration/setcustomkeyrequestbodyclaims%28__%29.md)
- [setCustomKeyRequestHeaderClaims(\_:)](asauthorizationproviderextensionloginconfiguration/setcustomkeyrequestheaderclaims%28__%29.md)
- [setCustomRefreshRequestBodyClaims(\_:)](asauthorizationproviderextensionloginconfiguration/setcustomrefreshrequestbodyclaims%28__%29.md)
- [setCustomRefreshRequestHeaderClaims(\_:)](asauthorizationproviderextensionloginconfiguration/setcustomrefreshrequestheaderclaims%28__%29.md)

### Structures

- [ASAuthorizationProviderExtensionLoginConfiguration.UserSecureEnclaveKeyBiometricPolicy](asauthorizationproviderextensionloginconfiguration/usersecureenclavekeybiometricpolicy-swift.struct.md)

### Enumerations

- [ASAuthorizationProviderExtensionLoginConfiguration.FederationType](asauthorizationproviderextensionloginconfiguration/federationtype-swift.enum.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Configuration

- [Configuring authentication with the identity provider (IdP)](configuring-authentication-with-the-identity-provider-idp.md): Specify how Platform SSO authenticates with the identity provider.
- [ASAuthorizationProviderExtensionLoginManager](asauthorizationproviderextensionloginmanager.md): An interface to maintain platform single sign-on (SSO) during authentication and registration.

# ASAuthorizationProviderExtensionLoginConfiguration (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** macOS 13.0+

An interface for configuring platform single sign-on.

## Declaration

```objectivec
@interface ASAuthorizationProviderExtensionLoginConfiguration : NSObject
```

## Mentioned In

- [Creating extensions that support Platform SSO](creating-extensions-that-support-platform-sso.md)

<a id="overview"></a>

## Overview

This class provides login configuration information for platform single sign-on.

## Topics

### Creating the configuration

- [initWithClientID:issuer:tokenEndpointURL:jwksEndpointURL:audience:](asauthorizationproviderextensionloginconfiguration/init%28clientid_issuer_tokenendpointurl_jwksendpointurl_audience_%29.md): Creates a configuration with the required values.
- [configurationWithOpenIDConfigurationURL:clientID:issuer:completion:](asauthorizationproviderextensionloginconfiguration/configuration%28openidconfigurationurl_clientid_issuer_completion_%29.md): Creates a login configuration using the OpenID configuration.

### Obtaining the required configuration

- [audience](asauthorizationproviderextensionloginconfiguration/audience.md): The audience for validation and requests.
- [clientID](asauthorizationproviderextensionloginconfiguration/clientid.md): The identifier for the client at the identity provider.
- [jwksEndpointURL](asauthorizationproviderextensionloginconfiguration/jwksendpointurl.md): The JSON Web Key Set endpoint URL for keys.
- [tokenEndpointURL](asauthorizationproviderextensionloginconfiguration/tokenendpointurl.md): The token endpoint URL for login requests.
- [issuer](asauthorizationproviderextensionloginconfiguration/issuer.md): The issuer of the identity token that the identity provider returns.

### Obtaining the recommended configuration

- [accountDisplayName](asauthorizationproviderextensionloginconfiguration/accountdisplayname.md): The display name for the account.
- [invalidCredentialPredicate](asauthorizationproviderextensionloginconfiguration/invalidcredentialpredicate.md): The predicate string that identifies invalid credential errors.

### Configuring the server nonce

- [customNonceRequestValues](asauthorizationproviderextensionloginconfiguration/customnoncerequestvalues.md): Custom values to add to the server nonce POST request body.
- [nonceEndpointURL](asauthorizationproviderextensionloginconfiguration/nonceendpointurl.md): The URL to retrieve a one-time use value from the server.
- [nonceResponseKeypath](asauthorizationproviderextensionloginconfiguration/nonceresponsekeypath.md): The keypath in the response that contains the one-time use value.
- [serverNonceClaimName](asauthorizationproviderextensionloginconfiguration/servernonceclaimname.md): The name of the claim to include in authentication requests.

### Configuring the previous refresh token

- [includePreviousRefreshTokenInLoginRequest](asauthorizationproviderextensionloginconfiguration/includepreviousrefreshtokeninloginrequest.md): A Boolean value that indicates whether to include the previous refresh token in the authentation request.
- [previousRefreshTokenClaimName](asauthorizationproviderextensionloginconfiguration/previousrefreshtokenclaimname.md): The claim name for the previous single sign-on token value in the authentication request.

### Customizing the authentication request

- [setCustomAssertionRequestBodyClaims:returningError:](asauthorizationproviderextensionloginconfiguration/setcustomassertionrequestbodyclaims%28__%29.md): Adds the custom claims to the embedded assertion request body.
- [setCustomAssertionRequestHeaderClaims:returningError:](asauthorizationproviderextensionloginconfiguration/setcustomassertionrequestheaderclaims%28__%29.md): Adds the custom claims to the embedded assertion request header.
- [setCustomLoginRequestBodyClaims:returningError:](asauthorizationproviderextensionloginconfiguration/setcustomloginrequestbodyclaims%28__%29.md): Adds the custom claims to the login request body.
- [setCustomLoginRequestHeaderClaims:returningError:](asauthorizationproviderextensionloginconfiguration/setcustomloginrequestheaderclaims%28__%29.md): Adds the custom claims to the login request header.
- [additionalScopes](asauthorizationproviderextensionloginconfiguration/additionalscopes.md): A set of extra scopes to add to the base for the authentication request.
- [customLoginRequestValues](asauthorizationproviderextensionloginconfiguration/customloginrequestvalues.md): Provider-supplied values to add to the login POST request body.
- [kerberosTicketMappings](asauthorizationproviderextensionloginconfiguration/kerberosticketmappings.md): The set of ticket mappings the system uses to import Kerberos tickets from the single sign-on token.

### Instance Properties

- [additionalAuthorizationScopes](asauthorizationproviderextensionloginconfiguration/additionalauthorizationscopes.md)
- [customFederationUserPreauthenticationRequestValues](asauthorizationproviderextensionloginconfiguration/customfederationuserpreauthenticationrequestvalues.md)
- [customKeyExchangeRequestValues](asauthorizationproviderextensionloginconfiguration/customkeyexchangerequestvalues.md)
- [customKeyRequestValues](asauthorizationproviderextensionloginconfiguration/customkeyrequestvalues.md)
- [customRefreshRequestValues](asauthorizationproviderextensionloginconfiguration/customrefreshrequestvalues.md)
- [customRequestJWTParameterName](asauthorizationproviderextensionloginconfiguration/customrequestjwtparametername.md)
- [deviceContext](asauthorizationproviderextensionloginconfiguration/devicecontext.md)
- [federationMEXURL](asauthorizationproviderextensionloginconfiguration/federationmexurl.md)
- [federationMEXURLKeypath](asauthorizationproviderextensionloginconfiguration/federationmexurlkeypath.md)
- [federationPredicate](asauthorizationproviderextensionloginconfiguration/federationpredicate.md)
- [federationRequestURN](asauthorizationproviderextensionloginconfiguration/federationrequesturn.md)
- [federationType](asauthorizationproviderextensionloginconfiguration/federationtype-swift.property.md)
- [federationUserPreauthenticationURL](asauthorizationproviderextensionloginconfiguration/federationuserpreauthenticationurl.md)
- [groupRequestClaimName](asauthorizationproviderextensionloginconfiguration/grouprequestclaimname.md)
- [groupResponseClaimName](asauthorizationproviderextensionloginconfiguration/groupresponseclaimname.md)
- [keyEndpointURL](asauthorizationproviderextensionloginconfiguration/keyendpointurl.md)
- [loginRequestEncryptionAPVPrefix](asauthorizationproviderextensionloginconfiguration/loginrequestencryptionapvprefix.md)
- [loginRequestEncryptionPublicKey](asauthorizationproviderextensionloginconfiguration/loginrequestencryptionpublickey.md)
- [refreshEndpointURL](asauthorizationproviderextensionloginconfiguration/refreshendpointurl.md)
- [uniqueIdentifierClaimName](asauthorizationproviderextensionloginconfiguration/uniqueidentifierclaimname.md)
- [userSecureEnclaveKeyBiometricPolicy](asauthorizationproviderextensionloginconfiguration/usersecureenclavekeybiometricpolicy-swift.property.md)
- [jwksTrustedRootCertificates](asauthorizationproviderextensionloginconfiguration/jwkstrustedrootcertificates-605jm.md)
- [authorizationURL](asauthorizationproviderextensionloginconfiguration/authorizationurl.md)
- [authorizationURLKeypath](asauthorizationproviderextensionloginconfiguration/authorizationurlkeypath.md)
- [fallbackFederationType](asauthorizationproviderextensionloginconfiguration/fallbackfederationtype.md)
- [hpkeAuthPublicKey](asauthorizationproviderextensionloginconfiguration/hpkeauthpublickey.md)
- [hpkePreSharedKey](asauthorizationproviderextensionloginconfiguration/hpkepresharedkey.md)
- [hpkePreSharedKeyID](asauthorizationproviderextensionloginconfiguration/hpkepresharedkeyid.md)
- [includePlatformSSOAuthorizationScopes](asauthorizationproviderextensionloginconfiguration/includeplatformssoauthorizationscopes.md)
- [loginRequestEncryptionAlgorithm](asauthorizationproviderextensionloginconfiguration/loginrequestencryptionalgorithm.md)
- [loginRequestHPKEPreSharedKey](asauthorizationproviderextensionloginconfiguration/loginrequesthpkepresharedkey.md)
- [loginRequestHPKEPreSharedKeyID](asauthorizationproviderextensionloginconfiguration/loginrequesthpkepresharedkeyid.md)

### Instance Methods

- [setCustomKeyExchangeRequestBodyClaims:returningError:](asauthorizationproviderextensionloginconfiguration/setcustomkeyexchangerequestbodyclaims%28__%29.md)
- [setCustomKeyExchangeRequestHeaderClaims:returningError:](asauthorizationproviderextensionloginconfiguration/setcustomkeyexchangerequestheaderclaims%28__%29.md)
- [setCustomKeyRequestBodyClaims:returningError:](asauthorizationproviderextensionloginconfiguration/setcustomkeyrequestbodyclaims%28__%29.md)
- [setCustomKeyRequestHeaderClaims:returningError:](asauthorizationproviderextensionloginconfiguration/setcustomkeyrequestheaderclaims%28__%29.md)
- [setCustomRefreshRequestBodyClaims:returningError:](asauthorizationproviderextensionloginconfiguration/setcustomrefreshrequestbodyclaims%28__%29.md)
- [setCustomRefreshRequestHeaderClaims:returningError:](asauthorizationproviderextensionloginconfiguration/setcustomrefreshrequestheaderclaims%28__%29.md)

### Structures

- [ASAuthorizationProviderExtensionUserSecureEnclaveKeyBiometricPolicy](asauthorizationproviderextensionloginconfiguration/usersecureenclavekeybiometricpolicy-swift.struct.md)

### Enumerations

- [ASAuthorizationProviderExtensionFederationType](asauthorizationproviderextensionloginconfiguration/federationtype-swift.enum.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Configuration

- [Configuring authentication with the identity provider (IdP)](configuring-authentication-with-the-identity-provider-idp.md): Specify how Platform SSO authenticates with the identity provider.
- [ASAuthorizationProviderExtensionLoginManager](asauthorizationproviderextensionloginmanager.md): An interface to maintain platform single sign-on (SSO) during authentication and registration.
