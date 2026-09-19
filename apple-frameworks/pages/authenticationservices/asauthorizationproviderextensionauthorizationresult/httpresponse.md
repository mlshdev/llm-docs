> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionauthorizationresult/httpresponse

# httpResponse (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The HTTP response for authentications.

## Declaration

```swift
@NSCopying var httpResponse: HTTPURLResponse? { get set }
```

## See Also

### Instance Properties

- [httpAuthorizationHeaders](httpauthorizationheaders.md): A dictionary of authorization HTTP headers.
- [httpBody](httpbody.md): The HTTP response body.

# httpResponse (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The HTTP response for authentications.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSHTTPURLResponse * httpResponse;
```

## See Also

### Instance Properties

- [httpAuthorizationHeaders](httpauthorizationheaders.md): A dictionary of authorization HTTP headers.
- [httpBody](httpbody.md): The HTTP response body.
- [privateKeys](privatekeys.md): An array of private security keys.
