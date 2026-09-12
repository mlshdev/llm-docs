> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequest/complete(error:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequest/complete(error:))

# complete(error:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

Indicates the requested authorization failed.

## Declaration

```swift
func complete(error: any Error)
```

## Parameters

- `error`: An indication of why the authorization failed.

## See Also

### Completing a Request

- [complete(authorizationResult:)](complete%28authorizationresult_%29.md)
- [complete()](complete%28%29.md): Indicates the requested authorization completed with no output.
- [complete(httpAuthorizationHeaders:)](complete%28httpauthorizationheaders_%29.md): Indicates the requested authorization succeeded with tokens in the HTTP headers.
- [complete(httpResponse:httpBody:)](complete%28httpresponse_httpbody_%29.md): Indicates the requested authorization succeeded with an HTTP response.

# completeWithError: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

Indicates the requested authorization failed.

## Declaration

```objectivec
- (void) completeWithError:(NSError *) error;
```

## Parameters

- `error`: An indication of why the authorization failed.

## See Also

### Completing a Request

- [completeWithAuthorizationResult:](complete%28authorizationresult_%29.md)
- [complete](complete%28%29.md): Indicates the requested authorization completed with no output.
- [completeWithHTTPAuthorizationHeaders:](complete%28httpauthorizationheaders_%29.md): Indicates the requested authorization succeeded with tokens in the HTTP headers.
- [completeWithHTTPResponse:httpBody:](complete%28httpresponse_httpbody_%29.md): Indicates the requested authorization succeeded with an HTTP response.
