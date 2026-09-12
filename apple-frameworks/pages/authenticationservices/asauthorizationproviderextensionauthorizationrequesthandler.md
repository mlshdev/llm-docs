> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequesthandler](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequesthandler)

# ASAuthorizationProviderExtensionAuthorizationRequestHandler (Swift)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

An interface through which a single sign-on (SSO) authentication provider extension handles authentication requests.

## Declaration

```swift
@MainActor protocol ASAuthorizationProviderExtensionAuthorizationRequestHandler : NSObjectProtocol
```

## Topics

### Starting or Canceling a Request

- [beginAuthorization(with:)](asauthorizationproviderextensionauthorizationrequesthandler/beginauthorization%28with_%29.md): Tells your request handler to authorize the given request.
- [cancelAuthorization(with:)](asauthorizationproviderextensionauthorizationrequesthandler/cancelauthorization%28with_%29.md): Tells your request handler to cancel the authorization of the given request.
- [ASAuthorizationProviderExtensionAuthorizationRequest](asauthorizationproviderextensionauthorizationrequest.md): An authorization request that your provider extension handles.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Performing enterprise single sign-on

- [ASAuthorizationSingleSignOnProvider](asauthorizationsinglesignonprovider.md): A mechanism for generating requests to authenticate users with third-party providers.
- [ASAuthorizationSingleSignOnCredential](asauthorizationsinglesignoncredential.md): A credential that results from a successful single sign-on (SSO) authentication.
- [ASAuthorizationProviderExtensionAuthorizationResult](asauthorizationproviderextensionauthorizationresult.md): The result of an authorization request.
- [ASAuthorizationController.RequestOptions](asauthorizationcontroller/requestoptions.md): Options that modify how a controller performs authorization requests.

# ASAuthorizationProviderExtensionAuthorizationRequestHandler (Objective-C)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

An interface through which a single sign-on (SSO) authentication provider extension handles authentication requests.

## Declaration

```objectivec
@protocol ASAuthorizationProviderExtensionAuthorizationRequestHandler <NSObject>
```

## Topics

### Starting or Canceling a Request

- [beginAuthorizationWithRequest:](asauthorizationproviderextensionauthorizationrequesthandler/beginauthorization%28with_%29.md): Tells your request handler to authorize the given request.
- [cancelAuthorizationWithRequest:](asauthorizationproviderextensionauthorizationrequesthandler/cancelauthorization%28with_%29.md): Tells your request handler to cancel the authorization of the given request.
- [ASAuthorizationProviderExtensionAuthorizationRequest](asauthorizationproviderextensionauthorizationrequest.md): An authorization request that your provider extension handles.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Performing enterprise single sign-on

- [ASAuthorizationSingleSignOnProvider](asauthorizationsinglesignonprovider.md): A mechanism for generating requests to authenticate users with third-party providers.
- [ASAuthorizationSingleSignOnCredential](asauthorizationsinglesignoncredential.md): A credential that results from a successful single sign-on (SSO) authentication.
- [ASAuthorizationProviderExtensionAuthorizationResult](asauthorizationproviderextensionauthorizationresult.md): The result of an authorization request.
- [ASAuthorizationControllerRequestOptions](asauthorizationcontroller/requestoptions.md): Options that modify how a controller performs authorization requests.
