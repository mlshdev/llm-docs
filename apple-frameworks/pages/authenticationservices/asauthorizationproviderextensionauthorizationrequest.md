> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequest](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequest)

# ASAuthorizationProviderExtensionAuthorizationRequest (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

An authorization request that your provider extension handles.

## Declaration

```swift
class ASAuthorizationProviderExtensionAuthorizationRequest
```

## Topics

### Parsing the Request

- [url](asauthorizationproviderextensionauthorizationrequest/url.md): The complete URL of the request, including all components.
- [httpHeaders](asauthorizationproviderextensionauthorizationrequest/httpheaders.md): The HTTP headers of the request.
- [httpBody](asauthorizationproviderextensionauthorizationrequest/httpbody.md): The HTTP body of the request.
- [realm](asauthorizationproviderextensionauthorizationrequest/realm.md): The realm to which the request applies.
- [requestedOperation](asauthorizationproviderextensionauthorizationrequest/requestedoperation.md): The operation for the extension to execute.
- [ASAuthorizationProviderAuthorizationOperation](asauthorizationproviderauthorizationoperation.md): A type that represents an authorization operation.
- [authorizationOptions](asauthorizationproviderextensionauthorizationrequest/authorizationoptions.md): A collection of options associated with the request.

### Getting Context

- [callerBundleIdentifier](asauthorizationproviderextensionauthorizationrequest/callerbundleidentifier.md): The bundle ID of the app making the request.
- [callerTeamIdentifier](asauthorizationproviderextensionauthorizationrequest/callerteamidentifier.md): The team identifier of the app making the request.
- [localizedCallerDisplayName](asauthorizationproviderextensionauthorizationrequest/localizedcallerdisplayname.md): The localized display name of the app making the request.
- [isCallerManaged](asauthorizationproviderextensionauthorizationrequest/iscallermanaged.md): A Boolean value that indicates whether the app making the request is managed.
- [extensionData](asauthorizationproviderextensionauthorizationrequest/extensiondata.md): Extension data from the Mobile Device Management (MDM) configuration.

### Interacting with the User

- [presentAuthorizationViewController(completion:)](asauthorizationproviderextensionauthorizationrequest/presentauthorizationviewcontroller%28completion_%29.md): Asks the authorization service to show the extension’s view controller to the user.
- [isUserInterfaceEnabled](asauthorizationproviderextensionauthorizationrequest/isuserinterfaceenabled.md): Determines if user interface is available for the current request.

### Completing a Request

- [complete(authorizationResult:)](asauthorizationproviderextensionauthorizationrequest/complete%28authorizationresult_%29.md)
- [complete()](asauthorizationproviderextensionauthorizationrequest/complete%28%29.md): Indicates the requested authorization completed with no output.
- [complete(httpAuthorizationHeaders:)](asauthorizationproviderextensionauthorizationrequest/complete%28httpauthorizationheaders_%29.md): Indicates the requested authorization succeeded with tokens in the HTTP headers.
- [complete(httpResponse:httpBody:)](asauthorizationproviderextensionauthorizationrequest/complete%28httpresponse_httpbody_%29.md): Indicates the requested authorization succeeded with an HTTP response.
- [complete(error:)](asauthorizationproviderextensionauthorizationrequest/complete%28error_%29.md): Indicates the requested authorization failed.

### Canceling a Request

- [doNotHandle()](asauthorizationproviderextensionauthorizationrequest/donothandle%28%29.md): Indicates the request wasn’t handled.
- [cancel()](asauthorizationproviderextensionauthorizationrequest/cancel%28%29.md): Cancels the request, for example, because the user taps a cancel button.

### Supporting Platform Single Sign-On

- [loginManager](asauthorizationproviderextensionauthorizationrequest/loginmanager.md): The manager that interacts with Platform SSO.

### Instance Properties

- [callerAuditToken](asauthorizationproviderextensionauthorizationrequest/calleraudittoken.md)

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

### Starting or Canceling a Request

- [beginAuthorization(with:)](asauthorizationproviderextensionauthorizationrequesthandler/beginauthorization%28with_%29.md): Tells your request handler to authorize the given request.
- [cancelAuthorization(with:)](asauthorizationproviderextensionauthorizationrequesthandler/cancelauthorization%28with_%29.md): Tells your request handler to cancel the authorization of the given request.

# ASAuthorizationProviderExtensionAuthorizationRequest (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

An authorization request that your provider extension handles.

## Declaration

```objectivec
@interface ASAuthorizationProviderExtensionAuthorizationRequest : NSObject
```

## Topics

### Parsing the Request

- [url](asauthorizationproviderextensionauthorizationrequest/url.md): The complete URL of the request, including all components.
- [httpHeaders](asauthorizationproviderextensionauthorizationrequest/httpheaders.md): The HTTP headers of the request.
- [httpBody](asauthorizationproviderextensionauthorizationrequest/httpbody.md): The HTTP body of the request.
- [realm](asauthorizationproviderextensionauthorizationrequest/realm.md): The realm to which the request applies.
- [requestedOperation](asauthorizationproviderextensionauthorizationrequest/requestedoperation.md): The operation for the extension to execute.
- [ASAuthorizationProviderAuthorizationOperation](asauthorizationproviderauthorizationoperation.md): A type that represents an authorization operation.
- [authorizationOptions](asauthorizationproviderextensionauthorizationrequest/authorizationoptions.md): A collection of options associated with the request.

### Getting Context

- [callerBundleIdentifier](asauthorizationproviderextensionauthorizationrequest/callerbundleidentifier.md): The bundle ID of the app making the request.
- [callerTeamIdentifier](asauthorizationproviderextensionauthorizationrequest/callerteamidentifier.md): The team identifier of the app making the request.
- [localizedCallerDisplayName](asauthorizationproviderextensionauthorizationrequest/localizedcallerdisplayname.md): The localized display name of the app making the request.
- [callerManaged](asauthorizationproviderextensionauthorizationrequest/iscallermanaged.md): A Boolean value that indicates whether the app making the request is managed.
- [extensionData](asauthorizationproviderextensionauthorizationrequest/extensiondata.md): Extension data from the Mobile Device Management (MDM) configuration.

### Interacting with the User

- [presentAuthorizationViewControllerWithCompletion:](asauthorizationproviderextensionauthorizationrequest/presentauthorizationviewcontroller%28completion_%29.md): Asks the authorization service to show the extension’s view controller to the user.
- [userInterfaceEnabled](asauthorizationproviderextensionauthorizationrequest/isuserinterfaceenabled.md): Determines if user interface is available for the current request.

### Completing a Request

- [completeWithAuthorizationResult:](asauthorizationproviderextensionauthorizationrequest/complete%28authorizationresult_%29.md)
- [complete](asauthorizationproviderextensionauthorizationrequest/complete%28%29.md): Indicates the requested authorization completed with no output.
- [completeWithHTTPAuthorizationHeaders:](asauthorizationproviderextensionauthorizationrequest/complete%28httpauthorizationheaders_%29.md): Indicates the requested authorization succeeded with tokens in the HTTP headers.
- [completeWithHTTPResponse:httpBody:](asauthorizationproviderextensionauthorizationrequest/complete%28httpresponse_httpbody_%29.md): Indicates the requested authorization succeeded with an HTTP response.
- [completeWithError:](asauthorizationproviderextensionauthorizationrequest/complete%28error_%29.md): Indicates the requested authorization failed.

### Canceling a Request

- [doNotHandle](asauthorizationproviderextensionauthorizationrequest/donothandle%28%29.md): Indicates the request wasn’t handled.
- [cancel](asauthorizationproviderextensionauthorizationrequest/cancel%28%29.md): Cancels the request, for example, because the user taps a cancel button.

### Supporting Platform Single Sign-On

- [loginManager](asauthorizationproviderextensionauthorizationrequest/loginmanager.md): The manager that interacts with Platform SSO.

### Instance Properties

- [callerAuditToken](asauthorizationproviderextensionauthorizationrequest/calleraudittoken.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Starting or Canceling a Request

- [beginAuthorizationWithRequest:](asauthorizationproviderextensionauthorizationrequesthandler/beginauthorization%28with_%29.md): Tells your request handler to authorize the given request.
- [cancelAuthorizationWithRequest:](asauthorizationproviderextensionauthorizationrequesthandler/cancelauthorization%28with_%29.md): Tells your request handler to cancel the authorization of the given request.
