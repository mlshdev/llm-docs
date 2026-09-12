> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/signinwithapplebutton](https://developer.apple.com/documentation/authenticationservices/signinwithapplebutton)

# SignInWithAppleButton

**Framework:** AuthenticationServices  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A SwiftUI view that creates the Sign in with Apple button for display.

## Declaration

```swift
@MainActor @preconcurrency struct SignInWithAppleButton
```

<a id="Discussion"></a>

## Discussion

For more information about which Sign in with Apple buttons are available on different Apple platforms, see [Displaying Sign in with Apple buttons in your app](https://developer.apple.com/documentation/signinwithapple/displaying-sign-in-with-apple-buttons-in-your-app).

## Topics

### Creating a button

- [init(\_:onRequest:onCompletion:)](signinwithapplebutton/init%28__onrequest_oncompletion_%29.md): Creates a Sign in with Apple button.
- [SignInWithAppleButton.Label](signinwithapplebutton/label.md): The label that appears on the button.
- [SignInWithAppleButton.Style](signinwithapplebutton/style.md): The structure that defines styles that you use to control the button’s appearance.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Sign In with Apple

- [Implementing User Authentication with Sign in with Apple](implementing-user-authentication-with-sign-in-with-apple.md): Provide a way for users of your app to set up an account and start using your services.
- [Simplifying User Authentication in a tvOS App](simplifying-user-authentication-in-a-tvos-app.md): Build a fluid sign-in experience for your tvOS apps using AuthenticationServices.
- [Sign in with Apple Entitlement](../bundleresources/entitlements/com.apple.developer.applesignin.md): An entitlement that lets your app use Sign in with Apple.
- [ASAuthorizationAppleIDProvider](asauthorizationappleidprovider.md): A mechanism for generating requests to authenticate users based on their Apple ID.
- [ASAuthorizationAppleIDCredential](asauthorizationappleidcredential.md): A credential that results from a successful Apple ID authentication.
