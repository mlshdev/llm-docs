> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationpresentationcontextproviding/presentationanchor(for:)](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationpresentationcontextproviding/presentationanchor(for:))

# presentationAnchor(for:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate from which window it should present content to the user.

## Declaration

```swift
func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor
```

## Parameters

- `session`: The session asking for the presentation anchor.

<a id="return-value"></a>

## Return Value

A user interface element that can act as the anchor for the authentication presentation.

## Mentioned In

- [Authenticating a User Through a Web Service](../authenticating-a-user-through-a-web-service.md)

## See Also

### Specifying the Anchor

- [ASPresentationAnchor](../aspresentationanchor.md): A platform-specific type that indicates the kind of user interface element to use as a presentation anchor.

# presentationAnchorForWebAuthenticationSession: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate from which window it should present content to the user.

## Declaration

```objectivec
- (ASPresentationAnchor) presentationAnchorForWebAuthenticationSession:(ASWebAuthenticationSession *) session;
```

## Parameters

- `session`: The session asking for the presentation anchor.

<a id="return-value"></a>

## Return Value

A user interface element that can act as the anchor for the authentication presentation.

## Mentioned In

- [Authenticating a User Through a Web Service](../authenticating-a-user-through-a-web-service.md)

## See Also

### Specifying the Anchor

- [ASPresentationAnchor](../aspresentationanchor.md): A platform-specific type that indicates the kind of user interface element to use as a presentation anchor.
