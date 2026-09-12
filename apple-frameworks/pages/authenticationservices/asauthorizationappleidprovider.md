> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationappleidprovider](https://developer.apple.com/documentation/authenticationservices/asauthorizationappleidprovider)

# ASAuthorizationAppleIDProvider (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A mechanism for generating requests to authenticate users based on their Apple ID.

## Declaration

```swift
class ASAuthorizationAppleIDProvider
```

<a id="overview"></a>

## Overview

You use a provider to create a request ([ASAuthorizationAppleIDRequest](asauthorizationappleidrequest.md)), which you then use to initialize a controller ([ASAuthorizationController](asauthorizationcontroller.md)) that performs the request:

```swift
let provider = ASAuthorizationAppleIDProvider()
let request = provider.createRequest()
let controller = ASAuthorizationController(authorizationRequests: [request])
```

On success, the controller’s delegate receives an authorization ([ASAuthorization](asauthorization.md)) containing a credential ([ASAuthorizationAppleIDCredential](asauthorizationappleidcredential.md)) that has an opaque [user](asauthorizationappleidcredential/user.md) identifier. You can use that identifier to later check the user’s credential state—for example, to see if authorization has been revoked—by calling the [getCredentialState(forUserID:completion:)](asauthorizationappleidprovider/getcredentialstate%28foruserid_completion_%29.md) method:

```swift
let user = authorization.credential.user
provider.getCredentialState(forUserID: user) { state, error in
    // Check for error and examine the state.
}
```

## Topics

### Offering Sign In with Apple

- [ASAuthorizationAppleIDButton](asauthorizationappleidbutton.md): A control you add to your interface that enables users to initiate the Sign In with Apple flow.
- [WKInterfaceAuthorizationAppleIDButton](https://developer.apple.com/documentation/watchkit/wkinterfaceauthorizationappleidbutton): A button that you can use to trigger a Sign in with Apple request.

### Creating Requests

- [createRequest()](asauthorizationappleidprovider/createrequest%28%29.md): Creates a new Apple ID authorization request.
- [ASAuthorizationAppleIDRequest](asauthorizationappleidrequest.md): An OpenID authorization request that relies on the user’s Apple ID.
- [ASAuthorizationOpenIDRequest](asauthorizationopenidrequest.md): An OpenID authorization request.

### Getting State

- [getCredentialState(forUserID:completion:)](asauthorizationappleidprovider/getcredentialstate%28foruserid_completion_%29.md): Returns the credential state for the given user in a completion handler.
- [ASAuthorizationAppleIDProvider.CredentialState](asauthorizationappleidprovider/credentialstate.md): Possible values for the credential state of a user.
- [credentialRevokedNotification](asauthorizationappleidprovider/credentialrevokednotification.md): A notification that indicates the user’s credentials have been revoked and they should be signed out.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASAuthorizationProvider](asauthorizationprovider.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sign In with Apple

- [Implementing User Authentication with Sign in with Apple](implementing-user-authentication-with-sign-in-with-apple.md): Provide a way for users of your app to set up an account and start using your services.
- [Simplifying User Authentication in a tvOS App](simplifying-user-authentication-in-a-tvos-app.md): Build a fluid sign-in experience for your tvOS apps using AuthenticationServices.
- [SignInWithAppleButton](signinwithapplebutton.md): A SwiftUI view that creates the Sign in with Apple button for display.
- [Sign in with Apple Entitlement](../bundleresources/entitlements/com.apple.developer.applesignin.md): An entitlement that lets your app use Sign in with Apple.
- [ASAuthorizationAppleIDCredential](asauthorizationappleidcredential.md): A credential that results from a successful Apple ID authentication.

# ASAuthorizationAppleIDProvider (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A mechanism for generating requests to authenticate users based on their Apple ID.

## Declaration

```objectivec
@interface ASAuthorizationAppleIDProvider : NSObject
```

<a id="overview"></a>

## Overview

You use a provider to create a request ([ASAuthorizationAppleIDRequest](asauthorizationappleidrequest.md)), which you then use to initialize a controller ([ASAuthorizationController](asauthorizationcontroller.md)) that performs the request:

```swift
let provider = ASAuthorizationAppleIDProvider()
let request = provider.createRequest()
let controller = ASAuthorizationController(authorizationRequests: [request])
```

On success, the controller’s delegate receives an authorization ([ASAuthorization](asauthorization.md)) containing a credential ([ASAuthorizationAppleIDCredential](asauthorizationappleidcredential.md)) that has an opaque [user](asauthorizationappleidcredential/user.md) identifier. You can use that identifier to later check the user’s credential state—for example, to see if authorization has been revoked—by calling the [getCredentialStateForUserID:completion:](asauthorizationappleidprovider/getcredentialstate%28foruserid_completion_%29.md) method:

```swift
let user = authorization.credential.user
provider.getCredentialState(forUserID: user) { state, error in
    // Check for error and examine the state.
}
```

## Topics

### Offering Sign In with Apple

- [ASAuthorizationAppleIDButton](asauthorizationappleidbutton.md): A control you add to your interface that enables users to initiate the Sign In with Apple flow.
- [WKInterfaceAuthorizationAppleIDButton](https://developer.apple.com/documentation/watchkit/wkinterfaceauthorizationappleidbutton): A button that you can use to trigger a Sign in with Apple request.

### Creating Requests

- [createRequest](asauthorizationappleidprovider/createrequest%28%29.md): Creates a new Apple ID authorization request.
- [ASAuthorizationAppleIDRequest](asauthorizationappleidrequest.md): An OpenID authorization request that relies on the user’s Apple ID.
- [ASAuthorizationOpenIDRequest](asauthorizationopenidrequest.md): An OpenID authorization request.

### Getting State

- [getCredentialStateForUserID:completion:](asauthorizationappleidprovider/getcredentialstate%28foruserid_completion_%29.md): Returns the credential state for the given user in a completion handler.
- [ASAuthorizationAppleIDProviderCredentialState](asauthorizationappleidprovider/credentialstate.md): Possible values for the credential state of a user.
- [ASAuthorizationAppleIDProviderCredentialRevokedNotification](asauthorizationappleidprovider/credentialrevokednotification.md): A notification that indicates the user’s credentials have been revoked and they should be signed out.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASAuthorizationProvider](asauthorizationprovider.md)

## See Also

### Sign In with Apple

- [Implementing User Authentication with Sign in with Apple](implementing-user-authentication-with-sign-in-with-apple.md): Provide a way for users of your app to set up an account and start using your services.
- [Simplifying User Authentication in a tvOS App](simplifying-user-authentication-in-a-tvos-app.md): Build a fluid sign-in experience for your tvOS apps using AuthenticationServices.
- [Sign in with Apple Entitlement](../bundleresources/entitlements/com.apple.developer.applesignin.md): An entitlement that lets your app use Sign in with Apple.
- [ASAuthorizationAppleIDCredential](asauthorizationappleidcredential.md): A credential that results from a successful Apple ID authentication.
