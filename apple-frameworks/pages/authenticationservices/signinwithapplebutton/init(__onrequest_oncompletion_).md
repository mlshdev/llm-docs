> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/signinwithapplebutton/init(_:onrequest:oncompletion:)](https://developer.apple.com/documentation/authenticationservices/signinwithapplebutton/init(_:onrequest:oncompletion:))

# init(\_:onRequest:onCompletion:)

**Framework:** AuthenticationServices  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a Sign in with Apple button.

## Declaration

```swift
nonisolated init(_ label: SignInWithAppleButton.Label = .signIn, onRequest: @escaping (ASAuthorizationAppleIDRequest) -> Void, onCompletion: @escaping (Result<ASAuthorization, any Error>) -> Void)
```

## Parameters

- `label`: The label that appears on the button.
- `onRequest`: The authorization request for an Apple ID.
- `onCompletion`: The completion handler that the system calls when the sign-in completes.

## See Also

### Creating a button

- [SignInWithAppleButton.Label](label.md): The label that appears on the button.
- [SignInWithAppleButton.Style](style.md): The structure that defines styles that you use to control the button’s appearance.
