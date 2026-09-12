> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationcontroller/cancel()](https://developer.apple.com/documentation/authenticationservices/asauthorizationcontroller/cancel())

# cancel() (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 18.0+ · visionOS 1.0+

Cancels any active authorization requests.

## Declaration

```swift
func cancel()
```

<a id="Discussion"></a>

## Discussion

If calling this method cancels an active authorization request, the authorization controller calls its delegate’s [authorizationController(controller:didCompleteWithError:)](../asauthorizationcontrollerdelegate/authorizationcontroller%28controller_didcompletewitherror_%29.md) method.

## See Also

### Executing requests

- [performRequests()](performrequests%28%29.md): Starts the specified authorization flows during controller initialization.
- [performRequests(options:)](performrequests%28options_%29.md): Starts the specified authorization flows during controller initialization.
- [performAutoFillAssistedRequests()](performautofillassistedrequests%28%29.md): Initiates the authorization flows for requests that support AutoFill presentation.
- [ASAuthorizationController.RequestOptions](requestoptions.md): Options that modify how a controller performs authorization requests.

# cancel (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 18.0+ · visionOS 1.0+

Cancels any active authorization requests.

## Declaration

```objectivec
- (void) cancel;
```

<a id="Discussion"></a>

## Discussion

If calling this method cancels an active authorization request, the authorization controller calls its delegate’s [authorizationController:didCompleteWithError:](../asauthorizationcontrollerdelegate/authorizationcontroller%28controller_didcompletewitherror_%29.md) method.

## See Also

### Executing requests

- [performRequests](performrequests%28%29.md): Starts the specified authorization flows during controller initialization.
- [performRequestsWithOptions:](performrequests%28options_%29.md): Starts the specified authorization flows during controller initialization.
- [performAutoFillAssistedRequests](performautofillassistedrequests%28%29.md): Initiates the authorization flows for requests that support AutoFill presentation.
- [ASAuthorizationControllerRequestOptions](requestoptions.md): Options that modify how a controller performs authorization requests.
