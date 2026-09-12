> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationappleidcredential](https://developer.apple.com/documentation/authenticationservices/asauthorizationappleidcredential)

# ASAuthorizationAppleIDCredential (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A credential that results from a successful Apple ID authentication.

## Declaration

```swift
class ASAuthorizationAppleIDCredential
```

## Topics

### Identifying a User

- [identityToken](asauthorizationappleidcredential/identitytoken.md): A JSON Web Token (JWT) that securely communicates information about the user to the app.
- [authorizationCode](asauthorizationappleidcredential/authorizationcode.md): A token that the app uses to interact with the server.
- [state](asauthorizationappleidcredential/state.md): An arbitrary string that your app provides to the request that generates the credential.
- [user](asauthorizationappleidcredential/user.md): An identifier for the authenticated user.

### Getting Contact Information

- [authorizedScopes](asauthorizationappleidcredential/authorizedscopes.md): The contact information the user authorized your app to access.
- [fullName](asauthorizationappleidcredential/fullname.md): The user’s full name from their Apple ID or a user-submitted value provided from the Sign in with Apple UI.
- [email](asauthorizationappleidcredential/email.md): The user’s email address.

### Detecting User Characteristics

- [realUserStatus](asauthorizationappleidcredential/realuserstatus.md): A value that indicates whether the user appears to be a real person.
- [ASUserDetectionStatus](asuserdetectionstatus.md): Possible values for the real user indicator.

### Instance Properties

- [userAgeRange](asauthorizationappleidcredential/useragerange.md)

### Initializers

- [init(coder:)](asauthorizationappleidcredential/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASAuthorizationCredential](asauthorizationcredential.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sign In with Apple

- [Implementing User Authentication with Sign in with Apple](implementing-user-authentication-with-sign-in-with-apple.md): Provide a way for users of your app to set up an account and start using your services.
- [Simplifying User Authentication in a tvOS App](simplifying-user-authentication-in-a-tvos-app.md): Build a fluid sign-in experience for your tvOS apps using AuthenticationServices.
- [SignInWithAppleButton](signinwithapplebutton.md): A SwiftUI view that creates the Sign in with Apple button for display.
- [Sign in with Apple Entitlement](../bundleresources/entitlements/com.apple.developer.applesignin.md): An entitlement that lets your app use Sign in with Apple.
- [ASAuthorizationAppleIDProvider](asauthorizationappleidprovider.md): A mechanism for generating requests to authenticate users based on their Apple ID.

# ASAuthorizationAppleIDCredential (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A credential that results from a successful Apple ID authentication.

## Declaration

```objectivec
@interface ASAuthorizationAppleIDCredential : NSObject
```

## Topics

### Identifying a User

- [identityToken](asauthorizationappleidcredential/identitytoken.md): A JSON Web Token (JWT) that securely communicates information about the user to the app.
- [authorizationCode](asauthorizationappleidcredential/authorizationcode.md): A token that the app uses to interact with the server.
- [state](asauthorizationappleidcredential/state.md): An arbitrary string that your app provides to the request that generates the credential.
- [user](asauthorizationappleidcredential/user.md): An identifier for the authenticated user.

### Getting Contact Information

- [authorizedScopes](asauthorizationappleidcredential/authorizedscopes.md): The contact information the user authorized your app to access.
- [fullName](asauthorizationappleidcredential/fullname.md): The user’s full name from their Apple ID or a user-submitted value provided from the Sign in with Apple UI.
- [email](asauthorizationappleidcredential/email.md): The user’s email address.

### Detecting User Characteristics

- [realUserStatus](asauthorizationappleidcredential/realuserstatus.md): A value that indicates whether the user appears to be a real person.
- [ASUserDetectionStatus](asuserdetectionstatus.md): Possible values for the real user indicator.

### Instance Properties

- [userAgeRange](asauthorizationappleidcredential/useragerange.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASAuthorizationCredential](asauthorizationcredential.md)

## See Also

### Sign In with Apple

- [Implementing User Authentication with Sign in with Apple](implementing-user-authentication-with-sign-in-with-apple.md): Provide a way for users of your app to set up an account and start using your services.
- [Simplifying User Authentication in a tvOS App](simplifying-user-authentication-in-a-tvos-app.md): Build a fluid sign-in experience for your tvOS apps using AuthenticationServices.
- [Sign in with Apple Entitlement](../bundleresources/entitlements/com.apple.developer.applesignin.md): An entitlement that lets your app use Sign in with Apple.
- [ASAuthorizationAppleIDProvider](asauthorizationappleidprovider.md): A mechanism for generating requests to authenticate users based on their Apple ID.
