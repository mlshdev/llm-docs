> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionauthorizationresult/init(httpauthorizationheaders:)-ywja

# init(httpAuthorizationHeaders:) (Swift)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Initializes an authorization with tokens stored in HTTP headers.

## Declaration

```swift
init(httpAuthorizationHeaders: [String : String])
```

## Parameters

- `httpAuthorizationHeaders`: The HTTP authorization headers.

## See Also

### Initializers

- [init(httpResponse:httpBody:)](init%28httpresponse_httpbody_%29-2j92m.md): Initializes an authorization with a HTTP response and body.

# initWithHTTPAuthorizationHeaders: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Initializes an authorization with tokens stored in HTTP headers.

## Declaration

```objectivec
- (instancetype) initWithHTTPAuthorizationHeaders:(NSDictionary<NSString *,NSString *> *) httpAuthorizationHeaders;
```

## Parameters

- `httpAuthorizationHeaders`: The HTTP authorization headers.

## See Also

### Initializers

- [initWithHTTPResponse:httpBody:](init%28httpresponse_httpbody_%29-2j92m.md): Initializes an authorization with a HTTP response and body.
