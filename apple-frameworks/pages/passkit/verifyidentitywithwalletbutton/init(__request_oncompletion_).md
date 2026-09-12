> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/verifyidentitywithwalletbutton/init(_:request:oncompletion:)](https://developer.apple.com/documentation/passkit/verifyidentitywithwalletbutton/init(_:request:oncompletion:))

# init(\_:request:onCompletion:)

**Framework:** PassKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Creates a verify identity button that starts the identity authorization flow, with a completion handler.

## Declaration

```swift
nonisolated init(_ label: VerifyIdentityWithWalletButtonLabel = .verifyIdentity, request: PKIdentityRequest, onCompletion: @escaping (Result<PKIdentityDocument, any Error>) -> Void)
```

## Parameters

- `label`: The button’s label.
- `request`: The identity request to make when a person taps the button.
- `onCompletion`: The completion handler the framework calls when finishing the authorization flow.

  - **`result`**: A result that contains an identity document, if successful; otherwise, an error.

## See Also

### Creating the button

- [init(\_:action:)](init%28__action_%29.md): Conforms when `Fallback` is `EmptyView`. Creates a verify identity button that starts the identity authorization flow.
- [init(\_:request:onCompletion:fallback:)](init%28__request_oncompletion_fallback_%29.md): Conforms when `Fallback` conforms to `View`. Creates a verify identity button that starts the identity authorization flow, with a fallback view to use if the app can’t start the flow.
