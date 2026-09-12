> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/signinwithapplebuttonstyle(_:)](https://developer.apple.com/documentation/swiftui/view/signinwithapplebuttonstyle(_:))

# signInWithAppleButtonStyle(\_:)

**Framework:** AuthenticationServices  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · watchOS 7.0+

Sets the style used for displaying the control (see `SignInWithAppleButton.Style`).

## Declaration

```swift
nonisolated func signInWithAppleButtonStyle(_ style: SignInWithAppleButton.Style) -> some View

```

## Parameters

- `style`: The sign in style to apply to this button.

## See Also

### Authorizing and authenticating

- [LocalAuthenticationView](https://developer.apple.com/documentation/localauthentication/localauthenticationview): A SwiftUI view that displays an authentication interface.
- [SignInWithAppleButton](https://developer.apple.com/documentation/authenticationservices/signinwithapplebutton): A SwiftUI view that creates the Sign in with Apple button for display.
- [authorizationController](../environmentvalues/authorizationcontroller.md): A value provided in the SwiftUI environment that views can use to perform authorization requests.
- [webAuthenticationSession](../environmentvalues/webauthenticationsession.md): A value provided in the SwiftUI environment that views can use to authenticate a user through a web service.
