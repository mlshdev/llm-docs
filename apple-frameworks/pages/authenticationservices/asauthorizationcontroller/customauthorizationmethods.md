> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationcontroller/customauthorizationmethods](https://developer.apple.com/documentation/authenticationservices/asauthorizationcontroller/customauthorizationmethods)

# customAuthorizationMethods (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** tvOS 15.0+

An array of custom authorization methods for the user to choose.

## Declaration

```swift
var customAuthorizationMethods: [ASAuthorizationCustomMethod] { get set }
```

<a id="Discussion"></a>

## Discussion

Custom authorization methods provide a unified interface for signing in to apps, while allowing the developer to customize the login experience. For example, use [other](../asauthorizationcustommethod/other.md) to display a username and password field, a web-based flow, or a custom user interface.

## See Also

### Apple TV authentication

- [authorizationController(\_:didCompleteWithCustomMethod:)](../asauthorizationcontrollerdelegate/authorizationcontroller%28__didcompletewithcustommethod_%29.md): Informs the delegate when authorization completes, and specifies the custom method the user selected.
- [ASAuthorizationCustomMethod](../asauthorizationcustommethod.md): The custom authorization method.

# customAuthorizationMethods (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** tvOS 15.0+

An array of custom authorization methods for the user to choose.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * customAuthorizationMethods;
```

<a id="Discussion"></a>

## Discussion

Custom authorization methods provide a unified interface for signing in to apps, while allowing the developer to customize the login experience. For example, use [ASAuthorizationCustomMethodOther](../asauthorizationcustommethod/other.md) to display a username and password field, a web-based flow, or a custom user interface.

## See Also

### Apple TV authentication

- [authorizationController:didCompleteWithCustomMethod:](../asauthorizationcontrollerdelegate/authorizationcontroller%28__didcompletewithcustommethod_%29.md): Informs the delegate when authorization completes, and specifies the custom method the user selected.
- [ASAuthorizationCustomMethod](../asauthorizationcustommethod.md): The custom authorization method.
