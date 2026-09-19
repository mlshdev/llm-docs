> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionauthorizationresult/httpbody

# httpBody (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The HTTP response body.

## Declaration

```swift
var httpBody: Data? { get set }
```

## See Also

### Instance Properties

- [httpAuthorizationHeaders](httpauthorizationheaders.md): A dictionary of authorization HTTP headers.
- [httpResponse](httpresponse.md): The HTTP response for authentications.

# httpBody (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The HTTP response body.

## Declaration

```objectivec
@property (nonatomic, nullable) NSData * httpBody;
```

## See Also

### Instance Properties

- [httpAuthorizationHeaders](httpauthorizationheaders.md): A dictionary of authorization HTTP headers.
- [httpResponse](httpresponse.md): The HTTP response for authentications.
- [privateKeys](privatekeys.md): An array of private security keys.
