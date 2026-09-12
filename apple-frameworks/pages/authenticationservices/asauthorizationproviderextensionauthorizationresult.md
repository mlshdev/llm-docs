> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionauthorizationresult](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionauthorizationresult)

# ASAuthorizationProviderExtensionAuthorizationResult (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The result of an authorization request.

## Declaration

```swift
class ASAuthorizationProviderExtensionAuthorizationResult
```

## Topics

### Initializers

- [init(httpAuthorizationHeaders:)](asauthorizationproviderextensionauthorizationresult/init%28httpauthorizationheaders_%29-ywja.md): Initializes an authorization with tokens stored in HTTP headers.
- [init(httpResponse:httpBody:)](asauthorizationproviderextensionauthorizationresult/init%28httpresponse_httpbody_%29-2j92m.md): Initializes an authorization with a HTTP response and body.
- [init(HTTPAuthorizationHeaders:)](asauthorizationproviderextensionauthorizationresult/init%28httpauthorizationheaders_%29-932pm.md)
- [init(HTTPResponse:httpBody:)](asauthorizationproviderextensionauthorizationresult/init%28httpresponse_httpbody_%29-48yla.md)

### Instance Properties

- [httpAuthorizationHeaders](asauthorizationproviderextensionauthorizationresult/httpauthorizationheaders.md): A dictionary of authorization HTTP headers.
- [httpResponse](asauthorizationproviderextensionauthorizationresult/httpresponse.md): The HTTP response for authentications.
- [httpBody](asauthorizationproviderextensionauthorizationresult/httpbody.md): The HTTP response body.

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

### Performing enterprise single sign-on

- [ASAuthorizationSingleSignOnProvider](asauthorizationsinglesignonprovider.md): A mechanism for generating requests to authenticate users with third-party providers.
- [ASAuthorizationSingleSignOnCredential](asauthorizationsinglesignoncredential.md): A credential that results from a successful single sign-on (SSO) authentication.
- [ASAuthorizationProviderExtensionAuthorizationRequestHandler](asauthorizationproviderextensionauthorizationrequesthandler.md): An interface through which a single sign-on (SSO) authentication provider extension handles authentication requests.
- [ASAuthorizationController.RequestOptions](asauthorizationcontroller/requestoptions.md): Options that modify how a controller performs authorization requests.

# ASAuthorizationProviderExtensionAuthorizationResult (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The result of an authorization request.

## Declaration

```objectivec
@interface ASAuthorizationProviderExtensionAuthorizationResult : NSObject
```

## Topics

### Initializers

- [initWithHTTPAuthorizationHeaders:](asauthorizationproviderextensionauthorizationresult/init%28httpauthorizationheaders_%29-ywja.md): Initializes an authorization with tokens stored in HTTP headers.
- [initWithHTTPResponse:httpBody:](asauthorizationproviderextensionauthorizationresult/init%28httpresponse_httpbody_%29-2j92m.md): Initializes an authorization with a HTTP response and body.

### Instance Properties

- [httpAuthorizationHeaders](asauthorizationproviderextensionauthorizationresult/httpauthorizationheaders.md): A dictionary of authorization HTTP headers.
- [httpResponse](asauthorizationproviderextensionauthorizationresult/httpresponse.md): The HTTP response for authentications.
- [httpBody](asauthorizationproviderextensionauthorizationresult/httpbody.md): The HTTP response body.
- [privateKeys](asauthorizationproviderextensionauthorizationresult/privatekeys.md): An array of private security keys.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Performing enterprise single sign-on

- [ASAuthorizationSingleSignOnProvider](asauthorizationsinglesignonprovider.md): A mechanism for generating requests to authenticate users with third-party providers.
- [ASAuthorizationSingleSignOnCredential](asauthorizationsinglesignoncredential.md): A credential that results from a successful single sign-on (SSO) authentication.
- [ASAuthorizationProviderExtensionAuthorizationRequestHandler](asauthorizationproviderextensionauthorizationrequesthandler.md): An interface through which a single sign-on (SSO) authentication provider extension handles authentication requests.
- [ASAuthorizationControllerRequestOptions](asauthorizationcontroller/requestoptions.md): Options that modify how a controller performs authorization requests.
