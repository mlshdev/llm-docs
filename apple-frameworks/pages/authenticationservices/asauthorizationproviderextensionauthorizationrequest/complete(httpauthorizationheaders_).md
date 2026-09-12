> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequest/complete(httpauthorizationheaders:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequest/complete(httpauthorizationheaders:))

# complete(httpAuthorizationHeaders:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

Indicates the requested authorization succeeded with tokens in the HTTP headers.

## Declaration

```swift
func complete(httpAuthorizationHeaders: [String : String])
```

## Parameters

- `httpAuthorizationHeaders`: The collection of tokens from the header.

## See Also

### Completing a Request

- [complete(authorizationResult:)](complete%28authorizationresult_%29.md)
- [complete()](complete%28%29.md): Indicates the requested authorization completed with no output.
- [complete(httpResponse:httpBody:)](complete%28httpresponse_httpbody_%29.md): Indicates the requested authorization succeeded with an HTTP response.
- [complete(error:)](complete%28error_%29.md): Indicates the requested authorization failed.

# completeWithHTTPAuthorizationHeaders: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

Indicates the requested authorization succeeded with tokens in the HTTP headers.

## Declaration

```objectivec
- (void) completeWithHTTPAuthorizationHeaders:(NSDictionary<NSString *,NSString *> *) httpAuthorizationHeaders;
```

## Parameters

- `httpAuthorizationHeaders`: The collection of tokens from the header.

## See Also

### Completing a Request

- [completeWithAuthorizationResult:](complete%28authorizationresult_%29.md)
- [complete](complete%28%29.md): Indicates the requested authorization completed with no output.
- [completeWithHTTPResponse:httpBody:](complete%28httpresponse_httpbody_%29.md): Indicates the requested authorization succeeded with an HTTP response.
- [completeWithError:](complete%28error_%29.md): Indicates the requested authorization failed.
