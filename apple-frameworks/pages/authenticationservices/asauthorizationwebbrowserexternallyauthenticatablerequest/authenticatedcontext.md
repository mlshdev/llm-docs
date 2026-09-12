> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationwebbrowserexternallyauthenticatablerequest/authenticatedcontext](https://developer.apple.com/documentation/authenticationservices/asauthorizationwebbrowserexternallyauthenticatablerequest/authenticatedcontext)

# authenticatedContext (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.3+

The local authentication context for the authorization.

## Declaration

```swift
var authenticatedContext: LAContext? { get set }
```

<a id="Discussion"></a>

## Discussion

Ensure the person authenticates, for example using FaceID, before accessing their credentials.

# authenticatedContext (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.3+

The local authentication context for the authorization.

## Declaration

```objectivec
@property (nonatomic, nullable) LAContext * authenticatedContext;
```

<a id="Discussion"></a>

## Discussion

Ensure the person authenticates, for example using FaceID, before accessing their credentials.
