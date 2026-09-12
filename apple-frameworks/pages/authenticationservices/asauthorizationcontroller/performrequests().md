> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationcontroller/performrequests()](https://developer.apple.com/documentation/authenticationservices/asauthorizationcontroller/performrequests())

# performRequests() (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Starts the specified authorization flows during controller initialization.

## Declaration

```swift
func performRequests()
```

## Mentioned In

- [Authenticating people by using passkeys in browser apps](../authenticating-people-by-using-passkeys-in-browser-apps.md)
- [Supporting passkeys](../supporting-passkeys.md)

<a id="Discussion"></a>

## Discussion

When authorization succeeds, the system relays that information to the controller’s [delegate](delegate.md) by calling the [authorizationController(controller:didCompleteWithAuthorization:)](../asauthorizationcontrollerdelegate/authorizationcontroller%28controller_didcompletewithauthorization_%29.md) method with an authorization instance. If authorization fails, the system calls the [authorizationController(controller:didCompleteWithError:)](../asauthorizationcontrollerdelegate/authorizationcontroller%28controller_didcompletewitherror_%29.md) method instead.

Some authorization flows require a presentation context to ask the user for information or consent. Adopt the `ASAuthorizationControllerPresenting` protocol in one of your app’s classes, and set an instance of that class as the authorization controller’s `presentationController`.

## See Also

### Executing requests

- [performRequests(options:)](performrequests%28options_%29.md): Starts the specified authorization flows during controller initialization.
- [performAutoFillAssistedRequests()](performautofillassistedrequests%28%29.md): Initiates the authorization flows for requests that support AutoFill presentation.
- [cancel()](cancel%28%29.md): Cancels any active authorization requests.
- [ASAuthorizationController.RequestOptions](requestoptions.md): Options that modify how a controller performs authorization requests.

# performRequests (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Starts the specified authorization flows during controller initialization.

## Declaration

```objectivec
- (void) performRequests;
```

## Mentioned In

- [Authenticating people by using passkeys in browser apps](../authenticating-people-by-using-passkeys-in-browser-apps.md)
- [Supporting passkeys](../supporting-passkeys.md)

<a id="Discussion"></a>

## Discussion

When authorization succeeds, the system relays that information to the controller’s [delegate](delegate.md) by calling the [authorizationController:didCompleteWithAuthorization:](../asauthorizationcontrollerdelegate/authorizationcontroller%28controller_didcompletewithauthorization_%29.md) method with an authorization instance. If authorization fails, the system calls the [authorizationController:didCompleteWithError:](../asauthorizationcontrollerdelegate/authorizationcontroller%28controller_didcompletewitherror_%29.md) method instead.

Some authorization flows require a presentation context to ask the user for information or consent. Adopt the `ASAuthorizationControllerPresenting` protocol in one of your app’s classes, and set an instance of that class as the authorization controller’s `presentationController`.

## See Also

### Executing requests

- [performRequestsWithOptions:](performrequests%28options_%29.md): Starts the specified authorization flows during controller initialization.
- [performAutoFillAssistedRequests](performautofillassistedrequests%28%29.md): Initiates the authorization flows for requests that support AutoFill presentation.
- [cancel](cancel%28%29.md): Cancels any active authorization requests.
- [ASAuthorizationControllerRequestOptions](requestoptions.md): Options that modify how a controller performs authorization requests.
