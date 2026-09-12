> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionauthorizationresult/init(httpresponse:httpbody:)-2j92m](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionauthorizationresult/init(httpresponse:httpbody:)-2j92m)

# init(httpResponse:httpBody:) (Swift)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Initializes an authorization with a HTTP response and body.

## Declaration

```swift
init(httpResponse: HTTPURLResponse, httpBody: Data?)
```

## Parameters

- `httpResponse`: The HTTP response.
- `httpBody`: The HTTP body.

## See Also

### Initializers

- [init(httpAuthorizationHeaders:)](init%28httpauthorizationheaders_%29-ywja.md): Initializes an authorization with tokens stored in HTTP headers.

# initWithHTTPResponse:httpBody: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Initializes an authorization with a HTTP response and body.

## Declaration

```objectivec
- (instancetype) initWithHTTPResponse:(NSHTTPURLResponse *) httpResponse httpBody:(NSData *) httpBody;
```

## Parameters

- `httpResponse`: The HTTP response.
- `httpBody`: The HTTP body.

## See Also

### Initializers

- [initWithHTTPAuthorizationHeaders:](init%28httpauthorizationheaders_%29-ywja.md): Initializes an authorization with tokens stored in HTTP headers.
