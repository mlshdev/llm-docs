> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationcontroller/performrequests(options:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationcontroller/performrequests(options:))

# performRequests(options:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Starts the specified authorization flows during controller initialization.

## Declaration

```swift
func performRequests(options: ASAuthorizationController.RequestOptions = [])
```

## See Also

### Executing requests

- [performRequests()](performrequests%28%29.md): Starts the specified authorization flows during controller initialization.
- [performAutoFillAssistedRequests()](performautofillassistedrequests%28%29.md): Initiates the authorization flows for requests that support AutoFill presentation.
- [cancel()](cancel%28%29.md): Cancels any active authorization requests.
- [ASAuthorizationController.RequestOptions](requestoptions.md): Options that modify how a controller performs authorization requests.

# performRequestsWithOptions: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Starts the specified authorization flows during controller initialization.

## Declaration

```objectivec
- (void) performRequestsWithOptions:(ASAuthorizationControllerRequestOptions) options;
```

## See Also

### Executing requests

- [performRequests](performrequests%28%29.md): Starts the specified authorization flows during controller initialization.
- [performAutoFillAssistedRequests](performautofillassistedrequests%28%29.md): Initiates the authorization flows for requests that support AutoFill presentation.
- [cancel](cancel%28%29.md): Cancels any active authorization requests.
- [ASAuthorizationControllerRequestOptions](requestoptions.md): Options that modify how a controller performs authorization requests.
