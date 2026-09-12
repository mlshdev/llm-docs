> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsessionrequest/delegate](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsessionrequest/delegate)

# delegate (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A delegate that the session request instance informs about authentication completion.

## Declaration

```swift
weak var delegate: (any ASWebAuthenticationSessionRequestDelegate)? { get set }
```

## See Also

### Indicating completion

- [ASWebAuthenticationSessionRequestDelegate](../aswebauthenticationsessionrequestdelegate.md): An interface through which the session request can inform its delegate, which is typically a browser, about the outcome of the authentication attempt.

# delegate (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+

A delegate that the session request instance informs about authentication completion.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<ASWebAuthenticationSessionRequestDelegate> delegate;
```

## See Also

### Indicating completion

- [ASWebAuthenticationSessionRequestDelegate](../aswebauthenticationsessionrequestdelegate.md): An interface through which the session request can inform its delegate, which is typically a browser, about the outcome of the authentication attempt.
