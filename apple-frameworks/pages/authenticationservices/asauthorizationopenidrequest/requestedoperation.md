> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationopenidrequest/requestedoperation](https://developer.apple.com/documentation/authenticationservices/asauthorizationopenidrequest/requestedoperation)

# requestedOperation (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The OpenID authentication operation you want this request to perform.

## Declaration

```swift
var requestedOperation: ASAuthorization.OpenIDOperation { get set }
```

## See Also

### Setting the Operation

- [ASAuthorization.OpenIDOperation](../asauthorization/openidoperation.md): The kinds of operations that you can perform with OpenID authentication.

# requestedOperation (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The OpenID authentication operation you want this request to perform.

## Declaration

```objectivec
@property (nonatomic, copy) ASAuthorizationOpenIDOperation requestedOperation;
```

## See Also

### Setting the Operation

- [ASAuthorizationOpenIDOperation](../asauthorization/openidoperation.md): The kinds of operations that you can perform with OpenID authentication.
