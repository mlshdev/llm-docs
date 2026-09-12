> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationopenidrequest/requestedscopes](https://developer.apple.com/documentation/authenticationservices/asauthorizationopenidrequest/requestedscopes)

# requestedScopes (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The contact information to be requested from the user during authentication.

## Declaration

```swift
var requestedScopes: [ASAuthorization.Scope]? { get set }
```

## See Also

### Setting the Scope

- [ASAuthorization.Scope](../asauthorization/scope.md): The kinds of contact information that can be requested from the user.

# requestedScopes (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The contact information to be requested from the user during authentication.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSString *> * requestedScopes;
```

## See Also

### Setting the Scope

- [ASAuthorizationScope](../asauthorization/scope.md): The kinds of contact information that can be requested from the user.
