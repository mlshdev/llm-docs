> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationcontrollerdelegate/authorizationcontroller(_:didcompletewithcustommethod:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationcontrollerdelegate/authorizationcontroller(_:didcompletewithcustommethod:))

# authorizationController(\_:didCompleteWithCustomMethod:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** tvOS 15.0+

Informs the delegate when authorization completes, and specifies the custom method the user selected.

## Declaration

```swift
optional func authorizationController(_ controller: ASAuthorizationController, didCompleteWithCustomMethod method: ASAuthorizationCustomMethod)
```

## Parameters

- `controller`: The controller performing the authorization attempt.
- `method`: The custom method the user selected. For a list of custom methods, see  [ASAuthorizationCustomMethod](../asauthorizationcustommethod.md).

## See Also

### Apple TV authentication

- [customAuthorizationMethods](../asauthorizationcontroller/customauthorizationmethods.md): An array of custom authorization methods for the user to choose.
- [ASAuthorizationCustomMethod](../asauthorizationcustommethod.md): The custom authorization method.

# authorizationController:didCompleteWithCustomMethod: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** tvOS 15.0+

Informs the delegate when authorization completes, and specifies the custom method the user selected.

## Declaration

```objectivec
- (void) authorizationController:(ASAuthorizationController *) controller didCompleteWithCustomMethod:(ASAuthorizationCustomMethod) method;
```

## Parameters

- `controller`: The controller performing the authorization attempt.
- `method`: The custom method the user selected. For a list of custom methods, see  [ASAuthorizationCustomMethod](../asauthorizationcustommethod.md).

## See Also

### Apple TV authentication

- [customAuthorizationMethods](../asauthorizationcontroller/customauthorizationmethods.md): An array of custom authorization methods for the user to choose.
- [ASAuthorizationCustomMethod](../asauthorizationcustommethod.md): The custom authorization method.
