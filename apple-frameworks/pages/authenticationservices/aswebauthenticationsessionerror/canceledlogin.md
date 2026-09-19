> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsessionerror/canceledlogin

# canceledLogin

**Framework:** Authentication Services  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.15+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 6.2+

The login has been canceled.

## Declaration

```swift
static var canceledLogin: ASWebAuthenticationSessionError.Code { get }
```

## Mentioned In

- [Authenticating a User Through a Web Service](../authenticating-a-user-through-a-web-service.md)

## See Also

### Error Codes

- [presentationContextNotProvided](presentationcontextnotprovided.md): A context wasn’t provided.
- [presentationContextInvalid](presentationcontextinvalid.md): The context was invalid.
- [ASWebAuthenticationSessionError.Code](code.md): The error code for a web authentication session error.
