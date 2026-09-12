> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequest/complete(httpresponse:httpbody:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequest/complete(httpresponse:httpbody:))

# complete(httpResponse:httpBody:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

Indicates the requested authorization succeeded with an HTTP response.

## Declaration

```swift
func complete(httpResponse: HTTPURLResponse, httpBody: Data?)
```

## Parameters

- `httpResponse`: The metadata associated with the HTTP response.
- `httpBody`: The body of the HTTP response.

## See Also

### Completing a Request

- [complete(authorizationResult:)](complete%28authorizationresult_%29.md)
- [complete()](complete%28%29.md): Indicates the requested authorization completed with no output.
- [complete(httpAuthorizationHeaders:)](complete%28httpauthorizationheaders_%29.md): Indicates the requested authorization succeeded with tokens in the HTTP headers.
- [complete(error:)](complete%28error_%29.md): Indicates the requested authorization failed.

# completeWithHTTPResponse:httpBody: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

Indicates the requested authorization succeeded with an HTTP response.

## Declaration

```objectivec
- (void) completeWithHTTPResponse:(NSHTTPURLResponse *) httpResponse httpBody:(NSData *) httpBody;
```

## Parameters

- `httpResponse`: The metadata associated with the HTTP response.
- `httpBody`: The body of the HTTP response.

## See Also

### Completing a Request

- [completeWithAuthorizationResult:](complete%28authorizationresult_%29.md)
- [complete](complete%28%29.md): Indicates the requested authorization completed with no output.
- [completeWithHTTPAuthorizationHeaders:](complete%28httpauthorizationheaders_%29.md): Indicates the requested authorization succeeded with tokens in the HTTP headers.
- [completeWithError:](complete%28error_%29.md): Indicates the requested authorization failed.
