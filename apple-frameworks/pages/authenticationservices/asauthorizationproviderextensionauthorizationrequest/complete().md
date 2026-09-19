> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequest/complete()

# complete() (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

Indicates the requested authorization completed with no output.

## Declaration

```swift
func complete()
```

## See Also

### Completing a Request

- [complete(authorizationResult:)](complete%28authorizationresult_%29.md)
- [complete(httpAuthorizationHeaders:)](complete%28httpauthorizationheaders_%29.md): Indicates the requested authorization succeeded with tokens in the HTTP headers.
- [complete(httpResponse:httpBody:)](complete%28httpresponse_httpbody_%29.md): Indicates the requested authorization succeeded with an HTTP response.
- [complete(error:)](complete%28error_%29.md): Indicates the requested authorization failed.

# complete (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

Indicates the requested authorization completed with no output.

## Declaration

```objectivec
- (void) complete;
```

## See Also

### Completing a Request

- [completeWithAuthorizationResult:](complete%28authorizationresult_%29.md)
- [completeWithHTTPAuthorizationHeaders:](complete%28httpauthorizationheaders_%29.md): Indicates the requested authorization succeeded with tokens in the HTTP headers.
- [completeWithHTTPResponse:httpBody:](complete%28httpresponse_httpbody_%29.md): Indicates the requested authorization succeeded with an HTTP response.
- [completeWithError:](complete%28error_%29.md): Indicates the requested authorization failed.
