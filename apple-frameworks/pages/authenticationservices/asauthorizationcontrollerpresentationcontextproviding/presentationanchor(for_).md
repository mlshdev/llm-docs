> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationcontrollerpresentationcontextproviding/presentationanchor(for:)

# presentationAnchor(for:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Tells the delegate from which window it should present content to the user.

## Declaration

```swift
func presentationAnchor(for controller: ASAuthorizationController) -> ASPresentationAnchor
```

## Parameters

- `controller`: The controller asking for the presentation anchor.

<a id="return-value"></a>

## Return Value

A user interface element that can act as the anchor for the authorization presentation.

## See Also

### Specifying the Anchor

- [ASPresentationAnchor](../aspresentationanchor.md): A platform-specific type that indicates the kind of user interface element to use as a presentation anchor.

# presentationAnchorForAuthorizationController: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Tells the delegate from which window it should present content to the user.

## Declaration

```objectivec
- (ASPresentationAnchor) presentationAnchorForAuthorizationController:(ASAuthorizationController *) controller;
```

## Parameters

- `controller`: The controller asking for the presentation anchor.

<a id="return-value"></a>

## Return Value

A user interface element that can act as the anchor for the authorization presentation.

## See Also

### Specifying the Anchor

- [ASPresentationAnchor](../aspresentationanchor.md): A platform-specific type that indicates the kind of user interface element to use as a presentation anchor.
