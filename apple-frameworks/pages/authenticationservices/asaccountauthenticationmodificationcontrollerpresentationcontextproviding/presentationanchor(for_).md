> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asaccountauthenticationmodificationcontrollerpresentationcontextproviding/presentationanchor(for:)](https://developer.apple.com/documentation/authenticationservices/asaccountauthenticationmodificationcontrollerpresentationcontextproviding/presentationanchor(for:))

# presentationAnchor(for:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Returns the most appropriate window for presenting the authentication modification interface.

## Declaration

```swift
func presentationAnchor(for controller: ASAccountAuthenticationModificationController) -> ASPresentationAnchor
```

## Parameters

- `controller`: The controller that performs the account authentication modification request.

<a id="return-value"></a>

## Return Value

A window to present the authentication modification interface.

# presentationAnchorForAccountAuthenticationModificationController: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Returns the most appropriate window for presenting the authentication modification interface.

## Declaration

```objectivec
- (ASPresentationAnchor) presentationAnchorForAccountAuthenticationModificationController:(ASAccountAuthenticationModificationController *) controller;
```

## Parameters

- `controller`: The controller that performs the account authentication modification request.

<a id="return-value"></a>

## Return Value

A window to present the authentication modification interface.
