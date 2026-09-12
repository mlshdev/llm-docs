> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/authorizationcontroller](https://developer.apple.com/documentation/swiftui/environmentvalues/authorizationcontroller)

# authorizationController

**Framework:** AuthenticationServices  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · watchOS 9.4+

A value provided in the SwiftUI environment that views can use to perform authorization requests.

## Declaration

```swift
var authorizationController: AuthorizationController { get }
```

<a id="discussion"></a>

## Discussion

For example, you can perform authorization requests when the user taps a button:

```swift
struct AuthorizationControllerExample: View {
    @Environment(\.authorizationController) private var authorizationController

    var body: some View {
        Button("Sign In") {
            Task {
                do {
                    async let requests = authorizationRequests() // defined elsewhere
                    let result = try await authorizationController
                        .performRequests(requests)

                    switch result {
                    // code to handle the authorization result
                    }
                } catch {
                    // code to handle the authorization error
                }
            }
        }
    }
}
```

## See Also

### Authorizing and authenticating

- [LocalAuthenticationView](https://developer.apple.com/documentation/localauthentication/localauthenticationview): A SwiftUI view that displays an authentication interface.
- [SignInWithAppleButton](https://developer.apple.com/documentation/authenticationservices/signinwithapplebutton): A SwiftUI view that creates the Sign in with Apple button for display.
- [signInWithAppleButtonStyle(\_:)](../view/signinwithapplebuttonstyle%28__%29.md): Sets the style used for displaying the control (see `SignInWithAppleButton.Style`).
- [webAuthenticationSession](webauthenticationsession.md): A value provided in the SwiftUI environment that views can use to authenticate a user through a web service.
