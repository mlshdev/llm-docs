> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationcontroller](https://developer.apple.com/documentation/authenticationservices/asauthorizationcontroller)

# ASAuthorizationController (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A controller that manages authorization requests that a provider creates.

## Declaration

```swift
class ASAuthorizationController
```

## Mentioned In

- [Authenticating people by using passkeys in browser apps](authenticating-people-by-using-passkeys-in-browser-apps.md)

<a id="overview"></a>

## Overview

Create authorization requests for the credential types your app supports, such as [ASAuthorizationAppleIDRequest](asauthorizationappleidrequest.md) for Sign in with Apple, or [ASAuthorizationPasswordRequest](asauthorizationpasswordrequest.md) for password credentials. Create an authorization controller using [init(authorizationRequests:)](asauthorizationcontroller/init%28authorizationrequests_%29.md), supplying the authorization requests you create. Set the authorization controller’s [delegate](asauthorizationcontroller/delegate.md) to receive responses when requests succeed or fail, and set its [presentationContextProvider](asauthorizationcontroller/presentationcontextprovider.md) so that the authorization controller can present UI.

Call [performAutoFillAssistedRequests()](asauthorizationcontroller/performautofillassistedrequests%28%29.md) to present inline UI to request credentials, or [performRequests()](asauthorizationcontroller/performrequests%28%29.md) or [performRequests(options:)](asauthorizationcontroller/performrequests%28options_%29.md) to request credentials using modal UI. [ASAuthorizationController](asauthorizationcontroller.md) calls your delegate’s methods when the request completes.

Set the content type of text fields in your app’s login UI so that [ASAuthorizationController](asauthorizationcontroller.md) can detect when to offer AutoFill suggestions. Use [username](../uikit/uitextcontenttype/username.md) as the content type for user name text fields, and [password](../uikit/uitextcontenttype/password.md) for password fields.

## Topics

### Creating a controller

- [init(authorizationRequests:)](asauthorizationcontroller/init%28authorizationrequests_%29.md): Creates a controller from a collection of authorization requests.

### Inspecting requests

- [ASAuthorizationRequest](asauthorizationrequest.md): A base class for different kinds of authorization requests.
- [authorizationRequests](asauthorizationcontroller/authorizationrequests.md): The authorization requests that the controller manages.
- [customAuthorizationMethods](asauthorizationcontroller/customauthorizationmethods.md): An array of custom authorization methods for the user to choose.

### Presenting requests

- [presentationContextProvider](asauthorizationcontroller/presentationcontextprovider.md): A delegate that provides a display context in which the system can present an authorization interface to the user.
- [ASAuthorizationControllerPresentationContextProviding](asauthorizationcontrollerpresentationcontextproviding.md): An interface the controller uses to ask a delegate for a presentation context.

### Executing requests

- [performRequests()](asauthorizationcontroller/performrequests%28%29.md): Starts the specified authorization flows during controller initialization.
- [performRequests(options:)](asauthorizationcontroller/performrequests%28options_%29.md): Starts the specified authorization flows during controller initialization.
- [performAutoFillAssistedRequests()](asauthorizationcontroller/performautofillassistedrequests%28%29.md): Initiates the authorization flows for requests that support AutoFill presentation.
- [cancel()](asauthorizationcontroller/cancel%28%29.md): Cancels any active authorization requests.
- [ASAuthorizationController.RequestOptions](asauthorizationcontroller/requestoptions.md): Options that modify how a controller performs authorization requests.

### Responding to request completion

- [delegate](asauthorizationcontroller/delegate.md): A delegate that the authorization controller informs about the success or failure of an authorization attempt.
- [authorizationController(\_:didCompleteWithCustomMethod:)](asauthorizationcontrollerdelegate/authorizationcontroller%28__didcompletewithcustommethod_%29.md): Informs the delegate when authorization completes, and specifies the custom method the user selected.
- [ASAuthorizationControllerDelegate](asauthorizationcontrollerdelegate.md): An interface for providing information about the outcome of an authorization request.

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

### Authorization requests

- [AuthorizationController](authorizationcontroller.md): A SwiftUI environment value that views use to perform authorization requests.
- [ASAuthorizationResult](asauthorizationresult.md): Describes the outcome of a successful authorization request.

# ASAuthorizationController (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A controller that manages authorization requests that a provider creates.

## Declaration

```objectivec
@interface ASAuthorizationController : NSObject
```

## Mentioned In

- [Authenticating people by using passkeys in browser apps](authenticating-people-by-using-passkeys-in-browser-apps.md)

<a id="overview"></a>

## Overview

Create authorization requests for the credential types your app supports, such as [ASAuthorizationAppleIDRequest](asauthorizationappleidrequest.md) for Sign in with Apple, or [ASAuthorizationPasswordRequest](asauthorizationpasswordrequest.md) for password credentials. Create an authorization controller using [initWithAuthorizationRequests:](asauthorizationcontroller/init%28authorizationrequests_%29.md), supplying the authorization requests you create. Set the authorization controller’s [delegate](asauthorizationcontroller/delegate.md) to receive responses when requests succeed or fail, and set its [presentationContextProvider](asauthorizationcontroller/presentationcontextprovider.md) so that the authorization controller can present UI.

Call [performAutoFillAssistedRequests](asauthorizationcontroller/performautofillassistedrequests%28%29.md) to present inline UI to request credentials, or [performRequests](asauthorizationcontroller/performrequests%28%29.md) or [performRequestsWithOptions:](asauthorizationcontroller/performrequests%28options_%29.md) to request credentials using modal UI. [ASAuthorizationController](asauthorizationcontroller.md) calls your delegate’s methods when the request completes.

Set the content type of text fields in your app’s login UI so that [ASAuthorizationController](asauthorizationcontroller.md) can detect when to offer AutoFill suggestions. Use [UITextContentTypeUsername](../uikit/uitextcontenttype/username.md) as the content type for user name text fields, and [UITextContentTypePassword](../uikit/uitextcontenttype/password.md) for password fields.

## Topics

### Creating a controller

- [initWithAuthorizationRequests:](asauthorizationcontroller/init%28authorizationrequests_%29.md): Creates a controller from a collection of authorization requests.

### Inspecting requests

- [ASAuthorizationRequest](asauthorizationrequest.md): A base class for different kinds of authorization requests.
- [authorizationRequests](asauthorizationcontroller/authorizationrequests.md): The authorization requests that the controller manages.
- [customAuthorizationMethods](asauthorizationcontroller/customauthorizationmethods.md): An array of custom authorization methods for the user to choose.

### Presenting requests

- [presentationContextProvider](asauthorizationcontroller/presentationcontextprovider.md): A delegate that provides a display context in which the system can present an authorization interface to the user.
- [ASAuthorizationControllerPresentationContextProviding](asauthorizationcontrollerpresentationcontextproviding.md): An interface the controller uses to ask a delegate for a presentation context.

### Executing requests

- [performRequests](asauthorizationcontroller/performrequests%28%29.md): Starts the specified authorization flows during controller initialization.
- [performRequestsWithOptions:](asauthorizationcontroller/performrequests%28options_%29.md): Starts the specified authorization flows during controller initialization.
- [performAutoFillAssistedRequests](asauthorizationcontroller/performautofillassistedrequests%28%29.md): Initiates the authorization flows for requests that support AutoFill presentation.
- [cancel](asauthorizationcontroller/cancel%28%29.md): Cancels any active authorization requests.
- [ASAuthorizationControllerRequestOptions](asauthorizationcontroller/requestoptions.md): Options that modify how a controller performs authorization requests.

### Responding to request completion

- [delegate](asauthorizationcontroller/delegate.md): A delegate that the authorization controller informs about the success or failure of an authorization attempt.
- [authorizationController:didCompleteWithCustomMethod:](asauthorizationcontrollerdelegate/authorizationcontroller%28__didcompletewithcustommethod_%29.md): Informs the delegate when authorization completes, and specifies the custom method the user selected.
- [ASAuthorizationControllerDelegate](asauthorizationcontrollerdelegate.md): An interface for providing information about the outcome of an authorization request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
