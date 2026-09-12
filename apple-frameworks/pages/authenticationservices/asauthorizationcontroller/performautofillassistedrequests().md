> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationcontroller/performautofillassistedrequests()](https://developer.apple.com/documentation/authenticationservices/asauthorizationcontroller/performautofillassistedrequests())

# performAutoFillAssistedRequests() (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Initiates the authorization flows for requests that support AutoFill presentation.

## Declaration

```swift
func performAutoFillAssistedRequests()
```

## Mentioned In

- [Authenticating people by using passkeys in browser apps](../authenticating-people-by-using-passkeys-in-browser-apps.md)
- [Supporting passkeys](../supporting-passkeys.md)

<a id="Discussion"></a>

## Discussion

The authorization controller presents a user interface when a text field with the appropriate text content type obtains focus.

Upon completion, the authorization controller calls its delegate to report success or failure.

## See Also

### Executing requests

- [performRequests()](performrequests%28%29.md): Starts the specified authorization flows during controller initialization.
- [performRequests(options:)](performrequests%28options_%29.md): Starts the specified authorization flows during controller initialization.
- [cancel()](cancel%28%29.md): Cancels any active authorization requests.
- [ASAuthorizationController.RequestOptions](requestoptions.md): Options that modify how a controller performs authorization requests.

# performAutoFillAssistedRequests (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

Initiates the authorization flows for requests that support AutoFill presentation.

## Declaration

```objectivec
- (void) performAutoFillAssistedRequests;
```

## Mentioned In

- [Authenticating people by using passkeys in browser apps](../authenticating-people-by-using-passkeys-in-browser-apps.md)
- [Supporting passkeys](../supporting-passkeys.md)

<a id="Discussion"></a>

## Discussion

The authorization controller presents a user interface when a text field with the appropriate text content type obtains focus.

Upon completion, the authorization controller calls its delegate to report success or failure.

## See Also

### Executing requests

- [performRequests](performrequests%28%29.md): Starts the specified authorization flows during controller initialization.
- [performRequestsWithOptions:](performrequests%28options_%29.md): Starts the specified authorization flows during controller initialization.
- [cancel](cancel%28%29.md): Cancels any active authorization requests.
- [ASAuthorizationControllerRequestOptions](requestoptions.md): Options that modify how a controller performs authorization requests.
