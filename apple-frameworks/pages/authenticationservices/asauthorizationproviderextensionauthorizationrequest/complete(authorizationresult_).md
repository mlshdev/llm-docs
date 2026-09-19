> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequest/complete(authorizationresult:)

# complete(authorizationResult:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

## Declaration

```swift
func complete(authorizationResult: ASAuthorizationProviderExtensionAuthorizationResult)
```

## See Also

### Completing a Request

- [complete()](complete%28%29.md): Indicates the requested authorization completed with no output.
- [complete(httpAuthorizationHeaders:)](complete%28httpauthorizationheaders_%29.md): Indicates the requested authorization succeeded with tokens in the HTTP headers.
- [complete(httpResponse:httpBody:)](complete%28httpresponse_httpbody_%29.md): Indicates the requested authorization succeeded with an HTTP response.
- [complete(error:)](complete%28error_%29.md): Indicates the requested authorization failed.

# completeWithAuthorizationResult: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) completeWithAuthorizationResult:(ASAuthorizationProviderExtensionAuthorizationResult *) authorizationResult;
```

## See Also

### Completing a Request

- [complete](complete%28%29.md): Indicates the requested authorization completed with no output.
- [completeWithHTTPAuthorizationHeaders:](complete%28httpauthorizationheaders_%29.md): Indicates the requested authorization succeeded with tokens in the HTTP headers.
- [completeWithHTTPResponse:httpBody:](complete%28httpresponse_httpbody_%29.md): Indicates the requested authorization succeeded with an HTTP response.
- [completeWithError:](complete%28error_%29.md): Indicates the requested authorization failed.
