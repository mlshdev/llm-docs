> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequest/presentauthorizationviewcontroller(completion:)

# presentAuthorizationViewController(completion:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

Asks the authorization service to show the extension’s view controller to the user.

## Declaration

```swift
func presentAuthorizationViewController(completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func presentAuthorizationViewController() async throws
```

## Parameters

- `completion`: A completion handler that the method uses to indicate whether the view controller was presented successfully, and the specific error if not.

<a id="Discussion"></a>

## Discussion

This is only valid during authentication requests. If the system can’t show the controller, the completion returns an error.

## See Also

### Interacting with the User

- [isUserInterfaceEnabled](isuserinterfaceenabled.md): Determines if user interface is available for the current request.

# presentAuthorizationViewControllerWithCompletion: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

Asks the authorization service to show the extension’s view controller to the user.

## Declaration

```objectivec
- (void) presentAuthorizationViewControllerWithCompletion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `completion`: A completion handler that the method uses to indicate whether the view controller was presented successfully, and the specific error if not.

<a id="Discussion"></a>

## Discussion

This is only valid during authentication requests. If the system can’t show the controller, the completion returns an error.

## See Also

### Interacting with the User

- [userInterfaceEnabled](isuserinterfaceenabled.md): Determines if user interface is available for the current request.
