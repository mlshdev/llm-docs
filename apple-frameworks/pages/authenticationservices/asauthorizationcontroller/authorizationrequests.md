> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationcontroller/authorizationrequests](https://developer.apple.com/documentation/authenticationservices/asauthorizationcontroller/authorizationrequests)

# authorizationRequests (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The authorization requests that the controller manages.

## Declaration

```swift
var authorizationRequests: [ASAuthorizationRequest] { get }
```

<a id="Discussion"></a>

## Discussion

Use an authorization provider, like [ASAuthorizationAppleIDProvider](../asauthorizationappleidprovider.md), [ASAuthorizationPasswordProvider](../asauthorizationpasswordprovider.md), or [ASAuthorizationSingleSignOnProvider](../asauthorizationsinglesignonprovider.md), to create a request for a particular purpose.

## See Also

### Inspecting requests

- [ASAuthorizationRequest](../asauthorizationrequest.md): A base class for different kinds of authorization requests.
- [customAuthorizationMethods](customauthorizationmethods.md): An array of custom authorization methods for the user to choose.

# authorizationRequests (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The authorization requests that the controller manages.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSArray<ASAuthorizationRequest *> * authorizationRequests;
```

<a id="Discussion"></a>

## Discussion

Use an authorization provider, like [ASAuthorizationAppleIDProvider](../asauthorizationappleidprovider.md), [ASAuthorizationPasswordProvider](../asauthorizationpasswordprovider.md), or [ASAuthorizationSingleSignOnProvider](../asauthorizationsinglesignonprovider.md), to create a request for a particular purpose.

## See Also

### Inspecting requests

- [ASAuthorizationRequest](../asauthorizationrequest.md): A base class for different kinds of authorization requests.
- [customAuthorizationMethods](customauthorizationmethods.md): An array of custom authorization methods for the user to choose.
